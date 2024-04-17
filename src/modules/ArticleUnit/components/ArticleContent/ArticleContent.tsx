import React, { useMemo } from "react";
import st from "./ArticleContent.module.scss";

interface IArticleContent {
    content: string;
}

const ArticleContent:React.FC<IArticleContent> = ({content}) => {

    const redStringAndContent = useMemo(() => {
        const contentTrim = content.trim();
        const firstLetter = contentTrim[0];
        const restText = contentTrim.slice(1);

        return [firstLetter, restText];
    }, [content])

    return(
        <div className={st.article_content}>
            <div className={st.internal_text}>
                <span className={st.red_string}>{redStringAndContent[0]}</span>
                {redStringAndContent[1]}
            </div>
        </div>
    );
}

export default ArticleContent;