<template>
  <section class="about">
    <div class="photo-ou-video">
      <img src="~/assets/img/photo-1503376780353-7e6692767b70.avif" alt="">
    </div>

    <div v-for="(currentParagraph, index) in state.paragraphs" :key="index" class="text">
      <span>{{ currentParagraph.description }}</span>
    </div>

    <div class="photo-ou-video">
      <img src="~/assets/img/photo-1503376780353-7e6692767b70.avif" alt="">
    </div>
  </section>
</template>

<script setup>
const state = reactive({
  paragraphs: [],
});

(async () => {
  try {
    const query = groq`*[_type == "introText"]`;
    console.log(await useSanityQuery(query));

    const { data, error } = await useSanityQuery(query);
    if (error.value) throw new Error(`Error: ${error.value}`);
    console.log(data.value);
    state.paragraphs = data.value;
  } catch (error) {
    console.log(error);
  }
})();
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .photo-ou-video {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>