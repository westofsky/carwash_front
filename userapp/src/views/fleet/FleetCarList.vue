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
          <p class="info">{{mem_name}}님 차량관리 화면입니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="fleet_car_list_empty">
            <p>FLEET(사업자 또는 단체) 차량중 선불이용차량 차량을 구분하여 등록해 주시기 바랍니다.<br>- 데이터 없을 경우 텍스트와 버튼 -</p>
            <input type="text" class="car_num" placeholder="10다 1000" v-model="car_no">
            <p></p>
            <a class="btn_arrow" href="#" @click="car_inforegister">차량 추가하기</a>
          </div>
          <div class="fleet_car_list_wrap">
            <ul class="check_list">
              <li v-for = "(info, index) in car_list" :key="index">
                <div class="car_img"><img src="../../assets/img/content/car_profile_dummy.jpg" alt=""></div>
                <label :for="index">
                  <p class="car_num">{{info.car_no}}</p>
                  <p class="car_date">등록일 : {{info.reg_date}}</p>
                </label>
                <input type="checkbox" name="fleetCarList" :id="index" v-model="delete_list" :value="info.car_no" class="fleetCarList">
                <div class="check"></div>
              </li>

            </ul>
            <div class="fleet_car_btn" v-if="car_list.length != 0">
              <button style = "width:100%" class="fleet_car_delete btn_basic" type="submit" @click="car_infodelete">선택 삭제 <img
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
      mem_chk : sessionStorage.getItem('mem_type'),
      mem_name : sessionStorage.getItem('mem_name'),
      car_list : [],
      car_no: '',
      car_no_list: [],
      delete_list : [],
      is_ok : false
    }
  },
  mounted(){
    this.car_infolist();
  },
  components: {
    FooterVue
  },

  methods: {
     async carNumCheck(str) {
        str = str.replace(/ /gi, "");
        if(str.length >8){
          var region = str.substring(0, 2);
          var checkRegion = "서울,부산,대구,인천,대전,광주,울산,제주,경기,강원,충남,충북,전남,전북,경남,경북";
          var arrCheckRegion = checkRegion.split(',');
          for (var i = 0; i < arrCheckRegion.length; i++) {
            if (region == arrCheckRegion[i]) {
              str = str.substring(2, str.length);
              console.log(str)
              if (/^\d{2}[가-힣]\d{4}/.exec(str) !== null && str.length === 7) {
                console.log('1')
                this.is_ok = true;
              }
              else if (/^\d{3}[가-힣]\d{4}/.exec(str) !== null && str.length === 8) {
                console.log('2')
                this.is_ok = true;
              }
              else{
                console.log('3')
                this.is_ok = false;
              }
              break;
            }
          }
        }else{
          console.log(str)
            if (/^\d{2}[가-힣]\d{4}/.exec(str) !== null && str.length === 7) {
              console.log('1')
              this.is_ok = true;
            }
            else if (/^\d{3}[가-힣]\d{4}/.exec(str) !== null && str.length === 8) {
              console.log('2')
              this.is_ok = true;
            }
            else{
              console.log('3')
              this.is_ok = false;
          }
        }
    },
    async car_infolist(){
      this.$http.post(this.$server+'/userapp/getfleetcar', {
      mem_no : this.mem_no
      },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        this.car_list = res.data
        console.log(this.car_list)
      })
    },
    async car_infodelete(){
      console.log(this.delete_list);
 
      this.$http.post(this.$server+'/userapp/setfleetcardel', {
      mem_no : this.mem_no,
      car_no : this.delete_list
      },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        console.log(res.data)
        if(res.data.result_code == 'Y'){
          alert("성공");
          this.$router.go();
        }else if (res.data.result_code == 'N'){
          alert("실패");
          this.$router.go();
        }
      })
    },
    async car_inforegister(){
      this.carNumCheck(this.car_no)
      if(this.is_ok){
        this.$http.post(this.$server+'/userapp/setfleetcarins', {
        mem_no : this.mem_no,
        car_no : this.car_no.replace(/ /gi, "")
        
        },{headers : {
            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
          }
        }).then((res) => {
          console.log(res.data)
          if(res.data.result_code == 'Y'){
            alert('성공입니다');
            this.$router.go();
          }else if(res.data.result_code == 'N'){
            alert('실패입니다');
            this.$router.go();
          }else if (res.data.result_code == 'Duple'){
            alert('중복 차량이 있습니다.');
            this.$router.go();
          }
        })
      }else{
        alert('올바르지 않은 차량 형식입니다!')
      }
    },
  }
};
</script>