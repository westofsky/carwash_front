<template>
  <div>
    <div id="content_wrap" class="fleet_car_list">
      <div class="pop_local_wrap">
         <div class="pop_local">
            <a href="#" class="btn_close" onclick="closePop(document.querySelector('.pop_local_wrap'))"><img src="../../assets/img/btn_close.svg" alt=""></a>
            <div class="txt">
               <h2>지역선택</h2>
               <p>아래에서 자동차 앞 지역을 선택하세요</p>
            </div>
         </div>
         <span class="popbg" onclick="closePop(document.querySelector('.pop_local_wrap'))"></span>
      </div>
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
          <div class="fleet_car_list_empty">
            <p>FLEET(사업자 또는 단체) 차량중 선불이용차량 차량을 구분하여 등록해 주시기 바랍니다.<br>- 데이터 없을 경우 텍스트와 버튼 -</p>
            <input type="text" class="car_num" placeholder="10다 1000" v-model="car_no">
            <p></p>
            <a class="btn_arrow" href="#">차량 추가하기</a>
          </div>
          <div class="fleet_car_list_wrap">
            <ul class="check_list">
              <li v-for = "(info, index) in car_list" :key="index">
                <div class="car_img"><img src="../../assets/img/content/car_profile_dummy.jpg" alt=""></div>
                <label for="fleetCarList01">
                  <p class="car_num">{{info.car_no}}</p>
                  <p class="car_date">등록일 : {{info.reg_date}}</p>
                </label>
                <input type="checkbox" name="fleetCarList" :id="index" class="fleetCarList">
                <div class="check"></div>
              </li>
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
  data(){
    return{
      mem_no : sessionStorage.getItem('mem_no'),
      car_list : [],
      car_no: '',
      car_no_list: []
    }
  },
  mounted(){
    this.car_infolist();
  },
  components: {
    FooterVue
  },

  methods: {

    async car_infolist(){
      this.$http.post('http://carwash.iptime.org:3000/userapp/getfleetcar', {
      mem_no : 'YGF220600000005'
      },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        this.car_list = res.data
        console.log(this.car_list)
      })
    },
    async car_infodelete(delete_list){
      this.$http.post('http://carwash.iptime.org:3000/userapp/getfleetdel', {
      mem_no : this.mem_no,
      car_no : this.delete_list
      },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        if(res.data == 'Y'){
          alert("성공");
        }else if (res.data == 'N'){
          alert("실패");
        }
      })
    },
    async car_inforegister(){
      this.$http.post('http://carwash.iptime.org:3000/userapp/getfleetcarins', {
      mem_no : this.mem_no,
      car_no : this.car_no
      },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        if(res.data == 'Y'){
          alert('Y');
        }else if(res.data == 'N'){
          alert('N');
        }else if (res.data == 'duple'){
          alert('중복입니다.')
        }
      })
    },

    deleteSelection() {
      this.$router.push('/fleetCarList');
    }
  }
};
</script>