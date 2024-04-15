import React, { useState, useCallback }  from "react";
import st from "./SearchNews.module.scss";
import SearchNewsItem from "../components/SearchNewsItem/SearchNewsItem";
import { useFetchData } from "../../../hook/useFetchData";
import { TArticlesData } from "../../../types/articlesData";
import { filterNonexistentNews } from "../../../helpers/filterField";
import { ButtonRegular } from "../../../UI/ButtonRegular/ButtonRegular";

interface ISearchNews {
    urlSearch: string;
}

const SearchNews:React.FC<ISearchNews> = ({urlSearch}) => {
    const [dataSearchArray] = useFetchData<TArticlesData[]>(urlSearch, urlSearch);
    const [quantityNewsOnPage, setQuantityNewsOnPage] = useState<number>(10);
    const filteredData = filterNonexistentNews<TArticlesData>(dataSearchArray, 
                                                                            ["title", "urlToImage", "content"], 
                                                                            ["[Removed]", null, "[Removed]"], quantityNewsOnPage)

    const changeQuantityNewsOnPage = useCallback((_e: React.MouseEvent<HTMLButtonElement>) => {
        setQuantityNewsOnPage(quantityNewsOnPage + 10);
        console.log(quantityNewsOnPage);
    }, [quantityNewsOnPage])


    return(
        <div className={st.search_article}>
            {
                filteredData.length > 0 ? 
                filteredData.map((article, i) => <SearchNewsItem key={article.title + i}
                                                            title={article["title"]}
                                                            description={article["description"]}
                                                            srcImage={article["urlToImage"]}
                                                            date={article["publishedAt"]}
                />) 
                : 
                <div className={st.not_found_search}>
                    <div className={st.not_found_conteiner}>
                        <span>Nothing was found</span>
                    </div>
                </div>
            }
            {
            filteredData.length > 0 && quantityNewsOnPage < 100 && <div className={st.read_more}> 
                                            {
                                            <ButtonRegular text={"Read more"} 
                                                           classname="read_more_bt"
                                                           actFunc={changeQuantityNewsOnPage}
                                                        />
                                            }
            </div>
            }
        </div>
    );
}

export { SearchNews };