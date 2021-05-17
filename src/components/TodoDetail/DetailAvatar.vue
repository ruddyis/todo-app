<template>
  <div class="detail-avatar">
    <List :index="index"></List>
  </div>
</template>
<script>
import List from '../List'
export default {
  name: 'DetailAvatar',
  components: {
    List
  },
  props: {
    index: {
      type: Number,
      default: 0,
      require: true
    }
  }
}
</script>
<style scoped lang="scss">
@import '../../assets/css/variable.scss';
@import '../../assets/css/mixin.scss';
.detail-avatar {
  width: 100%;
  height: 400px;
}
</style>
