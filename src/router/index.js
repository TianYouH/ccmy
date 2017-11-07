import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => { require(['../views/Home.vue'], resolve) }
    },
    {
      path: '/list',
      name: 'List',
      component: resolve => { require(['../views/List.vue'], resolve) }
    },
    {
      path: '/imgList',
      name: 'ImgList',
      component: resolve => { require(['../views/ImgList.vue'], resolve) }
    }
  ]
})
