import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

// import 'element-ui/lib/theme-chalk/index.css';
import installComponent from '@/plugins/installComponent'
import api from '@/api'
import '@/assets/css/reset.css'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(ElementUI);
Vue.use(installComponent)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
