<template>
  <div>
    <div id="content_wrap" class="register_terms">
      <div id="top">
        <div id="nav">
          <a class="btn_back" href="#"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a>
          <p class="current">서비스 이용약관</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <h2>제 1장 총 칙</h2>
          <p>
            <span class="title">제 1조 (목적)</span>
            본 약관은 주식회사 0000(이하 "회사")가 제공하는 위치기반서비스에 대해 회사와 위치기반 서비스를 이용하는 개인위치정보주체(이하 "이용자")간의 권리·의무 및 책임사항, 기타 필요한 사항
            규정을 목적으로 합니다.
          </p>
          <p>
            <span class="title">제 2조 (용어정의)</span>
            (1)가나다라마바사<br>
            ① 개인위치정보주체(이하 "이용자")간의 권리·의무 및 책임사항, 기타 필요한 사항 규정을 목적으로 합니다.
          </p>
        </section>
      </article>
    </div>



    <aside>
      <div class="btn_cancel2">
        <!-- <a href="./register_basic02.html">취소</a> -->
        <router-link to="'/registerBasic0201'">취소</router-link>
      </div>
      <div class="btn_next2">
        <!-- <a href="./register_basic04.html">회원가입 완료</a> -->
        <router-link to="/registerBasic04">회원가입 완료</router-link>
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