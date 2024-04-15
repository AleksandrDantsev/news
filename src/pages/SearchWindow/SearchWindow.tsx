import React, { useState } from "react";
import st from "./SearchWindow.module.scss";
import { SearchNews } from "../../modules/SearchNews";
import SearchNewsForm from "../../modules/SearchNews/components/SearchNewsForm/SearchNewsForm";
import { KEY_ACCESS } from "../../key_access";
// import { TArticlesData } from "../../../types/articlesData";

const SearchWindow:React.FC = () => {
    const [request, setRequest] = useState<string>('New');
    const urlSearch = `https://newsapi.org/v2/everything?q=${request}&${KEY_ACCESS}`;

    return(
        <div className={st.search_window}>
            <SearchNewsForm setRequest={setRequest} request={request}/>
            <SearchNews urlSearch={urlSearch}/>
        </div>
    );
}

export { SearchWindow };