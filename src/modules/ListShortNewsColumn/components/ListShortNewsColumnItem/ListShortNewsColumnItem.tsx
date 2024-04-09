import React, { memo, useMemo } from "react";
import st from "./ListShortNewsColumnItem.module.scss";
import { getReadTime } from "../../helpers/getReadTime";
import { Link } from "react-router-dom";
import { formatDateArticleCreated } from "../../../../helpers/formatDateArticleCreated";

interface IListShortNewsColumnItem {
    title: string;
    author?: string;
    img?: string;
    timeReadNumber: number;
    publishedTime?: string;
}

const ListShortNewsColumnItem:React.FC<IListShortNewsColumnItem> = memo(({
    title, 
    author, 
    img, 
    timeReadNumber,
    publishedTime,
    }) => {
    const timeRead = useMemo(() => getReadTime(timeReadNumber), []);
    const dateCreatedPost = formatDateArticleCreated(publishedTime);

    console.log(timeReadNumber)
    return(
        <section className={st.news_column}>
            <Link className={st.news_column_link} to={title}>
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
                    <div className={st.news_published_time}>
                        {dateCreatedPost}
                    </div>
                </div>
                <div className={st.news_column__image}>
                    {Boolean(img) && <img src={img} alt="news-image" />}
                </div>
            </Link>
        </section>
    );
})


export default ListShortNewsColumnItem;