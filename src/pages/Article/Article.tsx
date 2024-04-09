import React from "react";
import st from "./Article.module.scss";
import { ArticleUnit } from "../../modules/ArticleUnit";

const Article:React.FC = () => {
    return(
        <div className={st.article_page}>
            <ArticleUnit />
        </div>
    );
}

export default Article;