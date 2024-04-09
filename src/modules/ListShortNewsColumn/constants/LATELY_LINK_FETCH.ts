import { formatDate } from "../../../helpers/formatDate";

const fromDate = formatDate(1);
export const LATELY_LINK_FETCH  = `https://newsapi.org/v2/everything?q=new&from=${fromDate}`;