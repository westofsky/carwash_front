<template>
  <div>
    <div id="content_wrap" class="pay_coupon_01">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/homeBasic" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">쿠폰 구매 사용</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">쿠폰 리스트를 관리하거나 구매하실 수 있습니다
          </p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="section_tab">
            <!-- <a href="#">미사용 목록</a>
            <a class="active" href="#">사용 목록</a>
            <a href="#">쿠폰구매</a>
            <a href="#">쿠폰추가</a> -->
            <router-link to="/payCoupon01">미사용 목록</router-link>
            <router-link to="/payCoupon05" class="active">사용 목록</router-link>
            <router-link to="/payCouponBuy">쿠폰구매</router-link>
            <router-link to="/payCouponAdd">쿠폰추가</router-link>
          </div>
          <div class="coupon_list_wrap">
            <ul>
              <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../../assets/img/content/ico_coupon_free.svg" alt="">
                  <p>Gift 쿠폰_BUBBLE (1/5)</p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="coupon_num">WDC2022050227</span></li>
                    <li>발급일자 : <span class="coupon_date">2022/05/02 10:52:39</span></li>
                    <li>유효기간 : <span class="coupon_period">사용완료</span></li>
                    <li>QR쿠폰번호 : <span class="coupon_QRnum">WDC2022050227</span></li>
                  </ul>

                </div>
              </li>

              <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../../assets/img/content/ico_coupon_percent.svg" alt="">
                  <p>Gift 쿠폰_BUBBLE (1/5)</p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="coupon_num">WDC2022050227</span></li>
                    <li>발급일자 : <span class="coupon_date">2022/05/02 10:52:39</span></li>
                    <li>유효기간 : <span class="coupon_period">만료</span></li>
                    <li>QR쿠폰번호 : <span class="coupon_QRnum">WDC2022050227</span></li>
                  </ul>

                </div>
              </li>


            </ul>
          </div>
        </section>
      </article>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import FooterVue from "../footer/FooterVue.vue";

export default {
  components: {
    FooterVue
  }
};
</script>