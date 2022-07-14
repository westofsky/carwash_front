<template>
  <div id="tabBar">
    <ul>
      <li>
        <!-- <a class="active" href="./home.html">
            <img class="off" src="../../assets/img/nav_home_off.svg" alt="홈">
            <img class="on" src="../../assets/img/nav_home_on.svg" alt="홈">
            <p>홈</p>
          </a> -->
        <router-link to="/homeBasic">
          <img class="off" src="../../assets/img/nav_home_off.svg" alt="홈">
          <img class="on" src="../../assets/img/nav_home_on.svg" alt="홈">
          <p>홈</p>
        </router-link>
      </li>
      <li>
        <!-- <a href="./pay.html">
            <img class="off" src="../../assets/img/nav_pay_off.svg" alt="요금결제">
            <img class="on" src="../../assets/img/nav_pay_on.svg" alt="요금결제">
            <p>요금결제</p>
          </a> -->
        <router-link to="/payVue" class="active">
          <img class="off" src="../../assets/img/nav_pay_off.svg" alt="요금결제">
          <img class="on" src="../../assets/img/nav_pay_on.svg" alt="요금결제">
          <p>요금결제</p>
        </router-link>
      </li>
      <li>
        <!-- <a href="#">
            <img class="off" src="../../assets/img/nav_coupon_off.svg" alt="쿠폰">
            <img class="on" src="../../assets/img/nav_coupon_on.svg" alt="쿠폰">
            <p>쿠폰</p>
          </a> -->
        <router-link to="/payCoupon01">
          <img class="off" src="../../assets/img/nav_coupon_off.svg" alt="쿠폰">
          <img class="on" src="../../assets/img/nav_coupon_on.svg" alt="쿠폰">
          <p>쿠폰</p>
        </router-link>
      </li>
      <li>
        <!-- <a href="#">
            <img class="off" src="../../assets/img/nav_my_off.svg" alt="내정보">
            <img class="on" src="../../assets/img/nav_my_on.svg" alt="내정보">
            <p>내정보</p>
          </a> -->
        <router-link to="/myInfoList">
          <img class="off" src="../../assets/img/nav_my_off.svg" alt="내정보">
          <img class="on" src="../../assets/img/nav_my_on.svg" alt="내정보">
          <p>내정보</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>