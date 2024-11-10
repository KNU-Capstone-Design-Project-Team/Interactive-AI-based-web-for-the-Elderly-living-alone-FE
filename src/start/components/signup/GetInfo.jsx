import styled from "styled-components";
import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";
import { CommonContext } from "@/start/context/CommonContext";
import NextButton from "@/start/module/NextButton";
import UnderlinedInput from "@/start/module/UnderlinedInput";

export default function GetInfo() {
  const { processState, setProcessState } = useContext(ProcessStateContext);
  const {
    userType,
    setUserType,
    userName,
    setUserName,
    userId,
    setUserId,
    userPw,
    setUserPw,
    userPnum,
    setUserPnum,
  } = useContext(CommonContext);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleIdChange = (event) => {
    setUserId(event.target.value);
  };
  const handlePwChange = (event) => {
    setUserPw(event.target.value);
  };
  const handlePnumChange = (event) => {
    setUserPnum(event.target.value);
  };
  const handleNext = () =>  {
    if(userType === 'senior') {
    setProcessState('getBirthday');
    }
    else{
        setProcessState('outputCode');
    }
  }

  return (
    <>
      <InputWrapper>
        <UnderlinedInput
          value={userName}
          onChange={handleNameChange}
          placeholder="이름"
        />
        <UnderlinedInput
          value={userId}
          onChange={handleIdChange}
          placeholder="아이디"
        />
        <UnderlinedInput
          value={userPw}
          onChange={handlePwChange}
          placeholder="비밀번호"
        />
        <UnderlinedInput
          value={userPnum}
          onChange={handlePnumChange}
          placeholder="전화번호"
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
  margin-top: 90px;
  align-items: center;
`;
