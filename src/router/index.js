import Main from '@/Main'
import Header from '@/header/Header'
import Player from '@/player/Player'
import List from '@/list/List'
import Lrc from '@/lrc/Lrc'
import Mplayer from '@/mplayer/Mplayer'
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    components: {
      default: Main,
      header: Header,
      mplayer: Mplayer
    },
    children: [
      {
        path: '',
        name: 'Player',
        component: Player
      },
      {
        path: '/list',
        name: 'List',
        component: List
      },
      {
        path: '/lrc',
        name: 'Lrc',
        component: Lrc
      }
    ]
  }
]
export default new Router({
  mode: 'history',
  routes
})
