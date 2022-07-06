<template>
  <div id="wrapper">
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
              <input type="checkbox" id="agree_all" class="agree_all" v-model = "allSelected" @change = "detect_change"><div class="check"></div><label for="agree_all">전체 동의</label>
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
                    name="agree" id="agree01_fleet" value = "1" v-model = "selectList" @change = "detect_change">
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
                    name="agree" id="agree02_fleet" value = "2" v-model = "selectList" @change = "detect_change">
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
                    name="agree" id="agree03_fleet" value = "3" v-model = "selectList" @change = "detect_change">
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
                    id="agree04_fleet" value = "4" v-model = "selectList" @change = "detect_change">
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
                    id="agree05_fleet" value = "5" v-model = "selectList" @change = "detect_change">
                  <div class="check"></div>
                </label>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
    <aside>
	  <div class="btn_next" v-bind:class = "{active : isActive}" style = "bottom : 0px;">
        <a @click = "registerfleet_info">FLEET 정보 등록</a>
      </div>
    </aside>
  </div>
</template>

<script>

	export default{
		data(){
			return {
				selectList : [],
				isActive : false,		
			}
		},
		methods : {
			registerfleet_info(){
				if(!this.isActive)
					alert("필수 약관에 동의 해 주세요.")
				else{
					console.log(this.selectList);
					this.$router.push({name : 'RegisterFleet02',query : {
						selectList : this.selectList
					}})
				}
			},
			detect_change(){
				var comp = this.selectList.sort();
				if(comp[0] == "1" && comp[1] == "2" && comp[2] == "3"){
					this.isActive = true;
				}
				else{
					this.isActive = false;
				}
			},
		},
		computed : {
			allSelected : {
				//getter
				get : function(){
					return this.selectList.length === 5;
				},
				//setter
				set : function(e){
					this.selectList = e ? ["1","2","3","4","5"] : [];
				}
			}
		},
	}
</script>
<style>
  #wrapper { 
    height:100%;
  }
  .btn_next.active{
    bottom : 56px;
  }
</style>
