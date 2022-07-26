<template>
  <div>
    <div id="content_wrap" class="pre_pay">
		<div id="top">
            <div id="nav">
                <a class="btn_back" @click="before_reset">
                    <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
                </a>
                <p class="current">FLEET 선불권 결제</p>
                <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
            </div>
            <div id="top_info">
                <p class="info">FLEET 선불권 상품을 구매 중 입니다.<br>세차 상품을 선택해주세요</p>
            </div>
        </div>
		<article class="scontainer">
			<section class="con1">
				<div class="con_info">
					<p class="sec_txt"><span class="black fontBold">FLEET회원 선불제 세차상품</span><br>수량을 선택해주세요</p>
				</div>
					<ul class="item_info">
						<li v-for="(product , index) in product_list" :key="index">
							<span class="img"><img class="off" :src="getSrcP(product.main_img)" alt=""></span>
							<span class="info"><span class="fontBold">{{product.prod_name}}</span>{{product.prod_remarks}}</span>
							<span class="price">{{return_one(product.prod_fee)}}</span>
						</li>
					</ul>
					<div class="item_count_wrap">
						<button class="down" @click="count_down"></button>
						<input type="text" class="item_count" :value="count" disabled>
						<button class="up" @click="count_up"></button>
					</div>
					<div class="item_total">
						<p class="total_name">합계</p>
						<p class="total_price">{{total_price}}원</p>
					</div>
				<a class="one_time" @click="fleet_register"><img src="../../assets/img/content/pay03.png" alt="">선불권 결제</a>
			</section>
			
			<section class="how_use">
				<p class="title">이용방법 안내</p>
				<ul>
					<li><p>결제 정보를 등록해두시면 간편하게 이용하실 수있습니다.</p></li>
					<li><p>신용/체크 카드 등록 시 에는 2회 세차권, Gift쿠폰, 멤버쉽 결제만 가능합니다.</p></li>
				</ul>
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
  },
  data(){
    return{
      product_list : [],
      count : 50,
      origianl_fee : 0,
      total_price : 0,
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
        pro_type : "PGC004"
      },{
      headers : {
        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
      }
      }).then(
      (res) => {  // 
            this.product_list = res.data;
            console.log(this.product_list);
            this.original_fee = this.product_list[0].prod_fee;
            this.total_price = parseInt(this.original_fee) * this.count;
      }
    )
  },
  updated(){
        /* 01 세차상품 선택 이벤트 */
      let oneType = document.getElementsByName('oneType'),
         oneTypeLi = document.querySelectorAll('#oneType_wrap li'),
         oneTypeBtn = document.querySelectorAll('#oneType_wrap li a');
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
   },
  methods : {
    count_up(){
        this.count += 10;
        if(this.count>=100){
            this.original_fee = this.product_list[0].dc_fee;
        }
        this.total_price = parseInt(this.original_fee) * this.count;
    }, 
    count_down(){
        if(this.count>=60){
            this.count -= 10;
            if(this.count<100){
                this.original_fee = this.product_list[0].prod_fee;
            }
        }
        this.total_price = parseInt(this.original_fee) * this.count;
    },
    getSrcP(index){
      return require('../../assets/img/content/pay_onetime0'+index+'.png')
    },
    fleet_register(){
      localStorage.setItem("pin_seq_no",JSON.stringify(this.product_list[0].prod_code));
      localStorage.setItem("first_menu",JSON.stringify(this.product_list[0].prod_name));
      localStorage.setItem("menu_fee",JSON.stringify(parseInt(this.original_fee)));
      localStorage.setItem("main_plc",JSON.stringify(this.product_list[0].main_plc));
      localStorage.setItem("count",JSON.stringify(this.count));
      this.$router.push({name : 'PayFleetPrepayOrder'})
    },
    before_reset(){
      localStorage.removeItem("pin_seq_no");
      localStorage.removeItem("first_menu");
      localStorage.removeItem("menu_fee");
      localStorage.removeItem("main_plc");
      localStorage.removeItem("third_menu");
      localStorage.removeItem("brush_plc");
      this.$router.push({name : 'PayVue'});
    },
    return_one(on_num){
        if(on_num != undefined){
            const parts = on_num.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.join('.');
        }  
    },
  },
};
</script>