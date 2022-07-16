<template>
  <div id="wrapper">
    <div class="waiting" v-if="waiting">
        <img src="../../assets/img/ZombieingDoodle.png" class="bored-image"/>
        <div class="waiting-notice">
            <img src="../../assets/img/sync.svg" class="sync-image"/>
            처리중입니다.. 잠시만 기다려주세요.
        </div>
    </div>
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
                <td class="table_price">{{return_one(menu_fee)}}원</td>
              </tr>
              <tr class="total_price">
                <td>결제금액</td>
                <td class="fontBold fRed">{{return_one(menu_fee)}}원</td>
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
      waiting : false,
    }
  },
  mounted(){
    if(!JSON.parse(localStorage.getItem("third_menu")))
      this.third_menu = "Y"
    else
      this.third_menu = "N"
    this.tot_fee = this.menu_fee;
    localStorage.setItem("tot_fee",this.tot_fee);
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
            this.remove_items();
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
              console.log('트랜잭션아이디 : ' +trans_id);
              console.log('token ' +token);
              console.log('메뉴이름 ' +this.first_menu);
              console.log('날짜 '+year+month+day);
              var req_data = {
                "mallId":"05562973", //KICC에서 발급한 상점ID
                "shopTransactionId":trans_id, // 상점거래고유번호
                // "amount":this.tot_fee, // 가격
                "amount":10,
                "shopOrderNo" : trans_id, //상점 주문번호
                "approvalReqDate": year+month+day, //승인요청일자 YYYYMMDD
                "payMethodInfo":{ //결제수단관리정보
                  "billKeyMethodInfo":{
                    "batchKey" : token,
                  }
                },
                "orderInfo":{
                  "goodsName" : this.first_menu // 상품명
                }
              };
              this.$http.post('https://pgapi.easypay.co.kr/api/trades/approval/batch', req_data,
                {headers : {"Content-type" : "application/json", "Charset" : "utf-8"}}
              ).then(
              (res) => {
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
                    console.log(res.data);
                    alert("결제 오류입니다.");
                    this.waiting = false;
                    this.remove_items();
                    this.$router.push({name : 'PayVue'});
                    // this.$router.push({name : 'PayVue'});

                  }
              })

              
            })
          }
        })
        // this.$router.push({name : 'Service_Prepare'});
        // this.$router.push({name : 'PayReceipt'});
      }
    },
    return_one(amount){
      var one = amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      return one
    },
    remove_items(){
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
    }
  }
};
</script>
<style>
.waiting {
	position: fixed;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 100;
	margin : 0 auto;
	background: rgba(0, 0, 0, .8);
    text-align: center;
}
.bored-image {
		margin-top: 15vh;
		width: 30rem;
		animation: rotateFlip 0.5s infinite steps(2);
}
.sync-image {
		width: 1rem;
		animation: rotation 2s infinite linear;
		margin-right: .5rem;
}
.waiting-notice {
  	position: absolute;
		bottom: 10rem;
		left: 50%;
		transform: translate(-50%, 0px);
		color: white;
		background: #5f5fff;
		padding: 1rem 2.5rem 1rem 2rem;
		border-radius: .5rem;
}
@keyframes rotation {
	from {
		transform: rotate(359deg);
	}
	to {
		transform: rotate(0deg);
	}
}
@keyframes rotateFlip {
	from {
		transform: rotate(10deg);
	}
	to {
		transform: rotate(-10deg);
	}
}
</style>