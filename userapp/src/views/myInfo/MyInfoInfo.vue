<template>
  <div>
    <div id="content_wrap" class="myinfo_info">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./login.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/myInfoList" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">내 정보</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <ul class="myinfo_info_wrap">
            <li>
              <label for="basicId" class="title">아이디</label>
              <input type="text" class="basicId" id="basicId" placeholder="예) abcd1234@">
            </li>
            <li>
              <label for="basicPW" class="title">비밀번호</label>
              <input type="password" class="basicPW" id="basicPW" placeholder="********">
              <button class="check" @click="changePassword()">비밀번호 변경</button>
            </li>
            <li>
              <label for="basicUserNum" class="title">회원번호</label>
              <input type="text" class="basicUserNum" id="basicUserNum" value="YGP22021600000001">
            </li>
            <li>
              <label for="basicUsergrade" class="title">회원등급</label>
              <input type="text" class="basicUsergrade" id="basicUsergrade" value="멤버쉽 회원">
            </li>
          </ul>
        </section>
        <div class="content_pop">
          <div class="pop_title">
            <p>비밀번호 변경</p>
          </div>
          <div class="pop_cont">
            <ul class="myinfo_pop">
              <li>
                <label for="userPrePW" class="title">기존 비밀변호<span class="required">*</span></label>
                <input type="password" class="userPrePW" id="userPrePW" placeholder="******">
                <p class="warn">비밀번호가 일치하지 않습니다.</p>
              </li>
              <li>
                <label for="userNewPW" class="title">변경 비밀번호<span class="required">*</span></label>
                <input type="password" class="userNewPW" id="userNewPW" placeholder="******">
                <p class="guide">영문, 숫자, 특수문자 혼용하여 10~12자리 이내</p>
              </li>
              <li>
                <label for="userNewPWCheck" class="title">변경 비밀변호 확인<span class="required">*</span></label>
                <input type="password" class="userNewPWCheck" id="userNewPWCheck" placeholder="******">
                <p class="warn">비밀번호가 일치하지 않습니다.</p>
              </li>
            </ul>
            <button class="submit btn_arrow" type="submit">비밀번호 변경</button>
          </div>
          <button class="pop_close"><img src="../../assets/img/content/btn_close.svg" alt=""></button>
        </div>
        <span class="content_pop_bg"></span>
      </article>
    </div>
    <aside>
      <div class="btn_next">
        <!-- <a href="#">확 인</a> -->
        <router-link to="/myInfoList">확 인</router-link>
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

  created() {
    this.myInfo();
  },

  methods: {
    myInfo() {
      let fleetInput = document.querySelectorAll('input');

      for (let i = 0; i < fleetInput.length; i++) {
        fleetInput[i].onfocus = function () {
          let id = this.getAttribute('id');
          let label = document.querySelector(`label[for="${id}"]`);
          if (label) {
            label.style.color = "var(--mainColor)";
            label.style.fontWeight = "600";
          }
        }
        fleetInput[i].onblur = function () {
          let id = this.getAttribute('id');
          let label = document.querySelector(`label[for="${id}"]`);
          if (label) {
            label.style.color = "#000";
            label.style.fontWeight = "400";
          }
        }
      }
    },

    changePassword() {
      this.$router.push('/myInfoInfoContentPop');
    }
  }
};
</script>