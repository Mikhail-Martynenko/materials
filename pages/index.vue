<template>
  <div class="product-container">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
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
import {useFilterSort} from "~/hooks/useFilterSort";

const breadcrumbs = ref([
  { label: 'Главная', path: '#' },
  { label: 'Системы хранения', path: '#' },
  { label: 'Комплекты стеллажных систем', path: '/' },
]);

const productStore = useProductStore();
const { items, materials } = storeToRefs(productStore);

const sortOrder = ref<'asc' | 'desc'>('asc');
const selectedMaterial = ref<string>('');

onMounted(async () => await productStore.fetchData());

const filteredAndSortedItems = useFilterSort(items, sortOrder, selectedMaterial);
</script>

<style scoped>
.product-container {
  width: 100%;
  max-width: 1496px;
  margin: 32px auto 103px;
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
