<template>
  <div id="wrapper">
    <div id="content_wrap" class="pay_onetime_order_01">
      <div id="top">
        <div id="nav">
          <a class="btn_back" @click="before_reset"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a>
          <p class="current">구매내역</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">아래 선택 상품이 맞는지 확인해주세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">선택 상품</p>
          <div class="info_table onetime_pay_table">
            <table>
              <tr>
                <td class="table_name">{{first_menu}}</td>
                <td class="table_price">{{menu_fee}}원</td>
              </tr>
              <tr v-for="(option,index) in receive_option" :key="index">
                <td class="table_name">옵션추가 / {{option.option_name}}</td>
                <td class="table_price">{{option.option_fee}}원</td>
              </tr>
              <tr class="total_price">
                <td>합계</td>
                <td class="fontBold fRed">{{menu_fee+option_fee}}원</td>
              </tr>
              <tr class="total_price" style="border-top : none;" v-if="is_coupon">
                <td>할인금액</td>
                <td class="table_price">{{is_discount}}원</td>
              </tr>
              <tr class="total_price" v-if="is_coupon">
                <td>결제금액</td>
                <td class="fontBold fRed">{{tot_fee}}원</td>
              </tr>
            </table>
          </div>
        </section>
      </article>
    </div>
    <aside>
      <!-- <div class="bubble_say">
        <p>
          옵션상품을 선택한 경우 <span class="warn">무료쿠폰 사용 안되며, 퍼센트 할인만 사용 가능</span>합니다
        </p>
      </div> -->
      <div class="btn_next3_left">
        <!-- <a href="#"><img src="../../assets/img/content/btn_coupon.svg">쿠폰사용</a> -->
        <router-link to="/payOnetimeCoupon02">
          <img src="../../assets/img/content/btn_coupon.svg">
          쿠폰사용
        </router-link>
      </div>
      <div class="btn_next3_right" @click = "pay">
        <a href="#"><img src="../../assets/img/content/btn_pay.svg" >결제하기</a>
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
    return {
      receive_option : JSON.parse(localStorage.getItem("send_options")) || [],
      pin_seq_no : JSON.parse(localStorage.getItem("pin_seq_no")),
      first_menu : JSON.parse(localStorage.getItem("first_menu")) || "",
      menu_fee : JSON.parse(localStorage.getItem("menu_fee")) || 0,
      main_plc : JSON.parse(localStorage.getItem("main_plc")) || "",
      pin2_seq_no : JSON.parse(localStorage.getItem("pin2_seq_no")) || "" ,
      second_menu : JSON.parse(localStorage.getItem("second_menu")) || [],
      option_fee : JSON.parse(localStorage.getItem("option_fee")) || 0,
      // option_plc : JSON.parse(localStorage.getItem("option_plc")) || '',
      third_menu : '',
      brush_plc : JSON.parse(localStorage.getItem("brush_plc")) || '',
      is_coupon : [],
      is_discount : 0,
      tot_fee : 0,
    }
  },
  beforeCreate(){
    if(!JSON.parse(localStorage.getItem("third_menu")))
      this.third_menu = "Y"
    else
      this.third_menu = "N"
  },
  mounted(){
    if(!this.receive_option){
      alert("잘못된 접근입니다.");
      this.$router.push({name : 'PayOnetime'});
    }
    if(JSON.parse(localStorage.getItem("use_coupon"))){
      this.is_coupon = JSON.parse(localStorage.getItem("use_coupon"));
      this.is_discount = (this.menu_fee+this.option_fee) * parseInt(this.is_coupon.dc_percent) / 100;
      this.tot_fee = this.menu_fee + this.option_fee - this.is_discount;
    }
    else
      this.tot_fee = this.menu_fee + this.option_fee;
  },
  methods : {
    before_reset(){
      localStorage.clear();
      this.$router.push({name : 'PayOnetime'});
    },
    pay(){
      // var data = {

      //   "mallId": "T0001997",
      //   "payMethodTypeCode": "81",
      //   "currency": "00",
      //   "clientTypeCode": "00",
      //   "returnUrl": "localhost/payOnetimeOrder01",
      //   "deviceTypeCode": "pc",
      //   "shopOrderNo": "ORDER_12345678901234567890",
      //   "amount":51004,
      //   "orderInfo": {
      //   "goodsName": "기본-최소 등록 테스트 1"
      //   },
      //   "payMethodInfo":{
      //     "billKeyMethodInfo":{
      //     "certType" : "1"
      //     }
      //   }
      // }
      // this.$http.post('https://testpgapi.easypay.co.kr/api/trades/webpay', data,
      // {headers : {"Content-type" : "application/json", "Charset" : "utf-8"}}).then((res) => {
      //   console.log(res.data.authPageUrl);
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
      this.$router.push({name : 'PayReceipt'});
    }
  }
};
</script>