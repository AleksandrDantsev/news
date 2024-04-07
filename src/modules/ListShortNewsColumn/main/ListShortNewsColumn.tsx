import React, { memo } from "react";
import st from "./ListShortNewsColumn.module.scss";
import ListShortNewsColumnItem from "../components/ListShortNewsColumnItem/ListShortNewsColumnItem";
import { TArticlesData } from "../../../types/articlesData";
import { getReadTime } from "../helpers/getReadTime";
import { useFetchData } from "../../../hook/useFetchData";
import { LATELY_LINK_FETCH } from "../constants/LATELY_LINK_FETCH";
import { filterNonexistentNews } from "../../../helpers/filterField";


const ListShortNewsColumn:React.FC = memo(() => {
    const [articles] = useFetchData<TArticlesData[]>(LATELY_LINK_FETCH);


    const filteredData = filterNonexistentNews<TArticlesData>(articles, "title", "[Removed]", 4)
    console.log(filteredData)
    return(
        <div className={st.short_news_column}>
            {
                articles.length > 0 ? 
                filteredData.map(article => <ListShortNewsColumnItem 
                                                                            title={article?.["title"]}
                                                                            author={article?.["author"]}
                                                                            img={article?.["urlToImage"]}
                                                                            timeRead={getReadTime(article['content']?.length ?? 0)}
                                                                                />  ) : ''
            }
        </div>
    );
})


export { ListShortNewsColumn };