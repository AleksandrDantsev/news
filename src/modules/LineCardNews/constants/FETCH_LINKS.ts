import { formatDate } from "../../../helpers/formatDate";

const fromDate = formatDate(1);

const SPORT_LINK =  `https://newsapi.org/v2/everything?q=sport&from=${fromDate}`
const TECHNOLOGY_LINK =  `https://newsapi.org/v2/everything?q=technologies&from=${fromDate}`

export { SPORT_LINK, TECHNOLOGY_LINK };