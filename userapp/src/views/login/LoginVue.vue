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
          <form class="login_form basic" action="" @submit.prevent = "onSubmit">
           <div class="input_fleet_id"><label for="fleetID">차량번호</label><input type="text" name="fleetID" id="fleetID" v-model = "basicUser.car_no"
                placeholder="예) 123가4567, 서울12가3456">
            </div>
            <div class="input_pw"><label for="loginPW">비밀번호</label><input type="password" name="basicPW" id="loginPW" v-model = "basicUser.pw"
                placeholder="*********"></div>
            <!-- <router-link to="/homeBasic"><input type="submit" value="로그인"></router-link> -->
            <input type = "submit" value="로그인" @click = "basic_login">
          </form>
          <form class="login_form fleet" action="" @submit.prevent = "onSubmit">
            <div class="input_fleet_id"><label for="fleetID">아이디</label><input type="text" name="fleetID" id="fleetID" v-model = "fleetUser.id"
                placeholder="FLEET 코드 예) C123456">
            </div>
            <div class="input_fleet_pw"><label for="fleetPW">비밀번호</label><input type="password" name="fleetPW" v-model = "fleetUser.pw"s
                id="fleetPW" placeholder="*********"></div>
            <!-- <router-link to="/homeFleet01"><input type="submit" value="로그인"></router-link> -->
            <input type = "submit" value="로그인" @click = "fleet_login">
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
				document.querySelector('.tab_basic a').click();
			},
        data () {
          return {
            basicUser : {
              car_no : '',
              pw : '',              
            },
            fleetUser : {
              id : '',
              pw : '',
            }
          }
        },
        methods : {
          basic_login(){
            if(this.basicUser.car_no == '' || this.basicUser.pw == ''){
              alert("차량번호(아이디) 또는 비밀번호를 입력해주세요.");
            }
            else{
              this.$http.post('api주소', {
                mem_type : "01",
                car_no : this.basicUser.car_no,
                pwd : this.basicUser.pw
              }).then(
              (res) => {  //아이디 중복 확인 
                if (res.data.result_code == "Y"){
                  
                }
                else{
                  alert("차량번호(아이디) 또는 비밀번호 확인하세요.");
                }	
              },
              (err) => { // error 를 보여줌
                alert('Login failed! please check your id or password');
                console.log(err);
              }).catch((err) => {
                console.log(err);
              })
            }
          },
          fleet_login(){
            if(this.fleetUser.car_no == '' || this.fleetUser.pw == ''){
              alert("차량번호(아이디) 또는 비밀번호를 입력해주세요.");
            }
            else{
              this.$http.post('api주소', {
                mem_type : "02",
                fleet_id : this.fleetUser.id,
                pwd : this.fleetUser.pw
              }).then(
              (res) => {  //아이디 중복 확인 
                if (res.data.result_code == "Y"){
                  
                }
                else{
                  alert("차량번호(아이디) 또는 비밀번호 확인하세요.");
                }	
              },
              (err) => { // error 를 보여줌
                alert('Login failed! please check your id or password');
                console.log(err);
              }).catch((err) => {
                console.log(err);
              })
            }
          }
        }
		}
</script>		