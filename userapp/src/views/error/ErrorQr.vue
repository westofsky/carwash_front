<template>
  <div>
    <div id="content_wrap" class="error_qr_01">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </a> -->
          <router-link to="/orderList01" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">1회권 세차상품</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">QR코드 결제</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="desc">
            <img src="../../assets/img/content/ico_alarm.svg" alt="">
            <p>무인키오스크에 부착된 QR코드를<br>스캔해 주세요.</p>
          </div>
          <div class="qr_scan">
            <img src="../../assets/img/content/QR_dummy.jpg" alt="">
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