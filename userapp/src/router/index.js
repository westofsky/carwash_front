import Vue from 'vue'
import VueRouter from 'vue-router'
import ErrorQr from '../views/error/ErrorQr';
import FleetCarAdd from '../views/fleet/FleetCarAdd';
import FleetCarList from '../views/fleet/FleetCarList';
import FleetPrePay01 from '../views/fleet/FleetPrePay01';
import FleetPrePay02 from '../views/fleet/FleetPrePay02';
import HomeBasic from '../views/home/HomeBasic';
import HomeFleet01 from '../views/home/HomeFleet01';
import HomeFleet02 from '../views/home/HomeFleet02';
import LoginFindId from '../views/login/LoginFindId';
import LoginFindPw from '../views/login/LoginFindPw';
import LoginVue from '../views/login/LoginVue';
import MyInfoInfo from '../views/myInfo/MyInfoInfo';
import MyInfoList from '../views/myInfo/MyInfoList';
import MyInfoMembership from '../views/myInfo/MyInfoMembership';
import MyInfoMembershipCancel from '../views/myInfo/MyInfoMembershipCancel';
import MyInfoRegisterCancel from '../views/myInfo/MyInfoRegisterCancel';
import MyInfoWash from '../views/myInfo/MyInfoWash';
import NoticeDetail from '../views/notice/NoticeDetail';
import NoticeList from '../views/notice/NoticeList';
import OrderList01 from '../views/order/OrderList01';
import OrderList02 from '../views/order/OrderList02';
import PayCoupon01 from '../views/pay/PayCoupon01';
import PayCoupon02 from '../views/pay/PayCoupon02';
import PayCoupon03 from '../views/pay/PayCoupon03';
import PayCoupon04 from '../views/pay/PayCoupon04';
import PayCoupon05 from '../views/pay/PayCoupon05';
import PayCouponAdd from '../views/pay/PayCouponAdd';
import PayCouponBuy from '../views/pay/PayCouponBuy';
import PayMembership from '../views/pay/PayMembership';
import PayMembershipBk from '../views/pay/PayMembershipBk';
import PayOnetime from '../views/pay/PayOnetime';
import PayOnetimeCoupon01 from '../views/pay/PayOnetimeCoupon01';
import PayOnetimeCoupon02 from '../views/pay/PayOnetimeCoupon02';
import PayOnetimeOrder01 from '../views/pay/PayOnetimeOrder01';
import PayOnetimeOrder02 from '../views/pay/PayOnetimeOrder02';
import PayVue from '../views/pay/PayVue';
import PaymentVue from '../views/payment/PaymentVue';
import PaymentCard from '../views/payment/PaymentCard';
import PopUp from '../views/popUp/PopUp';
import RegisterBasic01 from '../views/register/RegisterBasic01';
import RegisterBasic03 from '../views/register/RegisterBasic03';
import RegisterBasic04 from '../views/register/RegisterBasic04';
import RegisterBasic0201 from '../views/register/RegisterBasic0201';
import RegisterBasic0202 from '../views/register/RegisterBasic0202';
import RegisterFleet01 from '../views/register/RegisterFleet01';
import RegisterFleet02 from '../views/register/RegisterFleet02';
import RegisterFleet03 from '../views/register/RegisterFleet03';
import RegisterTerms from '../views/register/RegisterTerms';
import ShopList from '../views/shop/ShopList';
import ShopMap from '../views/shop/ShopMap';
import MyInfoInfoContentPop from '../views/myInfo/MyInfoInfoContentPop';

Vue.use(VueRouter)

const routes = [
  {
    path: '/errorQr',
    component: ErrorQr
  },
  {
    path: '/fleetCarAdd',
    component: FleetCarAdd
  },
  {
    path: '/fleetCarList',
    component: FleetCarList
  },
  {
    path: '/fleetPrePay01',
    component: FleetPrePay01
  },
  {
    path: '/fleetPrePay02',
    component: FleetPrePay02
  },
  {
    path: '/homeBasic',
    component: HomeBasic
  },
  {
    path: '/homeFleet01',
    component: HomeFleet01
  },
  {
    path: '/homeFleet02',
    component: HomeFleet02
  },
  {
    path: '/loginFindId',
    component: LoginFindId
  },
  {
    path: '/loginFindPw',
    component: LoginFindPw
  },
  {
    path: '/',
    component: LoginVue
  },
  {
    path: '/myInfoInfo',
    component: MyInfoInfo
  },
  {
    path: '/myInfoList',
    component: MyInfoList
  },
  {
    path: '/myInfoMembership',
    component: MyInfoMembership
  },
  {
    path: '/myInfoMembershipCancel',
    component: MyInfoMembershipCancel
  },
  {
    path: '/myInfoRegisterCancel',
    component: MyInfoRegisterCancel
  },
  {
    path: '/myInfoWash',
    component: MyInfoWash
  },
  {
    path: '/noticeDetail',
    component: NoticeDetail
  },
  {
    path: '/noticeList',
    component: NoticeList
  },
  {
    path: '/orderList01',
    component: OrderList01
  },
  {
    path: '/OrderList02',
    component: OrderList02
  },
  {
    path: '/payCoupon01',
    component: PayCoupon01
  },
  {
    path: '/PayCoupon02',
    component: PayCoupon02
  },
  {
    path: '/PayCoupon03',
    component: PayCoupon03
  },
  {
    path: '/PayCoupon04',
    component: PayCoupon04
  },
  {
    path: '/PayCoupon05',
    component: PayCoupon05
  },
  {
    path: '/PayCouponAdd',
    component: PayCouponAdd
  },
  {
    path: '/PayCouponBuy',
    component: PayCouponBuy
  },
  {
    path: '/PayMembership',
    component: PayMembership
  },
  {
    path: '/PayMembershipBk',
    component: PayMembershipBk
  },
  {
    path: '/PayOnetime',
    component: PayOnetime
  },
  {
    path: '/PayOnetimeCoupon01',
    component: PayOnetimeCoupon01
  },
  {
    path: '/PayOnetimeCoupon02',
    component: PayOnetimeCoupon02
  },
  {
    path: '/PayOnetimeOrder01',
    component: PayOnetimeOrder01
  },
  {
    path: '/PayOnetimeOrder02',
    component: PayOnetimeOrder02
  },
  {
    path: '/PayVue',
    component: PayVue
  },
  {
    path: '/PaymentVue',
    component: PaymentVue
  },
  {
    path : '/PaymentCard',
    component : PaymentCard
  },
  {
    path: '/PopUp',
    component: PopUp
  },
  {
    path: '/RegisterBasic01',
    component: RegisterBasic01
  },
  {
    path: '/RegisterBasic03',
    component: RegisterBasic03
  },
  {
    path: '/RegisterBasic04',
    component: RegisterBasic04
  },
  {
    path: '/RegisterBasic0201',
    component: RegisterBasic0201
  },
  {
    path: '/RegisterBasic0202',
    component: RegisterBasic0202
  },
  {
    path: '/RegisterFleet01',
    component: RegisterFleet01
  },
  {
    path: '/RegisterFleet02',
    component: RegisterFleet02
  },
  {
    path: '/RegisterFleet03',
    component: RegisterFleet03
  },
  {
    path: '/RegisterTerms',
    component: RegisterTerms
  },
  {
    path: '/ShopList',
    component: ShopList
  },
  {
    path: '/ShopMap',
    component: ShopMap
  },
  {
    path: '/myInfoInfoContentPop',
    component: MyInfoInfoContentPop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
