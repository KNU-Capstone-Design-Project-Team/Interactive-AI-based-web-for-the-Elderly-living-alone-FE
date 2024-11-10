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

  const handleNext = () => {
    navigate("/supervisor");
  };
  return (
    <>
      <TopQuestion
        name={userName}
        text1="님의"
        text2="연결 번호입니다. "
      ></TopQuestion>
      <InputWrapper>
        <CodeNotice>K2H1Y9#</CodeNotice>
      </InputWrapper>
      <Description>이 코드는 독거노인 사용자와 연결하는 번호입니다.</Description>
      <Description>독거노인 사용자에게 전달해주세요.</Description>
      <NextButton onClick={handleNext}>다음으로</NextButton>
    </>
  );
}

const CodeNotice = styled.span`
  font-size: 40px;
  font-weight: bold;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 40px;
`;

const Description = styled.span`
    font-size: 14px;
    color: #5B5B5B;
    margin-bottom: 10px;
`;