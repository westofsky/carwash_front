<template>
  <div>
    <div id="content_wrap" class="register_basic03">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/registerBasic0201" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">개인 회원가입</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">개인 회원가입 입니다.<br>휴대폰 번호를 등록해주세요.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title"><span class="red">휴대폰 번호</span>를 숫자만 입력하세요</p>
          <div class="phone_num_wrap">
            <input type="text" class="basic" placeholder="예) 01082247363">
          </div>
          <p class="warn"><img src="../../assets/img/content/ico_warn.png" alt="경고아이콘">잘못된 번호 입니다. 오류 메세지 출력할 곳</p>

          <div class="agree_privacy_wrap check_list2">
            <input type="checkbox" name="" id="privacy01" class="agree_privacy">
            <div class="check"></div>
            <label for="privacy01"><span class="option_name">개인정보 수집 동의</span></label>
          </div>
        </section>
      </article>
    </div>



    <aside>
      <div class="btn_cancel2">
        <!-- <a href="./register_basic02.html">취소</a> -->
        <router-link to="/registerBasic0201">취소</router-link>
      </div>
      <div class="btn_next2">
        <!-- <a href="./register_basic04.html">회원가입 완료</a> -->
        <router-link to="registerBasic04">회원가입 완료</router-link>
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
  }
};
</script>