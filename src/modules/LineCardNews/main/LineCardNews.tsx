import React from "react";
import st from "./LineCardNews.module.scss";
import NewsQuickCard from "../../../components/NewsQuickCard/NewsQuickCard";
import { TArticlesData } from "../../../types/articlesData";
import { useFetchData } from "../../../hook/useFetchData";
import { filterNonexistentNews } from "../../../helpers/filterField";
import { SPORT_LINK, TECHNOLOGY_LINK } from "../constants/FETCH_LINKS";

interface ILineCardNews {
    category: string;
    titleNews: string;
}

const links = {
    sport: SPORT_LINK,
    technology:  TECHNOLOGY_LINK,
}

const LineCardNews:React.FC<ILineCardNews> = ({category, titleNews}) => {
    const [data] = useFetchData<TArticlesData[]>(links[category as keyof typeof links]);
    const filteredData = filterNonexistentNews(data, ['urlToImage', "title"], [null, "[Removed]"], 4)
    console.log(filteredData)
    return(
        <section className={st.line_news}>
            <div className={st.title}>
                <h2>{titleNews}</h2>
            </div>
            <div className={st.news_cards}>
                {
                    filteredData.length > 0 ? filteredData.map((article, i) => (
                    <div className={st.cart_cont} key={article["title"] + i}>
                        <NewsQuickCard data={article} />
                    </div>
                    )) : ""
                }
            </div>
        </section>
    );
}

export { LineCardNews };