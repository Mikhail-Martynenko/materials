<template>
  <ol class="breadcrumbs">
    <li v-for="(crumb, index) in breadcrumbs" :key="index">
      <NuxtLink v-if="!isLastCrumb(index)" :to="crumb.path">
        {{ crumb.label }} <span> / </span>
      </NuxtLink>
      <span v-else class="breadcrumbs__inactive">{{ crumb.label }}</span>
    </li>
  </ol>
</template>

<script setup lang="ts">
interface Props {
  breadcrumbs: { label: string; path: string }[];
}

const props = defineProps<Props>();
const isLastCrumb = (index: number) => index === props.breadcrumbs.length - 1;
</script>

<style scoped>
.breadcrumbs {
  display: flex;
  list-style-type: none;
  margin-bottom: 32px;
  padding-left: 0;
}

.breadcrumbs a {
  text-decoration: none;
  color: #727783;
}

.breadcrumbs span {
  margin: 0 5px;
}

.breadcrumbs__inactive {
  color: black;
}
</style>
