import React from "react";
import st from "./ReadLaterList.module.scss";
import { ReadLaterListDate } from "../components/ReadLaterListDate/ReadLaterListDate";
import { LocalStorageAction } from "../../../helpers/addToLocalStorage";


const ReadLaterList:React.FC = () => {
    const savedData = LocalStorageAction.get("collections");
    const dateKeys: string[] = Object.keys(savedData);         
    
    console.log(savedData)

    return(
        <section className={st.read_later}>
            {
                dateKeys.length > 0 && dateKeys.map(element => <ReadLaterListDate key={element} 
                                                                date={element} 
                                                                cardsArray={savedData[element as keyof typeof dateKeys]}/>)
            }
        </section>
    );
}

export { ReadLaterList };