import { BotMessageSquare } from "lucide-react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  // 푸시 알림 권한 요청 및 알림 표시 함수
  const requestAndShowNotification = () => {
    if (!("Notification" in window)) {
      alert("이 브라우저는 알림을 지원하지 않습니다.");
      return;
    }

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("로그인 성공", {
          body: "환영합니다! 홈 화면으로 이동합니다.",
          icon: "https://via.placeholder.com/64", // 아이콘 URL (선택 사항)
        });
      } else if (permission === "denied") {
        alert("알림 권한이 거부되었습니다.");
      }
    });
  };

  // 로그인 버튼 클릭 시
  const goHome = () => {
    requestAndShowNotification(); // 알림 요청 및 표시
    navigate('/Senior'); // 홈 화면으로 이동
  };

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
        <button onClick={requestAndShowNotification}>테스트 알림</button>
      </BottomWrapper>
    </Wrapper>
  );
}

// 스타일 컴포넌트
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
