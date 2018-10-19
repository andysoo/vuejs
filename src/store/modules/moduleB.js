export default {
  namespaced: true,
  state: {
    count: 23,
    msg: 123456
  },
  getters: {
    bCount (state, getters, rootState, rootGetters) {
      return state.count + rootState.count
    }
  },
  mutations: {
    changeCount (state, payload) {
      state.count = payload
    },
    changeMsg (state, payload) {
      state.msg = payload
    }
  },
  actions: {
    action1 ({ commit, dispatch, state, getters, rootState, rootGetters }, payload) {
      commit('changeCount', 3333)
      commit('addCountStep', { step: 3 }, { root: true })
      dispatch('moduleA/action2', null, { root: true })
    }
  }
}
