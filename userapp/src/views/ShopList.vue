<template>
  <div>
    <div id="content_wrap" class="shop_list">
      <div id="top">
        <div id="nav">
          <a class="btn_back" href="./register_basic02.html"><img src="../assets/img/btn_back.svg" alt="뒤로가기"></a>
          <p class="current">세차장 찾기</p>
          <a class="btn_alarm" href="#"><img src="../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">세차장 리스트에서 세차장을 선택하시면,<br>자세한 정보를 확인할
            수 있습니다.
          </p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="shop_list_wrap">
            <ul>
              <li class="shop_spot">
                <div class="shop_name">
                  <p>WASH DAY 대구 중리점</p>
                </div>
                <div class="shop_info">
                  <ul>
                    <li>영업여부 : 현재 영업중</li>
                    <li>영업시간 : AM 06:00~PM 10:00 까지</li>
                    <li>휴무일 : 연중무휴</li>
                    <li>주유소 : 주유소 인근 1Km</li>
                    <li>소재지 : 대구광역시 서구 와룡로 335(중리동)</li>
                    <li>전화번호 : <a href="tel:054-922-4000">054-922-4000</a></li>
                  </ul>
                  <!-- <a class="shop_map btn_basic" href="#">
                    <img src="../assets/img/content/ico_location.svg" alt="지도">
                    지도보기
                  </a> -->
                  <router-link to="/shopMap" class="shop_map btn_basic">
                    <img src="../assets/img/content/ico_location.svg" alt="지도">
                    지도보기
                  </router-link>
                  <button class="shop_close btn_basic" type="button">닫기</button>
                </div>
              </li>
              <!-- <li class="shop_spot">
                <div class="shop_name">
                  <p>WASH DAY 구미점</p>
                </div>
                <div class="shop_info">
                  <ul>
                    <li>영업여부 : 현재 영업중</li>
                    <li>영업시간 : AM 06:00~PM 10:00 까지</li>
                    <li>휴무일 : 연중무휴</li>
                    <li>주유소 : 주유소 인근 1Km</li>
                    <li>소재지 : 경북 칠곡군 왜관읍</li>
                    <li>전화번호 : <a href="tel:054-922-4000">054-922-4000</a></li>
                  </ul>
                  <a class="shop_map btn_basic" href="#"><img src="../assets/img/content/ico_location.svg"
                      alt="지도">지도보기</a>
                  <button class="shop_close btn_basic" type="button">닫기</button>
                </div>
              </li>
              <li class="shop_spot">
                <div class="shop_name">
                  <p>WASH DAY 서울점(길어질 때)</p>
                </div>
                <div class="shop_info">
                  <ul>
                    <li>영업여부 : 현재 영업중</li>
                    <li>영업시간 : AM 06:00~PM 10:00 까지</li>
                    <li>휴무일 : 연중무휴</li>
                    <li>주유소 : 주유소 인근 1Km</li>
                    <li>소재지 : 경북 칠곡군 왜관읍</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>정보추가 : 정보가 길어질때 정보가 길어질때</li>
                    <li>전화번호 : <a href="tel:054-922-4000">054-922-4000</a></li>
                  </ul>
                  <a class="shop_map btn_basic" href="#"><img src="../assets/img/content/ico_location.svg"
                      alt="지도">지도보기</a>
                  <button class="shop_close btn_basic" type="button">닫기</button>
                </div>
              </li>
              <li class="shop_spot">
                <div class="shop_name">
                  <p>WASH DAY 구미점</p>
                </div>
                <div class="shop_info">
                  <ul>
                    <li>영업여부 : 현재 영업중</li>
                    <li>영업시간 : AM 06:00~PM 10:00 까지</li>
                    <li>휴무일 : 연중무휴</li>
                    <li>주유소 : 주유소 인근 1Km</li>
                    <li>소재지 : 경북 칠곡군 왜관읍</li>
                    <li>전화번호 : <a href="tel:054-922-4000">054-922-4000</a></li>
                  </ul>
                  <a class="shop_map btn_basic" href="#"><img src="../assets/img/content/ico_location.svg"
                      alt="지도">지도보기</a>
                  <button class="shop_close btn_basic" type="button">닫기</button>
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
export default {
  name: 'ShopList',

  mounted() {
    this.shop()
  },

  methods: {
    shop() {
      const shopListName = document.querySelectorAll('.shop_spot .shop_name');
      const shopClose = document.querySelectorAll('.shop_close');

      for (const shopItem of shopListName) {
        shopItem.addEventListener('click', function () {
          if (shopItem.parentNode.classList.contains('active')) {
            for (let i = 0; i < shopListName.length; i++) {
              shopListName[i].parentNode.classList.remove('active');

              shopListName[i].nextSibling.style.display = 'none';
            }
          } else {
            for (let i = 0; i < shopListName.length; i++) {
              shopListName[i].parentNode.classList.remove('active');

              shopListName[i].nextSibling.style.display = 'none';
            }

            this.parentNode.classList.add('active');

            this.nextSibling.style.display = 'block';
          }
        });

        for (let i = 0; i < shopListName.length; i++) {
          shopListName[i].nextSibling.style.display = 'none';
        }
      }
      for (let i = 0; i < shopClose.length; i++) {
        shopClose[i].addEventListener('click', function () {
          shopListName[i].parentNode.classList.remove('active');

          shopListName[i].nextSibling.style.display = 'none';
        });
      }
    }
  }
};
</script>