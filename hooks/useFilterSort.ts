export function useFilterSort(items: Ref<Item[]>, sortOrder: Ref<'asc' | 'desc'>, selectedMaterial: Ref<string>) {
    return computed<Item[]>(() => {
        let filteredItems = items.value;

        if (selectedMaterial.value) {
            filteredItems = filteredItems.filter(item => String(item.material) === selectedMaterial.value);
        }

        return filteredItems.sort((a, b) => {
            const priceA = a.price.current_price || 0;
            const priceB = b.price.current_price || 0;
            return sortOrder.value === 'asc' ? priceA - priceB : priceB - priceA;
        });
    });
}