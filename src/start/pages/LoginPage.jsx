import { BotMessageSquare } from "lucide-react";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "@/global/const/const";

export default function LoginPage() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/Senior');
  }
  return (
    <Wrapper>
      <BotMessageSquare size="64" color="orange" style={{ marginTop: '160px' }} />
      <StyledInput placeholder="아이디" />
      <StyledInput placeholder="비밀번호" />
      <StyledButton login onClick={goHome}>로그인</StyledButton>
      <BottomWrapper>
      <TransitionLink to="/signup">회원가입</TransitionLink>
      <TransitionLine>|</TransitionLine>
      <TransitionLink>아이디 찾기</TransitionLink>
      <TransitionLine>|</TransitionLine>
      <TransitionLink>비밀번호 찾기</TransitionLink>
      </BottomWrapper>
    </Wrapper>

  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 55px;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5b5b5b;
  background-color: #f5f5f5;
  color: #5b5b5b;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
 
`;

const StyledButton = styled.button`
  width: 80%;
  height: 55px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #f08a5d;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const BottomWrapper = styled.div `
  display: flex;
  gap: 5px;
  margin-top: 12px;
`;
const TransitionLink = styled(Link) `
    font-size: 12px;
    color: #8e8d8d;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none; /* 링크 밑줄 제거 */
`;

const TransitionLine = styled.span `
    font-size: 12px;
    color: #8e8d8d;
    font-weight: Regular;
`;