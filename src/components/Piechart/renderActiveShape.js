/* eslint-disable no-nested-ternary */
import React from 'react';
import { Sector } from 'recharts';
import PropTypes from 'prop-types';

const RenderActiveShape = props => {

  // const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    count,
    size,
  } = props;

  // const sin = Math.sin(-RADIAN * midAngle);
  // const cos = Math.cos(-RADIAN * midAngle);
  // const sx = cx + (outerRadius + 10) * cos;
  // const sy = cy + (outerRadius + 10) * sin;
  // const mx = cx + (outerRadius + 30) * cos;
  // const my = cy + (outerRadius + 30) * sin;
  // const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  // const ey = my;
  // const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      {/* <circle cx={cx} cy={cy} fill={fill} r="30" stroke={fill} />
        <text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
          }}
          x={cx}
          y={cy}
          textAnchor="middle"
          fill={fill}
        >
          {typeof count === 'number' && count.toLocaleString()}
        </text> */}
      <circle
        cx={cx}
        cy={cy}
        fill="transparent"
        r={size === 'medium' ? '32' : size === 'large' ? '50' : 39}
        stroke="transparent"
      />
      <text
      color='white'
        fontSize={
        50
        }
        fontWeight="medium"
        x={cx - 40
        }
        y={cy + 10}
        fill="white"
        stroke="white"
      >
        {count}%
      </text>

      <Sector
        style={{ cursor: 'pointer' }}
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* <circle
        style={{ cursor: 'pointer' }}
        x={cx}
        y={cy}
        dy={1}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="red"
      /> */}
    </g>
  );
};
RenderActiveShape.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  fill: PropTypes.string,
  count: PropTypes.number,
  size: PropTypes.string,
};
export default RenderActiveShape;

