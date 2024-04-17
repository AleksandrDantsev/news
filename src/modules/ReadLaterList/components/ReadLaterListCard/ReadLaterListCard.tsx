import React from "react";
import st from "./ReadLaterListCard.module.scss";
import { ImageLazy } from "../../../../hoc/ImageLazy";
import { cutTextNews } from "../../../../helpers/cutTextNews";

interface IReadLaterListCard {
    img: string;
    title: string;
}

const ReadLaterListCard:React.FC<IReadLaterListCard> = ({img, title}) => {
    const titleCut = cutTextNews(title, 150);

    return(
        <div className={st.read_later_card}>
            <div className={st.img}>
                <ImageLazy effect={"blur"} src={img} alt={title} height="100%" width="100%"/>
            </div>
            <div className={st.title}>
                <h2>{titleCut}</h2>
            </div>
        </div>
    );
}

export { ReadLaterListCard };