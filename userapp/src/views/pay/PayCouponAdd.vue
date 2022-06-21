<template>
  <div>
    <div id="content_wrap" class="pay_coupon_add">
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
            <a href="#">사용 목록</a>
            <a href="#">쿠폰구매</a>
            <a class="active" href="#">쿠폰추가</a> -->
            <router-link to="/payCoupon01">미사용 목록</router-link>
            <router-link to="/payCoupon05">사용 목록</router-link>
            <router-link to="/payCouponBuy">쿠폰구매</router-link>
            <router-link to="/payCouponAdd" class="active">쿠폰추가</router-link>
          </div>
          <div class="coupon_list_wrap">
            <p class="title">추가할 쿠폰번호를 입력하세요.</p>

            <input type="text" placeholder="예) 123456789">
            <p class="warn"><img src="../../assets/img/content/ico_warn.png" alt="경고아이콘">잘못된 쿠폰번호 입니다. 오류 메세지 출력할 곳</p>
          </div>
        </section>
      </article>
    </div>

    <aside>
      <div class="btn_next">
        <!-- <a href="./register_basic04.html">추가하기</a> -->
        <router-link to="/payCouponAdd">추가하기</router-link>
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