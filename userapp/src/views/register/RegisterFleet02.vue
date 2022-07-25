<template>
  <div>
    <div id="content_wrap" class="register_fleet01">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./login.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/RegisterFleet01" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">FLEET 회원가입</p>
          <a class="btn_back"></a>
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
              <input type="text" class="fleet_name" id="fleetName" placeholder="가나다라기업, 가나다라동호회" v-model = "fleet_name">
					    <p class="warn">{{warning.name}}</p>
            </li>
            <li>
              <label for="fleetID" class="title">아이디<span class="required">*</span></label>
              <span class="guide">영문, 숫자, 특수문자 혼용하여 6~12자리 이내</span>
              <div>
                <input type="text"  id="fleetID" class="fleet_ID" placeholder="abcd1234@" v-model = "fleet_id" @input="warn_check_id" :disabled = "check.id">
                <button class="check" @click = "chk_id_duplicate">중복등록 확인</button>
              </div>
						  <p class="warn">{{warning.id}}</p>
            </li>
            <li>
              <label for="fleetPW" class="title">비밀번호<span class="required">*</span></label>
              <span class="guide">영문, 숫자, 특수문자 혼용하여 8~12자리 이내</span>
              <input type="password" class="fleet_PW" id="fleetPW" placeholder="********" v-model = "fleet_pw" @input="warn_check_pw">
					    <p class="warn">{{warning.pw}}</p>
            </li>
            <li>
              <label for="fleetPW2" class="title">비밀번호 확인<span class="required">*</span></label>
              <input type="password" class="fleet_PW" id="fleetPW2" placeholder="********" v-model = "fleet_pw_chk" @input="warn_check_pw_chk">
  						<p class="warn">{{warning.pw_chk}}</p>
            </li>
            <!-- <li>
				<p class="title">이용구분<span class="required">*</span></p>
				<div v-for="(usage,index) in get_usage" :key="index">
					<input type="radio" name="fleet_types" class="fleet_usage" :value="usage.fleet_type " v-model="fleet_usage">
			  		<label for="fleetUsagePrepay">{{usage.fleet_type_name}}</label>
				</div>
			</li> -->
			<li>
              <p class="title">이용구분<span class="required">*</span></p>
              <input type="radio" name="fleetUsage" id="fleetUsagePrepay" class="fleet_usage" value="MMT002" v-model="fleet_usage"><label for="fleetUsagePrepay">선불 전용</label>
              <input type="radio" name="fleetUsage" id="fleetUsageDiscount" class="fleet_usage" value="MMT003" v-model="fleet_usage"><label for="fleetUsageDiscount">할인 전용</label>
			</li>
			<li>
              <label for="fleetPhone" class="title">담당자 연락처<span class="required">*</span></label>
              <div>
                <input type="number" class="fleet_phone inputA" id="fleetPhone" placeholder="01012345678" v-model = "fleet_phone">
                <button class="check2" @click = "certification_phone">인증번호 요청</button>
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
                <input type="text" class="fleet_email" id="fleetEmail" placeholder="abcd1234" v-model = "fleet_email" @input="warn_check_email">
                <p style="color:black;">@</p>
                <select name="" id="" v-model = "fleet_email_domain">
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="none">직접입력</option>
                </select>
              </div>
              <p class="warn">{{warning.email}}</p>
            </li>
            <!-- <li>
              <div class="email_wrap">
                <input type="text" class="fleet_email" placeholder="abcd1234">
                <p>@</p>
                <input type="text" placeholder="직접 입력">
              </div>
            </li> -->
            <li>
              <label for="fleetBusiness" class="title">사업자등록번호</label>
              <input type="number" id="fleetBusiness" class="fleet_business" placeholder="예) 1100000000 숫자만 입력" v-model = "fleet_business">
              <!-- <p class="warn">이미 가입된 사업자등록번호 입니다</p> -->
            </li>
            <li class="required_guide">
              <p><span class="required">*</span> 필수 입력</p>
            </li>
          </ul>
        </section>
      </article>
    </div>
    <aside>
      <div class="btn_cancel2" style = "bottom : 0px;">
        <!-- <a href="./login.html">취소</a> -->
        <router-link to="/">취소</router-link>
      </div>
      <div class="btn_next2" style = "bottom : 0px;">
        <a @click = "fleet_register">FLEET 등록</a>
        <!-- <router-link to="/registerFleet02">FLEET 등록</router-link> -->
      </div>
    </aside>
  </div>
</template>

