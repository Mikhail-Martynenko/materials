export const useProductStore = defineStore('product', () => {
    const items = ref<Item[]>([]);
    const materials = ref<Material[]>([]);

    async function fetchData() {
        try {
            const [itemsResponse, materialsResponse] = await Promise.all([
                fetch('list-materials/api/items.json'),
                fetch('list-materials/api/materials.json')
            ]);
            items.value = await itemsResponse.json();
            materials.value = await materialsResponse.json();
        } catch (err) {
            console.error("Ошибка при загрузке данных:", err);
        }
    }

    return { items, materials, fetchData };
});
