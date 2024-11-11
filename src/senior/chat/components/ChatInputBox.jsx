import styled from "styled-components";
import { Send } from "lucide-react";

export default function ChatInputBox({
  message,
  setMessage,
  onSendClicked,
  disabled,
}) {
  return (
    <Wrapper>
      <SendInput
        placeholder={disabled ? "입력 불가 상태입니다." : "답장을 입력해주세요"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSendClicked();
          }
        }}
        disabled={disabled} // 비활성화 상태 적용
      />
      <CircleSend onClick={onSendClicked}>
        <Send color="white" />
      </CircleSend>
    </Wrapper>
  );
}

const SendInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: transparent;
`;

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px 10px 15px;
  padding: 0 20px 0 20px;
  border-radius: 30px;
  background-color: #ececec;
  position: sticky;
  bottom: 0;
`;

const CircleSend = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #f08a5d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
