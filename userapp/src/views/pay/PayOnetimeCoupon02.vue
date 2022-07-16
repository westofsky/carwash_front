<template>
  <div>
    <div id="content_wrap" class="pay_onetime_coupon_01">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/payOnetimeOrder01" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">쿠폰리스트</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">보유하신 쿠폰입니다</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="section_tab">
            <a class="active" href="#">할인 쿠폰</a>
            <!-- <router-link to="/payOnetimeCoupon02" class="active">할인 쿠폰</router-link> -->
          </div>
          <div class="coupon_list_wrap">
            <ul>
              <p v-if="this.coupon_list.length == 0" style="text-align: center;">사용할 수 있는 쿠폰이 없습니다.</p>
              <li class="coupon_list" v-for="(coupon,index) in coupon_list" :key="index">
                <div class="coupon_name">
                  <img src="../../assets/img/content/ico_coupon_percent.svg" alt="">
                  <p>{{coupon.coupon_name}}</p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="coupon_num">{{coupon.coupon_code}}</span></li>
                    <li>할인율 : <span class="coupon_num">{{coupon.dc_percent}}%</span></li>
                    <li>유효기간 : <span class="coupon_period">{{coupon.expire_date}}</span></li>
                  </ul>
                  <button class="btn_arrow" type="button" @click="use_coupon(coupon)">모바일 결제시 쿠폰 사용</button>
                </div>
              </li>
<!-- 
              <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../../assets/img/content/ico_coupon_percent.svg" alt="">
                  <p>30% 할인쿠폰</p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="coupon_num">WDC2022050227</span></li>
                    <li>발급일자 : <span class="coupon_date">2022/05/02 10:52:39</span></li>
                    <li>유효기간 : <span class="coupon_period">2022/06/01 24:00:00</span></li>
                    <li>QR쿠폰번호 : <span class="coupon_QRnum">WDC2022050227</span></li>
                  </ul>
                  <button class="btn_arrow" type="button">모바일 결제시 쿠폰 사용</button>
                </div>
              </li>

              <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../../assets/img/content/ico_coupon_percent.svg" alt="">
                  <p>40% 할인쿠폰</p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="coupon_num">WDC2022050227</span></li>
                    <li>발급일자 : <span class="coupon_date">2022/05/02 10:52:39</span></li>
                    <li>유효기간 : <span class="coupon_period">2022/06/01 24:00:00</span></li>
                    <li>QR쿠폰번호 : <span class="coupon_QRnum">WDC2022050227</span></li>
                  </ul>
                  <button class="btn_arrow" type="button">모바일 결제시 쿠폰 사용</button>
                </div>
              </li>

              <li class="coupon_list"> 
                <div class="coupon_name">
                  <img src="../../assets/img/content/ico_coupon_percent.svg" alt="">
                  <p>50% 할인쿠폰</p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="coupon_num">WDC2022050227</span></li>
                    <li>발급일자 : <span class="coupon_date">2022/05/02 10:52:39</span></li>
                    <li>유효기간 : <span class="coupon_period">2022/06/01 24:00:00</span></li>
                    <li>QR쿠폰번호 : <span class="coupon_QRnum">WDC2022050227</span></li>
                  </ul>
                  <button class="btn_arrow" type="button">모바일 결제시 쿠폰 사용</button>
                </div>
              </li>-->
            </ul>
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
  components: {
    FooterVue
  },
  data(){
    return {
      coupon_list : [],
    }
  },
  beforeCreate(){
    this.$http.post(this.$server+'/userapp/getCouponList', {
        coupon_type : 'CCT001',
        mem_no : sessionStorage.getItem("mem_no"),
      },{
      headers : {
        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
      }
      }).then(
      (res) => {  // 
            this.coupon_list = res.data;
      }
    );
  },
  methods :{
    use_coupon(coupon){
      localStorage.setItem("use_coupon",JSON.stringify(coupon));
      this.$router.push({name : 'PayOnetimeOrder01'})
    }
  }
};
</script>