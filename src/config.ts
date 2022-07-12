import {subDays} from "date-fns";
import {nanoid} from "nanoid";

import {IConfig, IData} from "./interfaces";

export const data: IData[] = []
for (let i = 30; i >= 0; i--) {
    data.push({
        date: subDays(new Date(), i).toISOString().substring(0, 10),
        value: 1 + Math.random(),
        bigValue: 1.5 + Math.random(),
        id: nanoid(),
    })
}
export const dataPie = [
    {
        date: '2022-06-05',
        value: 400,
        id: nanoid(),
    },
    {
        date: '2022-06-06',
        value: 300,
        id: nanoid(),
    },
    {
        date: '2022-06-07',
        value: 300,
        id: nanoid(),
    },
    {
        date: '2022-06-08',
        value: 200,
        id: nanoid(),
    },
    {
        date: '2022-06-09',
        value: 278,
        id: nanoid(),
    },
    {
        date: '2022-06-10',
        value: 189,
        id: nanoid(),
    },
];

let valuesArray = data.map(({date, id, ...remainingAttrs}) => remainingAttrs);
export const keysArray = Object.keys(valuesArray[0])

export const config: Array<IConfig> = [
    {
        chartType: "line",
        data: data,
        keysArray: keysArray,
        id: nanoid(),
        stylesData: {
            colors: ["white", "green"],
            type: "step",
            legendType: "wye",
            dot: true,
            activeDot: true,
            areaGradient: true,
            strokeWidth: 3,
        }
    },
    {
        chartType: "area",
        data: data,
        keysArray: keysArray,
        id: nanoid(),
        stylesData: {
            colors: ["white", "green"],
            type: "basis",
            legendType: "square",
            dot: false,
            activeDot: true,
            areaGradient: true,
        }
    },
    {
        chartType: "bar",
        data: data,
        keysArray: keysArray,
        id: nanoid(),
        stylesData: {
            colors: ["silver", "green"],
            type: "step",
            legendType: "circle",
            dot: true,
            activeDot: true,
            areaGradient: true,
            strokeWidth: 3,
            barCategoryGap: '30%',
            barGap: 1,
            background: false,
            barSize: 7,
        }
    },
    {
        chartType: "stackedBar",
        data: data,
        keysArray: keysArray,
        id: nanoid(),
        stylesData: {
            colors: ["silver", "green"],
            type: "step",
            legendType: "circle",
            dot: true,
            activeDot: true,
            areaGradient: true,
            strokeWidth: 3,
            barCategoryGap: '30%',
            barGap: 1,
            background: false,
            barSize: 7,
        }
    },
    {
        chartType: "stackedBar",
        data: data,
        keysArray: keysArray,
        id: nanoid(),
        stylesData: {
            colors: ["silver", "green"],
            type: "step",
            legendType: "circle",
            dot: true,
            activeDot: true,
            areaGradient: true,
            strokeWidth: 3,
            barCategoryGap: '30%',
            barGap: 1,
            background: false,
            barSize: 7,
        }
    },
    // {
    //     chartType: "pie",
    //     data: dataPie,
    //     keysArray: keysArray,
    //     id: nanoid(),
    //     stylesData: {
    //         colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    //     }
    // },
]
