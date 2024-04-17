import React from "react";
import st from "./ListNewsPopularity.module.scss";
import { useFetchData } from "../../../../hook/useFetchData";
import { TArticlesData } from "../../../../types/articlesData";
import { LINK_INTRESTING_NEWS } from "../../constants/LINK_INTRESTING_NEWS";
import NewsQuickCard from "../../../../components/NewsQuickCard/NewsQuickCard";
import { filterNonexistentNews } from "../../../../helpers/filterField";


const ListNewsPopularity:React.FC = () => {
    const [data] = useFetchData<TArticlesData[]>(LINK_INTRESTING_NEWS);
    const filteredArrayNews = filterNonexistentNews<TArticlesData>(data, 
                                                                ["title", "urlToImage", "content"], 
                                                                ["[Removed]", null, "[Removed]"], 6);

    return(
        <div className={st.news_list}>
            {
                filteredArrayNews.length > 0 && 
                filteredArrayNews.map((el: TArticlesData) => (
                    <div key={el["title"]} className={st.card_cont}>
                        <NewsQuickCard data={el}/>
                    </div>
                ))
            }
        </div>
    );
}

export default ListNewsPopularity;