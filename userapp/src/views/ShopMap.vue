<template>
  <div>
    <div id="content_wrap" class="shop_map">
      <div id="top">
        <div id="nav">
          <a class="btn_back" href="./register_basic02.html"><img src="../assets/img/btn_back.svg" alt="뒤로가기"></a>
          <p class="current">세차장 찾기</p>
          <a class="btn_alarm" href="#"><img src="../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">확인버튼을 누르면 목록으로 돌아갑니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">WASH DAY 왜관점</p>
          <div id="map" style="width: 500px; height: 500px;"></div>
        </section>
      </article>
    </div>
    <aside>
      <div class="btn_next">
        <!-- <a href="#">확 인</a> -->
        <router-link to="/shopList">확 인</router-link>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'ShopMap',

  data() {
    return {
      map: null
    }
  },

  methods: {
    initMap() {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(35.862760644626, 128.53727781384),
        level: 3
      };
      this.map = new kakao.maps.Map(container, options);

      new kakao.maps.Marker({
        map: this.map,
        position: new kakao.maps.LatLng(35.862760644626, 128.53727781384)
      });
    }
  },

  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script');
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0def9c6378b8e968420c1ed2bccd82de';

      /* global kakao */
      script.addEventListener('load', () => {
        kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script);
    } else {
      this.initMap();
    }
  }
};
</script>