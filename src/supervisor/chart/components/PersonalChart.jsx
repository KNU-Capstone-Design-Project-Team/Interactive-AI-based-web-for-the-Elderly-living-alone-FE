import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";

const getDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", { weekday: "short" });
};

export default function PersonalChart({ data, userName }) {
  const chartData = data.map((item) => ({
    ...item,
    day: getDayOfWeek(item.date),
  }));

  return (
    <Wrapper>
      <Title>{userName}님의 응답률</Title>
      <ResponsiveBar
        data={chartData}
        keys={["responseRate"]}
        indexBy="day"
        colors={({ data }) =>
          data.responseRate <= 12.5
            ? "#FF6347"
            : data.responseRate <= 50
            ? "#FFA500"
            : "#32CD32"
        }
        {...chartSettings}
        width={250}
        height={205}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px;
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
