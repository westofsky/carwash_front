<template>
  <div>
    <div id="content_wrap" class="pay_onetime">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./pay.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/payVue" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">멤버쉽 세차상품</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">멤버쉽 세차 상품을 구매 중 입니다.<br>세차 상품 선택 후 옵션 상품을 선택해주세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">01 원하시는 세차 상품</span>을 선택해주세요</p>
          </div>
          <ul id="oneType_wrap" class="oneType_wrap">
            <li><input type="radio" name="oneType" value="onetimePremium" id="onetimePremium">
              <a href="#">
                <span class="img"><img class="off" src="../../assets/img/content/pay_onetime01.png" alt=""><img
                    class="on" src="../../assets/img/content/pay_onetime01_on.png" alt=""></span>
                <span class="info"><span class="fontBold">PREMIUM</span>기존세차 + 거품 + 왁스 + 하부</span>
                <span class="price">28,000</span>
                <span class="check"></span>
              </a>
            </li>
            <li><input type="radio" name="oneType" value="onetimeBest" id="onetimeBest">
              <a href="#">
                <span class="img"><img class="off" src="../../assets/img/content/pay_onetime02.png" alt=""><img
                    class="on" src="../../assets/img/content/pay_onetime02_on.png" alt=""></span>
                <span class="info"><span class="fontBold">BEST</span>기존세차 + 거품 + 왁스</span>
                <span class="price">21,000</span>
                <span class="check"></span>
              </a>
            </li>
            <li><input type="radio" name="oneType" value="onetimeBubble" id="onetimeBubble">
              <a href="#">
                <span class="img"><img class="off" src="../../assets/img/content/pay_onetime03.png" alt=""><img
                    class="on" src="../../assets/img/content/pay_onetime03_on.png" alt=""></span>
                <span class="info"><span class="fontBold">BUBBLE</span>기존세차 + 거품</span>
                <span class="price">16,000</span>
                <span class="check"></span>
              </a>
            </li>
            <li><input type="radio" name="oneType" value="onetimeBasic" id="onetimeBasic">
              <a href="#">
                <span class="img"><img class="off" src="../../assets/img/content/pay_onetime04.png" alt=""><img
                    class="on" src="../../assets/img/content/pay_onetime04_on.png" alt=""></span>
                <span class="info"><span class="fontBold">BASIC</span>기존세차</span>
                <span class="price">12,000</span>
                <span class="check"></span>
              </a>
            </li>
          </ul>
        </section>

        <div class="arrow"><img src="../../assets/img/content/arrow01.svg" alt=""></div>




        <section class="con2">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">02 세차 마지막 공정</span>을 선택해주세요</p>
          </div>
          <!--
				<ul class="oneOption_wrap check_list" id="option02">
					<li>
						<div class="option_img"><img src="./img/content/pay_oneOption0201.png" alt=""></div><label for="oneOption0201"><span class="option_name">브러시로 물기제거</span><span class="option_price">+2000</span></label>
						<input type="checkbox" name="oneOption02" id="oneOption0201" value="oneOption0201" class="oneOption">
						<div class="check"></div>
					</li>
				</ul>
-->
          <div class="oneOption_no check_list2" id="noOption02">
            <input type="checkbox" name="oneOption02" id="oneNoOption02" class="oneNoOption">
            <div class="check"></div>
            <label for="oneNoOption02"><span class="option_name">건조브러쉬 미사용</span></label>
          </div>
        </section>
        <section class="how_use">
          <p class="title">멤버쉽 세차상품을 선택 후, 결제하기 버튼을 눌러주세요</p>
        </section>
      </article>

    </div>
    <aside>
      <div class="btn_next active">
        <!-- <a href="#n">
          <img src="../../assets/img/content/pay01.png" alt="">
          멤버쉽 간편 결제(활성화)
        </a> -->
        <router-link to="/payOnetimeOrder01">
          멤버쉽 간편 결제(활성화)
        </router-link>
      </div>
      <div class="btn_next">
        <!-- <a href="#n"><img src="../../assets/img/content/pay01.png" alt="">멤버쉽 간편 결제(비활성화)</a> -->
        <router-link to="/payVue">
          멤버쉽 간편 결제(비활성화)
        </router-link>
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
  mounted (){
    /* 01 세차상품 선택 이벤트 */
		let oneType = document.getElementsByName('oneType'),
			oneTypeLi = document.querySelectorAll('#oneType_wrap li'),
			oneTypeBtn = document.querySelectorAll('#oneType_wrap li a');
			// oneTypeImg = document.querySelectorAll('#oneType_wrap li a .img');
		
		for(let i=0; i<oneTypeBtn.length; i++){
			oneTypeBtn[i].addEventListener('click', function(e){
				e.preventDefault();
				for(let x=0; x<oneTypeBtn.length; x++){
					oneTypeLi[x].classList.remove('active');
				}
				oneTypeLi[i].classList.add('active');
				oneType[i].checked = 'true';
			});
		}
		
		
//		/* 02 1회권 옵션 선택 이벤트1 */
//		let oneOption01 = document.querySelectorAll('#option01 input[type="checkbox"]'),
//			oneNoOption01 = document.querySelector('#noOption01 .oneNoOption');
//		
//		for(let i =0; i<oneOption01.length; i++){
//			oneOption01[i].addEventListener('input', function(){
//				oneNoOption01.checked = false;
//			});
//		}
//		
//		
//		
//		oneNoOption01.addEventListener('input', function(){
//			if(this.checked){
//				for(let i =0; i<oneOption01.length; i++){
//					oneOption01[i].checked = false;
//				}
//			} 
//		});
		
		/* 03 1회권 옵션 선택 이벤트2 */
		let oneOption02 = document.querySelectorAll('#option02 input[type="checkbox"]'),
			oneNoOption02 = document.querySelector('#noOption02 .oneNoOption');
		
		for(let i =0; i<oneOption02.length; i++){
			oneOption02[i].addEventListener('input', function(){
				oneNoOption02.checked = false;
			});
		}
		
		oneNoOption02.addEventListener('input', function(){
			if(this.checked){
				for(let i =0; i<oneOption02.length; i++){
					oneOption02[i].checked = false;
				}
			}
		});
  }
};
</script>