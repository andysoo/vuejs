import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/Main'
import Footer from '@/Footer'
import Cart from '@/Cart'
import Category from '@/Category'
import Home from '@/Home'
import Mpointsmall from '@/Mpointsmall'
import Phone from '@/Phone'
import Tv from '@/Tv'
import Me from '@/Me'

Vue.use(Router)

const routes = [
  {
    path: '/',
    components: {
      default: Main,
      footer: Footer
    },
    children: [
      {
        path: '',
        component: Home,
        children: [
          {
            path: '',
            meta: { index: 1 },
            component: Phone
          },
          {
            path: '/tv',
            component: Tv
          }
        ]
      },
      {
        path: '/category',
        name: '/Category',
        meta: { index: 2 },
        component: Category
      },
      {
        path: '/cart',
        name: '/Cart',
        meta: { index: 3 },
        component: Cart
      },
      {
        path: '/me',
        name: '/Me',
        meta: { index: 4 },
        component: Me
      }
    ]
  },
  {
    path: '/mpointsmall',
    name: 'Mpointsmall',
    component: Mpointsmall
  }

]

export default new Router({
  mode: 'history',
  routes
})
