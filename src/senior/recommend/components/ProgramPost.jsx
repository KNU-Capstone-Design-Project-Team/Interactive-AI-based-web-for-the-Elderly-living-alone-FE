import styled from "styled-components";

export default function ProgramPost({ programData }) {
  return (
    <Wrapper>
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

const Wrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const ImageContents = styled.img`
  width: 250px;
  height: 300px;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
  object-fit: contain;
  margin: 10px;
`;

const TotalTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const TitleText = styled.h3`
  font-size: 16px;
  text-align: center;
`;

const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const StyledText = styled.span`
  font-size: 12px;
  margin: 10px;
`;
