<template>
  <div>
    <h1>Каталог товаров</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',
  data() {
    return {
      products: [
        {id: 1, name: 'Товар 1', price: 100},
        {id: 2, name: 'Товар 2', price: 200},
        {id: 3, name: 'Товар 3', price: 300},
      ]
    };
  }
}
</script>

<style>
/* Стили для компонента Catalog */
</style>
