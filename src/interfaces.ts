import {LegendType} from "recharts";

export interface IData {
    date: string;
    id: string;

    [key: string]: number | string;
}

export interface IChartProps {
    data: IData[];
    keys: string[];
    stylesData?: IStylesData;
}

export interface IStylesData {
    colors: string[] | undefined;
    type?: string;
    margin?: {
        top: number,
        right: number,
        left: number,
        bottom: number,
    }
    legendType?: LegendType;
    dot?: boolean;
    activeDot?: boolean;
    label?: {
        fill: string;
        fontSize: number;
    }
    areaGradient?: boolean;
    strokeWidth?: number;
    barCategoryGap?: string;
    barGap?: number;
    background?: boolean;
    barSize?: number;
}

export interface IConfig {
    chartType: string;
    data: IData[];
    keysArray: string[];
    id: string;
    stylesData?: IStylesData;
}
