<template>
  <div :class="headerFooterClasses">
    <Header @test="logMode" :class="headerFooterClasses" />
    <slot />
    <Footer @test="logMode" :class="headerFooterClasses" />
  </div>
</template>

<script setup>
const currentMode = ref("Light");

const logMode = (payload) => {
  console.log(payload);
  // currentMode.value = payload ? "Light" : "Dark";
  currentMode.value = payload;
};

const headerFooterClasses = computed(() => {
  return {
    dark: currentMode.value === "Dark",
    light: currentMode.value === "Light",
  };
});
</script>

<style lang="scss" scoped>
.dark {
  background-color: $background-sombre;
  color: $background-blanc;
}

.light {
  background-color: $background-blanc;
  color: $background-sombre;
}
</style>