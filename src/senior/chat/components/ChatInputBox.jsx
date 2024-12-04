import styled from "styled-components";
import { Send, Mic, StopCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function ChatInputBox({
  message,
  setMessage,
  onSendClicked,
  disabled,
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognizer = new SpeechRecognition();
      recognizer.lang = "ko-KR";
      recognizer.interimResults = false;

      setRecognition(recognizer);
    } else {
      console.error("Browser does not support Speech Recognition");
    }
  }, []);

  const handleRecordClick = () => {
    if (!recognition) {
      alert("음성 인식이 현재 브라우저에서 지원되지 않습니다.");
      return;
    }

    if (isRecording) {
      recognition.stop();
      onSendClicked(); // 음성 인식 결과를 메시지로 설정
    } else {
      recognition.start();
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setMessage(transcript); // 텍스트로 변환된 결과를 메시지로 설정
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        alert("음성 인식 중 오류가 발생했습니다.");
      };
    }
    setIsRecording(!isRecording);
  };

  return (
    <Wrapper>
        <CircleRecord onClick={handleRecordClick}>
        {isRecording ? <StopCircle color="white" /> : <Mic color="white" />}
      </CircleRecord>
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

const CircleRecord = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-color: transparent;
  background-color: ${props => (props.isRecording ? "#ff6f61" : "#1e90ff")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
