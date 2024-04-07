import { useMemo } from "react";

export const filterNonexistentNews = <T>(articles: T[], category: string, forbiden: any, quant: number = 5): T[] => useMemo(() => {
    const articlesFiltered = articles.filter((article: T) => (
        article?.[category] !== forbiden
        )
);
    return articlesFiltered.slice(0, quant); 
}, [articles])
