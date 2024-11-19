import styled from "styled-components";
import { MapPin } from "lucide-react";

export default function PersonalProgramPost({ title, location, poster, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <ImageContents src={poster} />
      <TotalTextWrapper>
        <TitleText>{title}</TitleText>
        <LocationText><MapPin size={20} />{location}</LocationText>
      </TotalTextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1.5px solid black;
  box-shadow: 4px 4px 5px #aaaaaa;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

const ImageContents = styled.img`
margin: 10px 0 10px 0;
  width: 100%;
  height: 70%;
  object-fit: contain;
  border-bottom: 1px solid black;
`;

const TotalTextWrapper = styled.div`
margin-top: 4px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled.span`
  font-size: 20px;
  font-weight: Bold;
  margin-bottom: 4px;
`;

const LocationText = styled.span`
  font-size: 16px;
`;
