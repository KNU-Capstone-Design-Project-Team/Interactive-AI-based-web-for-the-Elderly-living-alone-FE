import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import ChatInputBox from "@/senior/chat/components/ChatInputBox.jsx";
import axios from "axios";
import { API_BASE_URL } from "@/global/const/const";
import { BotMessageSquare, UserRound, PlayCircle } from "lucide-react";
import useChatStore from "@/store/ChatStore"; // Zustand 스토어 불러오기

export default function ChatPage() {
  const [toSendMessage, setToSendMessage] = useState("");
  const [lastMessageTime, setLastMessageTime] = useState(null);
  const [isInputActive, setIsInputActive] = useState(false);
  const [isFirstReply, setIsFirstReply] = useState(true);
  const [conversationCount, setConversationCount] = useState(0);
  const loginId = "dlgpqls1367"; // 테스트용 로그인 아이디
  const { messages, addMessage, setMessages } = useChatStore(); // Zustand 사용

  const audioRef = useRef(new Audio()); // 오디오 재생을 위한 ref

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
      const response = await axios.get(`http://localhost:5000/chatLongPoll`, {
        timeout: 10000,
      });
      if (response.status === 200) {
        const currentTime = new Date();
        const formattedTime = formatTime(currentTime);

        // AI 메시지 추가
        // addMessage({ sender: "ai", text: response.data.message, time: formattedTime });
 // AI 메시지 추가 (텍스트와 음성 파일 포함)
        addMessage({
          sender: "ai",
          text: response.data.message,
          audioUrl: response.data.audioUrl, // 백엔드에서 전달받은 음성 파일 URL
          time: formattedTime,
        });
        setIsInputActive(true);
        setIsFirstReply(true);
        setLastMessageTime(Date.now());
        setConversationCount(0); // 대화 횟수 초기화
      }
    } catch (error) {
      console.error("Failed to fetch new question:", error);
    } finally {
      setTimeout(fetchNewQuestion, 2 * 60 * 60 * 1000); // 2시간 후 다시 호출
    }
  };

  // 사용자가 입력 후 서버로 전송
  const onSendClicked = async () => {
    if (toSendMessage.trim() === "") return;

    try {
      const response = await axios.post(
        `http://localhost:5000/senior/${loginId}/chat`,
        { userInput: toSendMessage },
        { timeout: 30000 }
      );
      if (response.status === 200) {
        const currentTime = new Date();
        const formattedTime = formatTime(currentTime);

        addMessage({ sender: "user", text: toSendMessage, time: formattedTime });
        // addMessage({
        //   sender: "ai",
        //   text: response.data.aiContentSentence,
        //   time: formattedTime,
        // });
        addMessage({
          sender: "ai",
          text: response.data.aiContentSentence,
          audioUrl: response.data.audioUrl, // 백엔드에서 전달받은 음성 파일 URL
          time: formattedTime,
        });

        setToSendMessage("");
        setLastMessageTime(Date.now());
        setConversationCount((prevCount) => prevCount + 2);

        if (conversationCount + 2 >= 9) {
          await sendEmptyMessage();
          setIsInputActive(false);
        } else if (isFirstReply) {
          setIsFirstReply(false);
        }
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  // 음성 재생 함수
  const playAudio = (audioUrl) => {
    if (audioRef.current.src !== audioUrl) {
      audioRef.current.src = audioUrl;
    }
    audioRef.current.play();
  };


  // 공백 메시지 전송 함수
  const sendEmptyMessage = async () => {
    try {
      await axios.post(`http://localhost:5000/senior/${loginId}/chat`, {
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
          sendEmptyMessage();
          setIsInputActive(false);
        } else if (!isFirstReply && currentTime - lastMessageTime >= 10 * 60 * 1000) {
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
          <Message key={index} $sender={msg.sender}>
            {msg.sender === "ai" ? (
              <>
                <MessageIcon $sender={msg.sender}>
                  <BotMessageSquare size={24} />
                </MessageIcon>
                {/* 이거 밑부터  message time 앞까지 {msg.text} 얘만 */}
                <MessageContent>
                  {msg.text}
                  {msg.audioUrl && (
                    <PlayButton onClick={() => playAudio(msg.audioUrl)}>
                      <PlayCircle size={24} />
                    </PlayButton>
                  )}
                </MessageContent>
                <MessageTime $sender={msg.sender}>{msg.time}</MessageTime>
              </>
            ) : (
              <>
                {msg.text}
                <MessageTime $sender={msg.sender}>{msg.time}</MessageTime>
                <MessageIcon $sender={msg.sender}>
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

// 스타일 컴포넌트 설정
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
  background-color: ${({ $sender }) => ($sender === "user" ? "#faeeb5" : "#ECECEC")};
  margin: 5px 0;
  padding: 15px;
  border-radius: 10px;
  align-self: ${({ $sender }) => ($sender === "user" ? "flex-end" : "flex-start")};
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MessageTime = styled.span`
  font-size: 0.8rem;
  color: gray;
  align-self: ${({ $sender }) => ($sender === "user" ? "flex-end" : "flex-start")};
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


const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const MessageContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
