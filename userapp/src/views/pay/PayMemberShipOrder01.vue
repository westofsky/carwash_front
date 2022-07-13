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
      tot_fee : 0,
    }
  },
  mounted(){
    if(!JSON.parse(localStorage.getItem("third_menu")))
      this.third_menu = "Y"
    else
      this.third_menu = "N"
    this.tot_fee = this.menu_fee;
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
      if(this.menu_fee == 0){
        this.$router.push({name : 'PayReceipt'});
      }
      else{
        this.$http.post(this.$server+'/userapp/ChkRegCard', {
          mem_no : sessionStorage.getItem("mem_no"),
        },{headers : {
        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
        }).then(
        (res) => {  // 
          if(res.data.result_code == "Y"){
            alert("등록된 카드가 없습니다. 카드를 등록해주세요.");
            this.$router.push({name : 'PaymentVue'});
          }
          else{ //결제진행
            this.waiting = true;
            this.$http.post(this.$server+'/userapp/getRegCard', {
              mem_no : sessionStorage.getItem("mem_no"),
            },{headers : {
            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
            }
            }).then(
            (res) => {  
              var token = res.data.token;
              console.log(token);
              console.log(this.tot_fee);
              console.log(this.first_menu);
              var today = new Date();
              var year = today.getFullYear();
              var month = ('0' + (today.getMonth() + 1)).slice(-2);
              var day = ('0' + today.getDate()).slice(-2);

              var id = new Uint32Array(1);
              var trans_id = (window.crypto.getRandomValues(id)[0]%1000000).toString();
              do{
                trans_id = (window.crypto.getRandomValues(id)[0]%1000000).toString()
              }while(trans_id.length!=6);

              trans_id = year+month+day+trans_id;
              var req_data = {
                "mallId":"T0001997", //KICC에서 발급한 상점ID
                "shopTransactionId":trans_id, // 상점거래고유번호
                "amount":this.tot_fee, // 가격
                "shopOrderNo" : trans_id, //상점 주문번호
                "approvalReqDate":"20210908", //승인요청일자 YYYYMMDD
                "payMethodInfo":{ //결제수단관리정보
                "billKeyMethodInfo":{
                "batchKey" : token,
                }
                },
                "orderInfo":{
                "goodsName" : this.first_menu // 상품명
                }
              };
              this.$http.post('https://testpgapi.easypay.co.kr/api/trades/approval/batch', req_data,
                {headers : {"Content-type" : "application/json", "Charset" : "utf-8"}}
              ).then(
              (res) => {  
                  console.log(res.data);
                  if(res.data.resCd == "0000"){
                    console.log("결제성공");
                    console.log(res.data.resMsg);
                    this.waiting = false;
                    localStorage.setItem("is_type","membership");
                    localStorage.setItem("tr_date",res.data.transactionDate);
                    localStorage.setItem("auth_no",res.data.pgCno);
                    localStorage.setItem("tr_no",res.data.shopTransactionId);
                    localStorage.setItem("token",token);
                    localStorage.setItem("card_no",res.data.paymentInfo.cardInfo.cardNo);
                    localStorage.setItem("card_name",res.data.paymentInfo.cardInfo.issuerName);
                    this.$router.push({name : 'PayReceipt'});
                  }
                  else{
                    console.log(res.data.resMsg);
                    alert("결제 오류입니다. 관리자에게 문의하세요.");
                    this.waiting = false;
                    // this.$router.push({name : 'PayVue'});

                  }
              })

              
            })
          }
        })
        // this.$router.push({name : 'Service_Prepare'});
        // this.$router.push({name : 'PayReceipt'});
      }
    }
  }
};
</script>