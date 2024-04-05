import React, { memo } from "react";
import ButtonReadLater from "../../UI/ButtonReadLater/ButtonReadLater";
import st from "./NewsQuickCard.module.scss";

const NewsQuickCard:React.FC = memo(() => {
    return(
        <div className={st.news_quick_card}>
            <div className={st.news_quick_card__img}>
                <img src="https://www.washingtonpost.com/wp-apps/imrs.php?sr…%2FBTRD6VIFQ5HQJLNVFRCWSK4JSQ%252Ejpg&w=464&h=310" alt="" />
                <div className={st.button_absolute_block}>
                    <ButtonReadLater />
                </div>
            </div>
            <div className={st.news_quick_card__bottom_info}>
                <div className={st.news_quick_card__name}>
                    <h3 className={st.news_quick_card__name_title}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio 
                        perspiciatis dolorem eveniet deserunt
                        
                    </h3>
                </div>
                <div className={st.news_quick_card__author}>author</div>
            </div>
        </div>
    );
})


export default NewsQuickCard;