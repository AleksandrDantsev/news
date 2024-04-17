import React, { memo } from "react";
import ReadLaterIcon from "../../assets/svg/readLaterIcon.svg";
import AddedToReadLaterSvg from "../../assets/svg/tick.svg";
import st from "./ButtonReadLater.module.scss";

interface IButtonReadLater {
    addToCollections: () => void;
    isAddedToCollections: boolean;
}

const ButtonReadLater:React.FC<IButtonReadLater> = memo(({addToCollections, isAddedToCollections}) => {
    return(
        <button className={st.bt_read_later} 
                onClick={addToCollections}>
            {
                isAddedToCollections ? <img src={AddedToReadLaterSvg} alt="added to collections" /> : 
                                       <img src={ReadLaterIcon} alt="read later" />
            }
        </button>
    );
})


export default ButtonReadLater;