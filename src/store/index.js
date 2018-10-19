import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import * as Types from './mutation-types'
import moduleA from './modules/moduleA'
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    msg: 123,
    arr: [1, 2, 3],
    users: [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' },
      { id: 3, name: '王五' }
    ],
    count: 0,
    user: {
      id: 1,
      name: '赵六',
      sex: 'male'
    },
    musicList: ''
  },
  getters: {
    secUser: state => state.users.filter(user => user.id >= 2),
    userWho: state => id => state.users.filter(user => user.id === id)
  },
  mutations: {
    // addCount: (state) => {
    //   state.count++
    // },
    // addCountStep: (state, payload) => {
    //   state.count += payload.step + payload.add
    // },
    // addAge: (state, payload) => {
    //   state.user = { ...state.user, age: payload.age }
    // },
    [Types.ADD_COUNT_TYPE]: (state) => {
      state.count++
    },
    [Types.ADD_COUNTSTEP_TYPE]: (state, payload) => {
      state.count += payload.step + payload.add
    },
    [Types.ADD_AGE_TYPE]: (state, payload) => {
      state.user = { ...state.user, age: payload.age }
    },
    getMusicList: (state, payload) => {
      state.musicList = payload
      // console.log(state.musicList)
    }
  },
  actions: {
    addCountAction ({ commit }, payload) { commit('addCountStep', payload) },
    getMusicListAction ({ commit }) {
      return axios
        .get('http://music.henshui.com/api/musicList.js?!234')
        .then(res => {
          commit('getMusicList', res.data)
          console.log('getMusicListAction promise')
        })
    },
    getMusicListActionB ({ dispatch }) {
      return dispatch('getMusicListAction')
        .then(() => {
          console.log('dispatch promise')
        })
    },
    // 同getMusicListActionB
    async getMusicListActionC ({ dispatch }) {
      await dispatch('getMusicListActionB')
        .then(() => {
          console.log('async promise')
        })
    }
  },
  modules: {
    moduleA
  }
})

if (module.hot) {
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept(['./modules/moduleA'], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
    // const newMutations = require('./mutations').default
    const newModuleA = require('./modules/moduleA').default
    // 加载新模块
    store.hotUpdate({
      modules: {
        moduleA: newModuleA
      }
    })
  })
}
// 如果要热加载index.js内的数据，需要把数据当做模块加载进来

export default store
