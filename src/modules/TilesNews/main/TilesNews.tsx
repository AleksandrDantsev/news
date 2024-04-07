import React, { memo } from "react";
import st from "./TilesNews.module.scss";
import TileNewItem from "../components/TileNewItem/TileNewItem";
import { useFetchData } from "../../../hook/useFetchData";
import { TArticlesData } from "../../../types/articlesData";
import { filterNonexistentNews } from "../../../helpers/filterField";
import { TILE_LINK_DATA } from "../constants/TILE_LINK_DATA";

const TilesNews:React.FC = memo(() => {
    const [articles] = useFetchData<TArticlesData[]>(TILE_LINK_DATA);
    
    const filteredNewsSlice = filterNonexistentNews<TArticlesData>(articles, "urlToImage", false)

    console.log(filteredNewsSlice)
    return(
        <section className={st.tiles_news}>
            {
            articles.length > 0 ? filteredNewsSlice.map(article => <TileNewItem title={article?.["title"]}
                                                                       description={article?.["description"]}
                                                                       img={article?.["urlToImage"]}
                                                                    />) : ''
            }
            
        </section>
    );
})

export { TilesNews };