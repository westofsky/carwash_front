<template>
  <div>
    <div id="content_wrap" class="pay_onetime_order_01">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/payOnetime" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">구매내역</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">아래 선택 상품이 맞는지 확인해주세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">선택 상품</p>
          <div class="info_table onetime_pay_table">
            <table>
              <tr>
                <td class="table_name">BASIC SPA</td>
                <td class="table_price">12,000원</td>
              </tr>
              <tr>
                <td class="table_name">옵션추가 / 타이어세차</td>
                <td class="table_price">3,000원</td>
              </tr>
              <tr>
                <td class="table_name">옵션추가 / 하부세차</td>
                <td class="table_price">3,000원</td>
              </tr>
              <tr class="total_price">
                <td>합계</td>
                <td class="fontBold fRed">18,000원</td>
              </tr>
            </table>
          </div>
        </section>
      </article>
    </div>
    <aside>
      <div class="bubble_say">
        <p>
          옵션상품을 선택한 경우 <span class="warn">무료쿠폰 사용 안되며, 퍼센트 할인만 사용 가능</span>합니다
        </p>
      </div>
      <div class="btn_next3_left">
        <!-- <a href="#"><img src="../../assets/img/content/btn_coupon.svg">쿠폰사용</a> -->
        <router-link to="/payOnetimeCoupon01">
          <img src="../../assets/img/content/btn_coupon.svg">
          쿠폰사용
        </router-link>
      </div>
      <div class="btn_next3_right">
        <a href="#"><img src="../../assets/img/content/btn_pay.svg">결제하기</a>
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