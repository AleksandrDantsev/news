import { TArticlesData } from "../types/articlesData";

class LocalStorageAction {

    protected getDate() {
        const date = new Date();
        return String(date.toLocaleDateString());
    }

    public static add(data: TArticlesData, name: string = "collections") {
        const dateKey = this.prototype.getDate();
        const dataLocalStorage = JSON.parse(localStorage.getItem(name)!);

        if (localStorage.getItem(name)) {

            if (dateKey in dataLocalStorage) {
                console.log(dataLocalStorage[dateKey])

                if (!dataLocalStorage[dateKey].find((el: TArticlesData) => data.title === el.title)) {
                    dataLocalStorage[dateKey].push(data);
                    localStorage.setItem(name, JSON.stringify(dataLocalStorage));
                }
            }
            else {
                const result = Object.assign(dataLocalStorage, data);
                localStorage.setItem(name, JSON.stringify(result));
            }
        }
        else {
            localStorage.setItem(name, JSON.stringify( { [dateKey]: [data] } ))
        }
    }


    public static isExist = (title: string, name: string = "collections") => {
        const dataLocalStorage = JSON.parse(localStorage.getItem(name)!);

        for (let key in dataLocalStorage) {
            if (dataLocalStorage[key].find((el: TArticlesData) => el.title === title)) {
                return true;
            }
        }
        return false;
    }
    

    public static get(name: string = "collections") {
        const localStorageData = localStorage.getItem(name);
        return localStorageData ? JSON.parse(localStorageData) : [];
    }


    public static remove(title: string, name: string = "collections") {
        const dataLocalStorage = JSON.parse(localStorage.getItem(name)!);

        for (let key in dataLocalStorage) {
            if (dataLocalStorage[key].find((el: TArticlesData) => el.title === title)) {
                const filteredArray = dataLocalStorage[key].filter((el: TArticlesData) => el.title !== title);
                
                dataLocalStorage[key] = filteredArray;
                // dataLocalStorage[key].length === 0 && delete dataLocalStorage[key];
            }
        }
            localStorage.setItem(name, JSON.stringify(dataLocalStorage));
    }

    public static clear() {
        localStorage.clear();
    }
}



export { LocalStorageAction }