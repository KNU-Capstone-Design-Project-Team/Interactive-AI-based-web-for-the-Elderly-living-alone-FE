import React from "react";
import { Link } from "react-router-dom";
// import { ROUTER_PATH } from ~ 라우팅은 안 한 상태
import styled from "styled-components";
import AlarmIcon from "@/assets/AlarmIcon.svg";
import Graph from "@/assets/Graph.svg";

export default function SupervisorHomePage() {
  return (
    <Wrapper>
      <StyledLink alarm>
        <img src={AlarmIcon} alt="Alarm" />
        <StyledText>알림</StyledText>
        <StyledText explain>지난 24시간의 응답률 알림입니다.</StyledText>
      </StyledLink>
      <StyledLink>
        <img src={Graph} alt="Graph" />
        <StyledText>한 눈에 보기</StyledText>
        <StyledText explain>
          지난 1주 간의 응답률을 그래프로 확인할 수 있습니다.
        </StyledText>
      </StyledLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

const StyledLink = styled(Link)`
  width: 80%;
  height: 50%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  margin: ${(props) => (props.alarm ? "70px 0 0 0" : "0 0 70px 0")};
`;

const StyledText = styled.span`
  font-size: ${(props) => (props.explain ? "12px" : "24px")};
  font-weight: ${(props) => (props.explain ? "normal" : "bold")};
  margin: ${(props) => (props.explain ? "10px 0 0 0" : "20px 0 0 0")};
`;
