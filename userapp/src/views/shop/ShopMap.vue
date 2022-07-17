<template>
  <div>
    <div id="content_wrap" class="shop_map">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/shopList" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">세차장 찾기</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">확인버튼을 누르면 목록으로 돌아갑니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">SPARKPLUS 중리점</p>
          <div id="map" style="width: 500px height: 500px;">
            <img src="../../assets/img/sparkpliswa_map.png" style="width: 100%" alt="" srcset="">
          </div>
          <p></p>
          <p>소재지 : 대구광역시 서구 와룡로 335 스파크플러스</p>
          <p>전화번호 : <a href="tel:053-573-8008">053)573-8008</a></p>
        </section>
      </article>
    </div>
    <aside>
      <div class="btn_next">
        <!-- <a href="#">확 인</a> -->
        <router-link to="/shopList">확 인</router-link>
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