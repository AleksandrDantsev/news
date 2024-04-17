import React from "react";
import st from "./Header.module.scss";
import { Link } from "react-router-dom";
import loupe from "../../assets/svg/loupe.svg";
import collections_news from "../../assets/svg/collection_news.svg";
import clickSound from "../../assets/sound/lock.mp3";

const Header:React.FC = () => {

    const playSoundForClick = () => {
        const sound = new Audio(clickSound);
        sound.play();
    }

    return(
        <header className={st.header} onClick={playSoundForClick}>
            <div className={st.search_block}>
                <Link to="/search"><img src={loupe} alt="search" /></Link>
            </div>
            <div className={st.logo_site}>
                <Link to="/">Every Day News</Link>
            </div>
            <div className={st.collections_block}>
                <Link to="/read-later"><img src={collections_news} alt="saved news" /></Link>
            </div>
        </header>
    );
}

export default Header;