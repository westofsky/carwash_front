<template>
  <div>
    <div id="content_wrap" class="pay_coupon_01">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/registerBasic0201" class="btn_back">
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
            <a class="active" href="#">미사용 목록</a>
            <a href="#">사용 목록</a>
            <a href="#">쿠폰구매</a>
            <a href="#">쿠폰추가</a>
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
                    <li>유효기간 : <span class="coupon_period">2022/06/01 24:00:00</span></li>
                    <li>QR쿠폰번호 : <span class="coupon_QRnum">WDC2022050227</span></li>
                  </ul>
                  <button class="gift_coupon btn_basic" type="button">선물하기</button>
                  <button class="using_coupon btn_arrow" type="button">키오스크 쿠폰사용</button>
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
                    <li>유효기간 : <span class="coupon_period">2022/06/01 24:00:00</span></li>
                    <li>QR쿠폰번호 : <span class="coupon_QRnum">WDC2022050227</span></li>
                  </ul>
                  <button class="gift_coupon btn_basic" type="button">선물하기</button>
                  <button class="using_coupon btn_arrow" type="button">키오스크 쿠폰사용</button>
                </div>
              </li>

              <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../../assets/img/content/ico_coupon_free.svg" alt="">
                  <p>Gift 쿠폰_BUBBLE (1/5)</p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="coupon_num">WDC2022050227</span></li>
                    <li>발급일자 : <span class="coupon_date">2022/05/02 10:52:39</span></li>
                    <li>유효기간 : <span class="coupon_period">2022/06/01 24:00:00</span></li>
                    <li>QR쿠폰번호 : <span class="coupon_QRnum">WDC2022050227</span></li>
                  </ul>
                  <button class="gift_coupon btn_basic" type="button">선물하기</button>
                  <button class="using_coupon btn_arrow" type="button">키오스크 쿠폰사용</button>
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
                    <li>유효기간 : <span class="coupon_period">2022/06/01 24:00:00</span></li>
                    <li>QR쿠폰번호 : <span class="coupon_QRnum">WDC2022050227</span></li>
                  </ul>
                  <button class="gift_coupon btn_basic" type="button">선물하기</button>
                  <button class="using_coupon btn_arrow" type="button">키오스크 쿠폰사용</button>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div class="content_pop">
          <div class="pop_title">
            <img src="../../assets/img/content/ico_gift.svg" alt="">
            <p>선물하기</p>
          </div>
          <div class="pop_cont">
            <div class="coupon_name">
              <img src="../../assets/img/content/ico_coupon_percent.svg" alt="">
              <p>Gift 쿠폰 : PREMOUM(999회권)</p>
            </div>
            <ul class="coupon_info">
              <li>쿠폰번호 : <span class="coupon_num">WDC2022050227</span></li>
              <li>발급일자 : <span class="coupon_date">2022/05/02 10:52:39</span></li>
              <li>유효기간 : <span class="coupon_period">2022/06/01 24:00:00</span></li>
              <li>QR쿠폰번호 : <span class="coupon_QRnum">WDC2022050227</span></li>
            </ul>
            <div class="coupon_QR">
              <img src="../../assets/img/content/one_QR.jpg" alt="">
            </div>
            <div class="coupon_gift_who">
              <p>선물 받으실 분 휴대폰번호<span class="required">*</span></p>
              <form class="coupon_gift_text" action="">
                <input type="text" placeholder="01012345678" class="gift_who_number">
                <button class="btn_arrow" type="submit" @click="givingAPresent()">선물하기</button>
              </form>
            </div>
          </div>
          <button class="pop_close"><img src="../../assets/img/content/btn_close.svg" alt=""></button>
        </div>
        <span class="content_pop_bg"></span>
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
  },

  methods: {
    givingAPresent() {
      this.$router.push('/payCoupon01');
    }
  }
};
</script>