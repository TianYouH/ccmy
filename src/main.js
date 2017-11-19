// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import router from './router'
import './assets/fontIcons/iconfont.css'

import App from './App'

Vue.config.productionTip = true

Vue.use(MINT)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
