import styled from "styled-components";
import { useState, useEffect } from "react";
import PersonalProgramPost from "../components/PersonalProgramPost";
import axios from "axios";
import { API_BASE_URL } from "@/global/const/const";
import ProgramPost from "../components/ProgramPost";
import Modal from "../components/Modal";

export default function RecommendPage() {
  const [programData, setProgramData] = useState([]);
  const [loginId, setLoginId] = useState('dlgpqls1367');
  const [category, setCategory] = useState('total'); // 선택된 카테고리 total, location, preference
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
          poster: "222"
        },
        {
          title: "요가",
          date: "2021-10-10",
          location: "서울시 강남구",
          content: "요가 수업을 진행합니다.",
          reception: "2021-10-10",
          ask: "어디어디로",
          poster: "222"
        }]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

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
      <PostList>
        {programData.map((program, index) => (
          <PersonalProgramPost
            key={index}
            title={program.title}
            location={program.location}
            onClick={() => openModal(program)}
          />
        ))}
      </PostList>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProgram && <ProgramPost programData={selectedProgram} />}
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
