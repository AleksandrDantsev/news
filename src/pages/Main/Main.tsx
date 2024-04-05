import React from "react";
import st from "./Main.module.scss";
import { ListShortNewsColumn }from "../../modules/ListShortNewsColumn/index.ts";

const Main:React.FC = () => {
    return(
        <div className={st.wrapper}>
           <div className={st.column_news_wrapper}><ListShortNewsColumn /></div>
        </div>
    );
}

export default Main;