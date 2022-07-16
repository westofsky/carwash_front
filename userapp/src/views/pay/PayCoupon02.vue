<template>
  <div>
    <div id="content_wrap" class="pay_onetime_order_02">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/payCoupon01" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">쿠폰 상세</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">쿠폰 정보를 확인하세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">{{coupon_in.coupon_name}}< v-if="coupon_in.coupon_name == 'CCT004'">{{coupon_in.rest_cout}}</p>
          <div class="info_table onetime_pay_table">
            <table>
              <tr>
                <td class="table_name" v-if="coupon_in.coupon_type=='CCT004'">{{coupon_in.rest_cout}}</td>
              </tr>
            </table>
          </div>




          <div class="onetime_pay_info BRT_none">
            <ul>
              <li>쿠폰번호 : {{coupon_in.coupon_code}}</li>
              <li>발급일시 : {{coupon_in.reg_date}}</li>
              <li>유효기간 : {{coupon_in.expire_date}}</li>
            </ul>

            <div class="info_QR_wrap">
              <div class="info_QR" id = 'qrcode'></div>
                <img :src="qr_in" />
              <p>생성된 QR코드 영수증을 무인키오스크 <br>QR스캐너에 스캔해주세요</p>
            </div>
          </div>
        </section>
      </article>

    </div>



    <aside>
      <div class="btn_next active">
        <!-- <a href="#">확 인</a> -->
        <router-link to="/payCoupon01">확 인</router-link>
      </div>
    </aside>
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
      coupon_in : [],
      qr_in : []
    }
  },
  components: {
    FooterVue
  },
  mounted(){
    this.get_detail();
    this.get_qrimg();
  },
  methods: {
    async get_detail(){
      this.$http.post(this.$server+'/userapp/getCouponDetail', {
      coupon_code : this.$route.query.code
      },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        this.coupon_in = res.data;
      })
    },
    async get_qrimg(){
      this.$http.post(this.$server+'/userapp/getqrcode', {
      code : this.$route.query.code
      },{headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        console.log(this.$route.query.code)
        this.qr_in = res.data;
      })
    }
    
    
  }
};
</script>