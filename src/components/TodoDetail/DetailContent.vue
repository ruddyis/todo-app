<template>
  <div class="detail-content">
    <ScrollView ref="ScrollView">
      <div>
        <DetailAvatar :index="index"></DetailAvatar>
        <DetailList :index="index"></DetailList>
      </div>
    </ScrollView>
  </div>
</template>
<script>
import ScrollView from '../ScrollView'
import DetailAvatar from './DetailAvatar'
import DetailList from './DetailList'
export default {
  name: 'DetailContent',
  components: {
    ScrollView,
    DetailAvatar,
    DetailList
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
.detail-content {
  position: fixed;
  top: 88px;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  overflow: hidden;
}
</style>
