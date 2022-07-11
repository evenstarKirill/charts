import {format, parseISO} from "date-fns";

export const formattedXAxis = (str: string) => {
    const date = parseISO(str)
    if (date.getDate() % 7 === 0) {
        return format(date, "MMM, dd")
    }
    return ""
}
