<template>
  <div id="wrapper">
    <div id="content_wrap" class="register_basic04">
      <div id="top">
        <div id="nav">
          <a></a>
          <p class="current">개인 회원가입</p>
          <a></a>
        </div>
        <div id="top_info">
          <p class="info">개인 회원가입이 완료 되었습니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title"><span class="red fontBold">{{car_no}}</span>님,<br>
            회원가입을 축하드립니다!</p>
          <div class="user_info">
            <ul>
              <li>
                <p class="info_title">회원번호</p>
                <p class="info_txt user_num">{{mem_no}}</p>
              </li>
              <li>
                <p class="info_title">임시 비밀번호</p>
                <p class="info_txt">{{mem_pw}}</p>
              </li>
            </ul>
          </div>
          <p class="etc">임시 비밀번호는 차량번호 뒷 4자리 입니다.<br>
            로그인 후 <span class="mainColor">MY메뉴</span>에서 수정해주세요</p>
        </section>
      </article>
    </div>



    <aside>
      <div class="btn_next">
        <!-- <a href="./login.html">로그인</a> -->
        <router-link to="/">로그인</router-link>
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
  props :{
    car_no : String,
    mem_no : String,
  },
  data(){
    return {
      mem_pw : this.car_no.slice(-4),
    }
  }
};
</script>
<style>
#wrapper {
  height: 100%;
}
</style>