import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/global/const/const";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Wrapper>
      <ChatLink to={ROUTER_PATH.CHAT}>Chat</ChatLink>
      <RecommendLink to={ROUTER_PATH.RECOMMEND}>Recommend</RecommendLink>
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
  justify-content: center;
  align-items: center;
`;

const ChatLink = styled(StyledLink)`
  margin-top: 70px;
`;

const RecommendLink = styled(StyledLink)`
  margin-bottom: 70px;
`;