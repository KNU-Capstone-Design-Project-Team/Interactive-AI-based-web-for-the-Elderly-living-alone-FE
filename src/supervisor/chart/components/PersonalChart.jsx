import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";

// 이름은 순서 따로 없이 리스트로, 응답률은 이름 순서에 맞춰서 리스트로

const getDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", { weekday: "short" });
};

const sampleUserName = "차예원";

const sampleData = [
  { date: "2024-10-26", responseRate: 30 },
  { date: "2024-10-27", responseRate: 70 },
  { date: "2024-10-28", responseRate: 90 },
  { date: "2024-10-29", responseRate: 50 },
  { date: "2024-10-30", responseRate: 0 },
  { date: "2024-10-31", responseRate: 100 },
  { date: "2024-11-01", responseRate: 40 },
].map((item) => ({
  ...item,
  day: getDayOfWeek(item.date),
}));

export default function PersonalChart({ data, userName = sampleUserName }) {
  return (
    <ChartWrapper>
      <Title>{userName}님의 응답률</Title>
      <ResponsiveBar
        data={sampleData}
        keys={["responseRate"]}
        indexBy="day"
        colors={({ data }) =>
          data.responseRate === 0
            ? "#FF6347"
            : data.responseRate <= 50
            ? "#FFA500"
            : "#32CD32"
        }
        {...chartSettings}
        width={250}
        height={205}
      />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
`;

const Title = styled.h3`
  height: 40px;
  text-align: center;
  margin: 10px 0 0 0;
  font-size: 1.2rem;
`;

const chartSettings = {
  margin: { top: 10, right: 20, bottom: 20, left: 30 },
  padding: 0.2,
  axisBottom: {
    tickSize: 3,
    tickPadding: 3,
    tickRotation: 0,
  },
  axisLeft: {
    tickSize: 3,
    tickPadding: 3,
    tickRotation: 0,
    tickValues: [0, 25, 50, 75, 100],
  },
  labelSkipWidth: 16,
  labelSkipHeight: 16,
  labelTextColor: { from: "color", modifiers: [["darker", 1.5]] },
  animate: true,
  motionStiffness: 90,
  motionDamping: 15,
};
