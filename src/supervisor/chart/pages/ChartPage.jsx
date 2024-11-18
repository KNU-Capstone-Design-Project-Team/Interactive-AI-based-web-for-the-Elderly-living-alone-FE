import styled from "styled-components";
import { useState, useEffect } from "react";
import PersonalChart from "@/supervisor/chart/components/PersonalChart";
import axios from "axios";
import { API_BASE_URL } from "@/global/const/const";

export default function ChartPage() {
  const [nameList, setNameList] = useState([]);
  const [responseRatioList, setResponseRatioList] = useState([]);
  const [loginId, setLoginId] = useState("dlgpqls1367");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/supervisor/${loginId}/stats`);
        setNameList(response.data.nameList);
        setResponseRatioList(response.data.responseRatioList);
        // setUserList( ["고희연", "김채은", "이혜빈", "차예원"]);
        // setResponseRates([
        //   [
        //     { date: "2024-10-26", responseRate: 10 },
        //     { date: "2024-10-27", responseRate: 70 },
        //     { date: "2024-10-28", responseRate: 90 },
        //     { date: "2024-10-29", responseRate: 50 },
        //     { date: "2024-10-30", responseRate: 0 },
        //     { date: "2024-10-31", responseRate: 100 },
        //     { date: "2024-11-01", responseRate: 40 },
        //   ],
        //   [
        //     { date: "2024-10-26", responseRate: 25 },
        //     { date: "2024-10-27", responseRate: 80 },
        //     { date: "2024-10-28", responseRate: 70 },
        //     { date: "2024-10-29", responseRate: 40 },
        //     { date: "2024-10-30", responseRate: 12.5 },
        //     { date: "2024-10-31", responseRate: 20 },
        //     { date: "2024-11-01", responseRate: 0 },
        //   ],
        //   [
        //     { date: "2024-10-26", responseRate: 90 },
        //     { date: "2024-10-27", responseRate: 100 },
        //     { date: "2024-10-28", responseRate: 62.5 },
        //     { date: "2024-10-29", responseRate: 60 },
        //     { date: "2024-10-30", responseRate: 50 },
        //     { date: "2024-10-31", responseRate: 10 },
        //     { date: "2024-11-01", responseRate: 20 },
        //   ],
        //   [
        //     { date: "2024-10-26", responseRate: 50 },
        //     { date: "2024-10-27", responseRate: 55 },
        //     { date: "2024-10-28", responseRate: 12.5 },
        //     { date: "2024-10-29", responseRate: 45 },
        //     { date: "2024-10-30", responseRate: 100 },
        //     { date: "2024-10-31", responseRate: 30 },
        //     { date: "2024-11-01", responseRate: 10 },
        //   ],
        // ]);
      } catch (error) {}
    }

    fetchData();
  }, []);

  // const userList = ["고희연", "김채은", "이혜빈", "차예원"];
  // const responseRates = [
  //   [
  //     { date: "2024-10-26", responseRate: 10 },
  //     { date: "2024-10-27", responseRate: 70 },
  //     { date: "2024-10-28", responseRate: 90 },
  //     { date: "2024-10-29", responseRate: 50 },
  //     { date: "2024-10-30", responseRate: 0 },
  //     { date: "2024-10-31", responseRate: 100 },
  //     { date: "2024-11-01", responseRate: 40 },
  //   ],
  //   [
  //     { date: "2024-10-26", responseRate: 25 },
  //     { date: "2024-10-27", responseRate: 80 },
  //     { date: "2024-10-28", responseRate: 70 },
  //     { date: "2024-10-29", responseRate: 40 },
  //     { date: "2024-10-30", responseRate: 12.5 },
  //     { date: "2024-10-31", responseRate: 20 },
  //     { date: "2024-11-01", responseRate: 0 },
  //   ],
  //   [
  //     { date: "2024-10-26", responseRate: 90 },
  //     { date: "2024-10-27", responseRate: 100 },
  //     { date: "2024-10-28", responseRate: 62.5 },
  //     { date: "2024-10-29", responseRate: 60 },
  //     { date: "2024-10-30", responseRate: 50 },
  //     { date: "2024-10-31", responseRate: 10 },
  //     { date: "2024-11-01", responseRate: 20 },
  //   ],
  //   [
  //     { date: "2024-10-26", responseRate: 50 },
  //     { date: "2024-10-27", responseRate: 55 },
  //     { date: "2024-10-28", responseRate: 12.5 },
  //     { date: "2024-10-29", responseRate: 45 },
  //     { date: "2024-10-30", responseRate: 100 },
  //     { date: "2024-10-31", responseRate: 30 },
  //     { date: "2024-11-01", responseRate: 10 },
  //   ],
  // ];

  return (
    <Wrapper>
      <ChartList>
        {nameList.map((userName, index) => (
          <PersonalChart
            key={userName}
            data={responseRatioList[index]}
            userName={userName}
          ></PersonalChart>
        ))}
      </ChartList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ChartList = styled.div`
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
