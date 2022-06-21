import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/common.css';
import './assets/css/content.css';
import './assets/css/layout.css';
import './assets/css/main.css';
import './assets/css/creditcard.css';
import VueHead from 'vue-head';
import FooterVue from "./views/footer/FooterVue.vue";

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.component('FooterVue',FooterVue);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
