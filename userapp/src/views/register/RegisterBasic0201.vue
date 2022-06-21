<template>
  <div>
    <div id="content_wrap" class="register_basic02">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic01.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/registerBasic01" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">개인 회원가입</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">개인 회원가입 입니다.<br>이용하실 차량의 번호를 등록해주세요.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title"><span class="red">차량번호</span>를 입력하세요</p>
          <p class="ex">예) 123가4567, 서울12가3456</p>
          <div class="car_number_wrap">
            <a href="#" class="car_num01 inputA" onclick="popOn(document.querySelector('.pop_local_wrap'))">지역</a>
            <input type="text" class="car_num02" placeholder="123">
            <a href="#" class="car_num03 inputA" onclick="popOn(document.querySelector('.pop_purpose_wrap'))">가</a>
            <input type="text" class="car_num04" placeholder="4567">
          </div>
          <p class="warn"><img src="../../assets/img/content/ico_warn.png" alt="경고아이콘">잘못된 번호 입니다. 오류 메세지 출력할 곳</p>
        </section>
      </article>
    </div>

    <div class="pop_local_wrap">
      <div class="pop_local">
        <a href="#" class="btn_close" onclick="closePop(document.querySelector('.pop_local_wrap'))"><img
            src="../../assets/img/btn_close.svg" alt=""></a>
        <div class="txt">
          <h2>지역선택</h2>
          <p>아래에서 자동차 앞 지역을 선택하세요</p>
        </div>
        <ul class="locals pop">
          <li><a href="#">없음</a></li>
          <li><a href="#">서울</a></li>
          <li><a href="#">경기</a></li>
          <li><a href="#">인천</a></li>
          <li><a href="#">부산</a></li>
          <li><a href="#">대구</a></li>
          <li><a href="#">광주</a></li>
          <li><a href="#">대전</a></li>
          <li><a href="#">울산</a></li>
          <li><a href="#">강원</a></li>
          <li><a href="#">충남</a></li>
          <li><a href="#">충북</a></li>
          <li><a href="#">전남</a></li>
          <li><a href="#">전북</a></li>
          <li><a href="#">경남</a></li>
          <li><a href="#">경북</a></li>
          <li><a href="#">제주</a></li>
          <li><a href="#">임시</a></li>
        </ul>
      </div>
      <span class="popbg" onclick="closePop(document.querySelector('.pop_local_wrap'))"></span>
    </div>

    <div class="pop_purpose_wrap">
      <div class="pop_purpose">
        <a href="#" class="btn_close" onclick="closePop(document.querySelector('.pop_purpose_wrap'))"><img
            src="../../assets/img/btn_close.svg" alt=""></a>
        <div class="txt">
          <h2>한글 선택</h2>
          <p>아래에서 자동차 번호 한글을 선택하세요</p>
        </div>
        <ul class="text pop">
          <li><a href="#">가</a></li>
          <li><a href="#">나</a></li>
          <li><a href="#">다</a></li>
          <li><a href="#">라</a></li>
          <li><a href="#">마</a></li>
          <li><a href="#">거</a></li>
          <li><a href="#">너</a></li>
          <li><a href="#">더</a></li>
          <li><a href="#">러</a></li>
          <li><a href="#">머</a></li>
          <li><a href="#">버</a></li>
          <li><a href="#">서</a></li>
          <li><a href="#">어</a></li>
          <li><a href="#">저</a></li>
          <li><a href="#">고</a></li>
          <li><a href="#">노</a></li>
          <li><a href="#">도</a></li>
          <li><a href="#">로</a></li>
          <li><a href="#">모</a></li>
          <li><a href="#">보</a></li>
          <li><a href="#">소</a></li>
          <li><a href="#">오</a></li>
          <li><a href="#">조</a></li>
          <li><a href="#">구</a></li>
          <li><a href="#">누</a></li>
          <li><a href="#">두</a></li>
          <li><a href="#">루</a></li>
          <li><a href="#">무</a></li>
          <li><a href="#">부</a></li>
          <li><a href="#">수</a></li>
          <li><a href="#">우</a></li>
          <li><a href="#">주</a></li>
          <li><a href="#">아</a></li>
          <li><a href="#">바</a></li>
          <li><a href="#">사</a></li>
          <li><a href="#">자</a></li>
          <li><a href="#">하</a></li>
          <li><a href="#">허</a></li>
          <li><a href="#">호</a></li>
          <li><a href="#">배</a></li>
          <li><a href="#">육</a></li>
          <li><a href="#">해</a></li>
          <li><a href="#">공</a></li>
          <li><a href="#">군</a></li>
          <li><a href="#">합</a></li>
        </ul>
      </div>
      <span class="popbg" onclick="closePop(document.querySelector('.pop_purpose_wrap'))"></span>
    </div>

    <aside>
      <div class="btn_cancel2">
        <!-- <a href="./register_basic01.html">취소</a> -->
        <router-link to="/registerBasic01">취소</router-link>
      </div>
      <div class="btn_next2">
        <!-- <a href="./register_basic03.html">등록</a> -->
        <router-link to="/registerBasic03">등록</router-link>
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
  mounted () {
    // let target = document.querySelectorAll('.pop');
		let targetItem = document.querySelectorAll('.pop li a');
		
		targetItem.forEach(function(e){
			e.addEventListener('click', function(){
				
				let targetText = e.textContent;
				let targetParent = e.parentNode.parentNode;
				console.log(targetParent.classList);
				if(targetParent.classList.contains('text')){
          let carNum3 = document.querySelector('.car_num03');
          carNum3.textContent =targetText;
					carNum3.style.color = "#000";
          closePop(document.querySelector('.pop_purpose_wrap'))
        } else {
          let carNum1 = document.querySelector('.car_num01');
					carNum1.textContent =targetText;
					carNum1.style.color = "#000";
          closePop(document.querySelector('.pop_local_wrap'));
        }
			});
		});
  }
};
</script>