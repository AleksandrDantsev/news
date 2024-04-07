import React, { memo } from "react";
import st from "./ListShortNewsColumnItem.module.scss";

interface IListShortNewsColumnItem {
    title: string;
    author?: string;
    img?: string;
    timeRead: string;
}

const ListShortNewsColumnItem:React.FC<IListShortNewsColumnItem> = memo(({title, author, img, timeRead}) => {

    return(
        <section className={st.news_column}>
            <div className={st.news_column_infoleft}>
                <div className={st.news_column_author}>
                    {Boolean(author) && author}
                </div>
                <div className={st.news_column_title}>
                    <h3>{title}</h3>
                </div>
                <div className={st.news_column_timeread}>
                    {timeRead} min read
                </div>
            </div>
            <div className={st.news_column__image}>
                {Boolean(img) && <img src={img} alt="news-image" />}
            </div>
        </section>
    );
})


export default ListShortNewsColumnItem;