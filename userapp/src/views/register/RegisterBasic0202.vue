<template>
  <div>
    <div id="content_wrap" class="register_basic02">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic01.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/registerBasic01" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">개인 회원가입</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">개인 회원가입 입니다.<br>이용하실 차량의 번호를 등록해주세요.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title"><span class="red">차량번호</span>를 입력하세요</p>
          <p class="ex">예) 123가4567, 서울12가3456</p>
          <div class="phone_num_wrap">
            <input type="text" class="basic" placeholder="예) 123가4567, 서울12가3456">
          </div>
          <p class="warn"><img src="../../assets/img/content/ico_warn.png" alt="경고아이콘">잘못된 번호 입니다. 오류 메세지 출력할 곳</p>

          <div class="Space4em"></div>

          <p class="title"><span class="red">휴대폰 번호</span>를 숫자만 입력하세요</p>
          <div class="phone_num_wrap">
            <input type="text" class="basic" placeholder="예) 01082247363">
          </div>
          <p class="warn"><img src="../../assets/img/content/ico_warn.png" alt="경고아이콘">잘못된 번호 입니다. 오류 메세지 출력할 곳</p>

          <div class="Space4em"></div>

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
        <!-- <a href="./register_basic01.html">취소</a> -->
        <router-link to="/registerBasic01">취소</router-link>
      </div>
      <div class="btn_next2">
        <!-- <a href="./register_basic03.html">등록</a> -->
        <router-link to="/registerBasic03">등록</router-link>
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