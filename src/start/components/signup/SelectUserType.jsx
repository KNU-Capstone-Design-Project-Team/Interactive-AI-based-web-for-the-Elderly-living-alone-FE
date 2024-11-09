import styled from "styled-components";
import NextButton from "@/start/module/NextButton.jsx";
import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";
import { CommonContext } from "@/start/context/CommonContext"
import Supervisor from "@/assets/Supervisor.png";
import Senior from "@/assets/Senior.png";
export default function SelectUserType() {
    const { processState, setProcessState } = useContext(ProcessStateContext);
    const { userType, setUserType } = useContext(CommonContext);

    
    const handleSelect = (type) => {
      setUserType(type);
      console.log(type);
    };

    const handleNext = () => {
      setProcessState('getInfo')
    }
  
  
    return (
      <>
        <Question>어떤 유형으로 가입하시나요?</Question>
        <SelectWrapper>
          <SelectButton
            onClick={() => handleSelect("senior")}
            isSelected={userType === "senior"}
          >
            <Icon src={Senior} alt="OldMan" />
            <SBtext isSelected={userType === "senior"}>행복어르신</SBtext>
          </SelectButton>
          <SelectButton
            onClick={() => handleSelect("supervisor")}
            isSelected={userType === "supervisor"}
          >
            <Icon src={Supervisor} alt="Supervisor" />
            <SBtext isSelected={userType === "supervisor"}>보호자</SBtext>
          </SelectButton>
        </SelectWrapper>
        <NextButton onClick={handleNext}>다음으로</NextButton>
        </>
    );
  };
  
  const Question = styled.span`
    margin: 200px 0 20px 0;
    font-size: 20px;
    font-weight: bold;
    color: #5b5b5b;
  `;
  
  const Icon = styled.img`
    width: 100px;
    height: 100px;
  `;
  
  const SelectWrapper = styled.div`
    display: flex;
    gap: 30px;
  `;
  const SelectButton = styled.button`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 10px;
    width: 50%;
    height: 150px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({ isSelected }) => (isSelected ? "#D66E8B" : "white")};
    cursor: pointer;
  `;
  
  const SBtext = styled.span`
    font-size: 20px;
    color: ${({ isSelected }) => (isSelected ? "white" : "#000000")};
  `;
  