import React, { memo } from "react";
import ReadLaterIcon from "../../assets/svg/readLaterIcon.svg";
import st from "./ButtonReadLater.module.scss";

const ButtonReadLater:React.FC = memo(() => {
    return(
        <div className={st.bt_read_later}>
            <img src={ReadLaterIcon} alt="read later" />
        </div>
    );
})


export default ButtonReadLater;