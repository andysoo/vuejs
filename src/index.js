import Vue from 'vue'
import App from './App'
// import router from './router'
import store from './store'
/* eslint no-new:off */

new Vue({
  name: 'APP',
  el: '#app',
  // router,
  store,
  // render:h=>h('div','test')
  render: h => h(App)
})
