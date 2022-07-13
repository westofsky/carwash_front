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
import Notice from '../views/notice/Notice';
import NoticeList from '../views/notice/NoticeList';
import OrderList01 from '../views/order/OrderList01';
import OrderList02 from '../views/order/OrderList02';
import OrderListReceipt from '../views/order/OrderListReceipt';
import PayCoupon01 from '../views/pay/PayCoupon01';
import PayCoupon02 from '../views/pay/PayCoupon02';
import PayCoupon03 from '../views/pay/PayCoupon03';
import PayCoupon04 from '../views/pay/PayCoupon04';
import PayCoupon05 from '../views/pay/PayCoupon05';
import PayCouponAdd from '../views/pay/PayCouponAdd';
import PayCouponBuy from '../views/pay/PayCouponBuy';
import PayMembership from '../views/pay/PayMembership';
import PayMemberShipOrder01 from '../views/pay/PayMemberShipOrder01';
import PayMembershipBk from '../views/pay/PayMembershipBk';
import PayReceipt from '../views/pay/PayReceipt';
import PayOnetime from '../views/pay/PayOnetime';
import PayOnetimeCoupon01 from '../views/pay/PayOnetimeCoupon01';
import PayOnetimeCoupon02 from '../views/pay/PayOnetimeCoupon02';
import PayOnetimeOrder01 from '../views/pay/PayOnetimeOrder01';
import PayOnetimeSelectMethod from '../views/pay/PayOnetimeSelectMethod';
import PayVue from '../views/pay/PayVue';
import PaymentVue from '../views/payment/PaymentVue';
import PaymentCard from '../views/payment/PaymentCard';
import PaymentCardRegisterOk from '../views/payment/PaymentCardRegisterOk';
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
import Service_Prepare from '../views/Service_Prepare';

Vue.use(VueRouter)

const requireAuth = () => (to, from, next) =>{
  if(localStorage.getItem("auto_mem_id")){
    return next();
  }
	else{
    if (sessionStorage.getItem("mem_id")){
      return next();
    }
    alert('잘못된 접근입니다. 로그인 해주세요');
    next('/');
  }
}

