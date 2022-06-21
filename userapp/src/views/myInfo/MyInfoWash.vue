<template>
  <div>
    <div id="content_wrap" class="myinfo_wash">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/myInfoList" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">세차기록부</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="myinfo_wash_cal">
            <p class="title">기간검색</p>
            <input type="text" value="22년12월 12일"><span>-</span><input type="text" placeholder="년월일">
            <button type="submit">검색</button>
          </div>
          <div class="myinfo_wash_empty">
            <p>세차 이용 정보가 없습니다.</p>
          </div>
          <div class="myinfo_wash_list">
            <ul>
              <li class="wash_list">
                <div class="wash_list_name">
                  <img src="../../assets/img/content/pay_onetime04.png" alt="">
                  <p>BASIC : 2회</p>
                </div>
                <div class="wash_info">
                  <ul>
                    <li>세차일시 : 2022/05/02 11:07:39</li>
                    <li>세차일시 : 2022/05/07 15:36:52</li>
                  </ul>
                </div>
              </li>
              <li class="wash_list">
                <div class="wash_list_name">
                  <img src="../../assets/img/content/pay_onetime03.png" alt="">
                  <p>BEST : 1회</p>
                </div>
                <div class="wash_info">
                  <ul>
                    <li>세차일시 : 2022/05/02 11:07:39</li>
                    <li>세차일시 : 2022/05/07 15:36:52</li>
                  </ul>
                </div>
              </li>
              <li class="wash_list">
                <div class="wash_list_name">
                  <img src="../../assets/img/content/pay_onetime02.png" alt="">
                  <p>BUBBLE : 1회</p>
                </div>
                <div class="wash_info">
                  <ul>
                    <li>세차일시 : 2022/05/02 11:07:39</li>
                    <li>세차일시 : 2022/05/07 15:36:52</li>
                  </ul>
                </div>
              </li>
              <li class="wash_list">
                <div class="wash_list_name">
                  <img src="../../assets/img/content/pay_onetime01.png" alt="">
                  <p>PREMIUM : 1회</p>
                </div>
                <div class="wash_info">
                  <ul>
                    <li>세차일시 : 2022/05/02 11:07:39</li>
                    <li>세차일시 : 2022/05/07 15:36:52</li>
                  </ul>
                </div>
              </li>
            </ul>
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