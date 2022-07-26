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
                <td class="table_price">{{return_one(menu_fee)}}원</td>
              </tr>
              <tr v-for="(option,index) in receive_option" :key="index">
                <td class="table_name">옵션추가 / {{option.option_name}}</td>
                <td class="table_price">{{return_one(option.option_fee)}}원</td>
              </tr>
              <tr class="total_price">
                <td>합계</td>
                <td class="fontBold fRed">{{return_one(menu_fee+option_fee)}}원</td>
              </tr>
              <tr class="total_price" style="border-top : none;" v-if="is_coupon || is_taxi">
                <td>할인금액</td>
                <td class="table_price">{{return_one(is_discount)}}원</td>
              </tr>
              <tr class="total_price" v-if="is_coupon || is_taxi">
                <td>결제금액</td>
                <td class="fontBold fRed">{{return_one(tot_fee)}}원</td>
              </tr>
            </table>
          </div>
            <p class="title">결제 정보</p>
            <div class="onetime_pay_info" v-if="menu_fee !=0">
                <ul>
                    <li>결제승인번호 : {{approve.auth_no}}</li>
                    <li>결제시간 : {{time}}</li>
                    <li>결제수단 : {{approve.card_name}} {{approve.card_no}}</li>
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
import router from "@/router";
import FooterVue from "../footer/FooterVue.vue";

