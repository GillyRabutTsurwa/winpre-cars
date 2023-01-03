<template>
  <ClientOnly>
    <main>
      <Banner />
      <Second />
      <Third />

      <div v-for="currentProduct in state.products" :key="currentProduct._id">
        {{ currentProduct.title }}
      </div>

      <NuxtLink v-for="currentProduct in state.products" :key="currentProduct._id" :to="currentProduct.slug.current">
        {{ currentProduct.title }}
      </NuxtLink>
    </main>
  </ClientOnly>

</template>

<script setup>
const state = reactive({
  products: [],
});

(async () => {
  try {
    const query = groq`*[_type == "product"]`;
    const { data, error } = await useSanityQuery(query);
    if (error.value) throw new Error(`Error: ${error.value}`);
    console.log(data);
    state.prodcuts = data.value;
    console.log(state.products);
    console.log(Array.isArray(state.products));
  } catch (error) {
    console.log(error);
  }
})();
</script>

<style lang="scss" scoped>
</style>