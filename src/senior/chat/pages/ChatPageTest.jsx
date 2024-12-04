import styled from "styled-components";
import { useState } from "react";
import ChatInputBox from "@/senior/chat/components/ChatInputBox.jsx";
import useChatStore from "@/store/chatStore"; // Zustand 스토어 불러오기
import { BotMessageSquare, UserRound } from "lucide-react";

export default function ChatPage() {
  const [toSendMessage, setToSendMessage] = useState("");
 // 테스트용 로그인 아이디
  const { messages, addMessage } = useChatStore(); // Zustand 사용

  // 시간 포맷 함수
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "오후" : "오전";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${ampm} ${formattedHours}:${formattedMinutes}`;
  };

  // 사용자가 입력 후 메시지를 리스트에 추가
  const onSendClicked = () => {
    if (toSendMessage.trim() === "") return;

    const currentTime = new Date();
    const formattedTime = formatTime(currentTime);

    // 사용자가 입력한 메시지를 추가
    addMessage({ sender: "user", text: toSendMessage, time: formattedTime });

    setToSendMessage(""); // 입력창 초기화
  };

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
                {msg.text}
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
        disabled={false} // 입력창 항상 활성화
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
