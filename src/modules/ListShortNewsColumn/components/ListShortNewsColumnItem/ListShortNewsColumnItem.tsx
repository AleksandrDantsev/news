import React, { memo } from "react";
import st from "./ListShortNewsColumnItem.module.scss";

const ListShortNewsColumnItem:React.FC = memo(() => {
    return(
        <section className={st.news_column}>
            <div className={st.news_column_infoleft}>
                <div className={st.news_column_author}>
                    michel swanson
                </div>
                <div className={st.news_column_title}>
                    <h3>werrtertergvbcvbcvbdfg</h3>
                </div>
                <div className={st.news_column_timeread}>
                    10 min read
                </div>
            </div>
            <div className={st.news_column__image}>
                <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="news-image" />
            </div>
        </section>
    );
})


export default ListShortNewsColumnItem;