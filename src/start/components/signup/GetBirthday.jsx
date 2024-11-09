import styled from "styled-components";
import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";
import { SeniorContext } from "@/start/context/SeniorContext";
import { CommonContext } from "@/start/context/CommonContext";
import UnderlinedInput from "@/start/module/UnderlinedInput";
import NextButton from "@/start/module/NextButton";
export default function GetBirtday() {
  const { processState, setProcessState } = useContext(ProcessStateContext);
  const { userName } = useContext(CommonContext);
  const {
    birthYear,
    setBirthYear,
    birthMonth,
    setBirthMonth,
    birthDay,
    setBirthDay,
  } = useContext(SeniorContext);
  const handleYearChange = (event) => {
    setBirthYear(event.target.value);
  };
  const handleMonthChange = (event) => {
    setBirthMonth(event.target.value);
  };
  const handleDayChange = (event) => {
    setBirthDay(event.target.value);
  };
const handleNext = () => {
    setProcessState('getAddress');
}
  return (
    <>
    <TopWrapper>
        <TopInsideWrapper>
      <Name>{userName}</Name>
      <QuestionText1>님의</QuestionText1>
      </TopInsideWrapper>
      <QuestionText2>생년월일은?</QuestionText2>
      </TopWrapper>
      <InputWrapper>
        <UnderlinedInput
          value={birthYear}
          onChange={handleYearChange}
          placeholder="년"
        />
        <UnderlinedInput
          value={birthMonth}
          onChange={handleMonthChange}
          placeholder="월"
        />
        <UnderlinedInput
          value={birthDay}
          onChange={handleDayChange}
          placeholder="일"
        />
      </InputWrapper>
      <NextButton onClick={handleNext}>다음으로</NextButton>
    </>
  );
}

const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    gap: 8px;

`;
const TopInsideWrapper = styled.div`
  display: flex;  
    gap: 5px;
    align-items: baseline; 
`;
const Name = styled.span`
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(to top, #f3d6ca 50%, transparent 50%);
`;
const QuestionText1 = styled.span`
  font-size: 32px;  
  letter-spacing: -2px;
`;

const QuestionText2 = styled.span`
  font-size: 32px;  
  letter-spacing: -2px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  margin-top: 60px;
`;
