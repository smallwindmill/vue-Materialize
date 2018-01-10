import Vue from 'vue'
import Router from 'vue-router'
// import VueRouter from 'vue-router'
import Hello from '@/components/Hello'

import Nav from '@/components/nav'
import SideNav from '@/components/sideNav'
import Lunbo from '@/components/lunbo'

Vue.use(Router)

export default new Router({
// const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
      default: Hello,
      },
    children: [
    {
      path: '',
      components: {
        a: SideNav,
        b: Lunbo,
        c: Nav
      }
    }]

    }

  ]
})

