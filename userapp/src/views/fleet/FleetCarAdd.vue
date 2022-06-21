<template>
  <div>
    <div id="content_wrap" class="fleet_car_list">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </a> -->
          <router-link to="/homeFleet01" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">차량등록</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">FLEET 차량관리 화면입니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="section_tab">
            <!-- <a class="active" href="#">차량등록</a>
            <a href="#">등록현황</a> -->
            <router-link to="/fleetCarAdd" class="active">차량등록</router-link>
            <router-link to="/fleetCarList">등록현황</router-link>
          </div>
          <div class="fleet_car_list_empty">
            <p>등록 차량 대수가 30대 이상인 경우에는 차량리스트를 FAX 또는 이메일로 매장 관리자에게 전달하면 엑셀 업로드 해드립니다.</p>
            <a class="btn_arrow" href="#">차량 추가하기</a>
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