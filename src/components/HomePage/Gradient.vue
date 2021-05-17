<template>
  <ul>
    <li
      v-for="(value, index) in this.todos"
      :key="index"
      class="gradient"
      :class="{ gradient_active: index <= currentIndex }"
    ></li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Gradient',
  computed: {
    ...mapGetters(['todos'])
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
      require: true
    }
  }
}
</script>
<style scoped lang="scss">
ul {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  .gradient {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    opacity: 0.5;
    transition: opacity 6s;
  }
  .gradient_active {
    opacity: 0;
    // transition: opacity 3s;
  }
}
</style>
