<template>
  <div class="product-list__item">
    <div class="product-list__image">
      <NuxtImg :src="item?.image?.url" :alt="item?.name" class="product-list__img"/>
      <span v-if="item?.price?.old_price">Скидка</span>
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
          <SvgCheck v-if="isCart" @click="storeCart.toggleCart(item.id)"/>
          <SvgCart v-else @click="storeCart.toggleCart(item.id)"/>
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
const storeCart = useCartStore();

const isFavorite: boolean = computed(() => storeFavorite.favoritesArrayId.includes(props.item.id));
const isCart: boolean= computed(() => storeCart.cartArrayId.includes(props.item.id));
</script>

<style scoped>
.product-list__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 336px;
  height: 352px;
  border: 1px solid #EEEEEE;
  font-weight: 500;
}

.product-list__image {
  position: relative;
  padding: 9px 49px 23px 49px;
}

.product-list__image span {
  position: absolute;
  top: 8px;
  left: 0;
  padding: 3px 16px;
  background: #EB5757;
  color: white;
  font-weight: 400;
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
  font-weight: 400;
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
  height: 23px;
  gap: 11px;
}
</style>
