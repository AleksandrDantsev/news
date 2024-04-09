import { useMemo } from "react";

export const filterNonexistentNews = <T>(articles: T[], category: string | string[], forbiden: any, quant: number = 5): T[] => useMemo(() => {
    if (articles.length > 0) {
        let resultArray = articles;

        const categoryArray = Array.isArray(category) ? category : [category]
        const forbidenArray = Array.isArray(forbiden) ? forbiden : [forbiden]

        for (let i = 0; i < categoryArray.length; i++) {
            resultArray = resultArray.filter((article: T) => (
                article?.[categoryArray[i] as keyof T] !== forbidenArray[i]
                )
            );
        }
        console.log('repaint')
        return resultArray.slice(0, quant); 
    }
    else return [];
}, [articles])
