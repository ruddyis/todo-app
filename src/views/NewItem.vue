<template>
  <div class="new-item">
    <Header>
      <i slot="left" class="left iconfont icon-guanbi" @click="back"></i>
      <h1 slot="center" class="center">New Tasks</h1>
      <i slot="right"></i>
    </Header>
    <NewItemEditing ref="newItemEditing"></NewItemEditing>
    <addItem
      :isChangeAddItem="isChangeAddItem"
      @addNewItem="addNewItem"
    ></addItem>
  </div>
</template>
<script>
import Header from '../components/Header'
import NewItemEditing from '../components/NewItem/NewItemEditing'
import addItem from '../components/addItem'
export default {
  name: 'NewItem',
  data() {
    return {
      isChangeAddItem: true
    }
  },
  components: {
    Header,
    NewItemEditing,
    addItem
  },
  methods: {
    back() {
      window.history.back()
    },
    addNewItem() {
      this.$refs.newItemEditing.add()
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/fonts/iconfont.css';
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
.new-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // @include bg_color();
  background: #443636;
  .left,
  .center {
    color: rgba(255, 255, 255, 0.5);
  }
}
// v-enter,
// v-leave-to {
//   transform: scale(0);
// }
// v-enter-to,
// v-leave {
//   transform: scale(1);
// }
// v-enter-active {
//   transition: all 0.2s 0.3s ease;
// }
// v-leave-active {
//   transition: all 0.3s ease;
// }
</style>
