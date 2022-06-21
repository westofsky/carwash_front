import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/add.css';
import './assets/css/style.css';
import VueHead from 'vue-head';
import HeaderVue from './views/header/Header';

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.component('HeaderVue',HeaderVue);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
