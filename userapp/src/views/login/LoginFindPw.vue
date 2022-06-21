<template>
  <div>
    <div id="content_wrap" class="pay_coupon_add">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/loginVue" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">아이디/패스워드 찾기</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info"></p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="section_tab">
            <!-- <a href="login_find_id.html">아이디 찾기</a> -->
            <router-link to="/loginFindId">아이디 찾기</router-link>
            <!-- <a class="active" href="#">비밀번호 재설정</a> -->
            <router-link to="/loginFindPw" class="active">비밀번호 재설정</router-link>
          </div>
          <div class="coupon_list_wrap">
            <p class="title">가입 시 등록한 아이디와 휴대폰번호를 입력하세요.</p>


            <p class="PdT30">
              <input type="radio" id="type01" name="memtype" checked><label for="type01">개인회원</label>
              <input type="radio" id="type02" name="memtype"><label for="type02">FLEET회원</label>
            </p>


            <form id="" class="login_form fleet" action="" style="display: block;">
              <div class="input_fleet_id MgT0"><label for="fid">아이디</label><input type="text" name="fid" id="fid"
                  placeholder="예) C123456">
              </div>
              <div class="input_fleet_pw"><label for="fmo">휴대폰번호</label><input type="text" name="fmo" id="fmo"
                  placeholder="예) 01012345678" class="TxtaR"></div>
              <input type="submit" value="비밀번호 재설정">
            </form>

          </div>
        </section>
      </article>
    </div>
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