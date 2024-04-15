import React, { memo, useRef } from "react";
import st from "./SearchNewsForm.module.scss";
import { debounce } from "../../../../helpers/debounce";
import { Cross } from "../../../../UI/Cross/Cross";

interface ISearchNewsForm {
    setRequest: (arg: string) => void;
    request: string;
}

const SearchNewsForm:React.FC<ISearchNewsForm> = memo(({setRequest, request}) => {
    const inputSearch = useRef<HTMLInputElement>(null);
    
    const onChangeInputQuery = debounce((e: React.ChangeEvent<HTMLInputElement>)  => {
        const target = e.target as HTMLInputElement;
        setRequest(target.value);
    }, 1000);

    const clearInputCross = (e: React.MouseEvent<HTMLElement>) => {
        if (inputSearch.current !== null) inputSearch.current.value = '';
        setRequest('News');
    }

    const clearValueInput = (e: React.MouseEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        target.value = '';
    }

    return(
        <form className={st.search_form}>
            <input placeholder="Search"
                type="text"
                ref={inputSearch} 
                onChange={onChangeInputQuery}
                onClick={clearValueInput}  
                className={st.input_search_topic} 
                defaultValue={request}
                />
                <span className={st.clear_text} onClick={clearInputCross}>
                    <Cross height={"10px"} width={"10px"}/>
                </span>
        </form>
    );
})

export default SearchNewsForm;