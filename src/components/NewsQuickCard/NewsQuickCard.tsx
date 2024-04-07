import React, { memo } from "react";
import ButtonReadLater from "../../UI/ButtonReadLater/ButtonReadLater";
import st from "./NewsQuickCard.module.scss";


interface INewsQuickCard {
    title: string;
    author?: string;
    img: string;
}

const NewsQuickCard:React.FC<INewsQuickCard> = memo(({title, author, img}) => {
    return(
        <div className={st.news_quick_card}>
            <div className={st.news_quick_card__img}>
                <img src={img} alt={title} />
                <div className={st.button_absolute_block}>
                    <ButtonReadLater />
                </div>
            </div>
            <div className={st.news_quick_card__bottom_info}>
                <div className={st.news_quick_card__name}>
                    <h3 className={st.news_quick_card__name_title}>
                        {title}
                    </h3>
                </div>
                <div className={st.news_quick_card__author}>{author}</div>
            </div>
        </div>
    );
})


export default NewsQuickCard;