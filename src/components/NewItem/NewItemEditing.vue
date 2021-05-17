<template>
  <div class="newitem-editing">
    <p class="newitem-title">What tasks are you aaa planning to perform?</p>
    <textarea class="newitem-text" rows="3" v-model="title"></textarea>
    <div class="newitem-handle">
      <i
        :class="`handle-icon iconfont icon-${this.todos[this.index].iconImg}`"
      ></i>
      <i class="handle-name">{{ this.todos[this.index].name }}</i>
    </div>
    <div class="newitem-handle" @click="changeDate(dateIndex, index)">
      <i class="handle-icon iconfont icon-riqi"></i>
      <i class="handle-name">{{ this.date[this.dateIndex] }}</i>
    </div>
  </div>
</template>
<script>
import { getLocalStorage } from '../../tools/tools.js'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NewItemEditing',
  data() {
    return {
      date: ['Today', 'Tomorrow'],
      dateIndex: 0,
      title: '',
      task: {}
    }
  },
  computed: {
    ...mapGetters(['todos']),
    index() {
      return getLocalStorage('currentIndex')
    }
  },
  methods: {
    ...mapMutations(['addPersonalTasks', 'addWorkTasks', 'addHomeTasks']),
    changeDate(dateIndex) {
      if (this.dateIndex === 0) {
        this.dateIndex = 1
      } else if (this.dateIndex === 1) {
        this.dateIndex = 0
      }
    },
    add() {
      var taskDate = new Date()
      if (this.dateIndex === 1) {
        taskDate = new Date(new Date().setDate(new Date().getDate() + 1))
      }
      this.task = {
        title: this.title,
        date: taskDate,
        done: false,
        deleted: false
      }
      if (this.index === 0) {
        this.addPersonalTasks(this.task)
      } else if (this.index === 1) {
        this.addWorkTasks(this.task)
      } else if (this.index === 2) {
        this.addHomeTasks(this.task)
      }
      this.title = ''
    }
  }
}
</script>
<style scoped lang="scss">
@import '../../assets/fonts/iconfont.css';
@import '../../assets/css/variable.scss';
@import '../../assets/css/mixin.scss';
.newitem-editing {
  width: 80%;
  height: 60%;
  margin-top: 50px;
  margin-left: 10%;
  .newitem-title {
    @include font_size($font_medium);
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.5);
  }
  .newitem-text {
    width: 100%;
    outline: none;
    border: none;
  }
  .newitem-handle {
    width: 100%;
    height: 100px;
    // background: red;
    border-bottom: 1px solid #000;
    .handle-icon {
      @include icon_size(50px);
      color: rgba(255, 255, 255, 0.5);
      line-height: 100px;
      margin-right: 20px;
    }
    .handle-name {
      font-style: normal;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .date {
    width: 100%;
    height: 100px;
    background: white;
    border-bottom: 1px solid #000;
    display: none;
    .date-icon {
      @include icon_size(50px);
      color: black;
      line-height: 100px;
      margin-right: 20px;
    }
    .date-name {
      line-height: 100px;
      font-style: normal;
      margin-left: 75px;
      color: black;
    }
  }
}
</style>
