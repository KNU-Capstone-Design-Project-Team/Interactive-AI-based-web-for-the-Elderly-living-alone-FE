import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/global/const/const";
import styled from "styled-components";
import ChatIcon from "@/assets/ChatIcon.svg";
import ThumbsUp from "@/assets/ThumbsUp.svg";
import { useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  useEffect(() => {
    const fetchNewQuestion = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/chatLongPoll`, {
          timeout: 10000,
        });
        if (response.status === 200) {
          // 첫 메시지가 수신되면 푸시 알림 표시
          requestAndShowNotification(
            "새 대화가 생성되었습니다!",
            "AI와 대화를 시작해보세요."
          );
        }
      } catch (error) {
        console.error("Failed to fetch new question:", error);
      } finally {
        setTimeout(fetchNewQuestion, 2 * 60 * 60 * 1000); // 2시간 후 다시 호출
      }
    };

    // 초기 실행
    fetchNewQuestion();
  }, []);

  // 푸시 알림 권한 요청 및 알림 표시 함수
  const requestAndShowNotification = (title, body) => {
    if (!("Notification" in window)) {
      alert("이 브라우저는 알림을 지원하지 않습니다.");
      return;
    }

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(title, {
          body,
          icon: "https://via.placeholder.com/64", // 아이콘 URL (선택 사항)
        });
      } else if (permission === "denied") {
        alert("알림 권한이 거부되었습니다.");
      }
    });
  };

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
        <StyledText explain>
          우리 동네에서 일어나는 일에 참여해보세요!
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
  margin: ${(props) => (props.chat ? "70px 0 0 0" : "0 0 70px 0")};
`;

const StyledText = styled.span`
  font-size: ${(props) => (props.explain ? "12px" : "24px")};
  font-weight: ${(props) => (props.explain ? "normal" : "bold")};
  margin: ${(props) => (props.explain ? "10px 0 0 0" : "20px 0 0 0")};
`;
