import styled from "styled-components";
import UserIcon from "@/assets/UserIcon.svg";

// 아래의 변수들은 임시로 만든 것. 실제론 백에서 정보를 받아와서 그 정보에 따라 다르게 나타나는 값들.
const name = "차예원";
const meassages = ["즉시 방문해보세요.", "방문을 권고합니다.", ""];
const ratio = 0;

export default function PersonalAlarm() {
  return (
    <Wrapper>
      <ProfileWrapper>
        <CircleProfile>
          <img src={UserIcon} alt="UserIcon" />
        </CircleProfile>
      </ProfileWrapper>
      <TotalTextWrapper>
        <StyledText>
          <b>{name}</b>님의 하루 응답률은 <b>{ratio}%</b>입니다.
        </StyledText>
        <SmallTextWrapper>
          <WarningMessage>{meassages[0]}</WarningMessage>
          <Date>2024.10.10.목</Date>
        </SmallTextWrapper>
      </TotalTextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #aaaaaa;
  border-style: solid none;
`;

const ProfileWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  jusify-content: center;
  align-items: center;
`;

const CircleProfile = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fafafa;
  border: 1px solid black;
  border-radius: 50%;
`;

const TotalTextWrapper = styled.div`
  display: grid;
`;

const StyledText = styled.div`
  height: 20px;
  font-size: 12px;
`;

const SmallTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const WarningMessage = styled.span`
  font-size: 12px;
`;
const Date = styled.span`
  font-size: 10px;
`;
