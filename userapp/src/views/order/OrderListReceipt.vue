<template>
  <div>
    <div id="content_wrap" class="pay_onetime_order_02">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/orderList02" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">결제 영수증</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">결제가 완료 되었습니다.</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">{{prod_name}}</p>
          <p class="subtitle" style = "font-size: 0.8rem;">{{option_name}}</p>
          <div class="info_table onetime_pay_table">
            <table>
              <tr>
                <td class="table_name">합계금액</td>
                <td class="table_price">{{wash_pay}}원</td>
              </tr>
              <tr>
                <td class="table_name">할인금액</td>
                <td class="table_price">{{dc_fee}}원</td>
              </tr>
              <tr class="total_price">
                <td>합계</td>
                <td class="fontBold">{{pay_fee}}원</td>
              </tr>
            </table>
          </div>
          <div class="onetime_pay_info BRT_none">
            <ul>
              <li>거래번호 : {{trno}}</li>
              <li>결제승인번호 : {{auth_no}}</li>
              <!-- <li>결제시간 : 2022/05/14/ 14:26:35</li>
              <li>결제수단 : 농협카드 5461-11**-948</li>
              <li>결제밴사 : KICC</li> -->
              <li>결제구분 : {{pay_type}}</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
    <aside>
      <div class="btn_next active">
        <!-- <a href="#">확 인</a> -->
        <router-link to="/orderList02">확 인</router-link>
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
  },
  data (){
    return{
      prod_name : '',
      option_name : '',
      pay_date : '',
      wash_pay : '',
      dc_fee : '',
      pay_fee : '',
      trno : '',
      auth_no : '',
      pay_type : '',
    }
  },
  mounted (){
    this.$http.post(this.$server+'/userapp/getPayDetail', {
      pay_seq : this.$route.query.key,
    },{headers : {
    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
    }
    }).then(
    (res) => {  // 
      console.log(res.data);
      this.prod_name = res.data.prod_name;
      this.option_name = res.data.option_name;
      this.pay_date = res.data.pay_date;
      this.wash_pay = res.data.wash_fee;
      this.dc_fee = res.data.dc_fee;
      this.pay_fee = res.data.pay_fee;
      this.trno = res.data.trno;
      this.auth_no = res.data.auth_no;
      this.pay_type = res.data.pay_type;
    })
  }
};
</script>