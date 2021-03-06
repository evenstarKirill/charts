import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import CustomTooltip from '../CustomToolTip/CustomToolTip';

import { IChartProps } from '../../interfaces';

import { formattedXAxis } from '../../helpers/formatXaxis';

import styles from './CustomLineChart.module.scss';

const CustomLineChart = ({
  data,
  keys,
  stylesData,
  sizeStyles,
}: IChartProps) => {
  return (
    <div className={sizeStyles}>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={data}
          margin={
            stylesData?.margin || {
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }
          }
        >
          <CartesianGrid
            opacity={0.1}
            vertical={false}
            strokeDasharray={stylesData?.strokeDashType || ''}
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={formattedXAxis}
          />
          <YAxis
            axisLine={false}
            tickCount={8}
            tickLine={false}
            tickFormatter={(num) => `$${num.toFixed(2)}`}
          />
          <Tooltip
            cursor={{ stroke: '#D9FFFF' }}
            content={<CustomTooltip chartType="line" />}
          />
          {keys.map((val) => (
            <Line
              key={val.toString()}
              type={stylesData?.type || 'monotone'}
              legendType={stylesData?.legendType || 'line'}
              dot={stylesData?.dot || false}
              dataKey={val.toString()}
              stroke={
                stylesData
                  ? (stylesData?.colors as string[])[keys.indexOf(val)]
                  : 'blue'
              }
              activeDot={stylesData?.activeDot || { r: 8 }}
              strokeWidth={stylesData?.strokeWidth || 1}
            />
          ))}
          {stylesData?.legend && <Legend verticalAlign="bottom" height={36} />}
        </LineChart>
      </ResponsiveContainer>
      <h3 style={{ ...stylesData?.titleStyles }} className={styles.title}>
        {stylesData?.titleContent}
      </h3>
    </div>
  );
};

export default CustomLineChart;
