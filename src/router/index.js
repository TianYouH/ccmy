// import Vue from 'vue'
// import Router from 'vue-router'

import Home from '../views/Home.vue'
import List from '../views/List.vue'
import ImgList from '../views/ImgList.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/imgList',
      name: 'ImgList',
      component: ImgList
    }
  ]
})
