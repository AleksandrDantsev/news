import React, { memo } from "react";
import st from "./ListShortNewsColumn.module.scss";
import ListShortNewsColumnItem from "../components/ListShortNewsColumnItem/ListShortNewsColumnItem";

const ListShortNewsColumn:React.FC = memo(() => {
    return(
        <div className={st.short_news_column}>
            <ListShortNewsColumnItem />
            <ListShortNewsColumnItem />
            <ListShortNewsColumnItem />
        </div>
    );
})


export { ListShortNewsColumn };