import {useLocalStorage} from "~/hooks/useLocalStorage";

export const useFavoritesStore = defineStore('favorites', () => {
    const favoritesArrayId = ref<string[]>([]);

    const { loadFromLocalStorage, saveToLocalStorage } = useLocalStorage();

    favoritesArrayId.value = loadFromLocalStorage([], 'favorites');

    function toggleFavorite(itemId: string) {
        const isAdded = favoritesArrayId.value.includes(itemId);
        if (isAdded) {
            favoritesArrayId.value = favoritesArrayId.value.filter((id) => id !== itemId);
        }
        else favoritesArrayId.value.push(itemId);
        saveToLocalStorage(favoritesArrayId.value, 'favorites');
    }

    return  { favoritesArrayId, toggleFavorite };
})
