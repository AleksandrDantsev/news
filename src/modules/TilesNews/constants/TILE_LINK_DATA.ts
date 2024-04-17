import { formatDate } from "../../../helpers/formatDate";

const fromDate = formatDate(1);

export const TILE_LINK_DATA = `https://newsapi.org/v2/everything?q=Book&from=${fromDate}&sortBy=popularity`;