import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router.js'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.prototype.axios = axios


window.Vue = Vue;
window.VueRouter = VueRouter;


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
