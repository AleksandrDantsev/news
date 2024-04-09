import { formatDate } from "../../../helpers/formatDate"

const lastDay = formatDate(1);

export const LINK_TOPIC_NEWS = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&${lastDay}` 