<template>
  <div id="logins">
    <div id="content_wrap">
      <div id="top">
        <div id="login_logo"><img src="../../assets/img/logo_login.svg" alt="WASHDAY">
          <p>스파크플러스와 함께 스마트한 세차!!</p>
        </div>
      </div>

      <article id="login">
        <section class="login_container">
          <div class="login_tab">
            <div class="tab_basic"><a class="active" href="#">개인회원</a></div>
            <div class="tab_fleet"><a href="#">FLEET회원</a>
              <span class="tab_help">기업/단체</span>
            </div>
            <span class="login_slide"></span>
          </div>
          <form class="login_form basic" action="">
            <div class="input_id"><label>차량번호</label>
              <a href="#" class="local inputA login_num01" id="input_local"
                onclick="popOn(document.querySelector('.pop_local_wrap'))">지역</a>
              <input type="text" class="login_num02" placeholder="123">
              <a href="#" class="login_num03 inputA " onclick="popOn(document.querySelector('.pop_purpose_wrap'))">가</a>
              <input type="text" class="login_num04" placeholder="4567">
            </div>
            <div class="input_pw"><label for="loginPW">비밀번호</label><input type="password" name="basicPW" id="loginPW"
                placeholder="*********"></div>
            <router-link to="/homeBasic"><input type="submit" value="로그인"></router-link>
          </form>
          <form class="login_form fleet" action="">
            <div class="input_fleet_id"><label for="fleetID">차량번호</label><input type="text" name="fleetID" id="fleetID"
                placeholder="FLEET 코드 예) C123456">
            </div>
            <div class="input_fleet_pw"><label for="fleetPW">비밀번호</label><input type="password" name="fleetPW"
                id="fleetPW" placeholder="*********"></div>
            <router-link to="/homeFleet01"><input type="submit" value="로그인"></router-link>
          </form>
          <div class="login_auto"><input type="checkbox" id="login_auto" name="login_auto"><label
              for="login_auto">자동로그인</label></div>
          <div class="login_find"><a href="#n">아이디/비밀번호 찾기</a></div>
          <div class="login_regiBtns">
            <router-link to = "/RegisterBasic01" class = "regi_basic">
                개인 회원가입
            </router-link>
            <router-link to = "/RegisterFleet01" class = "regi_fleet">
                FLEET 회원가입<span>(기업/단체)</span>
            </router-link>
          </div>
        </section>
      </article>
      <p class="copy">@SPARKPLUS</p>

      <div class="pop_local_wrap">
        <div class="pop_local">
          <a href="#" class="btn_close" onclick="closePop(document.querySelector('.pop_local_wrap'))"><img
              src="../../assets/img/btn_close.svg" alt=""></a>
          <div class="txt">
            <h2>지역선택</h2>
            <p>아래에서 자동차 앞 지역을 선택하세요</p>
          </div>
          <ul class="locals">
            <li><a href="#" data-value="none">없음</a></li>
            <li><a href="#" data-value="seoul">서울</a></li>
            <li><a href="#" data-value="gyeongi">경기</a></li>
            <li><a href="#" data-value="inchheon">인천</a></li>
            <li><a href="#" data-value="busan">부산</a></li>
            <li><a href="#" data-value="daegu">대구</a></li>
            <li><a href="#" data-value="gwangju">광주</a></li>
            <li><a href="#" data-value="daejeon">대전</a></li>
            <li><a href="#" data-value="ulsan">울산</a></li>
            <li><a href="#" data-value="gangwon">강원</a></li>
            <li><a href="#" data-value="chungnam">충남</a></li>
            <li><a href="#" data-value="chungbuk">충북</a></li>
            <li><a href="#" data-value="jeonnam">전남</a></li>
            <li><a href="#" data-value="jeonbuk">전북</a></li>
            <li><a href="#" data-value="gyeongnam">경남</a></li>
            <li><a href="#" data-value="gyeongbuk">경북</a></li>
            <li><a href="#" data-value="jeju">제주</a></li>
            <li><a href="#" data-value="dummy">임시</a></li>
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
    </div>
  </div>
</template>
<script>
	export default {
      mounted(){
					let tabs = document.querySelectorAll('.login_tab a'),
					loginForm = document.querySelectorAll('.login_form');
          for(const tab of tabs) {
            tab.addEventListener('click', function(){
              for(let i=0; i<tabs.length; i++){
                tabs[i].classList.remove('active');
              }
              for(let i=0; i<loginForm.length; i++){
                loginForm[i].style.display = 'none';
              }
              tab.classList.add('active');
              if(document.querySelector('.tab_basic a.active')) {
                document.querySelector('.login_form.basic').style.display = 'block';
              } else if (document.querySelector('.tab_fleet a.active')) {
                document.querySelector('.login_form.fleet').style.display = 'block';
              }
            });
          }
				const locals = document.querySelectorAll('.locals li a'),
        localValue = document.querySelector('#input_local'),
        popLocal = document.querySelector('.pop_local_wrap');
				for(let i=0; i<locals.length; i++){
					locals[i].addEventListener('click', function(){
						for(let x=0; x<locals.length; x++){
							locals[x].parentNode.classList.remove('active');
						}
						this.parentNode.classList.add('active');
						let value = this.textContent;
						localValue.textContent = value;
						localValue.style.color = "#000";
						popLocal.classList.remove('active');
					});
				}
				for(let i=0; i<loginForm.length; i++){
					loginForm[i].style.display = 'none';
				}
				
				document.querySelector('.tab_basic a').click();
			},
		}
</script>		