<template>
  <header class="header">
    <div class="logo">
      <img v-if="mode === 'Light'" src="~/assets/svg/Orange_BlackText_NoNumber.svg" alt="">
      <img v-else src="~/assets/svg/Orange_WhiteText_NoNumber.svg" alt="">
    </div>
    <ul class="links-main">
      <li class="links-main--item">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
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
console.log(mode.value);

const currentMode = computed(() => {
  /**
   * NEWNOTEIMPORTANT:
   * this computed value changes based on mode (computed property abouve)...
   * ...which, itself, is a computed value (above) which changes based on the isDark ref value
   */
  return mode.value;
});

/**
 * NOTEIMPORTANT:
 * i have rewritten this code to address the warning of attempting to change a computed a value...
 * ... which is solely supposed to be read-only
 * isDark, a ref value will toggle between true and false. that doesn't change
 * but pay attention that the mode computed property will change between Dark and Light, as isDark changes between true and false
 * and the currentMode computed property is a computed property that simply returns the mode computed property value
 */
const toggleMode = () => {
  isDark.value = !isDark.value; //NOTE: this changing will change mode, hence changing currentMode as well

  console.log(currentMode.value);

  // send that togglable value to the parent
  emit("test", currentMode.value);
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