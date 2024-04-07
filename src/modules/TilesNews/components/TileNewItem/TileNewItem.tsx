import React, {memo} from "react";
import st from "./TileNewItem.module.scss";

interface ITileNewItem {
    title: string;
    description: string;
    img: string;
}

const TileNewItem:React.FC<ITileNewItem> = memo(({title, description, img}) => {
    return(
        <div className={st.tile_new_item}>
            <div className={st.tile_new_item__info}>
                <div className={st.tile_new_item__title}>
                    <h3>{title}</h3>
                </div>
                <div className={st.tile_new_item__description}>
                    {description}
                </div>
            </div>
            <div className={st.tile_new_item__img}>
                <img src={img} alt={title} />
            </div>
        </div>
    );
})

export default TileNewItem;