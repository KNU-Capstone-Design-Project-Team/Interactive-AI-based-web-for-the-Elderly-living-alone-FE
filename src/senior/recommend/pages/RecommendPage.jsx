import styled from "styled-components";
import { useState, useEffect } from "react";
import PersonalProgramPost from "../components/PersonalProgramPost";
import axios from "axios";
import { API_BASE_URL } from "@/global/const/const";

export default function RecommendPage() {
  const [programData, setProgramData] = useState([]);
  const [loginId, setLoginId] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/senior/${loginId}/recommand`
        );
        setProgramData({
          title: response.data.title,
          location: response.data.location,
        });
      } catch (error) {}
    }

    fetchData();
  }, []);

  return (
    <Wrapper>
      <PostList>
        {programData.map((program, index) => (
          <PersonalProgramPost
            key={index}
            title={program.title}
            location={program.location}
          />
        ))}
      </PostList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow-y: auto;
  max-height: 80vh;
  padding-right: 10px;
  box-sizing: border-box;
  width: 280px;
`;
