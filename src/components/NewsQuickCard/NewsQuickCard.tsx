import React, { memo } from "react";
import ButtonReadLater from "../../UI/ButtonReadLater/ButtonReadLater";
import st from "./NewsQuickCard.module.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface INewsQuickCard {
    title: string;
    author?: string;
    img: string;
}

const NewsQuickCard:React.FC<INewsQuickCard> = memo(({title, author, img}) => {
    return(
        <div className={st.news_quick_card}>
            <div className={st.news_quick_card__img}>
                <LazyLoadImage effect="blur" src={img} alt={title} height="100%" />
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