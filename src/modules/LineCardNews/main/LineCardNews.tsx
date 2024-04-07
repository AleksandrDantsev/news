import React from "react";
import st from "./LineCardNews.module.scss";
import NewsQuickCard from "../../../components/NewsQuickCard/NewsQuickCard";
import { TArticlesData } from "../../../types/articlesData";

interface ILineCardNes {
    dataArray: TArticlesData[];
}

const LineCardNews:React.FC<ILineCardNes> = ({dataArray}) => {
    

    return(
        <section className={st.line_news}>
            <div className={st.title}><h2>news</h2></div>
            <div className={st.news_cards}>
                {
                    dataArray.length > 0 ? dataArray.map(article => <NewsQuickCard title={article["title"]}
                                                                                 author={article?.["author"]}
                                                                                 img={article?.["urlToImage"]}
                                                                                />) : ""

                }

            </div>
        </section>
    );
}

export { LineCardNews };