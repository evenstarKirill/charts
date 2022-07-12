import {format, parseISO} from 'date-fns';
import {nanoid} from "nanoid";

import {TooltipProps} from 'recharts';
import {Payload} from "recharts/types/component/DefaultTooltipContent";

import styles from './CustomToolTip.module.scss'

interface CustomTooltipProps extends TooltipProps<number, string> {
    chartType: string;
}

function CustomTooltip({active, payload, label, chartType}: CustomTooltipProps) {
    if (active) {
        return (
            <div className={styles.tooltip}>
                {chartType === "pie"
                    ?
                    payload?.map((item) => (
                        <h4 key={nanoid()}>
                            {format(parseISO(item.payload.date), "eeee, d MMM, yyyy")}
                        </h4>
                    ))
                    :
                    <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
                }
                {payload?.map((item: Payload<number, string>) => (
                    <p key={nanoid()}>${item.value?.toFixed(3)} CAD</p>
                ))}
            </div>
        );
    }
    return null;
}

export default CustomTooltip;
