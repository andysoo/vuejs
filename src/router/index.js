import Home from '@/Home'
import About from '@/About'
import User from '@/User'
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

const routes = [
  {
    name: 'Home',
    path: '/',
    components: {
      default: Home,
      header: { template: `<div>header</div>` }
    }
  },
  {
    // name: 'About',
    beforeEnter: (to, from, next) => {
      console.log('beforEnter', to, from)
      next()
    },
    path: '/about',
    component: About,
    props: true,
    children: [
      // 默认二级路由，name只能有一人在子路由上
      {
        name: 'AboutIndex',
        path: '',
        component: { template: `<div>about us index</div>` }
      },
      {
        name: 'Tel',
        path: 'tel',
        component: { template: `<div>tel:13300001111</div>` }
      },
      {
        name: 'Addr',
        path: 'addr/:id',
        props: true,
        component: {
          template: `<div>Addr{{id}}:地址省地址市</div>`,
          props: ['id']
        }
      }
    ]
  },
  {
    name: 'User',
    path: '/user',
    component: User,
    // props: true,
    // props: { userid: 123, name: 'zs' },
    props: (route) => ({
      userid: route.params.userid,
      photoid: route.query.photoid,
      sokey: route.query.sokey
    }),
    children: [
      {
        name: 'UserWho',
        path: ':userid',
        props: true,
        component: {
          template: `<div>用户{{$route.params.userid}}</div>`,
          props: ['userid']
        }
      }
    ]
  },
  {
    path: '/a',
    // redirect: '/b',// 重定向
    alias: ['/b', '/c', '/d/e/f'], // 别名
    component: { template: `<div>aaaaa</div>` }
  }
  // {
  //   name: 'User2',
  //   path: '/user2/:userid',
  //   component: User
  // }
]

export default new Router({
  mode: 'history',
  routes
})
