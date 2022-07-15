import React from 'react';
import { Cell, ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from 'recharts';

import { IChartProps } from '../../interfaces';

import { CustomizedLabel } from './CustomizedLabel';
import CustomTooltip from '../CustomToolTip/CustomToolTip';
import { cellFill } from '../../helpers/cellFill';

import './../../global-styles.scss';
import styles from './CustomPieChart.module.scss';

const CustomPieChart = ({
  data,
  keys,
  stylesData,
  sizeStyles,
}: IChartProps) => {
  return (
    <div className={sizeStyles || styles.wrapper}>
      <ResponsiveContainer width="100%" aspect={2}>
        <PieChart>
          {keys.map((val) => (
            <Pie
              type={stylesData?.pieLabelType}
              height="100%"
              width="100%"
              key={val.toString()}
              dataKey={val.toString()}
              fill="#8884d8"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius="90%"
              labelLine={stylesData?.pieLabelType === 'outer'}
              label={CustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    (stylesData?.colors as string[])[
                      cellFill({ index: index, colors: stylesData?.colors })
                    ]
                  }
                />
              ))}
            </Pie>
          ))}
          <Tooltip
            cursor={{ stroke: '#D9FFFF' }}
            content={<CustomTooltip chartType="pie" />}
          />
          {stylesData?.legend && <Legend verticalAlign="bottom" height={36} />}
        </PieChart>
      </ResponsiveContainer>
      {stylesData?.titleContent && (
        <h3 style={{ ...stylesData?.titleStyles }} className={styles.title}>
          {stylesData?.titleContent}
        </h3>
      )}
    </div>
  );
};

export default CustomPieChart;
