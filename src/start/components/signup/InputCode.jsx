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
  const handleCodeChange = (event) => {
    setSeniorCode(event.target.value);
  };
const handleNext = () => {
  requestAndShowNotification(); // 알림 요청 및 표시
    navigate('/senior');
}


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
    text3="입력해 주세요.">
    </TopQuestion>
    <InputWrapper>
        <UnderlinedInput
          value={seniorCode}
          onChange={handleCodeChange}
          placeholder="번호를 입력해주세요."
        />
      </InputWrapper>
      <NextButton onClick={handleNext}>다음으로</NextButton>
    </>
    )
  };


const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  margin-top: 60px;
`;
