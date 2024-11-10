import styled from "styled-components";
import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";
import { SeniorContext } from "@/start/context/SeniorContext";
import { CommonContext } from "@/start/context/CommonContext";
import UnderlinedInput from "@/start/module/UnderlinedInput";
import NextButton from "@/start/module/NextButton";
import TopQuestion from "@/start/module/TopQuestion";

export default function GetCategory() {
  const { processState, setProcessState } = useContext(ProcessStateContext);
  const { userName } = useContext(CommonContext);
  const { categories, setCategories } = useContext(SeniorContext);

  const handleSelectCategory = (category) => {
    setCategories((prevCategories) =>
        prevCategories.includes(category)
          ? prevCategories.filter((cat) => cat !== category)
          : [...prevCategories, category]
      );
      //클릭했을 때 이미 categories 배열에 있으면(선택된 상태면) 제거, 없으면 배열에 추가
  } 
  const handleNext = () => {
    setProcessState("inputCode");
  };
  return (
    <>
    <TopQuestion 
    name={userName}
    text1="님의"
    text2="관심 분야는?">
    </TopQuestion>
      <InputWrapper>
      {["요리", "노래", "운동", "글쓰기", "시사", "식물재배", "세계", "그 외"].map((category) => (
          //category는 배열의 각 요소, map 함수의 반복을 통해 하나씩 category라는 이름으로 전달됨
          <SelectButton
            key={category}
            isSelected={categories.includes(category)}
            onClick={() => handleSelectCategory(category)}
          >
            {category}
          </SelectButton>
        ))}
      </InputWrapper>
      <NextButton onClick={handleNext}>다음으로</NextButton>
    </>
  );
}

const SelectButton = styled.button`
    width: 110px;
    height: 60px;
    border: 1px solid black;
    border-radius: 30px;
    font-size: 24px;
    color: ${({ isSelected }) => (isSelected ? "white" : "black")};
    background-color: ${({ isSelected }) => (isSelected ? "#D66E8B" : "white")};
    cursor: pointer;
`; 

const InputWrapper = styled.div`
  margin-top: 40px;
display: grid;
grid-template-columns: repeat(2, 1fr);

gap: 16px;
`;
