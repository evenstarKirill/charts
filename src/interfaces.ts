import { LegendType } from 'recharts';
import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IData {
  date: string;
  id: string;

  [key: string]: number | string;
}

export interface IChartProps {
  data: IData[];
  keys: string[];
  stylesData?: IStylesData;
  sizeStyles?: string;
}

export interface IStylesData {
  colors: string[] | undefined;
  type?: string;
  margin?: {
    top: number;
    right: number;
    left: number;
    bottom: number;
  };
  legendType?: LegendType;
  dot?: boolean;
  activeDot?: boolean;
  label?: {
    fill: string;
    fontSize: number;
  };
  areaGradient?: boolean;
  strokeWidth?: number;
  barCategoryGap?: string;
  barGap?: number;
  background?: boolean;
  barSize?: number;
  pieLabelType?: string;
  titleStyles?: {
    [key: string]: string;
  };
  titleContent?: string;
  areaGradientColors?: string[];
  gradientTransparency?: number[];
}

export interface IConfig {
  chartType: string;
  data: IData[];
  keysArray: string[];
  id: string;
  stylesData?: IStylesData;
}
