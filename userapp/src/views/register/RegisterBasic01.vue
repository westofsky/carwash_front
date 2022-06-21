<template>
  <div>
    <div id="content_wrap" class="register_basic01">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./login.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">개인 회원가입</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">개인 회원가입 입니다.<br>기업이나 단체는 FLEET 회원으로 가입해주세요.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">개인회원 가입 약관 동의</p>
          <div class="agree_wrap">
            <div class="agree_all_wrap check_list2">
              <input type="checkbox" id="agree_all" class="agree_all">
              <div class="check"></div><label for="agree_all">전체 동의</label>
              <p class="warn"><img src="../../assets/img/content/ico_warn.png" alt="경고아이콘">필수 동의 사항에 모두 동의해주세요</p>
            </div>
            <ul class="agree_list check_list">
              <li>
                <!-- <a href="./register_terms.html" target="_blank">
                  <p>만 14세 이상 사용</p>
                </a> -->
                <router-link to="/registerTerms" target="_blank">
                  <p>만 14세 이상 사용</p>
                </router-link>
                <span class="warn">(필수)</span><label for="agree01_basic" class="agree"><input type="checkbox"
                    name="agree" id="agree01_basic">
                  <div class="check"></div>
                </label>
              </li>
              <li>
                <!-- <a href="./register_terms.html" target="_blank">
                  <p>서비스 이용약관</p>
                </a> -->
                <router-link to="/registerTerms" target="_blank">
                  <p>서비스 이용약관</p>
                </router-link>
                <span class="warn">(필수)</span><label for="agree02_basic" class="agree"><input type="checkbox"
                    name="agree" id="agree02_basic">
                  <div class="check"></div>
                </label>
              </li>
              <li>
                <!-- <a href="./register_terms.html" target="_blank">
                  <p>개인정보 수집 및 이용 동의</p>
                </a> -->
                <router-link to="/registerTerms" target="_blank">
                  <p>개인정보 수집 및 이용 동의</p>
                </router-link>
                <span class="warn">(필수)</span><label for="agree03_basic" class="agree"><input type="checkbox"
                    name="agree" id="agree03_basic">
                  <div class="check"></div>
                </label>
              </li>
              <li>
                <!-- <a href="./register_terms.html" target="_blank">
                  <p>위치정보 이용 약관</p>
                </a> -->
                <router-link to="/registerTerms" target="_blank">
                  <p>위치정보 이용 약관</p>
                </router-link>
                <span>(선택)</span><label for="agree04_basic" class="agree"><input type="checkbox" name="agree"
                    id="agree04_basic">
                  <div class="check"></div>
                </label>
              </li>
              <li>
                <!-- <a href="./register_terms.html" target="_blank">
                  <p>혜택 알림 수신 동의</p>
                </a> -->
                <router-link to="/registerTerms" target="_blank">
                  <p>혜택 알림 수신 동의</p>
                </router-link>
                <span>(선택)</span><label for="agree05_basic" class="agree"><input type="checkbox" name="agree"
                    id="agree05_basic">
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
        <!-- <a href="./register_basic02.html">차량 번호 등록(활성화)</a> -->
        <router-link to="registerBasic0201">차량 번호 등록(활성화)</router-link>
      </div>
      <div class="btn_next">
        <!-- <a href="#n">차량 번호 등록(비활성화)</a> -->
        <router-link to="/loginVue">차량 번호 등록(비활성화)</router-link>
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
    
  }
};
</script>