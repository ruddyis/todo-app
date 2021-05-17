<template>
  <div class="addItem" @click="selection" :class="{ active: isChangeAddItem }">
    <i class="iconfont icon-ziyuan"></i>
  </div>
</template>
<script>
export default {
  name: 'addItem',
  props: {
    index: {
      type: Number,
      default: 0,
      require: true
    },
    isChangeAddItem: {
      type: Boolean,
      default: false,
      require: true
    }
  },
  methods: {
    selection(index) {
      this.$emit('todoSelect', index)
      this.$emit('addNewItem')
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
@import '../assets/fonts/iconfont.css';
.addItem {
  width: 100px;
  height: 100px;
  @include bg_color();
  border-radius: 50%;
  position: fixed;
  bottom: 50px;
  right: 50px;
  text-align: center;
  &.active {
    width: 100%;
    bottom: 0;
    right: 0;
    border-radius: 0%;
    animation: add 0.2s linear;
  }
  i {
    @include icon_size($font_large);
    color: white;
    line-height: 100px;
  }
}
</style>
