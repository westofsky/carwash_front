<template>
  <div>
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
        <button class="submit btn_arrow" type="submit" @click="goBack()">비밀번호 변경</button>
      </div>
      <button class="pop_close" @click="goBack()">
        <img src="../../assets/img/content/btn_close.svg" alt="">
      </button>
    </div>
    <span class="content_pop_bg"></span>
  </div>
</template>

<script>
export default {
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

    goBack() {
      this.$router.push('/myInfoInfo');
    }
  }
};
</script>