<template>
  <footer class="footer">
    <div class="logo">
      <img v-if="props.mode === 'Light'" src="~/assets/svg/Orange_BlackText_NoNumber.svg" alt="">
      <img v-else src="~/assets/svg/Orange_WhiteText_NoNumber.svg" alt="">
    </div>
    <ul class="links-footer__main">
      <h4>Store Hours</h4>
      <li class="links-main--item">Home</li>
      <li class="links-main--item">Inventory</li>
      <li class="links-main--item">About Us</li>
      <li class="links-main--item">Testimonials</li>
      <li class="links-main--item">Contact</li>
    </ul>
    <ul class="links-footer__contact">
      <h4>Contact Us</h4>
      <li class="links-main--item">Home</li>
      <li class="links-main--item">Inventory</li>
      <li class="links-main--item">About Us</li>
      <li class="links-main--item">Testimonials</li>
      <li class="links-main--item">Contact</li>
    </ul>
    <ul class="links-footer__follow">
      <h4>Follow Us</h4>
      <li class="links-main--item">Home</li>
      <li class="links-main--item">Inventory</li>
      <li class="links-main--item">About Us</li>
      <li class="links-main--item">Testimonials</li>
      <li class="links-main--item">Contact</li>
    </ul>
    <h3 class="copyright">&copy; Gilbert Rabut Tsurwa 2022. All Rights Reserved</h3>
  </footer>
</template>
  
<script setup>
/**
 * NOTE: using props keep track of the mode in the footer
 * but more importantly, i'm using it to dynamically change the logo in the footer
 */
const props = defineProps({
  mode: {
    type: String,
    required: true,
  },
});
console.log(props.mode);
</script>
  
  <style lang="scss" scoped>
.footer {
  width: 100%;
  height: 50rem;
  padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(3, 1fr);
  row-gap: 2.5rem;
  background-color: $background-blanc;

  .logo {
    // width: 15rem;
    width: 20rem;
    height: 20rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;
    background-color: transparent;

    img {
      height: 100%;
    }
  }
  .links-footer {
    display: flex;
    list-style: none;

    &__main,
    &__contact,
    &__follow {
      grid-row: 2 / 3;
      justify-self: center;
    }

    &__main {
      grid-column: 1 / 2;
    }

    &__contact {
      grid-column: 2 / 3;
    }

    &__follow {
      grid-column: 3 / 4;
    }

    &--item {
      margin-right: 1.5rem;
    }
  }

  .copyright {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
  }
}
</style>