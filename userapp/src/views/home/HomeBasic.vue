<template>
  <div>
    <div id="content_wrap">
      <div id="top">
        <div id="nav">
          <a class="btn_back">
            
          </a>
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
            <span class="user_name">{{mem_name}}</span>님,
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
            <a class="btn_logout" @click="logout">
              <img src="../../assets/img/btn_logout.png">
              로그아웃
            </a>
          </div>
        </div>
      </div>
      <article id="main">
        <section class="main_container">
          <div id="menu">
            <ul>
              <template v-if="visible">
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
              </template>
              <template v-else>
                <li>
                  <!-- <a href="#">
                    <img src="../../assets/img/btn_main08.png" alt="차량등록">
                    <p>차량등록</p>
                  </a> -->
                  <router-link to="/fleetCarList">
                    <img src="../../assets/img/btn_main08.png" alt="차량등록">
                    <p>차량등록</p>
                  </router-link>
                </li>
              </template>
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
                <router-link to="/orderList02">
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
              <li v-for="(info,index) in info_list" :key="index">
                <router-link :to="{name : 'Notice', query: { seq_no :info.seq_no}}">{{info.title}}</router-link><span class="time">{{return_date(info.write_date)}}</span>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div class="copyright" style="font-size: 13px; padding: 0rem 21px;">
            <p>(주)엔티아이</p>
            <a href="">서비스 이용약관</a> <a href="">개인정보 처리방침</a> <a href="">위치정보 이용약관</a><br>
            사업자등록번호 : 504-81-15358 ㅣ 대표이사 : 김도연<br>대구광역시 서구 와룡로 335 1층 스파크플러스
          </div>
        </section>
      </article>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import FooterVue from "../footer/FooterVueHome.vue";

export default {
  components: {
    FooterVue
  },
  data(){
    return{
      mem_no : sessionStorage.getItem('mem_no'),
      mem_chk : sessionStorage.getItem('mem_type'),
      mem_name : sessionStorage.getItem('mem_name'),
      info_list : [],
      visible : true
    }
  },
  created() {
    // if(this.mem_id != null){
    //   this.$router.push('LoginVue');
    // }else   this.isShow = true;
  },
  mounted(){
    if(this.mem_chk == "MMT001"){
      this.visible = true;
    }else if(this.mem_chk == "MMT002" || this.mem_chk == "MMT003"){
      this.visible = false;
    }else{
      // this.$router.push('LoginVue');
    }
    this.$http.post(this.$server+'/userapp/getnoticemain', {
      list_count : '3'
    },{headers : {
        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
      }
    }).then((res) => {
      this.info_list = res.data
    })
  },
  methods : {
    return_date(date){
      const write = new Date(date);
      let month = write.getMonth()+1;
      month = month.toString().padStart(2,'0');
      const day = write.getDate().toString().padStart(2,'0');

      return month+'.'+day;    
    },
    logout(){
      sessionStorage.clear();
      localStorage.clear();
      this.$router.push({name : 'LoginVue'});
      this.$router.go();
    }
  }
}
</script>