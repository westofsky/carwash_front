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
            <!-- <a href="#">차량등록</a>
            <a class="active" href="#">등록현황</a> -->
            <router-link to="/fleetCarAdd">차량등록</router-link>
            <router-link to="/fleetCarList" class="active">등록현황</router-link>
          </div>
          <div class="fleet_car_list_empty">
            <p>FLEET(사업자 또는 단체) 차량중 선불이용차량 차량을 구분하여 등록해 주시기 바랍니다.<br>- 데이터 없을 경우 텍스트와 버튼 -</p>
            <a class="btn_arrow" href="#">차량 추가하기</a>
          </div>
          <div class="fleet_car_list_wrap">
            <ul class="check_list">
              <li>
                <div class="car_img"><img src="../../assets/img/content/car_profile_dummy.jpg" alt=""></div>
                <label for="fleetCarList01">
                  <p class="car_num">서울33다 8477</p>
                  <p class="car_date">등록일 : 2022/05/22</p>
                </label>
                <input type="checkbox" name="fleetCarList" id="fleetCarList01" class="fleetCarList">
                <div class="check"></div>
              </li>
              <li>
                <div class="car_img"><img src="../../assets/img/content/car_profile_dummy.jpg" alt=""></div>
                <label for="fleetCarList02">
                  <p class="car_num">서울33다 8477</p>
                  <p class="car_date">등록일 : 2022/05/22</p>
                </label>
                <input type="checkbox" name="fleetCarList" id="fleetCarList02" class="fleetCarList">
                <div class="check"></div>
              </li>
              <li>
                <div class="car_img"><img src="../../assets/img/content/car_profile_dummy.jpg" alt=""></div>
                <label for="fleetCarList03">
                  <p class="car_num">서울33다 8477</p>
                  <p class="car_date">등록일 : 2022/05/22</p>
                </label>
                <input type="checkbox" name="fleetCarList" id="fleetCarList03" class="fleetCarList">
                <div class="check"></div>
              </li>
            </ul>
            <div class="fleet_car_btn">
              <a href="#" class="fleet_car_add btn_arrow">차량 추가하기</a>
              <button class="fleet_car_delete btn_basic" type="submit" @click="deleteSelection()">선택 삭제 <img
                  src="../../assets/img/content/ico_close2.svg" alt=""></button>
            </div>
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
  },

  methods: {
    deleteSelection() {
      this.$router.push('/fleetCarList');
    }
  }
};
</script>