import styled from "styled-components";
import React from "react";
import { AreaChart as RechartsAreaChart } from "recharts";
import {
  Area,
  Dot as RechartsDot,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts/lib/";
import moment from "moment/moment";

const momentifyDate = (item) => moment(item).format("MMM Do");

const momentifyTooltip = (title) => moment(title).format("MMMM Do, YYYY");

const AreaChartComponent = ({
  customHeight,
  data,
  NameKey,
  dataKey,
  renderDate,
  stopColor1,
  stopColor2,
  strokeColor,
}) => (
  <ResponsiveContainer height={customHeight || 200}>
    <AreaChart data={data}>
      <defs>
        <linearGradient id={`${dataKey}`} x1="0" y1="0" x2="1" y2="1">
          <stop
            offset="58%"
            stopColor={stopColor1 || "#A0CFFF"}
            stopOpacity={0.3}
          />
          <stop
            offset="0%"
            stopColor={stopColor2 || "#A0CFFF"}
            stopOpacity={0.3}
          />
        </linearGradient>
      </defs>
      <XAxis
        dataKey={NameKey}
        stroke="#888B9E"
        axisLine={false}
        tickLine={false}
        tickFormatter={renderDate && momentifyDate}
      />
      <YAxis stroke="transparent" axisLine={false} tickLine={false} />
      <CartesianGrid
        strokeDasharray="3 1"
        stroke="gray"
        horizontal={false}
        stopOpacity={0.5}
      />
      <Tooltip />
      <Area
        type={"linear"}
        dataKey={dataKey}
        stroke={strokeColor || "#77B3FF"}
        strokeWidth={4}
        fillOpacity={1}
        fill={`url(#${dataKey})`}
        dot={<RechartsDot r={6} stroke="#77B3FF" fill="#fff" strokeWidth={3} />}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export const AreaChart = styled(RechartsAreaChart)`
  //STYLE FOR THE DOT

  .recharts-active-dot .recharts-dot {
    r: 10px !important;
    stroke-width: 8px !important;
  }

  //STYLE FOR THE TOOLTIP CONTAINER

  .recharts-tooltip-wrapper {
    outline: none !important;
  }

  //STYLE FOR THE TOOLTIP

  .recharts-default-tooltip {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    background: #eaf4fc !important;
    outline: none !important;
    min-width: 159px !important;
    height: 68px !important;
    border: none !important;
  }
  .recharts-default-tooltip :after {
    content: "";
    position: absolute;
    top: 100%;
    left: 94%;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 10px solid #eaf4fc;
  }

  //STYLE FOR THE TOOLTIP

  .recharts-default-tooltip .recharts-tooltip-label {
    font-size: 16px !important;
    color: black !important;
    font-weight: lighter !important;
  }

  //STYLE FOR THE TOOLTIP

  .recharts-tooltip-item-list .recharts-tooltip-item {
    color: #888b9e !important;
    font-weight: lighter !important;
  }

  &.recharts-tooltip-cursor {
    border: none;
    border-left: 3px dashed #b3aed6;
    color: #fff;
    background-color: #fff;
  }
`;

export default AreaChartComponent;