<script>
export default {
		data (){
			return {
				fleet_name : '',
				fleet_id : '',
				fleet_pw : '',
				fleet_pw_chk : '',
				fleet_usage : '',
				get_usage : '',
				fleet_phone : '',
				fleet_phone_chk : '',
				fleet_email : '',
				fleet_email_domain : 'naver.com',
				fleet_business : '',
				warning : {
					name : '',
					id : '',
					pw : '',
					pw_chk : '',
					email : '',
					business : '',
				},
				check : {
					name : false,
					id : false,
					pw : false,
					email : false,
					business : false,
				},
				agree_age : "N",
				agree_service : "N",
				agree_privacy : "N",
				agree_sms : "N",
				agree_location : "N",

			}
		},
		beforeCreate(){
			this.$http.post(this.$server+'/userapp/getfleettype', {
			},{headers : {
			auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
			}
			}).then(
			(res) => { 
				console.log(res.data);
				this.get_usage = res.data;
				// console.log(this.get_usage[0].fleet_type_name);
			},
			(err) => { // error 를 보여줌
				console.log(err);
			}).catch((err) => {
				console.log(err);
			})
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
				if(this.warning.id == "" && this.fleet_id != ''){
					this.$http.post(this.$server+'/userapp/chkfleetid', {
						fleet_id : this.fleet_id
					},{headers : {
					auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
					}
					}).then(
					(res) => {  //아이디 중복 확인 
						if (res.data.result_code == "Y"){
							alert("사용 가능한 아이디입니다.");
							this.check.id = true;
							this.warning.id = "사용 가능한 아이디입니다.";
						}
						else{
							this.warning.id = "중복된 아이디입니다.";
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
				if(!this.fleet_id){
					this.warning.id = "아이디를 입력해주세요.";
				}
				else{
					if(!(this.fleet_id.length>=6 && this.fleet_id.length<=12)){
						this.warning.id = "6~12자리 이내로 작성해주세요.";
					}
					else{
						this.warning.id = "";
					}
				}
				const notPhoneticSymbolExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
				if(notPhoneticSymbolExp.test(this.fleet_id)){
					this.fleet_id= this.fleet_id.slice(0,-1);
					let condition = notPhoneticSymbolExp.test(this.fleet_id);
					while ( condition){
						this.fleet_id = this.fleet_id.slice(0,-1);
						condition = notPhoneticSymbolExp.test(this.fleet_id);
					}
				}
				
			},
			warn_check_pw(){
				if(!this.fleet_pw)
					this.warning.pw = "비밀번호를 입력해주세요.";
				else{
					if(!(this.fleet_pw.length>=8 && this.fleet_pw.length<=12)){
						this.warning.pw = "8~12자리 이내로 작성해주세요.";
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
					this.check.pw = true;
				}
			},
			warn_check_email(){
				if(!this.fleet_email){
					this.warning.email = "이메일을 입력하세요";
				}
				else{
					this.warning.email = "";
				}
			},
			certification_phone(){
				this.$http.post('https://app.sparkpluswash.com:9000/biztalk/joinFMember', {
							phone_no : this.fleet_phone,
							certification_no : ,
						},{
						headers : {
							auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
						}
						}).then(
						(res) => { 
						}
						);

			},
			certification_phone_chk(){
				
			},
			
			fleet_register(){
				if(!this.fleet_name){
					alert("FLEET 이름을 입력해주세요");
					return false;
				}
				if(!this.fleet_id){
					alert("아이디를 입력해주세요");
					return false;
				}
				else{
					if(!this.check.id){
						alert("중복등록 확인해주세요");
						return false;
					}
				}
				if(!this.fleet_pw){
					alert("비밀번호를 입력해주세요");
					return false;
				}
				else{
					if(!this.check.pw){
						alert("비밀번호가 일치하지 않습니다.");
						return false;
					}
				}
				if(!this.fleet_usage){
					alert("이용구분을 선택해주세요");
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
				if(!this.fleet_business){
					alert("사업자등록번호를 입력해주세요");
					return false;
				}
				this.$http.post(this.$server+'/userapp/chkfleetid', {
					fleet_name : this.fleet_name
				},{headers : {
				auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
				}
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
				for(var i=0;i<this.$route.query.selectList.length;i++){
					switch(this.$route.query.selectList[i]){
						case "1":
						this.agree_age = "Y";
						break;
						case "2":
						this.agree_service = "Y";
						break;
						case "3":
						this.agree_privacy = "Y";
						break;
						case "4":
						this.agree_sms = "Y";
						break;
						case "5":
						this.agree_location = "Y";
						break;
					}
				}
				this.$http.post(this.$server+'/userapp/setfmember', {
					fleet_id : this.fleet_id,
					fleet_name : this.fleet_name,
					pwd : this.fleet_pw,
					mem_type : this.fleet_usage,
					mem_tel : this.fleet_phone,
					mem_email : this.fleet_email+"@"+this.fleet_email_domain,
					com_num : this.fleet_business,
					agree_age : this.agree_age,
					agree_service : this.agree_service,
					agree_privacy : this.agree_privacy,
					agree_sms : this.agree_sms,
					agree_location : this.agree_location,
					agree_finance : "Y",
				},{headers : {
				auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
				}
				}).then(
				(res) => {  //fleet회원가입
					if (res.data.result_code == "Y"){
						var today = new Date();
						var year = today.getFullYear();
						var month = ('0' + (today.getMonth() + 1)).slice(-2);
						var day = ('0' + today.getDate()).slice(-2);
						this.$http.post('https://app.sparkpluswash.com:9000/biztalk/joinFMember', {
							fleet_id : this.fleet_id,
							phone_no : this.fleet_phone,
							apply_date : year +'-'+month+'-'+day,
						},{
						headers : {
							auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
						}
						}).then(
						(res) => { 
						}
						);
						this.$router.push({name : 'RegisterFleet03',params : {
							fleet_id : this.fleet_id,
							fleet_usage : this.fleet_usage,
						}});
					}
					else{
						alert("회원가입 실패");
					}	
				},
				(err) => { // error 를 보여줌
					console.log(err);
				}).catch((err) => {
					console.log(err);
				})
			},
		}
	}
</script>