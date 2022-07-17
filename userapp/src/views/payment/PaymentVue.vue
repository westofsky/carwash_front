<template>
  <div>
    <div id="content_wrap" class="payment">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="#"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/homeBasic" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">결제등록</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">결제 정보를 등록하시면 간편하게<br>결제하실 수 있습니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="sec_txt" style="margin-bottom:6px;" v-if="card_state=='N'"><span class="black fontBold">등록된 결제 정보</span></p>
          <div class="card-list" v-if="card_state=='N'">
						<div class="card-item">
						  <div class="card-item__side -front">
							<div class="card-item__focus" ref="focusElement"></div>
							<div class="card-item__cover">
							  <img src="../../assets/img/creditcard/creditcard_bg.jpg" class="card-item__bg">
							</div>

							<div class="card-item__wrapper">
							  <div class="card-item__top">
								<img src="../../assets/img/creditcard/chip.png" class="card-item__chip">
								<div class="card-item__type">
								  <transition name="slide-fade-up">
									<img src="../../assets/img/creditcard/logo.png" alt="" class="card-item__typeImg">
								  </transition>
								</div>
							  </div>
							  
							  <label for="cardNumber" class="card-item__number" ref="cardNumber">
							  <span><div class="card-item__numberItem">{{card.no[0]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[1]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[2]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[3]}}</div></span>
								  
							  <span><div class="card-item__numberItem -active"> </div></span>
								  
							  <span><div class="card-item__numberItem">{{card.no[4]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[5]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[6]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[7]}}</div></span>
								  
							  <span><div class="card-item__numberItem -active"> </div></span>
								  
							  <span><div class="card-item__numberItem">{{card.no[8]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[9]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[10]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[11]}}</div></span>
							  <span><div class="card-item__numberItem -active"> </div></span>

							  <span><div class="card-item__numberItem">{{card.no[12]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[13]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[14]}}</div></span>
							  <span><div class="card-item__numberItem">{{card.no[15]}}</div></span>
							  </label>	
							  <div class="card-item__content">
                  <label for="cardName" class="card-item__info">
                    <div class="card-item__holder">카드 회사</div>
                    <transition name="slide-fade-up">
                    <div class="card-item__name">{{card.company}}</div>
                    </transition>
                  </label>
							  </div>
							</div>
						  </div>
						</div>
					  </div>
          <div class="con_info" v-if="card_state=='Y'">
            <p class="sec_txt"><span class="black fontBold">신용/체크 카드 등록 시<br></span>1회 세차권, Gift쿠폰, 멤버쉽<br>결제 가능합니다.</p>
          </div>
          <a class="card" href="#" @click = "card_option" style="margin-top:50px"><img src="../../assets/img/content/payment01.png" alt="">{{card_state_notice}}</a>
            
        </section>
        <!-- <section class="con2">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">모바일 간편결제 등록 시<br></span>1회권 세차권만 결제 가능합니다.</p>
          </div>
          <div class="pay_register">
            <a class="naverpay" href="#"><img src="../../assets/img/content/payment02.png" alt="">네이버페이 등록</a>
            <a class="kakaopay" href="#"><img src="../../assets/img/content/payment03.png" alt="">카카오페이 등록</a>
          </div>
        </section> -->
        <section class="how_use">
          <p class="title">이용방법 안내</p>
          <ul>
            <li>
              <p>결제 정보를 등록해두시면 간편하게 이용하실 수있습니다.</p>
            </li>
            <li>
              <p>신용/체크 카드 등록 시 에는 1회 세차권, Gift쿠폰, 멤버쉽 결제만 가능합니다.</p>
            </li>
          </ul>
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
      card_state_notice : "신용/체크 카드 등록",
      card_state : "Y",
      card : {
        no : "",
        company: "",

      }
    }
  },
  mounted(){
    if(this.$route.query.msg != undefined){
      alert(this.$route.query.msg);
    }
    this.$http.post(this.$server+'/userapp/ChkRegCard', {
      mem_no : sessionStorage.getItem("mem_no"),
    },{headers : {
    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
    }
    }).then(
    (res) => {  
      if (res.data.result_code == "Y"){
        this.card_state = "Y";
        this.card_state_notice = "신용/체크 카드 등록";
      }
      else{
        this.$http.post(this.$server+'/userapp/getRegCard', {
          mem_no : sessionStorage.getItem("mem_no"),
        },{headers : {
        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
        }).then(
        (res) => {  
          this.card.no=res.data.card_no;
          this.card.company = res.data.owner;
          
        })
        this.card_state = "N"; 
        this.card_state_notice = "신용/체크 카드 변경";
      }
      
    })
  },
  methods : {
    card_option(){
      var data = {
        "mallId": '05562973', //KICC 에서 발급한상점 ID
        "payMethodTypeCode": "81", //빌키발급 : 81
        "currency": "00", //통화코드  00:원화
        "clientTypeCode": "00", //결제창 종류 00: 통합결제창 전용
        // "returnUrl": "http://app.sparkpluswash.com/PaymentCardRegisterOk", //인증응답 URL 
        "returnUrl" : this.$server+"/userapp/CardTask?mem_no="+sessionStorage.getItem("mem_no")+"&code="+this.card_state,
        "deviceTypeCode": "mobile", // 교객결제 단말
        "shopOrderNo": "CARD_REGISTER", // 상점 주문번호
        "amount":0, // 결제요청금액
        "orderInfo": { //주문정보
        "goodsName": "SPARK_PLUS 카드등록" //상품명
        },
        "payMethodInfo":{ //결제수단관리정보
          "billKeyMethodInfo":{ // 빌키발급 옵션
          "certType" : "1" // 빌키발급 인증타입 1 : 카드번호,유횩간,생년월일
          }
        }
      };
      this.$http.post('https://pgapi.easypay.co.kr/api/trades/webpay', data,
      {headers : {"Content-type" : "application/json", "Charset" : "utf-8"}}).then((res) => {
        location.href=res.data.authPageUrl;

      })
      .catch((error) => {
        console.log(error);
      })
    },
  }
};
</script>