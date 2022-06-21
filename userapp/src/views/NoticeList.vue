<template>
  <div>
    <div id="content_wrap" class="notice_list">
      <div id="top">
        <div id="nav">
          <a class="btn_back" href="#"><img src="../assets/img/btn_back.svg" alt="뒤로가기"></a>
          <p class="current">공지사항</p>
          <a class="btn_alarm" href="#"><img src="../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info"></div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <ul class="list">
            <li>
              <!-- <a href="./notice_detail.html">내폰에 WASH DAY 세차앱 설치시 세차쿠폰(BASIC) 1개 지급</a> -->
              <router-link to="/noticeDetail">내폰에 WASH DAY 세차앱 설치시 세차쿠폰(BASIC) 1개 지급</router-link>
            </li>
            <!-- <li><a href="#">5월 한달동안 가정의 달맞이 멤버쉽결제 가입시 차량 방향제 2개 증정 이벤트 실시</a></li>
            <li><a href="#">차량관리 꿀팁 공개</a></li> -->
          </ul>
          <div class="notice_paging">
            <em class="link_prev">이전 페이지</em>
            <a class="link_page active" href="#">1</a>
            <!-- <a class="link_page" href="#">2</a>
            <a class="link_page" href="#">3</a>
            <a class="link_page" href="#">4</a> -->
            <em class="link_next">다음 페이지</em>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script>

</script>