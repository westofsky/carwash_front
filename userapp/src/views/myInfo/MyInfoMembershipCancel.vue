<template>
  <div>
    <div id="content_wrap" class="myinfo_membership_cancel">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_fleet02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/myInfoList" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">멤버쉽 해지</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title"><span class="red fontBold">서울 123가 4567</span>님,<br>
            멤버쉽을 해지 하겠습니까?
          </p>
          <div class="membership_cancel_info">
            <p>하단의 멤버쉽 해지를 누르면 멤버쉽이 해지됩니다.</p>
            <ul>
              <li>멤버쉽 해지시 사용기간이 남은 쿠폰의 사용이 제한될 수 있으니, 남은 쿠폰을 먼저 사용해주시기 바랍니다.</li>
              <li>멤버쉽 결제 회원에게 제공되는 혜택이 등등 알림내용 추가 필요</li>
            </ul>
          </div>

        </section>
      </article>
    </div>
    <aside>
      <div class="btn_next">
        <!-- <a href="#">멤버쉽 해지</a> -->
        <router-link to="/myInfoList">멤버쉽 해지</router-link>
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