import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/global/const/const";
import styled from "styled-components";
import ChatIcon  from "@/assets/ChatIcon.svg";
import ThumbsUp from "@/assets/ThumbsUp.svg";

export default function HomePage() {
  return (
    <Wrapper>
      <StyledLink chat to={ROUTER_PATH.CHAT}>
        <img src={ChatIcon} alt="ChatIcon" />
        <StyledText>대화하기</StyledText>
        <StyledText explain>인공지능과 이야기를 나눠보세요!</StyledText>
     </StyledLink>
      <StyledLink to={ROUTER_PATH.RECOMMEND}>
        <img src={ThumbsUp} alt="ThumbsUp" />
        <StyledText>추천받기</StyledText>
        <StyledText explain>우리 동네에서 일어나는 일에 참여해보세요!</StyledText>
        </StyledLink>
    </Wrapper>
  );
};

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
  margin: ${(props) => props.chat? "70px 0 0 0" : "0 0 70px 0"};
`;



const StyledText = styled.span`
 font-size: ${(props) => props.explain? "12px" : "24px"};
 font-weight: ${(props) => props.explain? "normal" : "bold"};
 margin: ${(props) => props.explain? "10px 0 0 0" : "20px 0 0 0"};
`;
