<template>
  <div>
    <div id="content_wrap" class="myinfo_membership_cancel">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_fleet02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/myInfoList" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">멤버쉽 해지</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title"><span class="red fontBold"></span>{{mem_name}}님,<br>
            멤버쉽을 해지 하겠습니까?
          </p>
          <div class="membership_cancel_info">
            <p>하단의 멤버쉽 해지를 누르면 멤버쉽이 해지됩니다.</p>
            <ul>
              <li>멤버쉽 해지시 사용기간이 남은 쿠폰의 사용이 제한될 수 있으니, 남은 쿠폰을 먼저 사용해주시기 바랍니다.</li>
              <li>멤버쉽 결제 회원에게 제공되는 혜택이 등등 알림내용 추가 필요</li>
            </ul>
          </div>

        </section>
      </article>
    </div>
    <aside>
      <div class="btn_next">
        <a @click="mem_cancel">멤버쉽 해지</a>
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
      if(confirm('멤버쉽 해지 하시겠습니까?')){
        this.$http.post('http://carwash.iptime.org:3000/userapp/setMembershipDel', {
        mem_no : this.mem_no
        },{headers : {
            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
          }
        }).then((res) => {
          console.log(res.data)
          if(res.data.result_code == 'Y'){
            alert('멤버쉽이 정상적으로 해지 되었습니다.')
          }else if (res.data.result_code == 'N'){
            alert('오류가 발생하였습니다.')
          }
        })
      }
    }
  }
};
</script>