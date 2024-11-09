import styled from "styled-components";
import NextButton from "@/start/components/NextButton.jsx";
import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";
import Supervisor from "@/assets/Supervisor.png";
import Senior from "@/assets/Senior.png";
export default function SelectUserType() {
    const { processState, setProcessState } = useContext(ProcessStateContext);
    const [selectedType, setSelectedType] = useState(null);

    
    const handleSelect = (type) => {
      setSelectedType(type);
      console.log(selectedType);
    };

  
  
    return (
      <>
        <Question>어떤 유형으로 가입하시나요?</Question>
        <SelectWrapper>
          <SelectButton
            onClick={() => handleSelect("senior")}
            isSelected={selectedType === "senior"}
          >
            <Icon src={Senior} alt="OldMan" />
            <SBtext isSelected={selectedType === "senior"}>행복어르신</SBtext>
          </SelectButton>
          <SelectButton
            onClick={() => handleSelect("supervisor")}
            isSelected={selectedType === "supervisor"}
          >
            <Icon src={Supervisor} alt="Supervisor" />
            <SBtext isSelected={selectedType === "supervisor"}>보호자</SBtext>
          </SelectButton>
        </SelectWrapper>
  
        <NextButton>다음으로</NextButton>
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
    margin-bottom: 140px;
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
  