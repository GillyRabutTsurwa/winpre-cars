<template>
  <div>
    <span>{{url}}</span>
  </div>
</template>

<script setup>
const route = useRoute();
const url = route.params.slug;
console.log(url);
console.log(typeof url);

/**
 * NOTE: this works. for dynamic variables.
 * it seems using the the template literal syntaxe wrapped in quotes does the job: "${variableName}"
 * IMPORTANT: doing it without the quotes did not work: ${variableName}
 *
 * furthermore, a good resource that helped me on writing the appropriate GROQ query can be found in this link:
 * https://www.sanity.io/docs/slug-type
 */
const query = `*[_type=="product" && slug.current == "${url}"]`;
const { data } = useSanityQuery(query);

console.log(data);
console.log(data.value);
</script>

<style lang="scss" scoped>
</style>