<template>
  <div>
    <div id="content_wrap" class="pay">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="#"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/homeBasic" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">세차요금 결제</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">세차요금을 결제 하실 수 있습니다.<br>설명글이 들어갑니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">1회권 세차</span>는<br>세차상품과 옵션상품을 모바일로 간편 결제후 QR코드 영수증을 무인키오스크에
              읽혀서 결제하는 방식입니다.</p>
          </div>
          <!-- <a class="one_time" href="pay_onetime.html"><img src="../../assets/img/content/pay01.png" alt="">1회권 간편 결제</a> -->
          <router-link to="/payOnetime" class="one_time">
            <img src="../../assets/img/content/pay01.png" alt="">
            1회권 간편 결제
          </router-link>
        </section>
        <section class="con2" v-if="is_personal == 'MMT001'" >
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">멤버쉽 세차</span>는<br>매월 정기적으로 구독결제하여 멤버쉽에 가입되어, 세차서비스를 무제한으로
              사용할 수 있는 서비스입니다.</p>
          </div>
          <a class="membership" @click="is_membership">
            <img src="../../assets/img/content/pay02.png" alt="">
            멤버쉽 결제
          </a>
        </section>
        <section class="con2" v-if="is_personal == 'MMT002' || is_personal == 'MMT003'">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">Fleet회원 선불제 횟수차감 방식</span>은<br>세차상품권을 미리 선불로 구매하여, 사용시마다 차감되는 방식으로
            최소 50회권부터 구매 가능합니다.</p>
          </div>
          <router-link to="/payMembership" class="membership">
            <img src="../../assets/img/content/pay02.png" alt="">
            Fleet 선불권 결제
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
import FooterVue from "../footer/FooterVuePay.vue";

export default {
  components: {
    FooterVue
  },
  data(){
    return {
      is_personal : sessionStorage.getItem("mem_type")
    }
  },
  methods : {
    is_membership(){
      if(sessionStorage.getItem("is_membership") == "Y"){
        alert("이미 멤버쉽 이용 고객입니다.");
      }
      else{
        this.$router.push({name : 'PayMemberShip'});
      }
    }
  }

};
</script>