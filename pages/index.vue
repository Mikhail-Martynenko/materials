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
const productStore = useProductStore();
const { items, materials } = storeToRefs(productStore);
const sortOrder = ref<'asc' | 'desc'>('asc');
const selectedMaterial = ref<string>('');

onMounted(async () => await productStore.fetchData());

const filteredAndSortedItems = computed<Item[]>(() => {
  let filteredItems = items.value as Item[];

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
  max-width: 1496px;
  margin: 0 auto 103px;
}

.product-container__title {
  margin: 32px 0;
}

.product-container__list {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
}
</style>
