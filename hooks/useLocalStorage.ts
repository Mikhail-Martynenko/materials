export const useLocalStorage = () => {
    const loadFromLocalStorage = (data: any, key: string) => {
        const storedFavorites = localStorage.getItem(key);
        if (storedFavorites) {
            data = JSON.parse(storedFavorites);
        }
        return data;
    };

    const saveToLocalStorage = (data: any, key: string) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    return { loadFromLocalStorage, saveToLocalStorage }
}
