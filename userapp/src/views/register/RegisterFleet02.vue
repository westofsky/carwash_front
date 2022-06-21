<template>
  <div>
    <div id="content_wrap" class="register_fleet02">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_fleet01.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/registerFleet01" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">FLEET 회원가입</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">기업 또는 단체용 FLEET 회원가입 입니다.<br>이용약관에 동의해 주세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">FLEET 회원 가입 약관 동의</p>
          <div class="agree_wrap">
            <div class="agree_all_wrap check_list2">
              <input type="checkbox" id="agree_all" class="agree_all" @click = "checkedAll" v-model = "allChecked"><div class="check"></div><label for="agree_all">전체 동의</label>
						  <p class="warn"><img src="../../assets/img/content/ico_warn.png" alt="경고아이콘">필수 동의 사항에 모두 동의해주세요</p>
            </div>
            <ul class="agree_list check_list">
              <li>
                <!-- <a href="./register_terms.html" target="_blank">
                  <p>만 14세 이상 사용</p>
                </a> -->
                <router-link to="/registerTerms">
                  <p>만 14세 이상 사용</p>
                </router-link>
                <span class="warn">(필수)</span><label for="agree01_fleet" class="agree"><input type="checkbox"
                    name="agree" id="agree01_fleet" v-model="agree01" @input = "detect_change">
                  <div class="check"></div>
                </label>
              </li>
              <li>
                <!-- <a href="./register_terms.html" target="_blank">
                  <p>서비스 이용약관</p>
                </a> -->
                <router-link to="/registerTerms">
                  <p>서비스 이용약관</p>
                </router-link>
                <span class="warn">(필수)</span><label for="agree02_fleet" class="agree"><input type="checkbox"
                    name="agree" id="agree02_fleet" v-model="agree02" @input = "detect_change">
                  <div class="check"></div>
                </label>
              </li>
              <li>
                <!-- <a href="./register_terms.html" target="_blank">
                  <p>개인정보 수집 및 이용 동의</p>
                </a> -->
                <router-link to="/registerTerms">
                  <p>개인정보 수집 및 이용 동의</p>
                </router-link>
                <span class="warn">(필수)</span><label for="agree03_fleet" class="agree"><input type="checkbox"
                    name="agree" id="agree03_fleet" v-model="agree03" @input = "detect_change">
                  <div class="check"></div>
                </label>
              </li>
              <li>
                <!-- <a href="./register_terms.html" target="_blank">
                  <p>위치정보 이용 약관</p>
                </a> -->
                <router-link to="/registerTerms">
                  <p>개인정보 수집 및 이용 동의</p>
                </router-link>
                <span>(선택)</span><label for="agree04_fleet" class="agree"><input type="checkbox" name="agree"
                    id="agree04_fleet" v-model="agree04" @input = "detect_change">
                  <div class="check"></div>
                </label>
              </li>
              <li>
                <!-- <a href="./register_terms.html" target="_blank">
                  <p>혜택 알림 수신 동의</p>
                </a> -->
                <router-link to="/registerTerms">
                  <p>혜택 알림 수신 동의</p>
                </router-link>
                <span>(선택)</span><label for="agree05_fleet" class="agree"><input type="checkbox" name="agree"
                    id="agree05_fleet" v-model="agree05" @input = "detect_change">
                  <div class="check"></div>
                </label>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
    <aside>
      <div class="btn_next active">
        <!-- <a href="./register_fleet03.html">FLEET 회원가입(활성화)</a> -->
        <router-link to="/registerFleet03">FLEET 회원가입(활성화)</router-link>
      </div>
      <div class="btn_next">
        <!-- <a href="#n">FLEET 회원가입(비활성화)</a> -->
        <router-link to="/registerFleet01">FLEET 회원가입(비활성화)</router-link>
      </div>
    </aside>
  </div>
</template>

<script>

		export default{
			props : {
				fleet_name : {
					type: String,
					default : '',
				},
				fleet_id : {
					type: String,
					default : '',
				},
				fleet_pw : {
					type: String,
					default : '',
				},
				fleet_usage : {
					type: String,
					default : '',
				},
				fleet_phone : {
					type: String,
					default : '',
				},
				fleet_email : {
					type: String,
					default : '',
				},
				fleet_business : {
					type: String,
					default : '',
				},
			},
			data(){
				return {
					allChecked : false,
					agree01 : false,
					agree02 : false,
					agree03 : false,
					agree04 : false,
					agree05 : false,
					agree_ok : false,
				}
			},
			mounted(){
				/*
				let agreeAll = document.querySelector('input[class="agree_all"]'),
					agreeAllCheck = document.querySelector('label[for="agree_all"]'),
					agreeCheck = document.querySelectorAll('input[name="agree"]');
				agreeAllCheck.addEventListener('click', function(){
					if(!agreeAll.checked){
						for(let i=0; i<agreeCheck.length; i++){
							agreeCheck[i].checked = 'true';
							this.agree01 = true;
						}
					}
					else{
						for(let i=0; i<agreeCheck.length; i++){
							agreeCheck[i].checked = 'false';
						}
					}
				});
				*/
			},
			methods : {
				checkedAll(){
					if(!this.allChecked){
						this.agree01 = true;
						this.agree02 = true;
						this.agree03 = true;
						this.agree04 = true;
						this.agree05 = true;
					}
					else{
						if(this.agree01 && this.agree02 && this.agree03 && this.agree04 & this.agree05){
							this.agree01 = false;
							this.agree02 = false;
							this.agree03 = false;
							this.agree04 = false;
							this.agree05 = false;
						}
					}
					
				},
				detect_change(){
					if(this.agree01 && this.agree02 && this.agree03 && this.agree04 & this.agree05){
						this.allChecked = false;
					}
					if(this.agree01 && this.agree02 && this.agree03){
						this.agree_ok = true;
					}
				},
				fleet_register(){
					//회원가입
					var agree01,agree02,agree03,agree04,agree05;
					if(this.agree01)
						agree01 = 'Y';
					else
						agree01 = 'N';
					
					if(this.agree02)
						agree02 = 'Y';
					else
						agree02= 'N';
					
					if(this.agree03)
						agree03 = 'Y'; 
					else
						agree03 = 'N';
					
					if(this.agree04)
						agree04= 'Y';
					else
						agree04 = 'N';
					
					if(this.agree05)
						agree05= 'Y';
					else
						agree05= 'N';
					// this.$http.post('/api/users/register_fleet', {
					// 	fleet_name : this.fleet_name,
					// 	fleet_id : this.fleet_id,
					// 	fleet_pw : this.fleet_pw,
					// 	fleet_usage : this.fleet_usage,
					// 	fleet_phone : this.fleet_phone,
					// 	fleet_email : this.fleet_email,
					// 	fleet_business : this.fleet_business,
					// 	agree01 : agree01,
					// 	agree02 : agree02,
					// 	agree03 : agree03,
					// 	agree04 : agree04,
					// 	agree05 : agree05,
						
					// }).then(
					// (res) => {  //회원가입 확인
					// 	console.log("회원가입 성공");
							
					// 	if (res.data.success == true){
					// 		this.$router.push({name : 'register_fleet03',params : {
					// 			fleet_id : res.data.fleet_id,
					// 			fleet_usage : this.fleet_usage,
					// 		}});
					// 	}
					// 	else{
							
					// 	}	
					// },
					// (err) => { // error 를 보여줌
					// 	console.log(err);
					// }).catch((err) => {
					// 	console.log(err);
					// })
					
				}
			},
		}
</script>