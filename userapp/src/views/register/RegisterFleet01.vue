<template>
  <div>
    <div id="content_wrap" class="register_fleet01">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./login.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">FLEET 회원가입</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">기업 또는 단체용 FLEET 회원가입 입니다.<br>기업 또는 단체 정보를 입력해주세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <ul>
            <li>
              <label for="fleetName" class="title">FLEET 이름<span class="required">*</span></label>
              <input type="text" class="fleet_name" id="fleetName" placeholder="예) 가나다라기업, 가나다라동호회" v-model = "fleet_name">
					    <p class="warn">{{warning.name}}</p>
            </li>
            <li>
              <label for="fleetID" class="title">아이디<span class="required">*</span></label>
              <span class="guide">영문, 숫자, 특수문자 혼용하여 10~12자리 이내</span>
              <div>
                <input type="text" id="fleetID" class="fleet_ID" placeholder="abcd1234@" @input="warn_check_id">
                <button class="check">중복등록 확인</button>
              </div>
						  <p class="warn">{{warning.id}}</p>
            </li>
            <li>
              <label for="fleetPW" class="title">비밀번호<span class="required">*</span></label>
              <span class="guide">영문, 숫자, 특수문자 혼용하여 10~12자리 이내</span>
              <input type="password" class="fleet_PW" id="fleetPW" placeholder="********" v-model = "fleet_pw" @input="warn_check_pw">
					    <p class="warn">{{warning.pw}}</p>
            </li>
            <li>
              <label for="fleetPW2" class="title">비밀번호 확인<span class="required">*</span></label>
              <input type="password" class="fleet_PW" id="fleetPW2" placeholder="********" v-model = "fleet_pw_chk" @input="warn_check_pw_chk">
  						<p class="warn">{{warning.pw_chk}}</p>
            </li>
            <li>
              <p class="title">이용구분<span class="required">*</span></p>
              <input type="radio" name="fleetUsage" id="fleetUsagePrepay" class="fleet_usage" value="prepay" v-model="fleet_usage"><label for="fleetUsagePrepay">선불 전용</label>
              <input type="radio" name="fleetUsage" id="fleetUsageDiscount" class="fleet_usage" value="discount" v-model="fleet_usage"><label for="fleetUsageDiscount">할인 전용</label>
					  </li>
            <li>
              <label for="fleetPhone" class="title">담당자 연락처<span class="required">*</span></label>
              <div>
                <input type="number" class="fleet_phone inputA" id="fleetPhone" placeholder="01012345678" v-model = "fleet_phone">
                <button class="check2">인증번호 요청</button>
              </div>
              <p class="warn">인증번호 요청을 눌러, 인증을 완료해주세요.</p>
            </li>
            <li>
              <div>
                <input type="number" class="fleet_phone_check" placeholder="01012345678" v-model = "fleet_phone_chk">
                <button class="check">인증번호 확인</button>
              </div>
              <div class="time">
                <p class="check_time">36:20:01</p>
                <a href="#n" class="check_timemore">시간연장하기&gt;</a>
              </div>
            </li>
            <li>
              <label for="fleetEmail" class="title">담당자 이메일</label>
              <div class="email_wrap">
                <input type="text" class="fleet_email" id="fleetEmail" placeholder="abcd1234" v-model = "fleet_email">
                <p>@</p>
                <select name="" id="">
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="none">직접입력</option>
                </select>
              </div>
              <p class="warn">이메일을 입력하세요</p>
            </li>
            <li>
              <div class="email_wrap">
                <input type="text" class="fleet_email" placeholder="abcd1234">
                <p>@</p>
                <input type="text" placeholder="직접 입력">
              </div>
            </li>
            <li>
              <label for="fleetBusiness" class="title">사업자등록번호</label>
              <input type="number" id="fleetBusiness" class="fleet_business" placeholder="예) 1100000000 숫자만 입력" v-model = "fleet_business">
              <p class="warn">이미 가입된 사업자등록번호 입니다</p>
            </li>
            <li class="required_guide">
              <p><span class="required">*</span> 필수 입력</p>
            </li>
          </ul>
        </section>
      </article>
    </div>
    <aside>
      <div class="btn_cancel2">
        <!-- <a href="./login.html">취소</a> -->
        <router-link to="/">취소</router-link>
      </div>
      <div class="btn_next2">
        <a @click = "fleet_register">FLEET 등록</a>
        <!-- <router-link to="/registerFleet02">FLEET 등록</router-link> -->
      </div>
    </aside>
  </div>
</template>

<script>
import { TypedChainedSet } from 'webpack-chain';



