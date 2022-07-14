<template>
  <div>
    <div id="content_wrap" class="myinfo_info">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./login.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/myInfoList" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">내 정보</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <ul class="myinfo_info_wrap">
            <li>
              <label for="basicId" class="title">아이디</label>
              <input type="text" class="basicId" id="basicId" :value = "mem_id" disabled>
            </li>
            <li>
              <label for="basicId" class="title">회원명</label>
              <input type="text" class="basicName" id="basicName" :value = "mem_name" disabled>
            </li>
            <li>
              <label for="basicPW" class="title">비밀번호</label>
              <input type="password" class="basicPW" id="basicPW" :value = "mem_pwd" disabled>
              <button class="check" @click="open_pop">비밀번호 변경</button>
            </li>
            <li>
              <label for="basicUserNum" class="title">회원번호</label>
              <input type="text" class="basicUserNum" id="basicUserNum" :value="mem_no" disabled>
            </li>
            <li>
              <label for="basicUsergrade" class="title">회원구분</label>
              <input type="text" class="basicUsergrade" id="basicUsergrade" :value="mem_type_name" disabled>
            </li>
          </ul>
        </section>
        <div v-if="is_pop">
        <div class="content_pop">
          <div class="pop_title">
            <p>비밀번호 변경</p>
          </div>
          <div class="pop_cont">
            <ul class="myinfo_pop">
              <li>
                <label for="userPrePW" class="title">기존 비밀번호<span class="required">*</span></label>
                <input type="password" class="userPrePW" id="userPrePW" placeholder="******" @input = "check_prepw" v-model = "change_prepw" ref = 'prepw'>
                <p class="warn">{{warn_mem_prepw}}</p>
              </li>
              <li>
                <label for="userNewPW" class="title">변경 비밀번호<span class="required">*</span></label>
                <input type="password" class="userNewPW" id="userNewPW" placeholder="******" @input = "warn_check_newpw" v-model = "change_newpw" ref = 'newpw'>
                <p class="guide">{{warn_mem_newpw}}</p>
              </li>
              <li>
                <label for="userNewPWCheck" class="title">변경 비밀변호 확인<span class="required">*</span></label>
                <input type="password" class="userNewPWCheck" id="userNewPWCheck" placeholder="******" @input = "warn_check_newpw_chk" v-model = "change_newpwchk" ref = 'newpwchk'>
                <p class="warn">{{warn_mem_newpwchk}}</p>
              </li>
            </ul>
            <button class="submit btn_arrow" type="submit" @click = "change_pw">비밀번호 변경</button>
          </div>
          <button class="pop_close" @click ="is_pop=false"><img src="../../assets/img/content/btn_close.svg" alt=""></button>
        </div>
        <span class="content_pop_bg"></span>
        </div>
      </article>
    </div>
    <aside>
      <div class="btn_next">
        <!-- <a href="#">확 인</a> -->
        <router-link to="/myInfoList">확 인</router-link>
      </div>
    </aside>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import FooterVue from "../footer/FooterVueMy.vue";

export default {
  components: {
    FooterVue
  },
  data(){
    return {
      is_pop : false,
      mem_id : '',
      mem_name : '',
      mem_pwd : '',
      mem_no : sessionStorage.getItem("mem_no"),
      mem_type_name : '',
      change_prepw : '',
      change_newpw : '',
      change_newpwchk : '',
      warn_mem_prepw : '',
      warn_mem_newpw : '',
      warn_mem_newpwchk : '',
      check : {
        prepw : false,
        newpw : false,
      }
    }
  },

  beforeCreate() {
    this.$http.post(this.$server+'/userapp/getMemDetail', {
        mem_no : sessionStorage.getItem("mem_no"),
    },{headers : {
    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
    }
    }).then(
    (res) => {  //
        this.mem_id = res.data.mem_id;
        this.mem_pwd = res.data.mem_pwd;
        this.mem_type_name = res.data.mem_type_name;
        this.mem_name = res.data.mem_name;
        console.log(res.data);
    })
  },
  methods :{
    open_pop(){
      this.is_pop = true;
      this.change_prepw = '';
      this.change_newpw = '';
      this.change_newpwchk = '';
      this.warn_mem_prepw = '';
      this.warn_mem_newpw = '';
      this.warn_mem_newpwchk = '';
      this.check.prepw = false;
      this.check.newpw = false;
    },
    check_prepw(){
      console.log(this.mem_pwd != this.change_prepw);
      if(this.mem_pwd != this.change_prepw)
        this.warn_mem_prepw = "기존 비밀번호와 일치하지 않습니다."
      else
        this.warn_mem_prepw = '';
        this.check.prepw = true;
    },
    warn_check_newpw(){
      if(!this.change_newpw)
        this.warn_mem_newpw = "비밀번호를 입력해주세요.";
      else{
        if(!(this.change_newpw.length>=10 && this.change_newpw.length<=12)){
          this.warn_mem_newpw = "10~12자리 이내로 작성해주세요.";
        }
        else{
          this.warn_mem_newpw = "";
          if(this.change_newpw != this.change_newpwchk){
            if(!this.change_newpwchk)
              this.warn_mem_newpwchk = "";
            else
              this.warn_mem_newpwchk = "비밀번호가 일치하지 않습니다.";
          }
          else{
            this.warn_mem_newpwchk = "";
            this.warn_mem_newpw = "";
            this.check.newpw = true;
          }
        }
      }
    },
    warn_check_newpw_chk(){
      if(this.change_newpw != this.change_newpwchk){
        this.warn_mem_newpwchk = "비밀번호가 일치하지 않습니다.";
      }
      else{
        this.warn_mem_newpwchk = "";
        this.check.newpw = true;
      }
    },
    change_pw(){
      this.$refs.prepw.focus();
      if(!this.change_prepw){
        this.$refs.prepw.focus();
        this.warn_mem_prepw = "기존 비밀번호를 입력해주세요.";
        return false;
      }
      if(!this.change_newpw){
        this.warn_mem_newpw = "비밀번호를 입력해주세요.";
        this.$refs.newpw.focus();
        return false;
      }
      else{
        if(!(this.change_newpw.length>=10 && this.change_newpw.length<=12)){
          this.warn_mem_newpw = "10~12자리 이내로 작성해주세요.";
          this.$refs.newpw.focus();
          return false;
        }
        else{
          if(this.change_newpw != this.change_newpwchk){
            if(this.change_newpwchk){
              this.warn_mem_newpwchk = "비밀번호가 일치하지 않습니다.";
              this.$refs.newpwchk.focus();
              return false;
            }
          }
        }
      }
      if(!this.change_newpwchk){
        this.warn_mem_newpwchk = "확인 비밀번호를 입력해주세요.";
        this.$refs.newpwchk.focus();
        return false;
      }
      this.$http.post(this.$server+'/userapp/setMemPwd', {
            mem_no : sessionStorage.getItem("mem_no"),
            mem_pwd : this.change_newpw,
        },{headers : {
        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
        }).then(
        (res) => {  //
            if(res.data.result_code == "Y"){
              alert("비밀번호가 변경되었습니다.");
              this.is_pop = false;
              this.$router.go();
            }
        })
    }
  }
};
</script>