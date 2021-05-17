import Vue from 'vue'
import Vuex from 'vuex'
import { today, tomorrow } from '../../shared'
import { setLocalStorage } from '../tools/tools'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        icon: 'user',
        name: 'Personal',
        iconImg: 'fl-renyuan',
        tasks: [
          {
            id: 1,
            title: 'Dating',
            date: new Date(),
            done: false,
            deleted: false
          }
        ],
        colors: ['#ff6262', '#ffa947']
      },
      {
        icon: 'suitcase',
        name: 'Work',
        iconImg: 'diannao',
        tasks: [
          {
            id: 3,
            title: 'Design Sprint',
            date: new Date(),
            done: true,
            deleted: false
          },
          {
            id: 4,
            title: 'Icon Set Design for Mobile App',
            date: new Date(),
            done: false,
            deleted: false
          },
          {
            id: 5,
            title: 'HTML/CSS Study',
            date: new Date(),
            done: false,
            deleted: false
          },
          {
            id: 6,
            title: 'Weekly Report',
            date: new Date(),
            done: false,
            deleted: false
          },
          {
            id: 7,
            title: 'Design Meeting',
            date: new Date(),
            done: false,
            deleted: false
          },
          {
            title: 'Quick Prototyping',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            id: 8,
            title: 'UX Conference',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            title: 'Quick Prototyping',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            id: 8,
            title: 'UX Conference',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            title: 'Quick Prototyping',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            id: 8,
            title: 'UX Conference',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            title: 'Quick Prototyping',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            id: 8,
            title: 'UX Conference',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            title: 'Quick Prototyping',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            id: 8,
            title: 'UX Conference',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            title: 'Quick Prototyping',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          },
          {
            id: 8,
            title: 'UX Conference',
            date: new Date(new Date().setDate(new Date().getDate() + 1)),
            done: false,
            deleted: false
          }
        ],
        colors: ['#5b9df9', '#47bfff']
      },
      {
        icon: 'home',
        name: 'Home',
        iconImg: 'fl-jia',
        tasks: [
          {
            id: 2,
            title: 'House Keeping',
            date: new Date(),
            done: true,
            deleted: false
          }
        ],
        colors: ['#2c7d59', '#3ba776']
      }
    ],
    personalTodayTasks: [],
    personalTomorrowTasks: [],
    workTodayTasks: [],
    workTomorrowTasks: [],
    homeTodayTasks: [],
    homeTomorrowTasks: []
  },
  getters: {
    todos(state) {
      return state.todos
    },
    personalTodayTasks(state) {
      state.personalTodayTasks = state.todos[0].tasks.filter(task => {
        return task.date >= today && task.date < tomorrow && !task.deleted
      })
      return state.personalTodayTasks
    },
    personalTomorrowTasks(state) {
      state.personalTomorrowTasks = state.todos[0].tasks.filter(task => {
        return task.date >= tomorrow && !task.deleted
      })
      return state.personalTomorrowTasks
    },
    workTodayTasks(state) {
      state.workTodayTasks = state.todos[1].tasks.filter(task => {
        return task.date >= today && task.date < tomorrow && !task.deleted
      })
      return state.workTodayTasks
    },
    workTomorrowTasks(state) {
      state.workTomorrowTasks = state.todos[1].tasks.filter(task => {
        return task.date >= tomorrow && !task.deleted
      })
      return state.workTomorrowTasks
    },
    homeTodayTasks(state) {
      state.homeTodayTasks = state.todos[2].tasks.filter(task => {
        return task.date >= today && task.date < tomorrow && !task.deleted
      })
      return state.homeTodayTasks
    },
    homeTomorrowTasks(state) {
      state.homeTomorrowTasks = state.todos[2].tasks.filter(task => {
        return task.date >= tomorrow && !task.deleted
      })
      return state.homeTomorrowTasks
    }
  },
  mutations: {
    changeTheme(_, theme) {
      setLocalStorage('theme', theme)
    },
    addPersonalTasks(state, task) {
      state.todos[0].tasks.unshift(task)
    },
    addWorkTasks(state, task) {
      state.todos[1].tasks.unshift(task)
    },
    addHomeTasks(state, task) {
      state.todos[2].tasks.unshift(task)
    },
    deleteTask(_, task) {
      task.deleted = true
    }
  },
  actions: {},
  modules: {}
})
