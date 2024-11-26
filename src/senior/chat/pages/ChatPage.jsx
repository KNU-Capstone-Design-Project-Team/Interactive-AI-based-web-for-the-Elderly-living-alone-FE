import styled from "styled-components";
import { useState, useEffect } from "react";
import ChatInputBox from "@/senior/chat/components/ChatInputBox.jsx";
import axios from "axios";
import { API_BASE_URL } from "@/global/const/const";
import { BotMessageSquare, UserRound } from "lucide-react";

export default function ChatPage({ loginId }) {
  const [toSendMessage, setToSendMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [lastMessageTime, setLastMessageTime] = useState(null);
  const [isInputActive, setIsInputActive] = useState(false);
  const [isFirstReply, setIsFirstReply] = useState(true);
  const [conversationCount, setConversationCount] = useState(0);

  // 시간 포맷 함수
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "오후" : "오전";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${ampm} ${formattedHours}:${formattedMinutes}`;
  };

  // 정기적으로 새 메시지를 확인하는 롱 폴링 함수
  const fetchNewQuestion = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/chatLongPoll`, {
        timeout: 10000,
      });
      if (response.status === 200) {
        const currentTime = new Date();
        const formattedTime = formatTime(currentTime);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "ai", text: response.data.message, time: formattedTime },
        ]);
        setIsInputActive(true);
        setIsFirstReply(true);
        setLastMessageTime(Date.now());
        setConversationCount(0); // 대화 횟수 초기화
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        console.error("Internal server error");
      } else {
        console.error("Failed to fetch new question:", error);
      }
    } finally {
      setTimeout(fetchNewQuestion, 2 * 60 * 60 * 1000); // 2시간 후 다시 호출
    }
  };

  // 사용자가 입력 후 서버로 전송
  const onSendClicked = async () => {
    if (toSendMessage.trim() === "") return;

    try {
      const response = await axios.post(
        `${API_BASE_URL}/senior/${loginId}/chat`,
        { userInput: toSendMessage },
        { timeout: 30000 }
      );
      if (response.status === 200) {
        const currentTime = new Date();
        const formattedTime = formatTime(currentTime);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "user", text: toSendMessage, time: formattedTime },
          {
            sender: "ai",
            text: response.data.aiContentSentence,
            time: formattedTime,
          },
        ]);
        setToSendMessage("");
        setLastMessageTime(Date.now());
        setConversationCount((prevCount) => prevCount + 2); // 유저 + AI 메시지로 2 증가

        if (conversationCount + 2 >= 9) {
          await sendEmptyMessage(); // 빈 문자열 전송
          setIsInputActive(false); // 입력 비활성화
        } else if (isFirstReply) {
          setIsFirstReply(false);
        }
      } else if (response.status === 204) {
        console.log("Accept the blank request and end the conversation.");
        setIsInputActive(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error("The number of conversations has been exceeded.");
      } else if (error.response && error.response.status === 500) {
        console.error("Internal server error");
      } else {
        console.error("Failed to send or receive message:", error);
      }
    }
  };

  // 공백 메시지 전송 함수
  const sendEmptyMessage = async () => {
    try {
      await axios.post(`${API_BASE_URL}/senior/${loginId}/chat`, {
        userInput: "",
      });
      console.log("Sent empty message to end conversation.");
    } catch (error) {
      console.error("Failed to send empty message:", error);
    }
  };

  // 타이머: 첫 번째 사용자 답장 및 이후 답장 대기
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = Date.now();
      if (isInputActive) {
        if (isFirstReply && currentTime - lastMessageTime >= 60 * 60 * 1000) {
          // 첫 번째 답변 1시간 내 미응답
          sendEmptyMessage();
          setIsInputActive(false);
        } else if (
          !isFirstReply &&
          currentTime - lastMessageTime >= 10 * 60 * 1000
        ) {
          // 이후 답변 10분 내 미응답
          sendEmptyMessage();
          setIsInputActive(false);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [lastMessageTime, isFirstReply, isInputActive]);

  // 컴포넌트 마운트 시 롱 폴링 시작
  useEffect(() => {
    fetchNewQuestion();
  }, []);

  return (
    <Wrapper>
      <ChatList>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            {msg.sender === "ai" ? (
              <>
                <MessageIcon sender={msg.sender}>
                  <BotMessageSquare size={24} />
                </MessageIcon>
                {msg.text}
                <MessageTime sender={msg.sender}>{msg.time}</MessageTime>
              </>
            ) : (
              <>
                {msg.text}
                <MessageTime sender={msg.sender}>{msg.time}</MessageTime>
                <MessageIcon sender={msg.sender}>
                  <UserRound size={24} />
                </MessageIcon>
              </>
            )}
          </Message>
        ))}
      </ChatList>
      <ChatInputBox
        message={toSendMessage}
        setMessage={setToSendMessage}
        onSendClicked={onSendClicked}
        disabled={!isInputActive}
      />
    </Wrapper>
  );
}

// 스타일 컴포넌트 설정 (Wrapper, ChatList, Message, MessageIcon 등등)
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

const Message = styled.div`
  background-color: ${({ sender }) =>
    sender === "user" ? "#faeeb5" : "#ECECEC"};
  margin: 5px 0;
  padding: 15px;
  border-radius: 10px;
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MessageTime = styled.span`
  font-size: 0.8rem;
  color: gray;
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
`;

const MessageIcon = styled.div`
  display: flex;
  border-radius: 50%;
  border: 1px solid black;
  width: 24px;
  height: 24px;
  background-color: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
`;
