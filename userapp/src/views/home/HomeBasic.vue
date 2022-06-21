<template>
  <div>
    <div id="content_wrap">
      <div id="top">
        <div id="nav">
          <router-link to="/" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <!-- <a class="top_logo" href="#">
            <img src="../../assets/img/logo_top.svg" alt="SPARKPLUS">
          </a> -->
          <router-link to="/homeBasic" class="top_logo">
            <img src="../../assets/img/logo_top.svg" alt="SPARKPLUS">
          </router-link>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <div class="profile_img"><img src="../../assets/img/profile.jpg" alt="프로필 사진"></div>
          <p class="user_welcome">
            <span class="user_name">C1234567</span>님,
            <br>스파크플러스와 함께 스마트 세차 하세요!
          </p>
          <div class="top_btns">
            <!-- <a class="btn_edit" href="#">
              <img src="../../assets/img/btn_edit.png" alt="">
              정보수정
            </a> -->
            <router-link to="/myInfoList" class="btn_edit">
              <img src="../../assets/img/btn_edit.png" alt="">
              정보수정
            </router-link>
            <!-- <a class="btn_logout" href="#">
              <img src="../../assets/img/btn_logout.png" alt="">
              로그아웃
            </a> -->
            <router-link to="/" class="btn_logout">
              <img src="../../assets/img/btn_logout.png" alt="">
              로그아웃
            </router-link>
          </div>
        </div>
      </div>
      <article id="main">
        <section class="main_container">
          <div id="menu">
            <ul>
              <li>
                <!-- <a href="#">
                  <img src="../../assets/img/btn_main07.png" alt="내정보">
                  <p>내정보</p>
                </a> -->
                <router-link to="/myInfoList">
                  <img src="../../assets/img/btn_main07.png" alt="내정보">
                  <p>내정보</p>
                </router-link>
              </li>
              <li>
                <!-- <a href="payment.html">
                  <img src="../../assets/img/btn_main02.png" alt="결제등록">
                  <p>결제등록</p>
                </a> -->
                <router-link to="/paymentVue">
                  <img src="../../assets/img/btn_main02.png" alt="결제등록">
                  <p>결제등록</p>
                </router-link>
              </li>
              <li>
                <!-- <a href="pay.html">
                  <img src="../../assets/img/btn_main03.png" alt="요금결제">
                  <p>요금결제</p>
                </a> -->
                <router-link to="/payVue">
                  <img src="../../assets/img/btn_main03.png" alt="요금결제">
                  <p>요금결제</p>
                </router-link>
              </li>
              <li>
                <!-- <a href="#">
                  <img src="../../assets/img/btn_main04.png" alt="결제내역">
                  <p>결제내역</p>
                </a> -->
                <router-link to="/orderList01">
                  <img src="../../assets/img/btn_main04.png" alt="결제내역">
                  <p>결제내역</p>
                </router-link>
              </li>
              <li>
                <!-- <a href="#">
                  <img src="../../assets/img/btn_main05.png" alt="쿠폰">
                  <p>쿠폰</p>
                </a> -->
                <router-link to="/payCoupon01">
                  <img src="../../assets/img/btn_main05.png" alt="쿠폰">
                  <p>쿠폰</p>
                </router-link>
              </li>
              <li>
                <!-- <a href="#">
                  <img src="../../assets/img/btn_main06.png" alt="세차장 찾기">
                  <p>세차장 찾기</p>
                </a> -->
                <router-link to="/shopList">
                  <img src="../../assets/img/btn_main06.png" alt="세차장 찾기">
                  <p>세차장 찾기</p>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="notice">
            <h2>알림</h2>
            <div class="event_banner">
              <!-- <a href="#" class="">
                <img src="../../assets/img/event01.jpg" alt="마이워시 오픈기념, 첫 구매시 5000원 쿠폰 증정!">
              </a> -->
              <router-link to="/noticeDetail">
                <img src="../../assets/img/event01.jpg" alt="마이워시 오픈기념, 첫 구매시 5000원 쿠폰 증정!">
              </router-link>
              <img class="balloon" src="../../assets/img/event_balloon.png" alt="">
            </div>
            <ul class="notice_list">
              <li><a href="#">스파크플러스 쿠폰 사용방법을 안내 드립니다</a><span class="time">3시간 전</span></li>
              <li><a href="#">[서비스 점검] 보다 안정적인 서비스를 위해 점검이 있을 예정입니다.</a><span class="time">02.23</span></li>
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