import React, { memo, useState } from "react";
import st from "./TilesNews.module.scss";
import TileNewItem from "../components/TileNewItem/TileNewItem";
import { useFetchData } from "../../../hook/useFetchData";
import { TArticlesData } from "../../../types/articlesData";
import { filterNonexistentNews } from "../../../helpers/filterField";
import { TILE_LINK_DATA } from "../constants/TILE_LINK_DATA";
import { ButtonRegular } from "../../../UI/ButtonRegular/ButtonRegular";

interface ITilesNews {
    titleNews: string;
}

const TilesNews:React.FC<ITilesNews> = memo(({titleNews}) => {
    const [articles] = useFetchData<TArticlesData[]>(TILE_LINK_DATA);
    const [quantityNews, setQuantityNews] = useState<number>(0);
    const filteredNewsSlice = filterNonexistentNews<TArticlesData>(articles, ["urlToImage", "title"], [null, "[Removed]"], 100)

    const slicedArrayNews = (() => filteredNewsSlice.slice(0, quantityNews + 5))()

    const plusSliceArray =() => {
        quantityNews < filteredNewsSlice.length && setQuantityNews(quantityNews + 10);
    }

    
    return(
        <section className={st.tiles_news}>
            <h2 className={st.title_popular_news}>{titleNews}</h2>
            {
            articles.length > 0 ? slicedArrayNews.map((article, i) => <TileNewItem key={article?.["title"] + i}
                                                                                        data={article}
                                                                                        />) : ''
            }
            {quantityNews < filteredNewsSlice.length && 
                <div className={st.button_read_more}>
                    <ButtonRegular  text={"Read more news"} 
                                    classname={"read_more_bt"}
                                    actFunc={plusSliceArray}
                                    />
                </div>
            }
        </section>
    );
})

export { TilesNews };