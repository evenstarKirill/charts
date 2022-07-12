import React from 'react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Bar,
    BarChart
} from 'recharts';

import CustomTooltip from "../CustomToolTip/CustomToolTip";
import {formattedXAxis} from "../../helpers/formatXaxis";

import {IChartProps} from "../../interfaces";

import styles from './CustomBarChart.module.scss'

const CustomBarChart = ({data, keys, stylesData, sizeStyles}: IChartProps) => {
    return (
        <div className={sizeStyles || styles.wrapper}>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barCategoryGap={stylesData?.barCategoryGap || "10%"}
                    barGap={stylesData?.barGap || 5}
                >
                    <CartesianGrid
                        opacity={0.1}
                        vertical={false}
                        strokeDasharray="3 3"
                    />
                    <XAxis
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={formattedXAxis}
                        dataKey="date"
                    />
                    <YAxis
                        axisLine={false}
                        tickCount={8}
                        tickLine={false}
                        tickFormatter={(num) => `$${num.toFixed(2)}`}
                    />
                    <Tooltip
                        cursor={{stroke: '#D9FFFF'}}
                        content={<CustomTooltip chartType="bar"/>}
                    />
                    <Legend/>
                    {keys.map((val) =>
                        <Bar
                            legendType={stylesData?.legendType || "circle"}
                            key={val.toString()}
                            dataKey={val.toString()}
                            fill={stylesData ? (stylesData?.colors as string[])[keys.indexOf(val)] : "blue"}
                            background={stylesData?.background || false}
                            barSize={stylesData?.barSize || 5}
                        />
                    )}
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
}

export default CustomBarChart;

