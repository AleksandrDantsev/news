import React from "react";
import st from "./HeadArticle.module.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeadArticle:React.FC = () => {
    return(
        <div className={st.article_head}>
            <div className={st.article_title_block}>
                <h1 className={st.article_title}>werw</h1>
                <div className={st.article_subhead}>wescxvcxv</div>
            </div>
            <div className={st.article_head__author}>name</div>
            <div className={st.article_head__poster}>
                <LazyLoadImage effect="blur" src={"."} alt=""/> 
            </div>
        </div>
    );
}

export default HeadArticle;