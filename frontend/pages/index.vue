<template>
  <main>
    <Banner />
    <!-- <Featured /> -->
    <Second />
    <Third />

    <div v-for="currentProduct in products" :key="currentProduct._id">
      {{ currentProduct.title }}
    </div>

  </main>
</template>

<script setup>
/**
 * NOTE: found this solution here https://sanity.nuxtjs.org/getting-started/usage
 * main site is this (very useful): https://sanity.nuxtjs.org/
 */
const query = groq`*[_type == "product"]`;
const { data } = useSanityQuery(query); //NOTE: the data property must be extracted with the .value syntaxe
console.log(data);

console.log(data.value);
const products = data.value;
</script>

<style lang="scss" scoped>
</style>