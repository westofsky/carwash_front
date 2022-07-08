<template>
  <div>
    <div id="content_wrap" class="Service_Prepare">
      <div id="top">
        <div id="nav">
          <a class="btn_back" @click ="before"><img src="../assets/img/btn_back.svg" alt="뒤로가기"></a>
          <p class="current">결제하기</p>
          <a class="btn_back"></a>
        </div>
        <div id="top_info">
          <p class="info">서비스 준비중입니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="desc">
            <p>서비스 준비중입니다.</p>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service_Prepare',

  data() {
    return {
    }
  },
  methods : {
    before(){
        this.$router.go(-1);
    }
  }
};
</script>