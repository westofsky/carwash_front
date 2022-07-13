<template>
<div>
    <div id="content_wrap" class="payment">
		<div id="top">
			<div id="nav">
				<router-link to="/PaymentVue" class="btn_back">
					<img src="../../assets/img/btn_back.svg" alt="뒤로가기">
				</router-link>
				<p class="current">결제등록</p>
				<a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
			</div>
			<div id="top_info">
				<p class="info">신용카드 정보를 등록하시면 간편하게<br>결제하실 수 있습니다.</p>
			</div>
		</div>
		<article class="scontainer">
			<section class="con1">
				<!-- S:  신용카드 등록 ///////////////-->
				<div class="wrapper" id="app">
					<div class="card-form">
					  <div class="card-list">
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
							  
							  <!--S : 카드번호 -->	
							  <label for="cardNumber" class="card-item__number" ref="cardNumber">
							  <span><div class="card-item__numberItem">{{cardNumber[0]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[1]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[2]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[3]}}</div></span>
								  
							  <span><div class="card-item__numberItem -active"> </div></span>
								  
							  <span><div class="card-item__numberItem">{{cardNumber[4]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[5]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[6]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[7]}}</div></span>
								  
							  <span><div class="card-item__numberItem -active"> </div></span>
								  
							  <span><div class="card-item__numberItem">{{cardNumber[8]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[9]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[10]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[11]}}</div></span>
							  <span><div class="card-item__numberItem -active"> </div></span>

							  <span><div class="card-item__numberItem">{{cardNumber[12]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[13]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[14]}}</div></span>
							  <span><div class="card-item__numberItem">{{cardNumber[15]}}</div></span>
							  </label>
							  <!--E : 카드번호 -->	
							  <div class="card-item__content">
								<label for="cardName" class="card-item__info" ref="cardName">
								  <div class="card-item__holder">소유자 이름</div>
								  <transition name="slide-fade-up">
									<div class="card-item__name">{{cardName}}</div>
								  </transition>
								</label>
								<div class="card-item__date" ref="cardDate">
								  <label for="cardMonth" class="card-item__dateTitle">유효기한</label>
								  <label for="cardMonth" class="card-item__dateItem">
									<transition name="slide-fade-up">
									  <span else key="2">{{cardMonth}}</span>
									</transition>
								  </label>
								   / 
								  <label for="cardYear" class="card-item__dateItem">
									<transition name="slide-fade-up">
									  <span>{{cardYear}}</span>
									</transition>
								  </label>
								</div>
							  </div>
							</div>
						  </div>
						  <div class="card-item__side -back">
							
							
							<div class="card-item__cvv">
								<div class="card-item__cvvTitle">CVC</div>
								<div class="card-item__cvvBand">
								  <span v-for="(n, $index) in cardCVC" :key="$index">
									*
								  </span>

							    </div>
								<div class="card-item__type">
									0000000
								</div>
							</div>
						  </div>
						</div>
					  </div>
					  <div class="card-form__inner" style="margin-top:130px;">
						<div class="card-input">
						  <label for="cardNumber" class="card-input__label">카드번호</label>
						  <input type="text" id="cardNumber" class="card-input__input" v-model="cardNumber" @input = "onlyNum" data-ref="cardNumber" autocomplete="off" maxlength="16">
						</div>
						<div class="card-input">
						  <label for="cardName" class="card-input__label">소유자 이름</label>
						  <input type="text" id="cardName" class="card-input__input" v-model="cardName" data-ref="cardName" autocomplete="off">
						</div>
						<div class="card-form__row">
						  <div class="card-form__col">
							<div class="card-form__group">
							  <label for="cardMonth" class="card-input__label">유효기한</label>
							  <select class="card-input__input -select" id="cardMonth" v-model="cardMonth" data-ref="cardDate">
								<option value="" disabled selected>Month</option>
								<option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth" v-bind:key="n">
									{{n < 10 ? '0' + n : n}}
								</option>
							  </select>
							  <select class="card-input__input -select" id="cardYear" v-model="cardYear" data-ref="cardDate">
								<option value="" disabled selected>Year</option>
								<option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
									{{$index + minCardYear}}
								</option>
							  </select>
							</div>
						  </div>
						  <div class="card-form__col -cvv">
							<div class="card-input">
								<div style="width :45% ;float:left;">
									<label for="cardCvv" class="card-input__label">CVC</label>
									<input type="text" class="card-input__input" id="cardCvv" maxlength="4" v-model="cardCVC" autocomplete="off" @input="onlyNum">
								</div>
							  	<div style="width :45% ;float:right;">
									<label for="cardCvv" class="card-input__label">카드 비밀번호 2자리</label>
									<input type="text" class="card-input__input" id="cardCvv" maxlength="2" v-model="card_passno" autocomplete="off" @input="onlyNum">
								</div>
							</div>
						  </div>
						</div>
						<button class="btn_arrow w100p MgT20" @click="card_update">
							{{card_state_btn}}
						</button>
						
					  </div>
					</div>


				</div>
				<!-- E:  신용카드 등록 ///////////////-->
			</section>
			
			<section class="how_use">
				<p class="title">이용방법 안내</p>
				<ul>
					<li><p>결제 정보를 등록해두시면 간편하게 이용하실 수있습니다.</p></li>
					<li><p>신용/체크 카드 등록 시 에는 2회 세차권, Gift쿠폰, 멤버쉽 결제만 가능합니다.</p></li>
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
		data (){
			return {
				minCardYear : 2020,
				card_state_btn : "등록",
				cardCVC : '',
				cardNumber : '',
				cardName : '',
				cardMonth : '',
				cardYear : '',
				minCardMonth : 1,
				minCardYear : 2022,
				card_passno : '',
			}
		},
		props :{
			card_state : String,
		},
		mounted(){
			if(this.$route.query.card_state == "register"){
				this.card_state_btn = "등록";
			}
			else if(this.$route.query.card_state == "change")
				this.card_state_btn = "변경";
		},
		methods : {
			onlyNum(){
				this.cardNumber = this.cardNumber.replace(/[^0-9]/g, '');
			},
			card_update(){
				if(!this.cardNumber){
					alert("카드번호를 입력해주세요");
					return false;
				}
				if(this.cardNumber.length != 16){
					alert("카드번호 16자리 모두 입력해주세요.");
					return false;
				}
				if(!this.cardName){
					alert("소유자 이름을 입력해주세요.");
					return false;
				}
				if(!this.cardMonth || !this.cardYear){
					alert("유효기간을 선택해주세요.");
					return false;
				}
				if(!this.cardCVC){
					alert("CVC번호를 입력해주세요.");
					return false;
				}
				if(!this.card_passno){
					alert("카드 비밀번호 2자리를 입력해주세요.");
					return false;
				}
				console.log(this.cardNumber + "||" + this.cardName + "||" + this.cardMonth +"||"+this.cardYear+"||"+this.cardCVC);
				if(this.$route.query.card_state = "register"){
					this.$http.post(this.$server+'/userapp/setRegCard', {
						mem_no : sessionStorage.getItem("mem_no"),
						card_no : this.cardNumber,
						owner : this.cardName,
						exp_mm : this.cardMonth,
						exp_yy : this.cardYear,
						cvc_no : this.cardCVC,
						password_no : this.card_passno,

					},{headers : {
					auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
					}
					}).then(
					(res) => {  // 
						if (res.data.result_code == "Y"){
							console.log("card등록 성공!!");
							this.$router.push({name : 'PaymentVue'});
						}
						else{
							
						}   
					})
				}
				else if(this.$router.query.card_state = "change"){
					this.$http.post(this.$server+'/userapp/setUpdateCard', {
						mem_no : sessionStorage.getItem("mem_no"),
						card_no : this.cardNumber,
						owner : this.cardName,
						exp_mm : this.cardMonth,
						exp_yy : this.cardYear,
						cvc_no : this.cardCVC,
						password_no : this.card_passno,
					},{headers : {
					auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
					}
					}).then(
					(res) => {  // 
						if (res.data.result_code == "Y"){
							console.log("card변경 성공!!");
						}
						else{
							
						}   
					})
				}
			}
		}
    }
</script>