<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>
<script>
import HomePage from './views/HomePage';
export default {
  name: 'App',
  components: {
    HomePage
  }
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
