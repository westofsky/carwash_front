<template>
  <div>
    <div id="content_wrap" class="myinfo_register_cancel">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_fleet02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/myInfoList" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">개인회원 탈퇴</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title"><span class="red fontBold">{{mem_name}}</span>님,<br>
            회원을 탈퇴 하시겠습니까?
          </p>
          <div class="membership_cancel_info">
            <p>하단의 회원탈퇴 버튼을 누르면 회원 탈퇴가 됩니다.</p>
            <ul>
              <li>회원 탈퇴 시 사용기간이 남은 쿠폰의 사용이 제한될 수 있으니, 남은 쿠폰을 먼저 사용해 주시기 바랍니다.</li>
              <li>회원 탈퇴 시 동일한 계정으로 재 가입이 불가합니다 등등 탈퇴관련 안내 추가 필요 </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
    <aside>
      <div class="btn_next">
        <a @click="mem_cancel">개인회원 탈퇴</a>
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
  data(){
    return{
      mem_no : sessionStorage.getItem('mem_no'),
      mem_chk : sessionStorage.getItem('mem_type'),
      mem_name : sessionStorage.getItem('mem_name')
    }
  },
  created(){
  }
  ,
  methods :{
    async mem_cancel(){
      if(confirm('개인탈퇴를 하시겠습니까?')){
        this.$http.post(this.$server+'/userapp/setmemdel', {
        mem_no : this.mem_no
        },{headers : {
            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
          }
        }).then((res) => {
          if(res.data.result_code == 'Y'){
            alert('정상적으로 탈퇴되었습니다.');
            this.$router.push({name : 'LoginVue'});
          }else if (res.data.result_code == 'N'){
            alert('오류가 발생하였습니다.');
          }
        })
      }
    }
  }
};
</script> 