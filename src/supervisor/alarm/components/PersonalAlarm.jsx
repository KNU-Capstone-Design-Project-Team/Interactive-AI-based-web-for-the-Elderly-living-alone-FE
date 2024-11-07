import styled from "styled-components";
import UserIcon from "@/assets/UserIcon.svg";

// 아래의 변수들은 임시로 만든 것. 실제론 백에서 정보를 받아와서 그 정보에 따라 다르게 나타나는 값들.

const getMessage = (ratio) => {
  if (ratio <= 12.5) return "즉시 방문해보세요.";
  else if (ratio >= 50) return "";
  else return "방문을 권고합니다.";
};

const getBackgroundColor = (ratio) => {
  if (ratio <= 12.5) return "#D32F2F";
  else if (ratio >= 50) return "#4CAF50";
  else return "#F9A825";
};

export default function PersonalAlarm({ userName, responseRate }) {
  return (
    <Wrapper ratio={responseRate}>
      <ProfileWrapper>
        <CircleProfile>
          <img src={UserIcon} alt="UserIcon" />
        </CircleProfile>
      </ProfileWrapper>
      <TotalTextWrapper>
        <StyledText>
          <b>{userName}</b>님의 하루 응답률은 <b>{responseRate}%</b>입니다.
        </StyledText>
        <SmallTextWrapper>
          <WarningMessage>{getMessage(responseRate)}</WarningMessage>
        </SmallTextWrapper>
      </TotalTextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  border: 1px solid #aaaaaa;
  border-style: solid none;
  background-color: ${({ ratio }) => getBackgroundColor(ratio)};
  box-sizing: border-box;
  flex-shrink: 0;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CircleProfile = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fafafa;
  border: 1px solid black;
  border-radius: 50%;
`;

const TotalTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-right: 10px;
  box-sizing: border-box;
`;

const StyledText = styled.div`
  margin: 2px;
  font-size: 12px;
`;

const SmallTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2px;
`;

const WarningMessage = styled.span`
  font-size: 12px;
`;
