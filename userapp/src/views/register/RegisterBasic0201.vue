<template>
  <div id="wrapper">
    <div id="content_wrap" class="register_basic02">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic01.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/registerBasic01" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">개인 회원가입</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">개인 회원가입 입니다.<br>이용하실 차량의 번호를 등록해주세요.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title"><span class="red">차량번호</span>를 입력하세요</p>
          <p class="ex">예) 123가4567, 서울12가3456</p>
          <div class="phone_num_wrap">
            <input type="text" class="basic" placeholder="예) 123가4567, 서울12가3456" v-model="car_no">
          </div>
          <p class="warn"><img src="../../assets/img/content/ico_warn.png" alt="경고아이콘">잘못된 번호 입니다. 오류 메세지 출력할 곳</p>

          <div class="Space4em"></div>
        </section>
      </article>
    </div>
    <aside>
      <div class="btn_cancel2">
        <!-- <a href="./register_basic01.html">취소</a> -->
        <router-link to="/registerBasic01">취소</router-link>
      </div>
      <div class="btn_next2">
        <a @click="registerbasic_phone">등록</a>
        <!-- <router-link to="/registerBasic03">등록</router-link> -->
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
  },
  data() {
    return {
      car_no: '',
      agree_age : "N",
      agree_service : "N",
      agree_finance : "N",
      agree_sms : "N",
      agree_location : "N",
    }
  },
  methods: {
    registerbasic_phone() {
      if (this.checkPlate(this.car_no)){
      console.log(this.car_no);
        this.$http.post('http://carwash.iptime.org:8000/userapp/chkcarno', {
          car_no : this.car_no,
        },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
          }
        }).then(
          (res) => {
            for(var i=0;i<this.$route.query.selectList.length;i++){
              switch(this.$route.query.selectList[i]){
                case "1":
                  console.log("걸림");
                  this.agree_age = "Y";
                  break;
                case "2":
                  this.agree_service = "Y";
                  break;
                case "3":
                  this.agree_finance = "Y";
                  break;
                case "4":
                  this.agree_sms = "Y";
                  break;
                case "5":
                  this.agree_location = "Y";
                  break;
              }
            }
            if(res.data.result_code == "Y"){
              this.$router.push({name : 'RegisterBasic03',query : {
                agree_age : this.agree_age,
                agree_service : this.agree_service,
                agree_finance : this.agree_finance,
                agree_sms : this.agree_sms,
                agree_location : this.agree_location,
                car_no : this.car_no,
              }})
            }
            else if(res.data.result_code == "N"){
              alert("중복된 차량 번호입니다.");
            }
          }
        )
      }
      else
        alert("차량 번호가 잘못되었습니다. 다시 입력해주세요.");
    },
    checkPlate(value) {
      var NSValue = value.replace(/ /gi, "");
      var region = NSValue.substring(0, 2);
      var checkRegion = "서울,부산,대구,인천,대전,광주,울산,제주,경기,강원,충남,충북,전남,전북,경남,경북";
      var arrCheckRegion = checkRegion.split(',');

      for (var i = 0; i < arrCheckRegion.length; i++) {
        if (region == arrCheckRegion[i]) {
          NSValue = NSValue.substring(2, NSValue.length);
          break;
        }
      }
      var typeOfCar = Number(NSValue.substring(0, 2));

      if (isNaN(typeOfCar) || typeOfCar <= 0) {
        return false;
      }
      var use = NSValue.substring(2, 3);
      var checkUse = "가,나,다,라,마,"
        + "거,너,더,러,머,버,서,어,저,"
        + "고,노,도,로,모,보,소,오,조,"
        + "구,누,두,루,무,부,수,우,주,"
        + "바,사,아,자,"
        + "배,"
        + "허,하,호,"
        + "국,합,육,해,공";
      var arrCheckUse = checkUse.split(',');
      var resultUse = 0;
      for (var j = 0; j < arrCheckUse.length; j++) {
        if (use == arrCheckUse[j]) {
          resultUse = 1;
          break;
        }
      }
      if (resultUse == 0) return false;

      var serialNumber = NSValue.substring(3, value.length);
      if (isNaN(serialNumber) || serialNumber < 1000) {
        return false;
      }
      return true;
    }
  }
}
</script>
<style>
#wrapper {
  height: 100%;
}
</style>