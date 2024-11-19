import styled from "styled-components";
import { SquareX } from "lucide-react";
export default function ProgramPost({ programData, onClose }) {
  return (
    <Wrapper>
      <CloseButton onClick={onClose}>
        <SquareX size={30} />
      </CloseButton>
      <ImageContents src={programData.poster}/>
      <TotalTextWrapper>
        <TitleText>{programData.title}</TitleText>
        <DetailWrapper>
          <StyledText>날짜 : {programData.date}</StyledText>
          <StyledText>장소 : {programData.location}</StyledText>
          <StyledText>내용 : {programData.content}</StyledText>
          <StyledText>접수처 : {programData.reception}</StyledText>
          <StyledText>문의사항 : {programData.ask}</StyledText>
        </DetailWrapper>
      </TotalTextWrapper>
    </Wrapper>
  );
}

const CloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute; /* 부모를 기준으로 위치 설정 */
  top: 10px; /* 상단에서의 거리 */
  right: 10px; /* 우측에서의 거리 */
`;
const Wrapper = styled.div`
  border-top: 1px solid #aaaaaa;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative; /* 자식 요소의 절대 위치를 기준으로 설정 */
`;

const ImageContents = styled.img`
  width: 250px;
  height: 300px;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
  object-fit: contain;
  margin: 10px;
  margin-top: 50px;
`;

const TotalTextWrapper = styled.div`
margin-top: 10px;
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #aaaaaa;
`;

const TitleText = styled.span`
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: bold;
  text-align: center;
`;

const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const StyledText = styled.span`
  font-size: 16px;
  margin: 8px;
`;
