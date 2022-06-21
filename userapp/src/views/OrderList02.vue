<template>
  <div>
    <div id="content_wrap" class="order_list_02">
      <div id="top">
        <div id="nav">
          <a class="btn_back" href="./register_basic02.html"><img src="../assets/img/btn_back.svg" alt="뒤로가기"></a>
          <p class="current">결제리스트</p>
          <a class="btn_alarm" href="#"><img src="../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">결제된 목록을 확인하세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="section_tab">
            <!-- <a href="#">미사용 리스트</a>
            <a class="active" href="#">사용 리스트</a> -->
            <router-link to="/orderList01">미사용 리스트</router-link>
            <router-link to="/orderList02" class="active">사용 리스트</router-link>
          </div>
          <div class="coupon_list_wrap">
            <ul>
              <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../assets/img/content/pay_onetime04.png" alt="">
                  <p>결제상품 :
                    <span class="order_unused_name">BASIC 1회권</span>
                    <br>
                    <!-- 옵션상품 :
                    <span class="option_unused_name">타이어세차/하부세차</span> -->
                  </p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="order_unused_num">WD2022051401</span></li>
                    <li>쿠폰번호 : <span class="order_unused_date">2022/05/14 14:26:35</span></li>
                    <li>쿠폰번호 : <span class="order_unused_period">2022/12/31 24:00:00</span></li>
                    <li>쿠폰번호 : <span class="order_unused_QRnum">WD2022051401</span></li>
                  </ul>
                  <button class="btn_arrow" type="button">영수증 확인</button>
                </div>
              </li>
              <!-- <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../assets/img/content/pay_onetime03.png" alt="">
                  <p>결제상품 : <span class="order_unused_name">GIFT (BUBBLE x 5회)</span><br>옵션상품 : <span
                      class="option_unused_name">없음</span></p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="order_unused_num">WD2022051401</span></li>
                    <li>쿠폰번호 : <span class="order_unused_date">2022/05/14 14:26:35</span></li>
                    <li>쿠폰번호 : <span class="order_unused_period">2022/12/31 24:00:00</span></li>
                    <li>쿠폰번호 : <span class="order_unused_QRnum">WD2022051401</span></li>
                  </ul>
                  <button class="btn_arrow" type="button">영수증 확인</button>
                </div>
              </li>
              <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../assets/img/content/pay_onetime02.png" alt="">
                  <p>결제상품 : <span class="order_unused_name">BEST 1회권</span><br>옵션상품 : <span
                      class="option_unused_name">없음</span></p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="order_unused_num">WD2022051401</span></li>
                    <li>쿠폰번호 : <span class="order_unused_date">2022/05/14 14:26:35</span></li>
                    <li>쿠폰번호 : <span class="order_unused_period">2022/12/31 24:00:00</span></li>
                    <li>쿠폰번호 : <span class="order_unused_QRnum">WD2022051401</span></li>
                  </ul>
                  <button class="btn_arrow" type="button">영수증 확인</button>
                </div>
              </li>
              <li class="coupon_list">
                <div class="coupon_name">
                  <img src="../assets/img/content/pay_onetime04.png" alt="">
                  <p>결제상품 : <span class="order_unused_name">GIFT (PREMIUM x 5회)</span><br>옵션상품 : <span
                      class="option_unused_name">없음</span></p>
                </div>
                <div class="coupon_info">
                  <ul>
                    <li>쿠폰번호 : <span class="order_unused_num">WD2022051401</span></li>
                    <li>쿠폰번호 : <span class="order_unused_date">2022/05/14 14:26:35</span></li>
                    <li>쿠폰번호 : <span class="order_unused_period">2022/12/31 24:00:00</span></li>
                    <li>쿠폰번호 : <span class="order_unused_QRnum">WD2022051401</span></li>
                  </ul>
                  <button class="btn_arrow" type="button">영수증 확인</button>
                </div>
              </li> -->
            </ul>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script>

</script>