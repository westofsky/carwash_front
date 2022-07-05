<template>
  <div>
    <div id="content_wrap" class="register_basic03">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/registerBasic0201" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">개인 회원가입</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">개인 회원가입 입니다.<br>휴대폰 번호를 등록해주세요.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title"><span class="red">휴대폰 번호</span>를 숫자만 입력하세요</p>
          <div class="phone_num_wrap">
            <input type="text" class="basic" placeholder="예) 01082247363" v-model = "phone_no">
          </div>
          <p class="warn"><img src="../../assets/img/content/ico_warn.png" alt="경고아이콘">잘못된 번호 입니다. 오류 메세지 출력할 곳</p>

          <div class="agree_privacy_wrap check_list2">
            <input type="checkbox" name="" id="privacy01" class="agree_privacy"  v-model = "agree_privacy">
            <div class="check"></div>
            <label for="privacy01"><span class="option_name">개인정보 수집 동의</span></label>
          </div>
        </section>
      </article>
    </div>



    <aside>
      <div class="btn_cancel2">
        <!-- <a href="./register_basic02.html">취소</a> -->
        <router-link to="/registerBasic0201">취소</router-link>
      </div>
      <div class="btn_next2">
        <a @click = "register">회원가입 완료</a>
        <!-- <router-link to="registerBasic04">회원가입 완료</router-link> -->
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
  data (){
    return{
      agree_check : false,
      agree_privacy : "N",
      phone_no : '',
    }
  },
  methods : {
    register(){
      if(!this.agree_privacy){
        alert("개인정보 수집에 동의해주세요.");
      }
      else if(this.phone_no == ''){
        alert("핸드폰 번호를 입력해주세요");
      }
      else{
            console.log("걸림1");
        this.$http.post('http://carwash.iptime.org:8000/userapp/chkphone', {
          phone_no : this.phone_no
        },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
          }
          }).then(
          (res) => {
            console.log("걸림2");
            if(res.data.result_code == "Y"){
              if(this.agree_check)
                this.agree_privacy = "Y";
              else
                this.agree_privacy = "N";
              this.$http.post('http://carwash.iptime.org:8000/userapp/setpmember', {
                car_no : this.car_no,
                mem_tel : this.phone_no,
                agree_age : this.$route.query.agree_age,
                agree_service : this.$route.query.agree_service,
                agree_privacy : this.agree_privacy,
                agree_finance : this.$route.query.agree_finance,
                agree_sms : this.$route.query.agree_sms,
                agree_location : this.$route.query.agree_location,
              },{headers : {
                auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then(
                (res) => {
                  if(res.data.result_code == "Y"){
                    console.log("걸림3");
                    this.$router.push({name : 'RegisterBasic04',param : {
                      car_no : this.car_no,
                    }})
                  }
                  else if(res.data.result_code == "N"){
                    // alert("회원가입 실패");
                  }
                }
              )
            }
            else if(res.data.result_code == "N"){
              alert("중복된 핸드폰 번호입니다.");
            }
          }
        )
      }
    }
  }
}
</script>