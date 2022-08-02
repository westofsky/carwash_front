<template>
  <div>
    <div id="content_wrap" class="pay_coupon_add">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">아이디/패스워드 찾기</p>
          <a></a>
        </div>
        <div id="top_info">
          <p class="info"></p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="section_tab">
            <!-- <a href="login_find_id.html">아이디 찾기</a> -->
            <router-link to="/loginFindId">아이디 찾기</router-link>
            <!-- <a class="active" href="#">비밀번호 재설정</a> -->
            <router-link to="/loginFindPw" class="active">비밀번호 재설정</router-link>
          </div>
          <div class="coupon_list_wrap">
            <p class="title">가입 시 등록한 아이디와 휴대폰번호를 입력하세요.</p>


            <p class="PdT30">
              <input type="radio" id="01" value="01" name="memtype" v-model="id_type"><label for="01">개인회원</label>
              <input type="radio" id="02" value="02" name="memtype" v-model="id_type"><label for="02">FLEET회원</label>
            </p>


            <div class="login_form fleet" action="" style="display: block;">
              <div class="input_fleet_id MgT0"><label for="fid">아이디</label><input v-model="mem_id" type="text" name="fid" id="fid"
                  placeholder="예) C123456">
              </div>
              <div class="input_fleet_pw"><label for="fleetPW">휴대폰번호</label><input v-model="mobile_num" type="text" name="mobile"
                  id="fleetPW" placeholder="예) 01012345678" class="TxtaR"></div>
              <input type="submit" @click="send_form" value="비밀번호 재설정">
            </div>

          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      mobile_num : '',
      id_type : '01',
      mem_id : ''
    }
  },
  methods :{
    async send_form(){
      console.log(this.mobile_num)
      console.log(this.id_type)
      console.log(this.mem_id)
      if(this.mobile_num != '' && this.id_type != '' && this.mem_id){
        console.log('ok')
        this.$http.post(this.$server+'/userapp/chkLostPW', {
          mem_type : this.id_type,
          phone_no : this.mobile_num,
          mem_id : this.mem_id
        },{headers : {
            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
          }
        }).then((res) => {
          if(res.data.result_code == 'Y'){
          this.$http.post('https://app.sparkpluswash.com:9000/biztalk/sendTempPw', {
            temp_pwd : res.data.temp_pwd,
            phone_no : this.mobile_num,
          },{headers : {
              auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
            }
          }).then((res) => {
            console.log(res)
            alert('알림톡으로 임시비밀번호가 전송되었습니다.');
          })

          }else if(res.data.result_code == 'N'){
            alert('일치하는 아이디 또는 휴대폰 번호가 없습니다.')
          }
        })
      }
      else{
        alert('값을 입력해주세요')
      }
    }
  }
};
</script>