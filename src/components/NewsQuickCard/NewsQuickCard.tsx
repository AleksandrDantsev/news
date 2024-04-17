import React, { memo } from "react";
import ButtonReadLater from "../../UI/ButtonReadLater/ButtonReadLater";
import st from "./NewsQuickCard.module.scss";
import { ImageLazy } from "../../hoc/ImageLazy";
import { TArticlesData } from "../../types/articlesData";
import { useActionForCollections } from "../../hook/useActionForCollections";

interface INewsQuickCard {
    data: TArticlesData;
}

const NewsQuickCard:React.FC<INewsQuickCard> = memo(({data}) => {
    const [isAddedToCollections, setIsAddedToCollections] = useActionForCollections(data["title"], data);


    return(
        <div className={st.news_quick_card}>
            <div className={st.news_quick_card__img}>
                <ImageLazy effect={"blur"} src={data["urlToImage"]} alt={data["title"]} height={"100%"} />
                <div className={st.button_absolute_block}>
                    <ButtonReadLater addToCollections={setIsAddedToCollections}
                                     isAddedToCollections={isAddedToCollections}/>
                </div>
            </div>
            <div className={st.news_quick_card__bottom_info}>
                <div className={st.news_quick_card__name}>
                    <h3 className={st.news_quick_card__name_title}>
                        {data["title"]}
                    </h3>
                </div>
                <div className={st.news_quick_card__author}>{data["author"]}</div>
            </div>
        </div>
    );
})


export default NewsQuickCard;