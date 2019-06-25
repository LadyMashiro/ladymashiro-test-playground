import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Multiselect from 'vue-multiselect';
import store from './store/store'
Vue.use(Multiselect);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
