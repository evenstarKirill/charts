import React from 'react';

interface ICustomizedLabelProps {
  percent: number;
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  type: string;
}

export const CustomizedLabel = ({
  percent,
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  type,
}: ICustomizedLabelProps) => {
  if (type === 'inner') {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.68;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  } else if (type === 'outer') {
    return `${(percent * 100).toFixed(0)}%`;
  }
};
