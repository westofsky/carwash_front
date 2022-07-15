<template>
<div id="wrapper">
    <div class="waiting" v-if="waiting">
        <img src="../../assets/img/ZombieingDoodle.png" class="bored-image"/>
        <div class="waiting-notice">
            <img src="../../assets/img/sync.svg" class="sync-image"/>
            처리중입니다.. 잠시만 기다려주세요.
        </div>
    </div>
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
					<!-- <a class="naverpay" @click ="naverpay('11')" href="javascript:void(0)"><img src="../../assets/img/content/payment02.png" alt="">네이버페이 카드 결제</a> -->
					<!-- <a class="naverpay" @click ="naverpay('50')" href="javascript:void(0)"><img src="../../assets/img/content/payment02.png" alt="">네이버페이 포인트 결제</a> -->
					<a class="kakaopay" @click ="kakaopay" href="javascript:void(0)"><img src="../../assets/img/content/payment03.png" alt="">카카오페이 결제</a>
					<a class="naverpay"  href="javascript:void(0)"><img src="../../assets/img/content/payment02.png" alt="">준비중입니다</a>
					<a class="naverpay"  href="javascript:void(0)"><img src="../../assets/img/content/payment02.png" alt="">준비중입니다</a>
					<a class="kakaopay"  href="javascript:void(0)"><img src="../../assets/img/content/payment03.png" alt="">준비중입니다</a>
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
        tot_fee : JSON.parse(localStorage.getItem("tot_fee")) || 0,
        waiting : false,
    }
  },
  mounted () {
    if(this.$route.query.type == "naver"){
        console.log("들어옴");
        this.naver_approve();
    }
    else{
        console.log("안들어옴");
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
            "product_amt": 100,
            "return_url": this.$server+"/userapp/KakaoPay",
            "charset": "UTF-8",
            "usedcard_code": "",
            "quota": "",
            "noinst_term": "027-03:04",
            "noinst_flag": "",
            "window_type": "",
            "service_call": "",
        };
        var formBody = [];
        for (var property in req_data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(req_data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        console.log("https://testpg.easypay.co.kr/ep8/spay/kko/DirectKakaoPayReqAction.do?"+formBody);
        location.href="https://testpg.easypay.co.kr/ep8/spay/kko/DirectKakaoPayReqAction.do?"+formBody;
        
                    // this.$router.push({name : 'Service_Prepare'});

    },
    naverpay(type){
        this.$router.push({name : 'Service_Prepare'});
        // console.log(type);
        // var req_data = {
        //     "mall_id": "05562973",
        //     "pay_type": type,
        //     "order_no": "20220714222",
        //     "product_nm": this.first_menu,
        //     // "product_amt": this.tot_fee,
        //     "product_amt": 100,
        //     "return_url" : this.$server+"/userapp/NaverPay",
        // };
        // var formBody = [];
        // for (var property in req_data) {
        // var encodedKey = encodeURIComponent(property);
        // var encodedValue = encodeURIComponent(req_data[property]);
        // formBody.push(encodedKey + "=" + encodedValue);
        // }
        // formBody = formBody.join("&");
        // location.href=" https://sp.easypay.co.kr/ep8/spay/npay/DirectNaverPayReqAction.do?"+formBody;
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
                            localStorage.setItem("what_pay","card");
                            this.$router.push({name : 'PayReceipt'});
                        }
                        else{
                        console.log(res.data);
                            // console.log("결제 오류입니다. 관리자에게 문의하세요.");
                            alert("결제 오류입니다.");
                            this.waiting = false;
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
                            this.$router.push({name : 'PayVue'});
                            // this.$router.push({name : 'PayVue'});

                        }
                    })

                })
            }
        })
    },
    naver_approve(){
        this.waiting = true;
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
            "directCommonInfo":{
                "shopTransactionId":trans_id,
                "shopReqDate": year+month+day,
                "mallId" : "05562973",
                "amount":parseInt(this.$route.query.amount),
                "currency":"00",
                "pgCno":this.$route.query.pgCno,
                "clientVersion":"N8WI" // D8AN
            },
            "directOrderInfo":{
                "shopOrderNo":trans_id,
                "goodsAmount":parseInt(this.$route.query.amount)
            },
            "directSpayInfo":{
                "spayTxtype":"10",
                "cpCode":"NPAY",
                "spayAmount":parseInt(this.$route.query.amount),
                "certNo":this.$route.query.certNo,
                "payCode":this.$route.query.payCode,
                "cardCd":this.$route.query.cardCd,
                "installmentMonth":this.$route.query.installmentMonth,
                "cardNo":this.$route.query.cardNo,
                "freeInstallmentTypeCode":this.$route.query.freeInstallmentTypeCode,
            }
        };
        this.$http.post('https://pgapi.easypay.co.kr/directapi/trades/directSpayApproval', req_data,
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
                localStorage.setItem("token","");
                localStorage.setItem("card_no",res.data.cardNo);
                localStorage.setItem("card_name",res.data.issuerName);
                localStorage.setItem("what_pay","naver");
                this.$router.push({name : 'PayReceipt'});
            }
            else{
            console.log(res.data);
                console.log("결제 오류입니다. 관리자에게 문의하세요.");
                // alert("결제 오류입니다. 관리자에게 문의하세요.");
                this.waiting = false;
                // this.$router.push({name : 'PayVue'});

            }
        })
    }
  }
}
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