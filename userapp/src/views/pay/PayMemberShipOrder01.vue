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
              <tr class="total_price">
                <td>결제금액</td>
                <td class="fontBold fRed">{{menu_fee}}원</td>
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
      <div class="btn_next3_right" @click = "pay" style="width:100%">
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
      pin_seq_no : JSON.parse(localStorage.getItem("pin_seq_no")),
      first_menu : JSON.parse(localStorage.getItem("first_menu")) || "",
      menu_fee : JSON.parse(localStorage.getItem("menu_fee")) || 0,
      main_plc : JSON.parse(localStorage.getItem("main_plc")) || "",
      third_menu : '',
      brush_plc : JSON.parse(localStorage.getItem("brush_plc")) || '',
    }
  },
  beforeCreate(){
    if(!JSON.parse(localStorage.getItem("third_menu")))
      this.third_menu = "Y"
    else
      this.third_menu = "N"
  },
  methods : {
    before_reset(){
      localStorage.removeItem("pin_seq_no");
      localStorage.removeItem("first_menu");
      localStorage.removeItem("menu_fee");
      localStorage.removeItem("main_plc");
      localStorage.removeItem("third_menu");
      localStorage.removeItem("brush_plc");
      this.$router.push({name : 'PayMemberShip'});
    },
    pay(){
      var data = {

        "mallId": "T0001997",
        "payMethodTypeCode": "81",
        "currency": "00",
        "clientTypeCode": "00",
        "returnUrl": "https://localhost/payMemberShipOrder01",
        "deviceTypeCode": "pc",
        "shopOrderNo": "ORDER_12345678901234567890",
        "amount":51004,
        "orderInfo": {
        "goodsName": "기본-최소 등록 테스트 1"
        },
        "payMethodInfo":{
          "billKeyMethodInfo":{
          "certType" : "1"
          }
        }
      }
      // this.$http.post('https://testpgapi.easypay.co.kr/api/trades/webpay', data,
      // {headers : {"Content-type" : "application/json", "Charset" : "utf-8"}}).then((res) => {
      //   console.log(res.data.authPageUrl);
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
    //   this.$router.push({name : 'PayReceipt'});
      this.$router.push({name : 'Service_Prepare'});
    }
  }
};
</script>