export default {
		data (){
			return {
				fleet_name : '',
				fleet_id : '',
				fleet_pw : '',
				fleet_pw_chk : '',
				fleet_usage : '',
				fleet_phone : '',
				fleet_phone_chk : '',
				fleet_email : '',
				fleet_business : '',
				warning : {
					name : '',
					id : '',
					pw : '',
					pw_chk : '',
					business : '',
				},
				check : {
					name : false,
					id : false,
					pw : false,
					business : false,
				},
			}
		},
		mounted(){
			let fleetInput = document.querySelectorAll('input');
				for(let i =0; i<fleetInput.length; i++){
				fleetInput[i].onfocus = function(){
					let id = this.getAttribute('id');
					let label = document.querySelector(`label[for="${id}"]`);
					if(label){
						label.style.color = "var(--mainColor)";
						label.style.fontWeight = "600";
					}
				}
				fleetInput[i].onblur = function(){
					let id = this.getAttribute('id');
					let label = document.querySelector(`label[for="${id}"]`);
					if(label){
						label.style.color = "#000";
						label.style.fontWeight = "400";
					}
				}
			}
		},
		methods:{
			chk_id_duplicate(){
				if(this.warning.id == ""){
					this.$http.post('/api/userapp/chkfleetid', {
						fleet_id : this.fleet_id
					}).then(
					(res) => {  //아이디 중복 확인 
						if (res.data.result_code == "Y"){
							this.check.id = true;
						}
						else{

						}	
					},
					(err) => { // error 를 보여줌
						console.log(err);
					}).catch((err) => {
						console.log(err);
					})
				}
				else{
					alert("아이디를 확인해주세요.");
				}
				
			},
			warn_check_id(){
				if(!this.fleet_id)
					this.warning.id = "이름을 입력해주세요.";
				else{
					if(!(this.fleet_id.length>=10 && this.fleet_id.length<=12)){
						this.warning.id = "10~12자리 이내로 작성해주세요.";
					}
					else{
						this.warning.id = "";
					}
				}
			},
			warn_check_pw(){
				if(!this.fleet_pw)
					this.warning.pw = "비밀번호를 입력해주세요.";
				else{
					if(!(this.fleet_pw.length>=10 && this.fleet_pw.length<=12)){
						this.warning.pw = "10~12자리 이내로 작성해주세요.";
					}
					else{
						this.warning.pw = "";
						if(this.fleet_pw != this.fleet_pw_chk){
							if(!this.fleet_pw_chk)
								this.warning.pw_chk = "";
							else
								this.warning.pw_chk = "비밀번호가 일치하지 않습니다.";
						}
						else{
							this.warning.pw_chk = "";
							this.warning.pw = "";
							this.check.pw = true;
						}
					}	
				}
			},
			warn_check_pw_chk(){
				if(this.fleet_pw != this.fleet_pw_chk){
					this.warning.pw_chk = "비밀번호가 일치하지 않습니다.";
				}
				else{
					this.warning.pw_chk = "";
				}
			},
			certification_phone(){
				
			},
			certification_phone_chk(){
				
			},
			
			fleet_register(){
				if(!this.fleet_name){
					alert("이름을 입력해주세요");
					return false;
				}
				if(!this.fleet_id){
					alert("아이디를 입력해주세요");
					return false;
				}
				if(!this.fleet_pw){
					alert("비밀번호를 입력해주세요");
					return false;
				}
				if(!this.fleet_phone){
					alert("핸드폰을 입력해주세요");
					return false;
				}
				if(!this.fleet_email){
					alert("이메일을 입력해주세요");
					return false;
				}
					
				
				this.$http.post('/api/userapp/chkfleetname', {
					fleet_name : this.fleet_name
				}).then(
				(res) => {  //이름 중복확인 
					if (res.data.result_code == "Y"){
						this.check.name = true;
					}
					else{
						this.warning.name = "이미 가입된 FLEET 이름입니다.";
					}	
				},
				(err) => { // error 를 보여줌
					console.log(err);
				}).catch((err) => {
					console.log(err);
				});
				if(this.check.id && this.check.pw && this.check.name){
					this.$router.push({name : 'RegisterFleet02',params : {
						fleet_name : this.fleet_name,
						fleet_id : this.fleet_id,
						fleet_pw : this.fleet_pw,
						fleet_usage : this.fleet_usage,
						fleet_phone : this.fleet_phone,
						fleet_email : this.fleet_email,
						fleet_business : this.fleet_business,
					}});
				}
				
				
			},
		}
	}
</script>