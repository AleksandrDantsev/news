import { useState, useEffect } from "react";
import { LocalStorageAction } from "../helpers/addToLocalStorage";
import { TArticlesData } from "../types/articlesData";


const useActionForCollections = (title: string, data: TArticlesData) => {
    const [isAdded, setIsAdded] = useState<boolean>(false);

    const addOrRemoveFromStorage = () => {
        if (LocalStorageAction.isExist(title)) {
            LocalStorageAction.remove(title);
            setIsAdded(false);
        }
        else {
            LocalStorageAction.add(data);
            setIsAdded(true);
        }
    }

    useEffect(() => {
        LocalStorageAction.isExist(title) && setIsAdded(true);
    }, [])

    return [isAdded, addOrRemoveFromStorage] as const;
}

export { useActionForCollections }