export default {
  components: {
    FooterVue
  },
  data (){
    return{
      receive_option : JSON.parse(localStorage.getItem("send_options")) || [],
      pin_seq_no : JSON.parse(localStorage.getItem("pin_seq_no")) || "",
      first_menu : JSON.parse(localStorage.getItem("first_menu")) || "",
      menu_fee : JSON.parse(localStorage.getItem("menu_fee")) || 0,
      main_plc : JSON.parse(localStorage.getItem("main_plc")) || "",
      pin2_seq_no : JSON.parse(localStorage.getItem("pin2_seq_no")) || "" ,
      second_menu : JSON.parse(localStorage.getItem("second_menu")) || "",
      option_fee : JSON.parse(localStorage.getItem("option_fee")) || 0,
      option_plc : JSON.parse(localStorage.getItem("option_plc")) || '',
      third_menu : '',
      brush_plc : JSON.parse(localStorage.getItem("brush_plc")) || '',
      prod_remarks : localStorage.getItem("prod_remarks") || 0,
      is_coupon : [],
      is_discount : 0,
      tot_fee : JSON.parse(localStorage.getItem("tot_fee")) || 0,
      approve : {
        auth_no : ( localStorage.getItem("auth_no") != null) ?  localStorage.getItem("auth_no") : "",
        card_no : ( localStorage.getItem("card_no") != null) ?  localStorage.getItem("card_no").substring(0,4) +'-'+localStorage.getItem("card_no").substring(4,8)+'-****-****' : "",
        card_name : ( localStorage.getItem("card_name") != null) ?  localStorage.getItem("card_name") : "",
        time :  ( localStorage.getItem("tr_date") != null) ?  localStorage.getItem("tr_date") : "",
      },
      time : (localStorage.getItem("tr_date") !=null) ? localStorage.getItem("tr_date").replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/, '$1-$2-$3 $4:$5:$6') : "",
      is_taxi : (sessionStorage.getItem("is_taxi") == "Y") ? true: false,
    }
  },
  beforeCreate(){
    if(!JSON.parse(localStorage.getItem("first_menu"))){
      alert("잘못된 접근입니다.");
        this.$router.push({name : 'HomeBasic'});
    }
  },
  mounted (){
    

    if(!JSON.parse(localStorage.getItem("third_menu")))
      this.third_menu = "Y"
    else
      this.third_menu = "N"
    if(JSON.parse(localStorage.getItem("use_coupon"))){
      this.is_coupon = JSON.parse(localStorage.getItem("use_coupon"));
      this.is_discount = (this.menu_fee+this.option_fee) * parseInt(this.is_coupon.dc_percent) / 100;
    }
    if(sessionStorage.getItem("is_taxi") == "Y"){
      this.is_discount = (this.menu_fee+this.option_fee) * 0.5;
    }
    // 승인 후 사용 결제 세차 정보 저장 처리
    this.$http.post(this.$server+'/userapp/setWashpay', {
        mem_id : sessionStorage.getItem("mem_id"),
        mem_no : sessionStorage.getItem("mem_no"),
        is_member : (sessionStorage.getItem("mem_type")=="MMT001") ? "Y" : "N",
        use_type : (localStorage.getItem("is_type") == "onetime") ? 'WUT001' : 'WUT002',
        prod_name : this.first_menu,
        prod_code : this.pin_seq_no || '',
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
            var pay_seq_no = res.data.pay_seq_no;
            //승인 후 사용 결제 승인 저장 처리
            if(this.menu_fee==0){ // 끝 
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
              (res) => {  
                  if(res.data.result_code=="Y"){
                      var today = new Date();
                      var year = today.getFullYear();
                      var month = ('0' + (today.getMonth() + 1)).slice(-2);
                      var day = ('0' + today.getDate()).slice(-2);
                      if(localStorage.getItem("is_type") == "membership"){ //멤버쉽구매
                        var today = new Date();
                        var year = today.getFullYear();
                        var month = ('0' + (today.getMonth() + 1)).slice(-2);
                        var day = ('0' + today.getDate()).slice(-2);
                        this.$http.post(this.$server+'/userapp/setMemberPay', {
                          mem_no : sessionStorage.getItem("mem_no"),
                          prod_name : this.first_menu,
                          is_brush : this.third_menu,
                          pay_day : day,
                          reg_type : "MRT001",
                          prod_code : this.pin_seq_no,
                          pay_fee : this.tot_fee,
                          start_date : year+'-'+month+'-'+day,
                          end_date : (year+2)+'-'+month+'-'+day,
                          mem_id : sessionStorage.getItem("mem_id"),
                          token : localStorage.getItem("token"),
                        },{
                        headers : {
                            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                        }
                        }).then(
                        (res) => {  // 
                            if(res.data.result_code=="Y"){
                                sessionStorage.setItem("is_membership","Y");
                                // this.confirm();
                            }
                            else{
                            }
                        });
                        
                        if(this.first_menu == "PREMIUM spa 무제한"){
                            let type = "CCT002";
                            let plc = this.main_plc;
                            if(this.third_menu =="Y"){
                              plc = plc+"::"+this.brush_plc;
                            }
                            this.get_coupon(type,plc); //사은품
                            this.get_coupon(type,plc); //사은품
                            this.get_coupon(type,plc); //사은품
                            this.get_coupon(type,plc); //사은품
                            console.log("멤버쉽 가입시 plc    --->" + plc);
                        }
                        this.$http.post('https://app.sparkpluswash.com:9000/biztalk/getMembershipWash', {
                          car_no : sessionStorage.getItem("mem_id"),
                          get_date : year+'-'+month+'-'+day,
                          pay_product : this.first_menu,
                          option_product : '',
                          start_date : year+'-'+month+'-'+day,
                          end_date : year+'-'+(month+1)+'-'+day,
                          total_pay : this.tot_fee,
                          approval_no : localStorage.getItem("auth_no"),
                          phone_no : sessionStorage.getItem("phone_no"),
                        },{headers : {
                            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                          }
                        }).then((res) => {
                        })
                      }
                      else if(localStorage.getItem("is_type") == "giftcard"){
                              for(let i =0; i< this.prod_remarks;i++){
                                console.log(i);
                                console.log('ok');
                                this.$http.post(this.$server+'/userapp/get_couponReg', {
                                  coupon_type : 'CCT004',
                                  rest_count : 1,
                                  is_member : (sessionStorage.getItem("mem_type")=="MMT001") ? "Y" : "N",
                                  plc_code : this.main_plc,
                                  dc_fee : 0,
                                  dc_persent : 0,
                                  prod_name : this.first_menu
                                },{
                                headers : {
                                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                                }
                                }).then(
                                (res) => {  // 
                                  console.log(res)
                                });
                              }                    
                        }
                      else{ //일반구매       
                        if(sessionStorage.getItem("is_oneplus")){ //1+1프로모션
                            let plc = this.main_plc;
                            if(this.third_menu =="Y"){
                              plc = plc+"::"+this.brush_plc;
                            }
                            this.get_coupon("CCT003",plc); //사은품
                            console.log("1+1에 들어가는 plc ---->" + plc);
                        }
                        let mainplc = this.main_plc;
                        if(this.second_menu){
                          mainplc = mainplc + "::" + this.option_plc;
                          if(this.third_menu == "Y"){
                            mainplc = mainplc + "::" + this.brush_plc;
                          }
                            console.log("옵션이 있으면 들어가는 plc---->" + mainplc);
                        }
                        else{
                          if(this.third_menu == "Y"){
                            mainplc = mainplc + "::" + this.brush_plc;
                          }
                          console.log("옵션 없을 때 coupon 발행 plc ----->" +mainplc);
                        }
                        this.get_coupon("CCT003",mainplc);

                        if(this.first_menu == "PREMIUM spa"){
                            let type = "CCT002";
                            let plc = this.main_plc;
                            if(this.third_menu =="Y"){
                              plc = plc+"::"+this.brush_plc;
                            }
                            this.get_coupon(type,plc); //사은품
                            console.log("사은품 plc------>" + plc);
                        }
                      }
                  }
              }
              );
            }
        }
    }
    );

    //승인 후 사용 coupon 처리
    if(JSON.parse(localStorage.getItem("use_coupon"))){
        this.$http.post(this.$server+'/userapp/setCouponUse', {
            coupon_code : JSON.parse(localStorage.getItem("use_coupon")).coupon_code,
        },{
        headers : {
            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
        }).then(
        (res) => {  // 
            if(res.data.result_code=="Y"){

            }
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
        localStorage.removeItem("use_coupon");
        localStorage.removeItem("tot_fee");
        localStorage.removeItem("what_pay");
        this.$router.push({name : 'HomeBasic'});
    },
    return_one(on_num){
        if(on_num != undefined){
            const parts = on_num.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.join('.');
        }  
    },
    get_coupon(coupon_type,plc){
      this.$http.post(this.$server+'/userapp/getCouponReg', {
        mem_no : sessionStorage.getItem("mem_no"),
        coupon_type : coupon_type,
        rest_count : 0,
        is_member : (sessionStorage.getItem("mem_type")=="MMT001") ? "Y" : "N",
        prod_name : this.first_menu,
        dc_fee : 0,
        dc_percent:0,
        plc_code : plc,
      },{
      headers : {
          auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
      }
      }).then(
      (res) => {  // 
          if(res.data.result_code=="Y"){
              // this.confirm();
          }
      });
    }
  }
};
</script>