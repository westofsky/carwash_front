<template>
  <div id="wrapper">
    
    <div id="content_wrap" class="pay_onetime_order_01">
      <div id="top">
        <div id="nav">
          <a class="btn_back" @click="before_reset"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a>
          <p class="current">구매내역</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">아래 선택 상품이 맞는지 확인해주세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <p class="title">선택 상품</p>
          <div class="info_table onetime_pay_table">
            <table>
              <tr>
                <td class="table_name">{{first_menu}}</td>
                <td class="table_price">{{menu_fee}}원</td>
              </tr>
              <tr v-for="(option,index) in receive_option" :key="index">
                <td class="table_name">옵션추가 / {{option.option_name}}</td>
                <td class="table_price">{{option.option_fee}}원</td>
              </tr>
              <tr class="total_price">
                <td>합계</td>
                <td class="fontBold fRed">{{menu_fee+option_fee}}원</td>
              </tr>
              <tr class="total_price" style="border-top : none;" v-if="is_coupon.length">
                <td>할인금액</td>
                <td class="table_price">{{is_discount}}원</td>
              </tr>
              <tr class="total_price" v-if="is_coupon.length">
                <td>결제금액</td>
                <td class="fontBold fRed">{{tot_fee}}원</td>
              </tr>
            </table>
          </div>
        </section>
      </article>
    </div>
    <aside>
      <!-- <div class="bubble_say">
        <p>
          옵션상품을 선택한 경우 <span class="warn">무료쿠폰 사용 안되며, 퍼센트 할인만 사용 가능</span>합니다
        </p>
      </div> -->
      <div class="btn_next3_left">
        <!-- <a href="#"><img src="../../assets/img/content/btn_coupon.svg">쿠폰사용</a> -->
        <router-link to="/payOnetimeCoupon02">
          <img src="../../assets/img/content/btn_coupon.svg">
          쿠폰사용
        </router-link>
      </div>
      <div class="btn_next3_right" @click = "pay">
        <a><img src="../../assets/img/content/btn_pay.svg" >결제하기</a>
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
  data(){
    return {
      receive_option : JSON.parse(localStorage.getItem("send_options")) || "",
      pin_seq_no : JSON.parse(localStorage.getItem("pin_seq_no")),
      first_menu : JSON.parse(localStorage.getItem("first_menu")) || "",
      menu_fee : JSON.parse(localStorage.getItem("menu_fee")) || 0,
      main_plc : JSON.parse(localStorage.getItem("main_plc")) || "",
      pin2_seq_no : JSON.parse(localStorage.getItem("pin2_seq_no")) || "" ,
      second_menu : JSON.parse(localStorage.getItem("second_menu")) || "",
      option_fee : JSON.parse(localStorage.getItem("option_fee")) || 0,
      option_plc : JSON.parse(localStorage.getItem("option_plc")) || '',
      third_menu : '',
      brush_plc : JSON.parse(localStorage.getItem("brush_plc")) || '',
      is_coupon : [],
      is_discount : 0,
      tot_fee : 0,
    }
  },
  beforeCreate(){
    if(!JSON.parse(localStorage.getItem("third_menu")))
      this.third_menu = "Y"
    else
      this.third_menu = "N"
  },
  mounted(){
    // if(!this.receive_option){
    //   alert("잘못된 접근입니다.");
    //   this.$router.push({name : 'PayOnetime'});
    // }
    if(JSON.parse(localStorage.getItem("use_coupon"))){
      this.is_coupon = JSON.parse(localStorage.getItem("use_coupon"));
      this.is_discount = (this.menu_fee+this.option_fee) * parseInt(this.is_coupon.dc_percent) / 100;
      this.tot_fee = this.menu_fee + this.option_fee - this.is_discount;
    }
    else
      this.tot_fee = this.menu_fee + this.option_fee;
    localStorage.setItem("tot_fee",this.tot_fee);
  },
  methods : {
    before_reset(){
      localStorage.removeItem("send_options");
      localStorage.removeItem("pin_seq_no");
      localStorage.removeItem("first_menu");
      localStorage.removeItem("menu_fee");
      localStorage.removeItem("main_plc");
      localStorage.removeItem("pin2_seq_no");
      localStorage.removeItem("second_menu");
      localStorage.removeItem("option_fee");
      localStorage.removeItem("option_plc");
      localStorage.removeItem("third_menu");
      localStorage.removeItem("brush_plc");
      this.$router.push({name : 'PayOnetime'});
    },
    pay(){
      if(this.tot_fee == 0){
        this.$router.push({name : 'PayReceipt'});
      }
      else{
        this.$router.push({name : 'PayOnetimeSelectMethod'});
      }
    }
  }
};
</script>
<style>
.waiting {
	position: fixed;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 100;
	margin : 0 auto;
	background: rgba(0, 0, 0, .8);
}
.bored-image {
		margin-top: 15vh;
		width: 30rem;
		animation: rotateFlip 0.5s infinite steps(2);
}
.sync-image {
		width: 1rem;
		animation: rotation 2s infinite linear;
		margin-right: .5rem;
}
.waiting-notice {
  	position: absolute;
		bottom: 10rem;
		left: 50%;
		transform: translate(-50%, 0px);
		color: white;
		background: #5f5fff;
		padding: 1rem 2.5rem 1rem 2rem;
		border-radius: .5rem;
}
@keyframes rotation {
	from {
		transform: rotate(359deg);
	}
	to {
		transform: rotate(0deg);
	}
}
@keyframes rotateFlip {
	from {
		transform: rotate(10deg);
	}
	to {
		transform: rotate(-10deg);
	}
}
</style>