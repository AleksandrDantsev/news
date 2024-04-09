import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import st from "./MainNewsBlock.module.scss";
import { useFetchData } from "../../../hook/useFetchData";
import { TArticlesData } from "../../../types/articlesData";
import { filterNonexistentNews } from "../../../helpers/filterField";
import { LINK_TOPIC_NEWS } from "../constants/LINK_TOPIC_NEWS"; 

const MainNewsBlock:React.FC = () => {
    const [count, setCount] = useState(1);
    const [articles] = useFetchData<TArticlesData[]>(LINK_TOPIC_NEWS);
    const filteredArrayArticles = filterNonexistentNews<TArticlesData>(articles, ["title", "urlToImage"], ["[Removed]", null], 20);

    const rightBt = () => {
        count == filteredArrayArticles.length - 1 ? setCount(filteredArrayArticles.length - 1) : setCount(count + 1);
    }

    const leftBt = () => {
        count === 0 ? setCount(0) : setCount(count - 1);
    }

    const fadeClassStyle = (counter: number) => {
        if (count === counter) return st.button_slide + ' ' + st.fade_button;
        else return st.button_slide;
    }
    return(
        <section className={st.news_main_block}>
            {
            articles.length > 0 ?
                <React.Fragment>
                    <div className={st.news_main_block__image}>
                        <LazyLoadImage 
                            height="99.7%"
                            width="100%"  
                            effect="blur"
                            src={filteredArrayArticles[count]["urlToImage"]} 
                            alt="image" />
                    </div>
                    <div className={st.buttonsNav}>
                        <button onClick={leftBt} className={fadeClassStyle(0)}>Previous</button>
                        <button onClick={rightBt} className={fadeClassStyle(filteredArrayArticles.length-1)}>Next</button>
                    </div>
                    <div className={st.news_main_block__title}>
                        <h2>{filteredArrayArticles[count]["title"]}</h2>
                    </div>
                    <div className={st.news_main_block__description}>
                        <p>{filteredArrayArticles[count]["description"]}</p>
                    </div>
                    <div className={st.news_main_block__author}>
                        <p>{filteredArrayArticles[count]["author"]}</p>
                    </div>
                </React.Fragment> : ''
            }
            
        </section>
    );
}

export { MainNewsBlock };