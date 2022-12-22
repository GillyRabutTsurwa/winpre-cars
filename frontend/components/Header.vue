<template>
  <header class="header">
    <div class="logo">
      <img v-if="mode === 'Light'" src="~/assets/svg/Orange_BlackText_NoNumber.svg" alt="">
      <img v-else src="~/assets/svg/Orange_WhiteText_NoNumber.svg" alt="">
    </div>
    <ul class="links-main">
      <li class="links-main--item">Home</li>
      <li class="links-main--item">Inventory</li>
      <li class="links-main--item">About Us</li>
      <li class="links-main--item">Contact</li>
      <li @click="toggleMode" class="links-main--item mode">{{mode}} Mode</li>
    </ul>
  </header>
</template>

<script setup>
const emit = defineEmits(["test"]);

const isDark = ref(false);
const mode = computed(() => {
  return isDark.value ? "Dark" : "Light";
});

const toggleMode = () => {
  // change "dark" or "light" text on header
  mode.value = isDark ? "Dark" : "Light";

  // toggle actual darkmode value on click;
  isDark.value = !isDark.value;

  // send that togglable value to the parent
  emit("test", mode.value);
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 9rem;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $colour-black;

  box-shadow: 1px 2px 7px $background-sombre;
  .logo {
    width: 11.5rem;
    margin: 0;

    background-color: transparent;

    img {
      height: 100%;
      padding: 2rem 0;
    }
  }
  .links-main {
    display: flex;
    list-style: none;

    &--item {
      margin-right: 1.5rem;
    }
  }
}
</style>