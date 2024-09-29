import { defineStore } from 'pinia';
import { useLocalStorage } from '~/hooks/useLocalStorage';

export const useCartStore = defineStore('cart', () => {
    const cartArrayId = ref<string[]>([]);

    const { loadFromLocalStorage, saveToLocalStorage } = useLocalStorage();

    cartArrayId.value = loadFromLocalStorage([], 'cart');

    function toggleCart(itemId: string) {
        const isInCart = cartArrayId.value.includes(itemId);
        if (isInCart) {
            cartArrayId.value = cartArrayId.value.filter((id) => id !== itemId);
        } else {
            cartArrayId.value.push(itemId);
        }
        saveToLocalStorage(cartArrayId.value, 'cart');
    }

    return { cartArrayId, toggleCart };
});
