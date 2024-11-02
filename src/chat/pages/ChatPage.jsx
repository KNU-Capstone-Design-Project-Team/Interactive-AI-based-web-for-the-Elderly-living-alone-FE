import styled from "styled-components";
import ChatbotIcon from "@/assets/ChatbotIcon.svg";
import UserIcon from "@/assets/UserIcon.svg";
import { useState, useEffect } from "react";
import ChatInputBox from "@/chat/components/ChatInputBox.jsx";
import axios from "axios";
import { API_BASE_URL } from "@/global/const/const";

export default function ChatPage() {
  const [toSendMessage, setToSendMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [lastMessageTime, setLastMessageTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      if (currentTime - lastMessageTime >= 10 * 60 * 1000) {
        sendEmptyMessage();
      }
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [lastMessageTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHour = new Date().getHours();
      if (currentHour >= 8 && currentHour <= 22 && currentHour % 2 === 0) {
        fetchNewQuestion();
      }
    }, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const sendEmptyMessage = async () => {
    await axios.post(`${API_BASE_URL}/chat`, { message: "" });
    setMessages((prevMessages) => [...prevMessages, { sender: "system", text: "No input received." }]);
  };

  const fetchNewQuestion = async () => {
    const response = await axios.get(`${API_BASE_URL}/new-question`);
    setMessages((prevMessages) => [...prevMessages, { sender: "ai", text: response.data.question }]);
  };

  const onSendClicked = async () => {
    if (toSendMessage.trim() === "") return;

    // try {
      // 메시지를 서버로 전송하고 사용자의 메시지를 먼저 추가
      // await axios.post(`${API_BASE_URL}/chat`, { message: toSendMessage });
      setMessages((prevMessages) => [...prevMessages, { sender: "user", text: toSendMessage }]);
  
      // 입력 필드와 마지막 메시지 시간을 초기화
      setToSendMessage("");
      setLastMessageTime(Date.now());
  
      // 서버로부터 응답 메시지 가져오기
    //   const response = await axios.get(`${API_BASE_URL}/chat`);
    //   setMessages((prevMessages) => [...prevMessages, { sender: "ai", text: response.data.message }]);
    // } catch (error) {
    //   console.error("Failed to send or receive message:", error);
    // }
  };


  return (
   <Wrapper>
      <h1>Chat Page</h1>
      <ChatList>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            {msg.text}
          </Message>
        ))}
      </ChatList>
      <ChatInputBox message={toSendMessage} setMessage={setToSendMessage} onSendClicked={onSendClicked} />
    </Wrapper>
    
  );
}

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
  background-color: ${({ sender }) => (sender === "user" ? "#DCF8C6" : "#ECECEC")};
  margin: 5px 0;
  padding: 10px;
  border-radius: 10px;
  align-self: ${({ sender }) => (sender === "user" ? "flex-end" : "flex-start")};
`;