<template>
  <div>
    <div id="content_wrap" class="pay_coupon_add">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/homeBasic" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">쿠폰 구매 사용</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">쿠폰 리스트를 관리하거나 구매하실 수 있습니다
          </p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="section_tab">
            <!-- <a href="#">미사용 목록</a>
            <a href="#">사용 목록</a>
            <a href="#">쿠폰구매</a>
            <a class="active" href="#">쿠폰추가</a> -->
            <router-link to="/payCoupon01">미사용 목록</router-link>
            <router-link to="/payCoupon05">사용 목록</router-link>
            <router-link to="/payCouponBuy">쿠폰구매</router-link>
            <router-link to="/payCouponAdd" class="active">쿠폰추가</router-link>
          </div>
          <div class="coupon_list_wrap">
            <p class="title">추가할 쿠폰번호를 입력하세요.</p>

            <input type="text" v-model="coupon_no" placeholder="예) 123456789">
            <p class="warn" v-if="flag==0"></p>
            <p class="warn" v-else-if="flag==1">정상추가 되었습니다.</p>
            <p class="warn" v-else-if="flag==2"><img src="../../assets/img/content/ico_warn.png" alt="경고아이콘">잘못된 쿠폰 입니다.</p>
          </div>
        </section>
      </article>
    </div>

    <aside>
      <div class="btn_next">
        <a @click ="reges_coup">추가하기</a>
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
      mem_name : sessionStorage.getItem('mem_name'),
      coupon_no: '',
      flag : 0
    }
  },
  methods: {
    async reges_coup(){
      this.$http.post(this.$server+'/userapp/setcouponreg', {
      coupon_no : this.coupon_no,
      mem_no : this.mem_no
      },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        if(res.data.result_code == 'Y'){
          this.flag = 1;
        }else if(res.data.result_code == 'N'){
          this.flag = 2;
        }
      })
    }
  }
};
</script>