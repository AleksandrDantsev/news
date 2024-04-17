import { formatDate } from "../../../helpers/formatDate";

const fromDate = formatDate(1);
export const LINK_INTRESTING_NEWS = `https://newsapi.org/v2/everything?q=sport&from=${fromDate}`

