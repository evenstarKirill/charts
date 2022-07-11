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

import CustomTooltip from "./../CustomToolTip/CustomToolTip";
import {formattedXAxis} from "../../helpers/formatXaxis";

import {IChartProps} from "../../interfaces";

import styles from './CustomStackedBarChart.module.scss'

const CustomStackedBarChart = ({data, keys, stylesData}: IChartProps) => {
    return (
        <div className={styles.wrapper}>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid
                        opacity={0.1}
                        vertical={false}
                        strokeDasharray="3 3"
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
                        cursor={{stroke: '#D9FFFF'}}
                        content={<CustomTooltip chartType="stackedBar"/>}
                    />
                    <Legend/>
                    {keys.map((val) =>
                        <Bar
                            dataKey={val.toString()}
                            stackId="a"
                            legendType={stylesData?.legendType || "circle"}
                            key={val.toString()}
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

export default CustomStackedBarChart;

