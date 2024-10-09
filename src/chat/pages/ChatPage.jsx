import styled from "styled-components";
import ChatbotIcon from "@/assets/ChatbotIcon.svg";
import UserIcon from "@/assets/UserIcon.svg";
import { useState } from "react";
import ChatInputBox from "@/chat/components/ChatInputBox.jsx";

export default function ChatPage() {
  const [toSendMessage, setToSendMessage] = useState("");
  const onSendClicked = () => {
    console.log(toSendMessage);
    setToSendMessage("");
  }


  return (
   <Wrapper>
      <h1>Chat Page</h1>
      <ChatInputBox message={toSendMessage} setMessage={setToSendMessage} onSendClicked={onSendClicked} />
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;