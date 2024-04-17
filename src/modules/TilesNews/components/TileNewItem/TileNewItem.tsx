import React, { memo } from "react";
import st from "./TileNewItem.module.scss";
import { ImageLazy } from "../../../../hoc/ImageLazy";
import { cutTextNews } from "../../../../helpers/cutTextNews";
import ButtonReadLater from "../../../../UI/ButtonReadLater/ButtonReadLater";
import { useActionForCollections } from "../../../../hook/useActionForCollections";
import { TArticlesData } from "../../../../types/articlesData";

interface ITileNewItem {
    data: TArticlesData;
}

const TileNewItem:React.FC<ITileNewItem> = memo(({data}) => {
    const [isAddedToCollections, actionForCollections] = useActionForCollections(data["title"], data);

    const returnCheckLengthDesc = cutTextNews(data["description"], 250);
    const returnCheckLengthTitle = cutTextNews(data["title"], 80);  

    return(
        <div className={st.tile_new_item}>
            <div className={st.tile_new_item__info}>
                <div className={st.tile_new_item__title}>
                    <h3>{returnCheckLengthTitle}</h3>
                </div>
                <div className={st.tile_new_item__description}>
                    {returnCheckLengthDesc}
                </div>
            </div>
            <div className={st.tile_new_item__img}>
                <ImageLazy effect="blur" src={data["urlToImage"]} alt={data["title"]} />
                <div className={st.read_later_block}>
                    <ButtonReadLater addToCollections={actionForCollections} 
                                     isAddedToCollections={isAddedToCollections}/>
                </div>  
            </div>
        </div>
    );
})

export default TileNewItem;