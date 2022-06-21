<template>
  <div>
    <div id="content_wrap" class="myinfo_membership">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/myInfoList" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">멤버쉽결제 이용정보</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">멤버쉽 결제</p>
          <div class="info_table myinfo_membership_wrap">
            <table>
              <tr>
                <td class="table_name">신청일</td>
                <td class="table_price">2022/04/21</td>
              </tr>
              <tr>
                <td class="table_name">정기결제일</td>
                <td class="table_price">매월 21일</td>
              </tr>
              <tr>
                <td class="table_name">신용카드</td>
                <td class="table_price">국민VISA<br>5816-4543-****-**12</td>
              </tr>
              <tr>
                <td class="table_name">신청금액</td>
                <td class="table_price">100,000원</td>
              </tr>
            </table>
          </div>
          <div class="myinfo_membership_empty">
            <p>멤버쉽 결제 이용정보가 없습니다.</p>
          </div>
        </section>
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
  }
};
</script>