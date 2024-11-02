import React from "react";
import { ReponsiveBar, ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";

export default function PersonalChart({}) {
  return (
    <ChartWrapper>
      <ResponsiveBar
        data={sampleData}
        keys={["responseRate"]}
        indexBy="date"
        colors={({ data }) =>
          data.responseRate === 0
            ? "#FF6347"
            : data.responseRate <= 50
            ? "#FFA500"
            : "#32CD32"
        }
        {...chartSettings}
      ></ResponsiveBar>
    </ChartWrapper>
  );
}

const sampleData = [
  { date: "2024-10-26", responseRate: 30 },
  { date: "2024-10-27", responseRate: 70 },
  { date: "2024-10-28", responseRate: 90 },
  { date: "2024-10-29", responseRate: 50 },
  { date: "2024-10-30", responseRate: 0 },
  { date: "2024-10-31", responseRate: 100 },
  { date: "2024-11-01", responseRate: 40 },
];

const ChartWrapper = styled.div`
  width: 250px;
  height: 250px;
  margin: 20px 0;
  background-color: #f5f5f5;
`;

const chartSettings = {
  margin: { top: 50, right: 50, bottom: 50, left: 60 },
  padding: 0.3,
  borderColor: { from: "color", modifiers: [["darker", 1.6]] },
  axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "Date",
    legendPosition: "middle",
    legendOffset: 32,
  },
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "Response Rate (%)",
    legendPosition: "middle",
    legendOffset: -40,
  },
  labelSkipWidth: 12,
  labelSkipHeight: 12,
  labelTextColor: { from: "color", modifiers: [["darker", 1.6]] },
  animate: true,
  motionStiffness: 90,
  motionDamping: 15,
};
