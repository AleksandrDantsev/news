import React from "react";
import st from "./HeadArticle.module.scss";
import { ImageLazy } from "../../../../hoc/ImageLazy";
import { formatDateArticleCreated } from "../../../../helpers/formatDateArticleCreated";

interface IHeadArticle {
    title: string;
    image: string;
    description: string;
    date?: string;
    author?: string;
}


const HeadArticle:React.FC<IHeadArticle> = ({ title, image, description, date, author }) => {
    const formatDate = formatDateArticleCreated(date);

    return(
        <div className={st.article_head}>
            <div className={st.article_head__date}>{formatDate}</div>
            <div className={st.article_title_block}>
                <h1 className={st.article_title}>{title}</h1>
                <div className={st.article_subhead}>{description}</div>
            </div>
            <div className={st.article_head__author}>{author}</div>
            <div className={st.article_head__poster}>
                <ImageLazy effect="blur" src={image} alt={title} height="100%" width="100%"/> 
            </div>
        </div>
    );
}

export default HeadArticle;