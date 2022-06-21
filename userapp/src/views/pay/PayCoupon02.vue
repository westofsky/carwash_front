<template>
  <div>
    <div id="content_wrap" class="pay_onetime_order_02">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/payCoupon01" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">쿠폰 상세</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">쿠폰 정보를 확인하세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">Gift쿠폰_BUBBLE(5회권)</p>
          <div class="info_table onetime_pay_table">
            <table>
              <tr>
                <td class="table_name">Gift_BUBBLE(2/5)</td>
                <td class="table_price">39,000원</td>
              </tr>

              <tr class="total_price">
                <td>합계</td>
                <td class="fontBold">39,000원</td>
              </tr>
            </table>
          </div>




          <div class="onetime_pay_info BRT_none">
            <ul>
              <li>결제승인번호 : WD2022051402</li>
              <li>결제시간 : 2022/05/14/ 14:26:35</li>
              <li>결제수단 : 농협카드 5461-11**-948</li>
              <li>결제밴사 : KICC</li>
            </ul>

            <div class="info_QR_wrap">
              <div class="info_QR"><img src="../../assets/img/content/one_QR.jpg" alt=""></div>

              <p>생성된 QR코드 영수증을 무인키오스크 <br>QR스캐너에 스캔해주세요</p>
            </div>
          </div>
        </section>
      </article>

    </div>



    <aside>
      <div class="btn_next active">
        <!-- <a href="#">확 인</a> -->
        <router-link to="/payCoupon01">확 인</router-link>
      </div>
    </aside>
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