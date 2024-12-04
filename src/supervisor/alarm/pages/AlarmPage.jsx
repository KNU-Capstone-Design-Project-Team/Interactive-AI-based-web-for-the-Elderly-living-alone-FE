import styled from "styled-components";
import { useState, useEffect } from "react";
import PersonalAlarm from "@/supervisor/alarm/components/PersonalAlarm";
import axios from "axios";
import { API_BASE_URL } from "@/global/const/const";

export default function AlarmPage() {
  const [date, setDate] = useState([]);
  const [seniorNoticeList, setSeniorNoticeList] = useState([]);
  const loginId = "dlgpqls1367"; // 테스트용 로그인 아이디
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
    //     const response = await axios.get(
    //       `${API_BASE_URL}/test`,
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     setMessage(response.data);
        const response = await axios.get(
          `http://localhost:5000/supervisor/${loginId}/notice`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setDate(response.data.date);
        setSeniorNoticeList(response.data.seniorNoticeList);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);



  return (
    <Wrapper>
      <div>{message}</div>
      <Date>{date}</Date>
      <AlarmList>
        {seniorNoticeList.map(([userName, responseRate]) => (
          <PersonalAlarm
            key={userName}
            userName={userName}
            responseRate={responseRate}
          ></PersonalAlarm>
        ))}
      </AlarmList>
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
  padding: 20px;
  box-sizing: border-box;
`;

const AlarmList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  max-height: 70vh;
  padding-right: 10px;
  box-sizing: border-box;
`;

const Date = styled.h3`
  text-align: center;
  font-size: 1.2rem;
`;

  // const todayDate = "20241104";
  // const todayAlarmList = [
  //   ["고희연", 75],
  //   ["김채은", 0],
  //   ["이혜빈", 32.5],
  //   ["차예원", 50],
  //   ["고희연", 75],
  //   ["김채은", 0],
  //   ["이혜빈", 32.5],
  //   ["차예원", 50],
  //   ["고희연", 75],
  //   ["김채은", 0],
  //   ["이혜빈", 32.5],
  //   ["차예원", 50],
  //   ["고희연", 75],
  //   ["김채은", 0],
  //   ["이혜빈", 32.5],
  //   ["차예원", 50],
  // ];