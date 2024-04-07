import { useState, useEffect } from "react"
import { KEY_ACCESS } from "../key_access";

const useFetchData = <T>(link: string, dependency: any = null, KEY: string = KEY_ACCESS): [T | []] => {
    const [data, setData] = useState<T | []>([]);

    useEffect(() => {
        (async function getFreshNews() {
            try {
                const response = await fetch(link + `&apiKey=${KEY}`);
                const articles = await response.json();
                setData(articles["articles"]);
            }
            catch(err) {
                console.log("err");
            }
          })()
    }, [dependency])

    return [data]
}

export { useFetchData };