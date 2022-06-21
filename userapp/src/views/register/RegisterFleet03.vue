<template>
  <div>
    <div id="content_wrap" class="register_fleet03">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_fleet02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/registerFleet02" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">FLEET 회원가입</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">FLEET 회원가입이 완료 되었습니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title"><span class="red fontBold">DGB1234</span>님,<br>
            FLEET 회원가입<span class="skyblue">(선불전용)</span><br>
            신청이 완료되었습니다.
          </p>
          <div class="user_info">
            <img class="alarm_img" src="../../assets/img/content/ico_alarm.svg" alt="">
            <p class="alarm_txt">심사후 고객 승인이 나면,<br>로그인 후 사용 가능합니다.</p>
            <p class="etc">심사결과는 <span class="skyblue">담당자 휴대폰으로 통보 예정</span>입니다.</p>
          </div>

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
  }
};
</script>