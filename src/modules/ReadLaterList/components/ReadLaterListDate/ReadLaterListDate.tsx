import React, { useMemo } from "react";
import st from "./ReadLaterListDate.module.scss";
import { ReadLaterListCard } from "../ReadLaterListCard/ReadLaterListCard";
import { TArticlesData } from "../../../../types/articlesData";


interface IReadLaterListDate {
    date: string;
    cardsArray: TArticlesData[];
}


const ReadLaterListDate:React.FC<IReadLaterListDate> = ({date, cardsArray}) => {
    const reverseCardsArray = useMemo(() => {
        const cards = [...cardsArray];
        cards.reverse();
        return cards; 
    },[cardsArray]);

    return(
        <div className={st.read_later_date}>
            <div className={st.date}>
                <span className={st.date_srting}>{date}</span>
            </div>
            <div className={st.cards}>
                {reverseCardsArray.length > 0 && 
                reverseCardsArray.map(element => <ReadLaterListCard key={element["title"]}
                                                                    img={element?.["urlToImage"]}
                                                                    title={element["title"]}
                />)}
            </div>
        </div>
    );
}

export { ReadLaterListDate };