<template>
  <div>
    <div id="content_wrap" class="payment">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="#"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/homeBasic" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">결제등록</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">결제 정보를 등록하시면 간편하게<br>결제하실 수 있습니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">신용/체크 카드 등록 시<br></span>1회 세차권, Gift쿠폰, 멤버쉽<br>결제 가능합니다.</p>
          </div>
          <router-link to="/PaymentCard">
            <a class="card" href="#"><img src="../../assets/img/content/payment01.png" alt="">신용/체크 카드 등록</a>
          </router-link>
        </section>
        <section class="con2">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">모바일 간편결제 등록 시<br></span>1회권 세차권만 결제 가능합니다.</p>
          </div>
          <div class="pay_register">
            <a class="naverpay" href="#"><img src="../../assets/img/content/payment02.png" alt="">네이버페이 등록</a>
            <a class="kakaopay" href="#"><img src="../../assets/img/content/payment03.png" alt="">카카오페이 등록</a>
          </div>
        </section>
        <section class="how_use">
          <p class="title">이용방법 안내</p>
          <ul>
            <li>
              <p>결제 정보를 등록해두시면 간편하게 이용하실 수있습니다.</p>
            </li>
            <li>
              <p>신용/체크 카드 등록 시 에는 2회 세차권, Gift쿠폰, 멤버쉽 결제만 가능합니다.</p>
            </li>
          </ul>
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