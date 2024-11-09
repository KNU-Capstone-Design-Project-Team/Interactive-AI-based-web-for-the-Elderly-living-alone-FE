import styled from "styled-components";
import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";
import { SeniorContext } from "@/start/context/SeniorContext";
import { CommonContext } from "@/start/context/CommonContext";
import UnderlinedInput from "@/start/module/UnderlinedInput";
import NextButton from "@/start/module/NextButton";

export default function GetAddress() {
  const { processState, setProcessState } = useContext(ProcessStateContext);
  const { userName } = useContext(CommonContext);
  const {
    city,
        setCity,
        gu,
        setGu,
        dong,
        setDong,
  } = useContext(SeniorContext);
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleGuChange = (event) => {
    setGu(event.target.value);
  };
  const handleDongChange = (event) => {
    setDong(event.target.value);
  };
const handleNext = () => {
    setProcessState('getCategory');
}
  return (
    <>
    <TopWrapper>
        <TopInsideWrapper>
      <Name>{userName}</Name>
      <QuestionText1>님</QuestionText1>
      </TopInsideWrapper>
      <QuestionText2>어디에 사시나요?</QuestionText2>
      </TopWrapper>
      <InputWrapper>
        <UnderlinedInput
          value={city}
          onChange={handleCityChange}
          placeholder="도시"
        />
        <UnderlinedInput
          value={gu}
          onChange={handleGuChange}
          placeholder="구"
        />
        <UnderlinedInput
          value={dong}
          onChange={handleDongChange}
          placeholder="동"
        />
      </InputWrapper>
      <NextButton onClick={handleNext}>다음으로</NextButton>
    </>
  );
}

const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
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
