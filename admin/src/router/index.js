import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login';
import Home from '../views/home/Home';
import Customer01 from '../views/customer/Customer01';
import Customer02 from '../views/customer/Customer02';
import Customer03 from '../views/customer/Customer03';
import Equ01 from '../views/equipment/Equ01';
import Equ02 from '../views/equipment/Equ02';
import Equ03 from '../views/equipment/Equ03';
import Popup from '../views/popup/Popup';
import Product01 from '../views/product/Product01';
import Product02 from '../views/product/Product02';
import Product03 from '../views/product/Product03';
import Promotion01 from '../views/promotion/Promotion01';
import Promotion02 from '../views/promotion/Promotion02';
import Sale01 from '../views/sale/Sale01';
import Sale02 from '../views/sale/Sale02';
import Setting01 from '../views/setting/Setting01';
import Setting02 from '../views/setting/Setting02';
import Setting03 from '../views/setting/Setting03';
import Setting04 from '../views/setting/Setting04';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Sale01',
    component: Sale01
  },
  {
    path: '/Sale02',
    component: Sale02
  },
  {
    path: '/Customer01',
    component: Customer01
  },
  {
    path: '/Customer02',
    component: Customer02
  },
  {
    path: '/Customer03',
    component: Customer03
  },
  {
    path: '/Equ01',
    component: Equ01
  },
  {
    path: '/Equ02',
    component: Equ02
  },
  {
    path: '/Equ03',
    component: Equ03
  },
  {
    path: '/Popup',
    component: Popup
  },
  {
    path: '/Product01',
    component: Product01
  },
  {
    path: '/Product02',
    component: Product02
  },
  {
    path: '/Product03',
    component: Product03
  },
  {
    path: '/Promotion01',
    component: Promotion01
  },
  {
    path: '/Promotion02',
    component: Promotion02
  },
  {
    path: '/Setting01',
    component: Setting01
  },
  {
    path: '/Setting02',
    component: Setting02
  },
  {
    path: '/Setting03',
    component: Setting03
  },
  {
    path: '/Setting04',
    component: Setting04
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
