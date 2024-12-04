import styled from "styled-components";
import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";
import { SeniorContext } from "@/start/context/SeniorContext";
import { CommonContext } from "@/start/context/CommonContext";
import TopQuestion from "@/start/module/TopQuestion";
import UnderlinedInput from "@/start/module/UnderlinedInput";
import NextButton from "@/start/module/NextButton";
import { useNavigate } from "react-router-dom";

export default function InputCode() {
  const { processState, setProcessState } = useContext(ProcessStateContext);
  const { userName } = useContext(CommonContext);
  const { seniorCode, setSeniorCode } = useContext(SeniorContext);
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false); // Toast 상태

  const handleCodeChange = (event) => {
    setSeniorCode(event.target.value);
  };

  const handleNext = () => {
    requestAndShowNotification(); // 알림 요청 및 표시
    setShowToast(true); // Toast 표시
    setTimeout(() => {
      setShowToast(false); // Toast 숨기기
      navigate('/senior'); // '/senior' 경로로 이동
    }, 2000); // 2초 후 Toast 숨기기 및 이동
  };

  // 푸시 알림 권한 요청 및 알림 표시 함수
  const requestAndShowNotification = () => {
    if (!("Notification" in window)) {
      alert("이 브라우저는 알림을 지원하지 않습니다.");
      return;
    }

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("로그인 성공", {
          body: "환영합니다!",
          icon: "https://via.placeholder.com/64", // 아이콘 URL (선택 사항)
        });
      } else if (permission === "denied") {
        alert("알림 권한이 거부되었습니다.");
      }
    });
  };

  return (
    <>
      <TopQuestion 
        name={userName}
        text1="님의"
        text2="보호자 연결 번호를 "
        text3="입력해 주세요."
      />
      <InputWrapper>
        <UnderlinedInput
          value={seniorCode}
          onChange={handleCodeChange}
          placeholder="번호를 입력해주세요."
        />
      </InputWrapper>
      {showToast && <Toast>로그인 성공! 환영합니다.</Toast>}
      <NextButton onClick={handleNext}>다음으로</NextButton>
   
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  margin-top: 60px;
`;

const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #40ce3b;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  animation: fadeInOut 2.5s ease-in-out;
  opacity: 0.95;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, 20px);
    }
    10% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
  }
`;
