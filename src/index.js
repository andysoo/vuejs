import Vue from 'vue'
import App from './App'
import router from './router'
/* eslint no-new:off */
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  next()
})
router.beforeResolve((to, from, next) => { // 全局解析守卫
  console.log('beforeResolve', to, from)
  next()
})
router.afterEach((to, from) => { // 全局解析守卫
  console.log('afterEach', to, from)
})
new Vue({
  el: '#app',
  router,
  // render:h=>h('div','test')
  render: h => h(App)
})
