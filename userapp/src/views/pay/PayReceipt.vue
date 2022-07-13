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
            <div class="onetime_pay_info" v-if="menu_fee !=0">
                <ul>
                    <li>결제승인번호 : {{approve.auth_no}}</li>
                    <li>결제시간 : {{time}}</li>
                    <li v-if="what_pay =='card'">결제수단 : {{approve.card_name}}카드 {{approve.card_no}}</li>
                    <li v-else-if="what_pay=='naver'">결제수단 : 네이버페이</li>
                    <li v-else>결제수단 : 카카오페이</li>
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
</template>s

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
      option_plc : JSON.parse(localStorage.getItem("option_plc")) || '',
      third_menu : '',
      brush_plc : JSON.parse(localStorage.getItem("brush_plc")) || '',
      is_coupon : [],
      is_discount : 0,
      tot_fee : 0,
      approve : {
        auth_no : ( localStorage.getItem("auth_no") != null) ?  localStorage.getItem("auth_no") : "",
        card_no : ( localStorage.getItem("card_no") != null) ?  localStorage.getItem("card_no").substring(0,4) +'-'+localStorage.getItem("card_no").substring(4,8)+'-****-****' : "",
        card_name : ( localStorage.getItem("card_name") != null) ?  localStorage.getItem("card_name") : "",
        time :  ( localStorage.getItem("tr_date") != null) ?  localStorage.getItem("tr_date") : "",
      },
      time : (localStorage.getItem("tr_date") !=null) ? localStorage.getItem("tr_date").replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/, '$1-$2-$3 $4:$5:$6') : "",
      what_pay : ( localStorage.getItem("what_pay") != null) ?  localStorage.getItem("what_pay") : "",
    }
  },
  beforeCreate(){
  },
  mounted (){
    

    if(!JSON.parse(localStorage.getItem("third_menu")))
      this.third_menu = "Y"
    else
      this.third_menu = "N"
    if(JSON.parse(localStorage.getItem("use_coupon"))){
      this.is_coupon = JSON.parse(localStorage.getItem("use_coupon"));
      this.is_discount = (this.menu_fee+this.option_fee) * parseInt(this.is_coupon.dc_percent) / 100;
      this.tot_fee = this.menu_fee + this.option_fee - this.is_discount;
    }
    else
      this.tot_fee = this.menu_fee + this.option_fee;

    // 승인 후 사용 결제 세차 정보 저장 처리
    this.$http.post(this.$server+'/userapp/setWashpay', {
        mem_no : sessionStorage.getItem("mem_no"),
        is_member : (sessionStorage.getItem("mem_type")=="MMT001") ? "Y" : "N",
        use_type : (localStorage.getItem("is_type") == "onetime") ? 'WUT001' : 'WUT002',
        prod_name : this.first_menu,
        prod_code : this.pin_seq_no,
        option_code : this.pin2_seq_no || '',
        option_name : this.second_menu || '',
        is_brush : this.third_menu,
        wash_fee : this.menu_fee,
        dc_fee : this.is_discount,
        option_fee : this.option_fee || 0,
        pay_fee : this.tot_fee,
        plc_code : this.main_plc,
        pay_type : (this.menu_fee==0) ? 'WPT002' : 'WPT001',
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
            if(this.menu_fee==0){ // 끝 
              console.log("결제된 금액 없음");
              // this.confirm();
            }
            else{
              this.$http.post(this.$server+'/userapp/setApprovalPay', {
                  mem_no : sessionStorage.getItem("mem_no"),
                  pay_fee : this.tot_fee,
                  trd_date : this.approve.time.substring(0,8),
                  trd_time : this.approve.time.substring(8,this.approve.time.length),
                  auth_no : localStorage.getItem("auth_no"),
                  tr_no : localStorage.getItem("tr_no"),
                  token : localStorage.getItem("token"),
                  pay_seq_no : pay_seq_no,
              },{
              headers : {
                  auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
              }
              }).then(
              (res) => {  // 
                  if(res.data.result_code=="Y"){
                      console.log("결제 승인 정보 저장 완료");
                      // this.confirm();
                  }
              }
              );
            }
        }
    }
    );

    //승인 후 사용 coupon 처리
    if(JSON.parse(localStorage.getItem("use_coupon")) && 0){
        this.$http.post(this.$server+'/userapp/setCouponUse', {
            coupon_code : JSON.parse(localStorage.getItem("use_coupon")).coupon_code,
        },{
        headers : {
            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
        }).then(
        (res) => {  // 
            if(res.data.result_code=="Y")
                console.log("coupon사용 완료");
                this.confirm();
            }
        );
    }
  },
  methods :{
    confirm(){
        localStorage.removeItem("send_options");
        localStorage.removeItem("pin_seq_no");
        localStorage.removeItem("first_menu");
        localStorage.removeItem("menu_fee");
        localStorage.removeItem("main_plc");
        localStorage.removeItem("pin2_seq_no");
        localStorage.removeItem("second_menu");
        localStorage.removeItem("option_fee");
        localStorage.removeItem("option_plc");
        localStorage.removeItem("third_menu");
        localStorage.removeItem("brush_plc");
        localStorage.removeItem("is_type");
        localStorage.removeItem("tr_date");
        localStorage.removeItem("auth_no");
        localStorage.removeItem("tr_no");
        localStorage.removeItem("token");
        localStorage.removeItem("card_name");
        localStorage.removeItem("card_no");
        this.$router.push({name : 'PayVue'});
    }
  }
};
</script>