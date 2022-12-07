/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  PieChart as RechartsPieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import RenderActiveShape from "./renderActiveShape";
const PieChart = styled(RechartsPieChart)`
  .recharts-tooltip-wrapper {
    outline: none !important;
  }

  //STYLE FOR THE TOOLTIP

  .recharts-default-tooltip {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    background: #eaf4fc !important;
    outline: none !important;
    border: none !important;
  }
  .recharts-default-tooltip :after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 10px solid #eaf4fc;
  }

  //STYLE FOR THE TOOLTIP

  .recharts-default-tooltip .recharts-tooltip-label {
    font-size: 21px !important;
    color: black !important;
    font-weight: lighter !important;
  }

  //STYLE FOR THE TOOLTIP

  .recharts-tooltip-item-list .recharts-tooltip-item {
    color: #000 !important;
    font-weight: lighter !important;
  }

  &.recharts-tooltip-cursor {
    border: none;
    border-left: 3px dashed #b3aed6;
    color: #fff;
    background-color: #f9fcfe;
  }
`;
const LegendDetails = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-top: 15px;
  text-transform: ${(props) => (props.capitalize && "capitalize") || "inherit"};
  @media (max-width: 1440px) {
    width: 170px;
  }
`;

const LegendDetailsItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 100%;
  color: white;
  font-weight: light;
  font-size: 15px;
  text-align: center;
  padding: 5px;
  white-space: normal;
  background: ${(props) => props.color};
  font-weight: bold;
`;

const DescriptionSpan = styled.span`
  text-transform: ${(props) => (props.capitalize && "capitalize") || "inherit"};
  font-size: 12px;
  font-weight: lighter;
  width: 120px;
  color: #fff;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 1440px) {
    font-size: 11px;
  }
`;

// const Progress = styled(ProgressBar)`
//   &.ant-progress .ant-progress-bg {
//     background-color: ${(props) => props.color} !important;
//   }
// `;

const ChartLegend = (props) => {
  const { capitalize, index, payload, size } = props;
  const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  width: 100%;
  height: 80%;
  overflow: ${size === "medium" ? "scroll" : "hidden"};
  &:overflow: scroll;
  &:--ms-overflow-style: none;
  &:scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
  const COLORS = [
    { start: "#FEBD42", end: "#EFD7AB" },
    { start: "#C5A4FF", end: "#DBC7FF" },
    { start: "#004AFE", end: "#80A5FF" },
    { start: "#A9FFBB", end: "#6FFF8D" },
    { start: "#6090FF", end: "#12327C" },
  ];
  let color1;
  let color2;
  return (
    <LegendContainer>
      {payload.map(
        (entry, Arraying) => (
          (color1 = COLORS[entry.color.slice(5, 6)]?.start),
          (color2 = COLORS[entry.color.slice(5, 6)]?.end),
          console.log(color1, color2),
          (
            <LegendDetails key={`item-${Arraying}`} capitalize={capitalize}>
              <LegendDetailsItem color={color1}></LegendDetailsItem>

              <DescriptionSpan capitalize={capitalize}>
                {entry.value}
              </DescriptionSpan>
            </LegendDetails>
          )
        )
      )}
    </LegendContainer>
  );
};

const ThePieChart = ({ size, dataKey, NameKey, data }) => {
  const [pieIndex, setPieIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.onload = () => {
      setScreenWidth(window.innerWidth);
    };
  }, [window.onload, window.onresize]);
  const COLORS = [
    { start: "#FEBD42", end: "#EFD7AB" },
    { start: "#C5A4FF", end: "#DBC7FF" },
    { start: "#004AFE", end: "#80A5FF" },
    { start: "#A9FFBB", end: "#6FFF8D" },
    { start: "#6090FF", end: "#12327C" },
    { start: " #70B0FF", end: "#98C6FF" },
  ];

  const pieSize = (radius) => {
    return radius * 5;
  };

  const onPieEnter = (__, index) => setPieIndex(index);

  const { userAgent } = navigator;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }

  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <PieChart
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <Legend
          content={<ChartLegend size={size} index={pieIndex} />}
          wrapperStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: `${screenWidth > 3600 ? "relative" : "none"}`,

            width: "220px",
            height: `${size === "medium" && "200px"}`,
          }}
        />
        <Tooltip />
        <defs>
          {data.map((entry, index) => (
            <linearGradient id={`${index}`}>
              <stop
                offset="0%"
                stopColor={COLORS[index % COLORS.length].start}
              />
              <stop
                offset="100%"
                stopColor={COLORS[index % COLORS.length].end}
              />
            </linearGradient>
          ))}
        </defs>
        <Pie
          cx={size === "medium" ? "50%" : "50%"}
          cy={250}
          activeIndex={pieIndex}
          activeShape={<RenderActiveShape size={size} dataKey={dataKey} />}
          dataKey={dataKey}
          nameKey={NameKey}
          data={data}
          outerRadius={pieSize(39)}
          innerRadius={pieSize(33)}
          onMouseEnter={onPieEnter}
        >
          {data &&
            data.map((__, index) => (
              <Cell key={`cell-${index}`} fill={`url(#${index})`} />
            ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ThePieChart;
