import React from "react";
import st from "./ArticleUnit.module.scss";
import HeadArticle from "../components/HeadArticle/HeadArticle";
import { TArticlesData } from "../../../types/articlesData";

interface IArticle {
    article: TArticlesData | undefined;
}

const ArticleUnit:React.FC<IArticle> = ({article}) => {
    return(
        <div className={st.article_unit}>
            <HeadArticle />
        </div>
    );
}

export { ArticleUnit };