import styled from "styled-components";

const TopQuestion = ({ name, text1, text2, text3 }) => {
return(
<TopWrapper>
    <TopInsideWrapper>
      <Name>{name}</Name>
      <QuestionText1>{text1}</QuestionText1>
    </TopInsideWrapper>
    <QuestionText2>{text2}</QuestionText2>
    {text3 && text3.trim() !== "" && <QuestionText3>{text3}</QuestionText3>}
  </TopWrapper>
)
};

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
const QuestionText3 = styled.span`
  font-size: 32px;
  letter-spacing: -2px;
`;

export default TopQuestion;
