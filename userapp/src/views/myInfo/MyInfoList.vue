<template>
  <div>
    <div id="content_wrap" class="myinfo_list">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/homeBasic" class="btn_back">
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
          <p class="title"><span class="red">서울 123가 4567</span>님은 <br>개인 멤버쉽 회원입니다</p>
          <div class="myinfo_list_wrap">
            <ul>
              <li>
                <!-- <a class="user" href="#">나의 기본 정보</a> -->
                <router-link to="/myInfoInfo" class="user">나의 기본 정보</router-link>
              </li>
              <li>
                <!-- <a class="record" href="#">세차 기록부</a> -->
                <router-link to="/myInfoWash" class="record">세차 기록부</router-link>
              </li>
              <li>
                <!-- <a class="membership" href="#">멤버쉽 결제 정보</a> -->
                <router-link to="/myInfoMembership" class="membership">멤버쉽 결제 정보</router-link>
              </li>
              <li>
                <!-- <a class="mem_cancel" href="#">멤버쉽 결제 해지</a> -->
                <router-link to="/myInfoMembershipCancel" class="mem_cancel">멤버쉽 결제 해지</router-link>
              </li>
              <li>
                <!-- <a class="user_cancel" href="#">개인회원 탈퇴</a> -->
                <router-link to="/myInfoRegisterCancel" class="user_cancel">개인회원 탈퇴</router-link>
              </li>
            </ul>
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