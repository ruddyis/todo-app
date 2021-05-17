<template>
  <div class="list">
    <div class="icon">
      <i
        :class="`icon-img iconfont icon-${todos[index].iconImg}`"
        @click="detail(index)"
      ></i>
    </div>
    <!-- <p class="task">{{ todos[index].tasks.length }} Tasks</p> -->
    <p class="task">{{ taskLength }} Tasks</p>
    <p class="name">{{ todos[index].name }}</p>
    <div class="progress">
      <div class="progress-line">
        <div class="progress-line-in" :style="{ width: progressWidth }"></div>
      </div>
      <span class="progress-num">{{ progressWidth }}</span>
    </div>
  </div>
</template>
<script>
import { setLocalStorage } from '../tools/tools'
import { mapGetters } from 'vuex'
export default {
  name: 'List',
  props: {
    index: {
      type: Number,
      default: 0,
      require: true
    }
  },
  computed: {
    ...mapGetters(['todos']),
    taskLength() {
      var task = this.todos[this.index].tasks.filter(task => {
        return !task.deleted
      })
      return task.length
    },
    progressWidth() {
      var doneTasks = this.todos[this.index].tasks.filter(task => {
        return task.done === true && task.deleted === false
      })
      var doneTasksNum = doneTasks.length
      var tasks = this.todos[this.index].tasks.filter(task => {
        return task.deleted === false
      })
      var tasksNum = tasks.length
      var progressWidth = `${Math.round((doneTasksNum / tasksNum) * 100)}%`
      if (tasksNum === 0) {
        progressWidth = 0
      }
      return progressWidth
    }
  },
  methods: {
    detail(index) {
      this.$emit('select', index)
      setLocalStorage('currentIndex', index)
    }
  },
  watch: {
    todos() {
      console.log('todos')
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/css/variable.scss';
@import '../assets/css/mixin.scss';
.list {
  width: 100%;
  height: 100%;
  .icon {
    width: 100px;
    height: 100px;
    position: relative;
    top: 50px;
    left: 50px;
    border: 3px solid #000;
    border-radius: 50%;
    @include border_color();
    text-align: center;
    .icon-img {
      display: block;
      transform: translateY(15px);
      @include icon_color();
      @include icon_size($font_large);
    }
  }
  .task {
    margin-top: 160px;
    margin-left: 50px;
    @include font_size($font_small);
  }
  .name {
    margin-left: 50px;
    @include font_size($font_large);
  }
  .progress {
    width: 70%;
    margin-left: 50px;
    position: flex;
    justify-content: space-between;
    .progress-line {
      display: inline-block;
      position: relative;
      width: 80%;
      height: 20px;
      border-radius: 10px;
      background: rgba(121, 121, 118, 0.2);
      .progress-line-in {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0%;
        border-radius: 10px;
        @include bg_color();
        transition: all 0.3s ease;
      }
    }
    .progress-num {
      display: inline-block;
      margin-left: 30px;
      @include font_size($font_small);
    }
  }
}
</style>
