<template>
  <div>
    <div id="content_wrap" class="pay_coupon_01">
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
            <a class="active" href="#">사용 목록</a>
            <a href="#">쿠폰구매</a>
            <a href="#">쿠폰추가</a> -->
            <router-link to="/payCoupon01">미사용 목록</router-link>
            <router-link to="/payCoupon05" class="active">사용 목록</router-link>
                        <router-link to="/payCouponBuy" >기프트카드</router-link>
            <router-link to="/payCouponAdd">쿠폰추가</router-link>
          </div>
          <div class="coupon_list_wrap">
            <ul>
              <p v-if="this.coupon_list.length == 0" style="text-align: center;">사용한 쿠폰이 없습니다.</p>
              <li class="coupon_list" v-for="(value, index) in this.coupon_list" :key="index">
                <div class="coupon_name">
                  <img v-if = "get_detail(value.coupon_code) == 1" src="../../assets/img/content/ico_coupon_percent.svg" alt="">
                  <img v-else src="../../assets/img/content/ico_coupon_free.svg" alt="">
                  <p>{{value.coupon_name}} {{value.rest_count}}</p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="coupon_num">{{value.coupon_code}}</span></li>
                    <li>발급일자 : <span class="coupon_date">{{value.reg_date}}</span></li>
                    <li>사용일시 : <span class="coupon_period">{{value.use_date}}</span></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import FooterVue from "../footer/FooterVueCoupon.vue";

export default {
  components: {
    FooterVue
  },
  data(){
    return{
      mem_no : sessionStorage.getItem('mem_no'),
      mem_chk : sessionStorage.getItem('mem_type'),
      mem_name : sessionStorage.getItem('mem_name'),
      coupon_list : [],
      coupon_detail : []
    }
  },
  mounted(){
    this.get_couponlist();
  },
  methods: {
    async get_couponlist(){
      this.$http.post(this.$server+'/userapp/getCouponList01', {
      mem_no : this.mem_no,
      is_use : 'N'
      },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        this.coupon_list = res.data;
      })
    },
    async get_detail(code){
      this.$http.post(this.$server+'/userapp/getCouponList', {
      coupon_code : code
      },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        if(res.data[0].dc_percent > 0){
          return 1
        }else{
          return 0
        }
      })
    }
  }
};
</script>