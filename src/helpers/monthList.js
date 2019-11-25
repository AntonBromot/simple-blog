import {MONTH_NAME} from "../constants";
import {dateParser} from "./dateParser";
import Moment from "moment";

export const monthList = (articles) => {
    const months = JSON.parse(JSON.stringify(MONTH_NAME));
    articles.map(item=> {
        const { created, title, _id } = item
        const validDate = dateParser(created)
        let currentMonth = Moment(validDate).format("MMMM")
        months[currentMonth].push({title, _id})
    })
    return months
}
