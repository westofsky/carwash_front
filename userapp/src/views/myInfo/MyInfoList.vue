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
          <p class="title"><span class="red">{{mem_name}}</span>님은 <br>{{mem_type}}입니다</p>
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
  },
  data(){
    return {
      mem_name : sessionStorage.getItem("mem_name"),
      mem_type : sessionStorage.getItem("mem_type")=="MMT001" ? "개인회원" : (sessionStorage.getItem("mem_type")=="MMT002" ? "FLEET선불회원" : "FLEET할인회원"),
    }
  },
};
</script>