const routes = [
  {
    path: '/errorQr',
    component: ErrorQr
  },
  {
    path: '/fleetCarAdd',
    component: FleetCarAdd,
    beforeEnter : requireAuth()
  },
  {
    path: '/fleetCarList',
    component: FleetCarList,
    beforeEnter : requireAuth()
  },
  {
    path: '/fleetPrePay01',
    component: FleetPrePay01,
    beforeEnter : requireAuth()
  },
  {
    path: '/fleetPrePay02',
    component: FleetPrePay02,
    beforeEnter : requireAuth()
  },
  {
    path: '/homeBasic',
    component: HomeBasic,
    name : 'HomeBasic',
    beforeEnter : requireAuth()
  },
  {
    path: '/homeFleet01',
    component: HomeFleet01,
    name : 'HomeFleet01',
    beforeEnter : requireAuth()
  },
  {
    path: '/homeFleet02',
    component: HomeFleet02,
    beforeEnter : requireAuth()
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
    component: LoginVue,
    name : 'LoginVue'
  },
  {
    path: '/myInfoInfo',
    component: MyInfoInfo,
    beforeEnter : requireAuth()
  },
  {
    path: '/myInfoList',
    component: MyInfoList,
    beforeEnter : requireAuth()
  },
  {
    path: '/myInfoMembership',
    component: MyInfoMembership,
    beforeEnter : requireAuth()
  },
  {
    path: '/myInfoMembershipCancel',
    component: MyInfoMembershipCancel,
    beforeEnter : requireAuth()
  },
  {
    path: '/myInfoRegisterCancel',
    component: MyInfoRegisterCancel,
    beforeEnter : requireAuth()
  },
  {
    path: '/myInfoWash',
    component: MyInfoWash,
    beforeEnter : requireAuth()
  },
  {
    path: '/noticeDetail',
    component: NoticeDetail,
    beforeEnter : requireAuth()
  },
  {
    path: '/noticeList',
    component: NoticeList,
    beforeEnter : requireAuth()
  },
  {
    path: '/orderList01',
    component: OrderList01,
    beforeEnter : requireAuth()
  },
  {
    path: '/OrderList02',
    component: OrderList02,
    beforeEnter : requireAuth()
  },
  {
    path : '/OrderListReceipt',
    component : OrderListReceipt,
    name : 'OrderListReceipt',
    beforeEnter : requireAuth()
  },
  {
    path: '/payCoupon01',
    component: PayCoupon01,
    beforeEnter : requireAuth()
  },
  {
    path: '/PayCoupon02',
    component: PayCoupon02,
    name : 'PayCoupon02',
    beforeEnter : requireAuth()
  },
  {
    path: '/PayCoupon03',
    component: PayCoupon03,
    beforeEnter : requireAuth()
  },
  {
    path: '/PayCoupon04',
    component: PayCoupon04,
    beforeEnter : requireAuth()
  },
  {
    path: '/PayCoupon05',
    component: PayCoupon05,
    beforeEnter : requireAuth()
  },
  {
    path: '/PayCouponAdd',
    component: PayCouponAdd,
    beforeEnter : requireAuth()
  },
  {
    path: '/PayCouponBuy',
    component: PayCouponBuy,
    beforeEnter : requireAuth()
  },
  {
    path: '/PayMembership',
    component: PayMembership,
    name : 'PayMemberShip',
    beforeEnter : requireAuth()
  },
  {
    path : '/PayMemberShipOrder01',
    component : PayMemberShipOrder01,
    name : 'PayMemberShipOrder01',
    beforeEnter : requireAuth()
  },
  {
    path: '/PayMembershipBk',
    component: PayMembershipBk,
    beforeEnter : requireAuth()
  },
  {
    path: '/PayReceipt',
    component: PayReceipt,
    name : 'PayReceipt',
    beforeEnter : requireAuth()
  },
  {
    path: '/PayOnetime',
    component: PayOnetime,
    name : 'PayOnetime',
    beforeEnter : requireAuth()
  },
  {
    path: '/PayOnetimeCoupon01',
    component: PayOnetimeCoupon01,
    beforeEnter : requireAuth()
  },
  {
    path: '/PayOnetimeCoupon02',
    component: PayOnetimeCoupon02,
    beforeEnter : requireAuth()
  },
  {
    path: '/PayOnetimeOrder01',
    component: PayOnetimeOrder01,
    name : 'PayOnetimeOrder01',
    props : true,
    beforeEnter : requireAuth()
  },
  {
    path : '/PayOnetimeSelectMethod',
    component : PayOnetimeSelectMethod,
    name : 'PayOnetimeSelectMethod',
    props : true,
    beforeEnter : requireAuth()
  },
  {
    path: '/PayVue',
    component: PayVue,
    name : 'PayVue',
    beforeEnter : requireAuth()
  },
  {
    path: '/PaymentVue',
    component: PaymentVue,
    name : 'PaymentVue',
    beforeEnter : requireAuth()
  },
  {
    path : '/PaymentCard',
    component : PaymentCard,
    name : 'PaymentCard',
    props : true,
    beforeEnter : requireAuth()
  },
  {
    path : '/PaymentCardRegisterOk',
    component : PaymentCardRegisterOk,
    name : 'PaymentCardRegisterOk',
    props : true,
    beforeEnter : requireAuth()
  },
  {
    path: '/PopUp',
    component: PopUp,
    beforeEnter : requireAuth()
  },
  {
    path: '/RegisterBasic01',
    component: RegisterBasic01,
    name : 'RegisterBasic01',
  },
  {
    path: '/RegisterBasic03',
    component: RegisterBasic03,
    name : 'RegisterBasic03',
    props : true,
  },
  {
    path: '/RegisterBasic04',
    component: RegisterBasic04,
    name : 'RegisterBasic04',
    props : true,
  },
  {
    path: '/RegisterBasic0201',
    component: RegisterBasic0201,
    name : 'RegisterBasic0201',
    props : true,
  },
  {
    path: '/RegisterBasic0202',
    component: RegisterBasic0202
  },
  {
    path: '/RegisterFleet01',
    component: RegisterFleet01,
    name : 'RegisterFleet01',
    props : true,
  },
  {
    path: '/RegisterFleet02',
    component: RegisterFleet02,
    name : 'RegisterFleet02',
    props : true,
  },
  {
    path: '/RegisterFleet03',
    component: RegisterFleet03,
    name : 'RegisterFleet03',
    props : true,
  },
  {
    path: '/RegisterTerms',
    component: RegisterTerms
  },
  {
    path: '/ShopList',
    component: ShopList,
    beforeEnter : requireAuth()
  },
  {
    path: '/ShopMap',
    component: ShopMap,
    beforeEnter : requireAuth()
  },
  {
    path: '/myInfoInfoContentPop',
    component: MyInfoInfoContentPop,
    beforeEnter : requireAuth()
  },
  {
    path : '/Service_Prepare',
    component : Service_Prepare,
    name : 'Service_Prepare',
    beforeEnter : requireAuth()
  },
  {
    path: '/notice',
    component: Notice,
    name : 'Notice',
    beforeEnter : requireAuth()
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
