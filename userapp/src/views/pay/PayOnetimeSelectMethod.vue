<template>
<div id="wrapper">
	<div id="content_wrap" class="payment">
		<div id="top">
			<div id="nav">
				<a class="btn_back" @click="back_to_onetime"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a>
				<p class="current">결제방식선택</p>
				<a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
			</div>
			<div id="top_info">
				<p class="info"></p>
			</div>
		</div>
		<article class="scontainer">
			<section class="con1">
				<div class="con_info">
					<p class="sec_txt"><span class="black fontBold">신용/체크 카드 결제<br></span>1회 세차권, Gift쿠폰, 멤버쉽<br>결제 가능합니다.</p>
				</div>
				<a class="card" @click = "pay" href="#"><img src="../../assets/img/content/payment01.png" alt="">신용/체크 카드 결제</a>
			</section>
			<section class="con2">
				<div class="con_info">
					<p class="sec_txt"><span class="black fontBold">모바일 간편결제 결제<br></span>1회권 세차권만 결제 가능합니다.</p>
				</div>
				<div class="pay_register">
					<a class="naverpay" @click ="naverpay" href="#"><img src="../../assets/img/content/payment02.png" alt="">네이버페이 결제</a>
					<a class="kakaopay" @click ="kakaopay" href="#"><img src="../../assets/img/content/payment03.png" alt="">카카오페이 결제</a>
				</div>
			</section>
			<section class="how_use">
				<p class="title">이용방법 안내</p>
				<ul>
					<li><p>신용/체크 카드 등록 시 에는 1회 세차권, Gift쿠폰, 멤버쉽 결제만 가능합니다.</p></li>
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
    return{
        first_menu : JSON.parse(localStorage.getItem("first_menu")) || "",
    }
  },
  methods : {
    back_to_onetime(){
        this.$router.push({name : 'PayOnetimeOrder01'});
    },
    kakaopay(){
        var req_data = {
            "mall_id": "T0001997",
            "mall_nm": "테스트가맹점",
            "order_no": "20210827091028",
            "product_nm": "테스트상품",
            "product_amt": 51004,
            "trace_no": "21082709103710121578 ",
            "return_url": "http://sample.easypay.co.kr/kakaopay/res.jsp ",
            "charset": "EUC-KR",
            "usedcard_code": "",
            "quota": "",
            "noinst_term": "027-03:04 ",
            "noinst_flag": "",
            "app_scheme": "",
            "window_type": "",
            "service_call": "",
        };
        this.$http.post('https://testpg.easypay.co.kr/ep8/spay/kko/DirectKakaoPayReqAction.do', req_data,
            {headers : {"Content-type" : "application/x-www-form-urlencoded", "Charset" : "euc-kr", }}
        ).then(
        (res) => {  
            console.log(res.data);
            if(res.data.resCd == "0000"){
                console.log("잘됨");
            }
            else{
            console.log(res.data);
                console.log("결제 오류입니다. 관리자에게 문의하세요.");

            }
        })

    },
    naverpay(){
        this.$router.push({name : 'Service_Prepare'});
    },
    pay(){
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

<<<<<<< Updated upstream
                    trans_id = year+month+day+trans_id;
                    var req_data = {
                        "mallId":"05562973", //KICC에서 발급한 상점ID
                        "shopTransactionId":trans_id, // 상점거래고유번호
                        "amount":this.tot_fee, // 가격
                        // "amount" : 10,
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
                        console.log(res.data);
                        if(res.data.resCd == "0000"){
                            console.log("결제성공");
                            console.log(res.data.resMsg);
                            this.waiting = false;
                            localStorage.setItem("is_type","onetime");
                            localStorage.setItem("tr_date",res.data.transactionDate);
                            localStorage.setItem("auth_no",res.data.pgCno);
                            localStorage.setItem("tr_no",res.data.shopTransactionId);
                            localStorage.setItem("token",token);
                            localStorage.setItem("card_no",res.data.paymentInfo.cardInfo.cardNo);
                            localStorage.setItem("card_name",res.data.paymentInfo.cardInfo.issuerName);
                            localStorage.setItem("what_pay","card");
                            this.$router.push({name : 'PayReceipt'});
                        }
                        else{
                        console.log(res.data);
                            console.log("결제 오류입니다. 관리자에게 문의하세요.");
                            // alert("결제 오류입니다. 관리자에게 문의하세요.");
                            this.waiting = false;
                            // this.$router.push({name : 'PayVue'});
=======
                trans_id = year+month+day+trans_id;
                var req_data = {
                    "mallId":"05562973", //KICC에서 발급한 상점ID
                    "shopTransactionId":trans_id, // 상점거래고유번호
                    // "amount":this.tot_fee, // 가격
                    "amount" : 10,
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
                    console.log(res.data);
                    if(res.data.resCd == "0000"){
                        console.log("결제성공");
                        console.log(res.data.resMsg);
                        this.waiting = false;
                        localStorage.setItem("is_type","onetime");
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
                        console.log("결제 오류입니다. 관리자에게 문의하세요.");
                        // alert("결제 오류입니다. 관리자에게 문의하세요.");
                        this.waiting = false;
                        // this.$router.push({name : 'PayVue'});
>>>>>>> Stashed changes

                    }
                })

                
                })
            }
        })
    }
  }
}
</script>