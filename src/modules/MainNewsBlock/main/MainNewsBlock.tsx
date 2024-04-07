import React, { useState } from "react";
import st from "./MainNewsBlock.module.scss";
import { useFetchData } from "../../../hook/useFetchData";
import { TArticlesData } from "../../../types/articlesData";
import { filterNonexistentNews } from "../../../helpers/filterField";

const MainNewsBlock:React.FC = () => {
    const [count, setCount] = useState(4);
    const [articles] = useFetchData<TArticlesData[]>("https://newsapi.org/v2/everything?q=Apple&from=2024-04-01&sortBy=popularity");

    const filteredArray = filterNonexistentNews(articles, "title", "[Removed]", 15);

    const rightBt = () => {
        setCount(count + 1);
    }

    const leftBt = () => {
        setCount(count - 1);
    }
    return(
        <section className={st.news_main_block}>
            {
            articles.length > 0 ?
                <React.Fragment>
                    <div className={st.news_main_block__image}>
                        <img src={filteredArray[count]["urlToImage"]} alt="image" />
                    </div>
                    <div className={st.buttonsNav}>
                        <button onClick={leftBt}>Previous</button>
                        <button onClick={rightBt}>Next</button>
                    </div>
                    <div className={st.news_main_block__title}>
                        <h2>{filteredArray[count]["title"]}</h2>
                    </div>
                    <div className={st.news_main_block__description}>
                        <p>{filteredArray[count]["description"]}</p>
                    </div>
                    <div className={st.news_main_block__author}>
                        <p>{filteredArray[count]["author"]}</p>
                    </div>
                </React.Fragment> : ''
            }
            
        </section>
    );
}

export { MainNewsBlock };