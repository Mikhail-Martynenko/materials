<template>
  <div class="product-list__item">
    <div class="product-list__image">
      <NuxtImg :src="item?.image?.url" :alt="item?.name" class="product-list__img"/>
    </div>
    <div class="product-list__info">
      <div class="product-list__code">
        <p v-if="item?.code">{{ item?.code }}</p>
      </div>
      <h3 class="product-list__name">{{ item?.name }}</h3>
      <div class="product-list__details">
        <div class="product-list__price">
          <p v-if="item?.price?.old_price" class="product-list__price-old">{{ Math.floor(item?.price?.old_price) }}₽</p>
          <p class="product-list__price-current">{{ Math.floor(item?.price?.current_price) }}₽</p>
        </div>

        <div class="product-list__icons">
          <SvgCart @click=""/>
          <SvgLike @click="storeFavorite.toggleFavorite(item.id)" :is-active="isFavorite"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: Item;
}

const props = defineProps<Props>();
const storeFavorite = useFavoritesStore();
const isFavorite = computed(() => storeFavorite.favoritesArrayId.includes(props.item.id));
</script>

<style scoped>
.product-list__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 336px;
  height: 352px;
  border: 1px solid #EEEEEE;
}

.product-list__image {
  padding: 9px 49px 23px 49px;
}

.product-list__code {
  margin-bottom: 6px;
  font-size: 10px;
  color: #888888;
}

.product-list__info {
  padding: 0 12px 9px 12px;
}

.product-list__name {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}

.product-list__details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-list__price {
  display: flex;
  gap: 9px;
}

.product-list__price-old {
  text-decoration: line-through;
  color: #888888;
}

.product-list__price-current {
  font-weight: bold;
}

.product-list__img {
  width: 100%;
  object-fit: cover;
}

.product-list__icons {
  display: flex;
  gap: 11px;
}
</style>
