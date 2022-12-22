<template>
  <section class="shop">
    <h3>Shop For Your Dream Car</h3>
    <span>By Price, Brand, Year</span>
    <div class="shop__buttons">
      <button v-for="(_, tabProperty) in tabs" :key="tabProperty" @click="currentTab = tabProperty">
        {{ tabProperty }}
      </button>
    </div>
    <component :is="tabs[currentTab]"></component>
  </section>
</template>

<script setup>
/**
 * NOTEIMPORTANT: dynamic components in Nuxt 3
 * https://nuxt.com/docs/guide/directory-structure/components#dynamic-components
 *
 */
const currentTab = ref("Brand");
const tabs = {
  Brand: resolveComponent("Brand"),
  Price: resolveComponent("Price"),
  Type: resolveComponent("Type"),
};
</script>

<style lang="scss" scoped>
.shop {
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, min-content) 1fr;
  gap: 4rem;

  padding: 6rem;
  color: crimson;

  &__buttons {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    justify-self: center;

    display: flex;
    align-items: flex-start;
  }
}
</style>