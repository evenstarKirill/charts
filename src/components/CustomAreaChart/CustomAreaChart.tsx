import React from "react";
import {
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import CustomTooltip from '../CustomToolTip/CustomToolTip'
import {formattedXAxis} from "../../helpers/formatXaxis";

import {IChartProps} from "../../interfaces";

import './../../global-styles.scss'
import styles from './CustomAreaChart.module.scss';

const CustomAreaChart = ({data, keys, stylesData, sizeStyles}: IChartProps) => {
    return (
        <div className={sizeStyles || styles.wrapper}>
            <ResponsiveContainer
                width="100%"
                aspect={3}
            >
                <AreaChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <defs>
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="0%" stopColor={stylesData ? (stylesData?.colors as string[])[1] : "blue"}
                                stopOpacity={0.4}></stop>
                            <stop
                                offset="75%" stopColor={stylesData ? (stylesData?.colors as string[])[0] : "white"}
                                stopOpacity={0.05}></stop>
                        </linearGradient>
                    </defs>
                    {keys.map((val) =>
                        <Area
                            key={val.toString()}
                            label={stylesData?.label || false}
                            activeDot={stylesData?.activeDot || true}
                            dot={stylesData?.dot || false}
                            legendType={stylesData?.legendType || "line"}
                            type={stylesData?.type || "linear"}
                            dataKey={val.toString()}
                            stroke={stylesData ? (stylesData?.colors as string[])[keys.indexOf(val)] : "blue"}
                            fill={stylesData?.areaGradient ? "url(#areaGradient)" : "grey"}
                        />
                    )}
                    <Legend verticalAlign="bottom" height={36}/>
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
                        content={<CustomTooltip chartType="area"/>}
                    />
                    <CartesianGrid opacity={0.1} vertical={false}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomAreaChart;

