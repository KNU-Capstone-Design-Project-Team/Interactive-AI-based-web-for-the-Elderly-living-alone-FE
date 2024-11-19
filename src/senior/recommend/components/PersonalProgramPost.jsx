import styled from "styled-components";

export default function PersonalProgramPost({ title, location, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <ImageContents />
      <TotalTextWrapper>
        <TitleText>{title}</TitleText>
        <LocationText>{location}</LocationText>
      </TotalTextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 240px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
`;

const ImageContents = styled.img`
  width: 240px;
  height: 220px;
  object-fit: cover;
`;

const TotalTextWrapper = styled.div`
  width: 240px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.h3`
  font-size: 16px;
`;

const LocationText = styled.span`
  font-size: 12px;
`;
