<template>
  <div class="product-container">
    <h2 class="product-container__title">Комплекты стеллажных систем</h2>

    <FilterSort
        :materials="materials"
        :sortOrder="sortOrder"
        :selectedMaterial="selectedMaterial"
        @update:sortOrder="value => sortOrder = value"
        @update:selectedMaterial="value => selectedMaterial = value"
        class="product-container__filter-sort"
    />

    <div v-auto-animate class="product-container__list">
      <article v-for="item in filteredAndSortedItems" :key="item.id">
        <Item :item="item" />
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref<Item[]>([]);
const materials = ref<Material[]>([]);
const sortOrder = ref('asc');
const selectedMaterial = ref('');

onMounted(async () => {
  try {
    const [itemsResponse, materialsResponse] = await Promise.all([
      fetch('/items.json'),
      fetch('/materials.json')
    ]);

    items.value = await itemsResponse.json();
    materials.value = await materialsResponse.json();
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
});

const filteredAndSortedItems = computed(() => {
  let filteredItems = items.value;

  if (selectedMaterial.value) {
    filteredItems = filteredItems.filter(material => String(material.material) === selectedMaterial.value);
  }

  return filteredItems.sort((a, b) => {
    const priceA = a.price.current_price || 0;
    const priceB = b.price.current_price || 0;
    return sortOrder.value === 'asc' ? priceA - priceB : priceB - priceA;
  });
});
</script>

<style scoped>
.product-container {
  width: 100%;
  margin: 0 auto;
  max-width: 1496px;
}

.product-container__title {
  margin-bottom: 32px;
}

.product-container__list {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
}
</style>
