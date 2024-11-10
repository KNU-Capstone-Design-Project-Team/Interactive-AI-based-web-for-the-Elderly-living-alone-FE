import styled from "styled-components";
import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";
import { SeniorContext } from "@/start/context/SeniorContext";
import { CommonContext } from "@/start/context/CommonContext";
import UnderlinedInput from "@/start/module/UnderlinedInput";
import NextButton from "@/start/module/NextButton";
import TopQuestion from "@/start/module/TopQuestion";

export default function GetAddress() {
  const { processState, setProcessState } = useContext(ProcessStateContext);
  const { userName } = useContext(CommonContext);
  const { city, setCity, gu, setGu, dong, setDong } = useContext(SeniorContext);
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
    setProcessState("getCategory");
  };
  return (
    <>
    <TopQuestion 
    name={userName}
    text1="님"
    text2="어디에 사시나요?">
    </TopQuestion>
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


const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  margin-top: 60px;
`;
