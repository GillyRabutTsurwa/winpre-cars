<template>
  <ClientOnly>
    <main>
      <Banner />
      <Second />
      <Third />

      <div v-for="currentProduct in products" :key="currentProduct._id">
        {{ currentProduct.title }}
      </div>

      <NuxtLink v-for="currentProduct in products" :key="currentProduct._id" :to="currentProduct.slug.current">
        {{ currentProduct.title }}
      </NuxtLink>
    </main>
  </ClientOnly>

</template>

<script setup>
/**
 * NOTE: for the warning in the template that looks similar to this one: https://lightrun.com/answers/fortawesome-vue-fontawesome-nuxt-3-hydration-mismatch-when-using-ssr
 * particularly, this is a "hydration mismatch issue"
 * i'm hoping that it is something that will be fixed soon, as it doesn't seem as it is an error by me
 * it seems the issue that fixes it is wrapping the root element in the ClientOnly component
 */

/**
 * NOTE: found this solution here https://sanity.nuxtjs.org/getting-started/usage
 * main site is this (very useful): https://sanity.nuxtjs.org/
 */
const query = groq`*[_type == "product"]`;
const { data } = useSanityQuery(query); //NOTE: the data property must be extracted with the .value syntaxe
console.log(data);

const products = data.value;
console.log(products);
console.log(Array.isArray(products));
// console.log(products.value);

// const urls = products.map((currentProduct) => currentProduct.slug.current);

// console.log(urls);
// const titles = products.map((currentProduct) => currentProduct);
// console.log(titles);
</script>

<style lang="scss" scoped>
</style>