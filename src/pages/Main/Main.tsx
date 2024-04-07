import React from "react";
import st from "./Main.module.scss";
import { ListShortNewsColumn } from "../../modules/ListShortNewsColumn/index.ts";
import { MainNewsBlock } from "../../modules/MainNewsBlock/index.ts"
import { LineCardNews } from "../../modules/LineCardNews/index.ts";
import { TilesNews } from "../../modules/TilesNews/index.ts";
import { useFetchData } from "../../hook/useFetchData.ts";
import { TArticlesData } from "../../types/articlesData.ts";
import { filterNonexistentNews } from "../../helpers/filterField.ts";


const Main:React.FC = () => {
    const [articles] = useFetchData<TArticlesData[]>(`https://newsapi.org/v2/top-headlines?country=us`);

    const filteredData = filterNonexistentNews<TArticlesData>(articles, "title", "[Removed]", 15)

    return(
        <div className={st.wrapper}>
            <div className={st.top_news}>
                <div className={st.column_news_block_wrapper}><MainNewsBlock /></div>
                <div className={st.column_news_wrapper}><ListShortNewsColumn /></div>
            </div>
            <div className={st.lines_news}><LineCardNews dataArray={filteredData.slice(0, 4)}/></div>
            <div className={st.tiles_news}><TilesNews /></div>
            <div className={st.lines_news}><LineCardNews dataArray={filteredData.slice(5, 9)}/></div>
        </div>
    );
}

export default Main;