// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import { Tabbar, TabItem, TabContainer, TabContainerItem, Cell } from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/fontIcons/iconfont.css'

import App from './App'

Vue.config.productionTip = true

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
