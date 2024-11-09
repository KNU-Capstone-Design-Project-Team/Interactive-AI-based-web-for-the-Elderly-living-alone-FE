import styled from "styled-components";
import { useState, useEffect } from "react";
import PersonalAlarm from "@/supervisor/alarm/components/PersonalAlarm";
import axios from "axios";
import { API_BASE_URL } from "@/global/const/const";

export default function AlarmPage() {
  const [todayDate, setTodayDate] = useState([]);
  const [todayAlarmList, setTodayAlarmList] = useState([]);
  const [loginId, setLoginId] = useState("sampleLoginId");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/supervisor/${loginId}/notice`
        );
        setTodayDate(response.data.todayDate);
        setTodayAlarmList(response.data.todayAlarmList);
      } catch (error) {}
    }

    fetchData();
  }, []);

  // const todayDate = "2024.11.04";
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

  return (
    <Wrapper>
      <Date>{todayDate}</Date>
      <AlarmList>
        {todayAlarmList.map(([userName, responseRate]) => (
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
