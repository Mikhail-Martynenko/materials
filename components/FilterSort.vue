<template>
  <div class="filter-sort">
    <div class="filter-sort__block">
      <label for="sortOrder" class="filter-sort__label">Сортировать по:</label>
      <select
          id="sortOrder"
          :value="sortOrder"
          @change="updateSortOrder"
          class="filter-sort__select"
      >
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>

    <div class="filter-sort__block">
      <label for="materialFilter" class="filter-sort__label">Материал:</label>
      <select
          id="materialFilter"
          :value="selectedMaterial"
          @change="updateSelectedMaterial"
          class="filter-sort__select"
      >
        <option value="">Все материалы</option>
        <option v-for="material in materials" :key="material.id" :value="material.id">
          {{ material.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  materials: Material[];
  sortOrder: string;
  selectedMaterial: string;
}

defineProps<Props>();
const emit = defineEmits(['update:sortOrder', 'update:selectedMaterial']);

const updateSortOrder = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value;
  emit('update:sortOrder', value);
};

const updateSelectedMaterial = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value;
  emit('update:selectedMaterial', value);
};
</script>

<style scoped>
.filter-sort {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
}

.filter-sort__block {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 288px;
}

.filter-sort__label {
  margin-bottom: 6px;
  font-size: 12px;
  color: #4F4F4F;
}

.filter-sort__select {
  background: #F2F2F2;
  border: none;
  padding: 10px 16px;
}
</style>
