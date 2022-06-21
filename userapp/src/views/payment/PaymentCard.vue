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
						<div class="card-item" v-bind:class="{ '-active' : isCardFlipped }">
						  <div class="card-item__side -front">
							<div class="card-item__focus" v-bind:class="{'-active' : focusElementStyle }" v-bind:style="focusElementStyle" ref="focusElement"></div>
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
							  <span><div class="card-item__numberItem">1</div></span>
							  <span><div class="card-item__numberItem">2</div></span>
							  <span><div class="card-item__numberItem">3</div></span>
							  <span><div class="card-item__numberItem">4</div></span>
								  
							  <span><div class="card-item__numberItem -active"> </div></span>
								  
							  <span><div class="card-item__numberItem">5</div></span>
							  <span><div class="card-item__numberItem">6</div></span>
							  <span><div class="card-item__numberItem">7</div></span>
							  <span><div class="card-item__numberItem">8</div></span>
								  
							  <span><div class="card-item__numberItem -active"> </div></span>
								  
							  <span><div class="card-item__numberItem">4</div></span>
							  <span><div class="card-item__numberItem">5</div></span>
							  <span><div class="card-item__numberItem">6</div></span>
							  <span><div class="card-item__numberItem">7</div></span>
							  </label>
							  <!--E : 카드번호 -->	
							  <div class="card-item__content">
								<label for="cardName" class="card-item__info" ref="cardName">
								  <div class="card-item__holder">소유자 이름</div>
								  <transition name="slide-fade-up">
									<div class="card-item__name">Full Name</div>
								  </transition>
								</label>
								<div class="card-item__date" ref="cardDate">
								  <label for="cardMonth" class="card-item__dateTitle">유효기한</label>
								  <label for="cardMonth" class="card-item__dateItem">
									<transition name="slide-fade-up">
									  <span else key="2"v->MM</span>
									</transition>
								  </label>
								   / 
								  <label for="cardYear" class="card-item__dateItem">
									<transition name="slide-fade-up">
									  <span>YY</span>
									</transition>
								  </label>
								</div>
							  </div>
							</div>
						  </div>
						  <div class="card-item__side -back">
							
							
							<div class="card-item__cvv">
								<div class="card-item__cvvTitle">CVV</div>
								<div class="card-item__cvvBand">
								  <span v-for="(n, $index) in cardCvv" :key="$index">
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
					  <div class="card-form__inner">
						<div class="card-input">
						  <label for="cardNumber" class="card-input__label">카드번호</label>
						  <input type="text" id="cardNumber" class="card-input__input" v-mask="generateCardNumberMask" v-model="cardNumber" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardNumber" autocomplete="off">
						</div>
						<div class="card-input">
						  <label for="cardName" class="card-input__label">소유자 이름</label>
						  <input type="text" id="cardName" class="card-input__input" v-model="cardName" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardName" autocomplete="off">
						</div>
						<div class="card-form__row">
						  <div class="card-form__col">
							<div class="card-form__group">
							  <label for="cardMonth" class="card-input__label">유효기한</label>
							  <select class="card-input__input -select" id="cardMonth" v-model="cardMonth" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
								<option value="" disabled selected>Month</option>
								<option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth" v-bind:key="n">
									{{n < 10 ? '0' + n : n}}
								</option>
							  </select>
							  <select class="card-input__input -select" id="cardYear" v-model="cardYear" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
								<option value="" disabled selected>Year</option>
								<option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
									{{$index + minCardYear}}
								</option>
							  </select>
							</div>
						  </div>
						  <div class="card-form__col -cvv">
							<div class="card-input">
							  <label for="cardCvv" class="card-input__label">CVV</label>
							  <input type="text" class="card-input__input" id="cardCvv" v-mask="'####'" maxlength="4" v-model="cardCvv" v-on:focus="flipCard(true)" v-on:blur="flipCard(false)" autocomplete="off">
							</div>
						  </div>
						</div>
						<router-link to="/PaymentVue" class="btn_back">
							<button class="btn_arrow w100p">
								등록
							</button>
						</router-link>
						
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
			}
		}
    }
</script>