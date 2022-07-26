<template>
  <div>
    <div id="content_wrap" class="pay_coupon_buy">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <a class="btn_back" @click="before_reset">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </a>
          <p class="current">쿠폰 구매 사용</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">쿠폰 리스트를 관리하거나 구매하실 수 있습니다.
          </p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="section_tab">
            <!-- <a href="#">미사용 목록</a>
            <a href="#">사용 목록</a>
            <a class="active" href="#">쿠폰구매</a>
            <a href="#">쿠폰추가</a> -->
            <router-link to="/payCoupon01">미사용 목록</router-link>
            <router-link to="/payCoupon05">사용 목록</router-link>
            <router-link to="/payCouponBuy" class="active" >기프트카드</router-link>
            <router-link to="/payCouponAdd">쿠폰추가</router-link>
          </div>
          <div class="coupon_list_wrap">
            <div class="con_info">
              <p class="sec_txt"><span class="black fontBold">원하시는 GIFT쿠폰 세차상품</span>을 선택해주세요</p>
            </div>
            <ul id="oneType_wrap" class="oneType_wrap">
              <li v-for="(product , index) in product_list" :key="index" @click="select_product(product)">
              <input type="radio" name="oneType" :value="getValP(product.prod_name)" :id="getValP(product.prod_name)" >
                <a>
                  <span class="img"><img class="off" :src="getSrcP(product.main_img)" alt=""><img class="on" :src="getSrcP(product.main_img)" alt=""></span>
                  <span class="info"><span class="fontBold" style="font-size: 0.9rem;">{{product.prod_name}}</span></span>
                  <span class="price">{{return_one(product.prod_fee)}}</span>
                  <span class="check"></span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <p style="padding: 1em;color: blue;">* 결제 후 세차장 관리 사무실에서 Gift Card로 교환하시기 바랍니다</p>
      </article>
    </div>

    <aside>
      <div class="btn_next" v-bind:class = "isActive" style="bottom:56px;">
        <a @click = "onetime_register">결제하기</a>
      </div>
    </aside>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import FooterVue from "../footer/FooterVueCoupon.vue";

export default {
  components: {
    FooterVue
  },
  data(){
    return{
      product_list : '',
      selected : {
        product : [],
      }
    }
  },
  mounted(){
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
    localStorage.removeItem("is_type");
    localStorage.removeItem("tr_date");
    localStorage.removeItem("auth_no");
    localStorage.removeItem("tr_no");
    localStorage.removeItem("token");
    localStorage.removeItem("card_name");
    localStorage.removeItem("card_no");
    localStorage.removeItem("use_coupon");
    localStorage.removeItem("tot_fee");
  },
  beforeCreate(){
    this.$http.post(this.$server+'/userapp/getMainProduct', {
        pro_type : "PGC003"
      },{
      headers : {
        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
      }
      }).then(
      (res) => {  // 
            this.product_list = res.data;
            console.log(this.product_list)
      }
    );
  },
  updated (){
    let oneType = document.getElementsByName('oneType'),
			oneTypeLi = document.querySelectorAll('#oneType_wrap li'),
			oneTypeBtn = document.querySelectorAll('#oneType_wrap li a');
			// oneTypeImg = document.querySelectorAll('#oneType_wrap li a .img');
		for(let i=0; i<oneTypeBtn.length; i++){
			oneTypeBtn[i].addEventListener('click', function(e){
				e.preventDefault();
				for(let x=0; x<oneTypeBtn.length; x++){
					oneTypeLi[x].classList.remove('active');
				}
				oneTypeLi[i].classList.add('active');
				oneType[i].checked = 'true';
			});
		}
    // alert("준비중입니다.")
    // this.$router.go(-1);
  },
  methods: {
    getSrcP(index){
      return require('../../assets/img/content/pay_onetime0'+index+'.png')
    },
    getValP(name){
      return "onetime"+name.split(' ')[0]
    },
    return_one(on_num){
        if(on_num != undefined){
            const parts = on_num.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.join('.');
        }  
    },
    select_product(selected){
      this.selected.product = selected;
    },
    onetime_register(){
      if(this.selected.product.length==0){
        alert("상품을 선택해주세요!");
        return false;
      }
      console.log(this.selected.product.prod_remarks)
      localStorage.setItem("pin_seq_no",JSON.stringify(this.selected.product.prod_code));
      localStorage.setItem("first_menu",JSON.stringify(this.selected.product.prod_name));
      localStorage.setItem("menu_fee",JSON.stringify(parseInt(this.selected.product.prod_fee)));
      localStorage.setItem("main_plc",JSON.stringify(this.selected.product.main_plc));
      localStorage.setItem("prod_remarks",JSON.stringify(parseInt(this.selected.product.prod_remarks)));
      this.$router.push({name : 'PayCouponBuy01'})
    },
    before_reset(){
      localStorage.removeItem("pin_seq_no");
      localStorage.removeItem("first_menu");
      localStorage.removeItem("menu_fee");
      localStorage.removeItem("main_plc");
      this.$router.push({name : 'homeBasic'});
    }
  },
  computed : {
    isActive :  function(){
      return{
        active : this.selected.product.length!=0
      }
    },
  }

};
</script>