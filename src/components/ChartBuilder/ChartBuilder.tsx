import React from 'react';

import { IConfig } from '../../interfaces';

import CustomAreaChart from '../CustomAreaChart/CustomAreaChart';
import CustomLineChart from '../CustomLineChart/CustomLineChart';
import CustomBarChart from '../CustomBarChart/CustomBarChart';
import CustomStackedBarChart from '../CustomStackedBarChart/CustomStackedBarChart';
import CustomPieChart from '../CustomPieChart/CustomPieChart';

import styles from './ChartBuilder.module.scss';

interface IProps {
  config: IConfig[];
}

const ChartBuilder = (config: IProps) => {
  let chartSize = 'chart_full';

  if (config.config.length === 1) {
    chartSize = 'chart_full';
  } else if (config.config.length === 2) {
    chartSize = 'chart_half';
  } else if (config.config.length >= 3) {
    chartSize = 'chart_third';
  }

  return (
    <div className={styles.wrapper}>
      {config.config.map((chart: IConfig) => {
        switch (chart.chartType) {
          case 'line':
            return (
              <CustomLineChart
                key={chart.id}
                data={chart.data}
                keys={chart.keysArray}
                stylesData={chart.stylesData}
                sizeStyles={styles[chartSize]}
              />
            );
          case 'area':
            return (
              <CustomAreaChart
                key={chart.id}
                data={chart.data}
                keys={chart.keysArray}
                stylesData={chart.stylesData}
                sizeStyles={styles[chartSize]}
              />
            );
          case 'bar':
            return (
              <CustomBarChart
                key={chart.id}
                data={chart.data}
                keys={chart.keysArray}
                stylesData={chart.stylesData}
                sizeStyles={styles[chartSize]}
              />
            );
          case 'stackedBar':
            return (
              <CustomStackedBarChart
                key={chart.id}
                data={chart.data}
                keys={chart.keysArray}
                stylesData={chart.stylesData}
                sizeStyles={styles[chartSize]}
              />
            );
          case 'pie':
            return (
              <CustomPieChart
                key={chart.id}
                data={chart.data}
                keys={chart.keysArray}
                stylesData={chart.stylesData}
                sizeStyles={styles[chartSize]}
              />
            );
        }
        return 'there is no config to build charts';
      })}
    </div>
  );
};

export default ChartBuilder;
