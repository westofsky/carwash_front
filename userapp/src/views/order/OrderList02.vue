<template>
  <div>
    <div id="content_wrap" class="order_list_02">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/homeBasic" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">결제리스트</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">결제된 목록을 확인하세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="section_tab">
            <!-- <a href="#">미사용 리스트</a>
            <a class="active" href="#">사용 리스트</a> -->
            <router-link to="/orderList02" class="active">결제 리스트</router-link>
          </div>
          <div class="coupon_list_wrap">
            <ul>
              <p v-if="this.pay_list.length == 0" style="text-align: center;">결제 내역이 없습니다.</p>
              <li class="coupon_list" v-for="(pay_info , index) in pay_list" :key = "index">
                <div class="coupon_name">
                  <img src="../../assets/img/content/pay_onetime04.png" alt="">
                  <p>결제상품 :
                    <span class="order_unused_name">{{pay_info.prod_name}}</span>
                    <br>
                    옵션상품 : 
                    <span class="option_unused_name" v-if="pay_info.option_name">{{pay_info.option_name}}</span>
                    <span class="option_unused_name" v-else>없음</span>
                  </p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <!-- <li>결제일시 : <span class="order_unused_num">W0123156156</span></li> -->
                    <li>결제일시 : <span class="order_unused_date">{{return_date(pay_info.pay_date)}}</span></li>
                    <li>결제금액 : <span class="order_unused_money">{{return_one(pay_info.pay_fee)}}</span></li>
                  </ul>
                  <button class="btn_arrow" type="button" @click="confirmReceipt(pay_info.pay_seq)">영수증 확인</button>
                </div>
              </li>

              <!-- <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../../assets/img/content/pay_onetime03.png" alt="">
                  <p>결제상품 : <span class="order_unused_name">GIFT (BUBBLE x 5회)</span><br>옵션상품 : <span
                      class="option_unused_name">없음</span></p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="order_unused_num">WD2022051401</span></li>
                    <li>쿠폰번호 : <span class="order_unused_date">2022/05/14 14:26:35</span></li>
                    <li>쿠폰번호 : <span class="order_unused_period">2022/12/31 24:00:00</span></li>
                    <li>쿠폰번호 : <span class="order_unused_QRnum">WD2022051401</span></li>
                  </ul>
                  <button class="btn_arrow" type="button">영수증 확인</button>
                </div>
              </li>

              <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../../assets/img/content/pay_onetime02.png" alt="">
                  <p>결제상품 : <span class="order_unused_name">BEST 1회권</span><br>옵션상품 : <span
                      class="option_unused_name">없음</span></p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="order_unused_num">WD2022051401</span></li>
                    <li>쿠폰번호 : <span class="order_unused_date">2022/05/14 14:26:35</span></li>
                    <li>쿠폰번호 : <span class="order_unused_period">2022/12/31 24:00:00</span></li>
                    <li>쿠폰번호 : <span class="order_unused_QRnum">WD2022051401</span></li>
                  </ul>
                  <button class="btn_arrow" type="button">영수증 확인</button>
                </div>
              </li>

              <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../../assets/img/content/pay_onetime04.png" alt="">
                  <p>결제상품 : <span class="order_unused_name">GIFT (PREMIUM x 5회)</span><br>옵션상품 : <span
                      class="option_unused_name">없음</span></p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="order_unused_num">WD2022051401</span></li>
                    <li>쿠폰번호 : <span class="order_unused_date">2022/05/14 14:26:35</span></li>
                    <li>쿠폰번호 : <span class="order_unused_period">2022/12/31 24:00:00</span></li>
                    <li>쿠폰번호 : <span class="order_unused_QRnum">WD2022051401</span></li>
                  </ul>
                  <button class="btn_arrow" type="button">영수증 확인</button>
                </div>
              </li> -->
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
    return{
      pay_list : [],
    }
  },
  mounted(){
      this.$http.post(this.$server+'/userapp/getPayList', {
        mem_no : sessionStorage.getItem("mem_no"),
        // mem_no : "YGP220500000002"
      },{headers : {
      auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
      }
      }).then(
      (res) => {  // 
        this.pay_list = res.data;
      })
  },
  methods: {
    return_date(date){
      var today = new Date(date);
      today.setHours(today.getHours() + 9);
      return today.toISOString().replace('T', ' ').substring(0, 19);  
    },
    return_one(amount){
      var one = amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      return one
    },
    confirmReceipt(key) {
      console.log(key); 
      this.$router.push({name : 'OrderListReceipt',query :{
        key : key,
      }});
    }
  }
};
</script>