import React, { memo } from "react";
import st from "./SearchNewsItem.module.scss";
import { ImageLazy } from "../../../../hoc/ImageLazy";
import { formatDateArticleCreated } from "../../../../helpers/formatDateArticleCreated";

interface ISearchNewsItem {
    title: string;
    description: string;
    srcImage: string;
    date?: string;
}

const SearchNewsItem:React.FC<ISearchNewsItem> = memo(({title, description, srcImage, date}) => {
    const dateTextFormat = formatDateArticleCreated(date);

    return(
        <div className={st.article_search_item}>
            <div className={st.article_search_info}>
                <div className={st.article_search_info__title}>
                    <h2>{title}</h2>
                </div>
                <div className={st.article_search_info__description}>
                    <p>{description}</p>
                </div>
                <div className={st.article_search_info__date}>
                    <span>{dateTextFormat}</span>
                </div>
            </div>
            <div className={st.article_search_image}>
                <ImageLazy effect={"blur"} src={srcImage} alt={title} height="100%" width="100%"/>
            </div>
        </div>
    );
})

export default SearchNewsItem;