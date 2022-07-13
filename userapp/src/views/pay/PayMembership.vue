<template>
  <div>
    <div id="content_wrap" class="pay_onetime">
      <div id="top">
        <div id="nav">
          <a class="btn_back" @click="before_reset">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </a>
          <p class="current">멤버쉽 세차상품</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">멤버쉽 세차 상품을 구매 중 입니다.<br>세차 상품을 선택해주세요</p>
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">01 원하시는 세차 상품</span>을 선택해주세요</p>
          </div>
          <ul id="oneType_wrap" class="oneType_wrap">
            <li v-for="(product , index) in product_list" :key="index" @click="select_product(product)">
              <input type="radio" name="oneType" :value="getValP(product.prod_name)" :id="getValP(product.prod_name)" >
              <a>
                <span class="img"><img class="off" :src="getSrcP(product.main_img)" alt=""><img class="on" :src="getSrcP(product.main_img)" alt=""></span>
                <span class="info"><span class="fontBold">{{product.prod_name}}</span>{{product.prod_remarks}}</span>
                <span class="price">{{product.prod_fee}}</span>
                <span class="check"></span>
              </a>
            </li>
          </ul>
        </section>
        
        <div class="arrow"><img src="../../assets/img/content/arrow01.svg" alt=""></div>
        
        <section class="con3">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">02 세차 마지막 공정</span>을 선택해주세요</p>
          </div>
          <div class="oneOption_no check_list2" id="noOption02">
            <input type="checkbox" name="oneOption02" id="oneNoOption02" class="oneNoOption" v-model = "brush.menu"><div class="check"></div>
            <label for="oneNoOption02"><span class="option_name">건조브러쉬 미사용</span></label>
          </div>
        </section>
        <section class="how_use">
          <p class="title">멤버쉽 세차상품을 선택 후, 결제하기 버튼을 눌러주세요</p>
        </section>
      </article>
      
    </div>
    <aside>
      <div class="btn_next" v-bind:class = "isActive" style="bottom:56px;">
        <a @click = "onetime_register">멤버쉽 결제</a>
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
    return{
      product_list : [],
      selected : {
        product : [],
      },
      brush : {
        info : [],
        menu : false,
      }
    }
  },
  beforeCreate(){
    this.$http.post(this.$server+'/userapp/getMainProduct', {
        pro_type : "PGC002"
      },{
      headers : {
        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
      }
      }).then(
      (res) => {  // 
            this.product_list = res.data;
            console.log(this.product_list);
      }
    );
    this.$http.post(this.$server+'/userapp/getMainProduct', {
        pro_type : "PGC005"
      },{
      headers : {
        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
      }
      }).then(
      (res) => {  // 
            this.brush.info = res.data[0];
      }
    );
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
    getSrcP(index){
      return require('../../assets/img/content/pay_onetime0'+index+'.png')
    },
    getValP(name){
      return "onetime"+name.split(' ')[0]
    },
    select_product(selected){
      this.selected.product = selected;
    },
    onetime_register(){
      if(this.selected.product.length==0){
        alert("상품을 선택해주세요!");
        return false;
      }
      console.log(this.selected.product.prod_code + "||" + this.selected.product.prod_name+"||"+this.selected.product.prod_fee+"||");
      console.log(this.brush.menu + "||"+this.brush.info.main_plc);
      localStorage.setItem("pin_seq_no",JSON.stringify(this.selected.product.prod_code));
      localStorage.setItem("first_menu",JSON.stringify(this.selected.product.prod_name));
      localStorage.setItem("menu_fee",JSON.stringify(parseInt(this.selected.product.prod_fee)));
      localStorage.setItem("main_plc",JSON.stringify(this.selected.product.main_plc));
      localStorage.setItem("third_menu",JSON.stringify(this.brush.menu));
      localStorage.setItem("brush_plc",JSON.stringify(this.brush.info.main_plc));
      this.$router.push({name : 'PayMemberShipOrder01'})
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