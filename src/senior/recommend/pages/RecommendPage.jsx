import styled from "styled-components";
import { useState, useEffect } from "react";
import PersonalProgramPost from "../components/PersonalProgramPost";
import axios from "axios";
import { API_BASE_URL } from "@/global/const/const";
import ProgramPost from "../components/ProgramPost";
import Modal from "../components/Modal";

export default function RecommendPage() {
  const [programData, setProgramData] = useState([]);
  const [loginId, setLoginId] = useState("dlgpqls1367");
  const [category, setCategory] = useState("total"); // 선택된 카테고리 total, location, preference
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        //   const response = await axios.get(
        //     `${API_BASE_URL}/senior/${loginId}/recommand`,
        //     {
        //       params: {
        //         category: {category} // 쿼리 파라미터
        //       }
        //     }
        //   );
        //   setProgramData(response.data.pageList);
        setProgramData([
          {
            title: "요가",
            date: "2021-10-10",
            location: "서울시 강남구",
            content: "요가 수업을 진행합니다.",
            reception: "2021-10-10",
            ask: "어디어디로",
            poster:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAE0lEQVR42mP8z8BQz0AEYBxVSF8AAF4ADypAyK8AAAAASUVORK5CYII=",
          },
          {
            title: "요가",
            date: "2021-10-10",
            location: "서울시 강남구",
            content: "요가 수업을 진행합니다.",
            reception: "2021-10-10",
            ask: "어디어디로",
            poster:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAE0lEQVR42mP8z8BQz0AEYBxVSF8AAF4ADypAyK8AAAAASUVORK5CYII=",
          },
          {
            title: "요가",
            date: "2021-10-10",
            location: "서울시 강남구",
            content: "요가 수업을 진행합니다.",
            reception: "2021-10-10",
            ask: "어디어디로",
            poster:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAE0lEQVR42mP8z8BQz0AEYBxVSF8AAF4ADypAyK8AAAAASUVORK5CYII=",
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [category]);

  const openModal = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <Wrapper>
      <CategoryWrapper>
      <CategoryButton
          isActive={category === "total"}
          onClick={() => setCategory("total")}
        >
          전체
        </CategoryButton>
        <CategoryButton
          isActive={category === "location"}
          onClick={() => setCategory("location")}
        >
          위치
        </CategoryButton>
        <CategoryButton
          isActive={category === "preference"}
          onClick={() => setCategory("preference")}
        >
          취향
        </CategoryButton>
      </CategoryWrapper>
      <PostList>
        {programData.map((program, index) => (
          <PersonalProgramPost
            key={index}
            title={program.title}
            location={program.location}
            poster={program.poster}
            onClick={() => openModal(program)}
          />
        ))}
      </PostList>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProgram && <ProgramPost programData={selectedProgram} onClose={closeModal} />}
      </Modal>
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

const CategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 36px 0px 20px 60px;
`;

const CategoryButton = styled.button`
  width: 20%;
  border: none;
  font-size: 24px;
  color: ${({ isActive }) => (isActive ? "black" : "#5b5b5b")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
  background: none;
  cursor: pointer;
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
