import {parseISO, format} from "date-fns";

interface ShowDateInterface {
	dateString:string
}

export default function ShowDate({dateString}:ShowDateInterface){
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
