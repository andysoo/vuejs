import moduleB from './moduleB'
export default {
  namespaced: true,
  state: { count: 1 },
  getters: {
    aCount: state => state.count * 2
  },
  modules: {
    moduleB
  },
  actions: {
    action2 ({ commit }) {
      console.log('test')
    }
  }
}
