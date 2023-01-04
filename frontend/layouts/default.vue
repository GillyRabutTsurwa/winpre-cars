<template>
  <div :class="headerFooterClasses" class="container">
    <Header @test="logMode" :class="headerFooterClasses" />
    <slot />
    <Footer :class="headerFooterClasses" :mode="currentMode" />
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
.container {
  position: relative;
}
.dark {
  background-color: $background-sombre;
  color: $background-blanc;
}

.light {
  background-color: $background-blanc;
  color: $background-sombre;
}
</style>