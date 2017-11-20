import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'common/js/rem'
import fastClick from 'fastclick'



fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
