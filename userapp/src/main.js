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
import axios from 'axios';
import VCalendar from 'v-calendar';
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import CryptoJS from 'vue-cryptojs'

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$server = 'https://app.sparkpluswash.com:3000';
Vue.prototype.$mallId = '05562973';
Vue.use(VueHead);
Vue.use(CryptoJS);
Vue.use(VCalendar, {
  componentPrefix : 'vc',
})

Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)
Vue.component('FooterVue',FooterVue);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
