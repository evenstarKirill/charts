import React from "react";
import {
    Cell,
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
} from "recharts";

import {IChartProps} from "../../interfaces";

import {CustomizedLabel} from "./CustomizedLabel";
import CustomTooltip from "../CustomToolTip/CustomToolTip";

import './../../global-styles.scss'
import styles from './CustomPieChart.module.scss';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomPieChart = ({data, keys, stylesData}: IChartProps) => {
    console.log("stylesData", stylesData?.colors?.length)

    const cellFill = (index: number) => {
        if (stylesData?.colors) {
            return (index % stylesData?.colors?.length)
        } else {
            return index % COLORS.length
        }
    }

    return (
        <div className={styles.wrapper}>
            <ResponsiveContainer width="100%" aspect={3}>
                <PieChart width={400} height={400}>
                    {keys.map((val) =>
                        <Pie
                            key={val.toString()}
                            dataKey={val.toString()}
                            fill="#8884d8"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label={CustomizedLabel}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={(stylesData?.colors as string[])[cellFill(index)]}/>
                            ))}
                        </Pie>
                    )}
                    <Tooltip
                        cursor={{stroke: '#D9FFFF'}}
                        content={<CustomTooltip chartType="pie"/>}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomPieChart;

