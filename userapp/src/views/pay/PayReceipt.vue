<template>
  <div>
    <div id="content_wrap" class="pay_onetime_order_02">
      <div id="top">
        <div id="nav">
          <a class="btn_back"></a>
          <p class="current">결제 영수증</p>
          <a class="btn_back"></a>
        </div>
        <div id="top_info">
          <p class="info">결제가 완료 되었습니다.</p>
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
              <tr class="total_price" style="border-top : none;" v-if="is_coupon.length">
                <td>할인금액</td>
                <td class="table_price">{{is_discount}}원</td>
              </tr>
              <tr class="total_price" v-if="is_coupon.length">
                <td>결제금액</td>
                <td class="fontBold fRed">{{tot_fee}}원</td>
              </tr>
            </table>
          </div>
            <p class="title">결제 정보</p>
            <div class="onetime_pay_info">
                <ul>
                    <li>결제승인번호 : WD2022051402</li>
                    <li>결제시간 : 2022/05/14/ 14:26:35</li>
                    <li>결제수단 : 농협카드 5461-11**-948</li>
                    <li>결제밴사 : KICC</li>
                </ul>
            </div>
        </section>
      </article>
    </div>
    <aside>
      <div class="btn_next active">
        <a @click= "confirm">확 인</a>
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
  data (){
    return{
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
  mounted (){
    if(JSON.parse(localStorage.getItem("use_coupon"))){
      this.is_coupon = JSON.parse(localStorage.getItem("use_coupon"));
      this.is_discount = (this.menu_fee+this.option_fee) * parseInt(this.is_coupon.dc_percent) / 100;
      this.tot_fee = this.menu_fee + this.option_fee - this.is_discount;
    }
    else
      this.tot_fee = this.menu_fee + this.option_fee;
    console.log(this.is_coupon.length);
    //승인 후 사용 결제 세차 정보 저장 처리
    if(JSON.parse(localStorage.getItem("use_coupon")) && 0){
        this.$http.post('http://carwash.iptime.org:3000/userapp/setWashpay', {
            mem_no : sessionStorage.getItem("mem_no"),
            is_member : (sessionStorage.getItem("mem_type")=="MMT001") ? "Y" : "N",
            use_type : 'WUT001',
            prod_name : this.first_menu,
            prod_code : this._pin_seq_no,
            is_brush : this.third_menu,
            wash_fee : this.menu_fee,
            dc_fee : this.is_discount,
            option_fee : this.option_fee,
            pay_fee : this.tot_fee,
            plc_code : this.main_plc,
            // pay_type : 'WPT001' or 'WPT002' or 'WPT003'
            terminal_type : 'WTT002',            
        },{
        headers : {
            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
        }).then(
        (res) => {  // 
            if(res.data.result_code=="Y"){
                console.log("결제 정보 저장 완료");
                var pay_seq_no = res.data.pay_seq_no;
                
    //승인 후 사용 결제 승인 저장 처리
                this.$http.post('http://carwash.iptime.org:3000/userapp/setApprovalPay', {
                    mem_no : sessionStorage.getItem("mem_no"),
                    pay_fee : this.tot_fee,
                    // trd_date : 
                    // trd_time : 
                    // auth_no :
                    // tr_no :
                    // token : 
                    pay_seq_no : pay_seq_no,
                },{
                headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then(
                (res) => {  // 
                    if(res.data.result_code=="Y"){
                        console.log("결제 승인 정보 저장 완료");
                        
                    
                    
                    }
                }
                );
            }
        }
        );
    }

    //승인 후 사용 coupon 처리
    if(JSON.parse(localStorage.getItem("use_coupon")) && 0){
        this.$http.post('http://carwash.iptime.org:3000/userapp/setCouponUse', {
            coupon_code : JSON.parse(localStorage.getItem("use_coupon")).coupon_code,
        },{
        headers : {
            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
        }).then(
        (res) => {  // 
            if(res.data.result_code=="Y")
                console.log("coupon사용 완료");
        }
        );
    }
  },
  methods :{
    confirm(){
        localStorage.clear();
        this.$router.push({name : 'PayVue'});
    }
  }
};
</script>