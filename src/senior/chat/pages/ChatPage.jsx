import styled from "styled-components";
import { useState, useEffect } from "react";
import ChatInputBox from "@/senior/chat/components/ChatInputBox.jsx";
import axios from "axios";
import { API_BASE_URL } from "@/global/const/const";
import { BotMessageSquare, UserRound } from "lucide-react";

export default function ChatPage() {
  const [toSendMessage, setToSendMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [lastMessageTime, setLastMessageTime] = useState(Date.now());

  // 입력 후 서버로 전송
// 클라이언트: 메시지를 서버로 전송하면서 응답을 대기
const onSendClicked = async () => {
  if (toSendMessage.trim() === "") return;

  try {
    const response = await axios.post(`${API_BASE_URL}/senior/01028435533/chat`, { message: toSendMessage }, { timeout: 30000 });
    setMessages((prevMessages) => [...prevMessages, { sender: "user", text: toSendMessage }]);
    setToSendMessage("");
    setLastMessageTime(Date.now());
    setMessages((prevMessages) => [...prevMessages, { sender: "ai", text: response.data.response }]);
  } catch (error) {
    console.error("Failed to send or receive message:", error);
  }
};

  // 롱 폴링 방식으로 서버 응답 대기
  const fetchNewQuestion = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/senior/01028435533/chat`, { timeout: 10000 }); // 최대 대기 시간 설정
      if (response.data.question) {
        setMessages((prevMessages) => [...prevMessages, { sender: "ai", text: response.data.question }]);
      }
    } catch (error) {
      if (error.code !== 'ECONNABORTED') { // 타임아웃 이외의 에러 처리
        console.error("Failed to fetch new question:", error);
      }
    } finally {
      fetchNewQuestion(); // 다음 응답 대기
    }
  };

  // 빈 메시지를 일정 시간마다 전송
  const sendEmptyMessage = async () => {
    await axios.post(`${API_BASE_URL}/senior/01028435533/chat`, { message: "" });
    setMessages((prevMessages) => [...prevMessages, { sender: "system", text: "No input received." }]);
  };

  // 빈 메시지 타이머
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      if (currentTime - lastMessageTime >= 10 * 60 * 1000) {
        sendEmptyMessage();
      }
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [lastMessageTime]);

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
              </>
            ) : (
              <>
                {msg.text}
                <MessageIcon sender={msg.sender}>
                  <UserRound size={24} />
                </MessageIcon>
              </>
            )}
          </Message>
        ))}
      </ChatList>
      <ChatInputBox message={toSendMessage} setMessage={setToSendMessage} onSendClicked={onSendClicked} />
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
  background-color: ${({ sender }) => (sender === "user" ? "#faeeb5" : "#ECECEC")};
  margin: 5px 0;
  padding: 15px;
  border-radius: 10px;
  align-self: ${({ sender }) => (sender === "user" ? "flex-end" : "flex-start")};
  display: flex;
  justify-content: ${({ sender }) => (sender === "user" ? "right" : "left")}; // 수정된 부분
  gap: 5px;
`;

const MessageIcon = styled.div`
  display: flex;
  border-radius: 50%; /* 동그라미 모양 */
  border: 1px solid black;
  width: 24px;
  height: 24px;
  background-color: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4); /* 그림자 추가 */
`;