<template>
  <div>
    <div id="content_wrap" class="pay_coupon_buy">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/homeBasic" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">쿠폰 구매 사용</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">쿠폰 리스트를 관리하거나 구매하실 수 있습니다.
          </p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="section_tab">
            <!-- <a href="#">미사용 목록</a>
            <a href="#">사용 목록</a>
            <a class="active" href="#">쿠폰구매</a>
            <a href="#">쿠폰추가</a> -->
            <router-link to="/payCoupon01">미사용 목록</router-link>
            <router-link to="/payCoupon05">사용 목록</router-link>
            <router-link to="/payCouponBuy" class="active">쿠폰구매</router-link>
            <router-link to="/payCouponAdd">쿠폰추가</router-link>
          </div>
          <div class="coupon_list_wrap">
            <div class="con_info">
              <p class="sec_txt"><span class="black fontBold">원하시는 GIFT쿠폰 세차상품</span>을 선택해주세요</p>
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
          </div>

        </section>
      </article>
    </div>

    <aside>
      <div class="btn_next active">
        <!-- <a href="#n">결제하기(활성화)</a> -->
        <router-link to="/payOnetimeOrder01">결제하기(활성화)</router-link>
      </div>
      <div class="btn_next">
        <!-- <a href="#n">결제하기(비활성화)</a> -->
        <router-link to="/payVue">결제하기(비활성화)</router-link>
      </div>
    </aside>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import FooterVue from "../footer/FooterVueCoupon.vue";

export default {
  components: {
    FooterVue
  },
  mounted (){
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
    alert("준비중입니다.")
    this.$router.go(-1);
  }

};
</script>