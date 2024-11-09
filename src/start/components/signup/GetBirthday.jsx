import styled from "styled-components";
import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";
import { SeniorContext } from "@/start/context/SeniorContext";
import { CommonContext } from "@/start/context/CommonContext";
import TopQuestion from "@/start/module/TopQuestion";
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
    <TopQuestion 
    name={userName}
    text1="님의"
    text2="생년월일은?">
    </TopQuestion>
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


const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  margin-top: 60px;
`;
