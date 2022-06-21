<template>
  <div>
    <div id="content_wrap" class="pre_pay">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="#"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/homeFleet02" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">FLEET 선불권 결제</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">FLEET 회원 세차요금 결제 입니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">FLEET회원 선불제 횟수차감 방식</span>은<br>세차상품권을 미리 선불로 구매하여, 사용시마다
              차감되는 방식으로 최소 50회권부터 구매 가능합니다.</p>
          </div>
          <!-- <a class="one_time" href="pay_onetime.html">
            <img src="../../assets/img/content/pay03.png" alt="">
            선불권 결제
          </a> -->
          <router-link to="/fleetPrePay02" class="one_time">
            <img src="../../assets/img/content/pay03.png" alt="">
            선불권 결제
          </router-link>
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