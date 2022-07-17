<template>
  <div>
    <div id="content_wrap" class="pay_onetime">
      <div id="top">
        <div id="nav">
          <a class="btn_back" @click="before_reset">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </a>
          <p class="current">1회권 세차상품</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
          <p class="info">1회 세차 상품을 구매 중 입니다.<br>세차 상품 선택 후 옵션 상품을 선택해주세요</p>
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
                <span class="price">{{return_one(product.prod_fee)}}</span>
                <span class="check"></span>
              </a>
            </li>
            <!-- <li><input type="radio" name="oneType" value="onetimeBest" id="onetimeBest">
              <a href="#">
                <span class="img"><img class="off" src="../../assets/img/content/pay_onetime02.png" alt=""><img class="on" src="../../assets/img/content/pay_onetime02_on.png" alt=""></span>
                <span class="info"><span class="fontBold">BEST</span>기존세차 + 거품 + 왁스</span>
                <span class="price">21,000</span>
                <span class="check"></span>
              </a>
            </li>
            <li><input type="radio" name="oneType" value="onetimeBubble" id="onetimeBubble">
              <a href="#">
                <span class="img"><img class="off" src="../../assets/img/content/pay_onetime03.png" alt=""><img class="on" src="../../assets/img/content/pay_onetime03_on.png" alt=""></span>
                <span class="info"><span class="fontBold">BUBBLE</span>기존세차 + 거품</span>
                <span class="price">16,000</span>
                <span class="check"></span>
              </a>
            </li>
            <li><input type="radio" name="oneType" value="onetimeBasic" id="onetimeBasic">
              <a href="#">
                <span class="img"><img class="off" src="../../assets/img/content/pay_onetime04.png" alt=""><img class="on" src="../../assets/img/content/pay_onetime04_on.png" alt=""></span>
                <span class="info"><span class="fontBold">BASIC</span>기존세차</span>
                <span class="price">12,000</span>
                <span class="check"></span>
              </a>
            </li> -->
          </ul>
        </section>
        
        <div class="arrow"><img src="../../assets/img/content/arrow01.svg" alt=""></div>
        
        <section class="con2">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">02 1회권 옵션 상품</span>을 선택해주세요</p>
          </div>
          <ul class="oneOption_wrap check_list" id="option01">
            <li v-for="(option , index) in option_list" :key="index" @click="detect_change">
              <div class="option_img"><img :src="getSrcO(option.option_img)" alt=""></div>
              <label :for="getValO(option.option_code)"><span class="option_name">{{option.option_name}}</span><span class="option_price">+{{return_one(option.option_fee)}}</span></label>
              <input type="checkbox" name="oneOption01" :id="getValO(option.option_code)" :value="option.option_code" v-model="selected.option" class="oneOption">
              <div class="check"></div>
            </li>
            
            
            <!-- <li>
              <div class="option_img"><img src="../../assets/img/content/pay_optionicon03.png" alt=""></div>
              <label for="oneOption0102"><span class="option_name">트리플폼</span><span class="option_price">+3000</span></label>
              <input type="checkbox" name="oneOption01" id="oneOption0102" value="oneOption0102" class="oneOption">
              <div class="check"></div>
            </li>
            
            <li>
              <div class="option_img"><img src="../../assets/img/content/pay_optionicon04.png" alt=""></div>
              <label for="oneOption0103"><span class="option_name">하부세차</span><span class="option_price">+3000</span></label>
              <input type="checkbox" name="oneOption01" id="oneOption0103" value="oneOption0103" class="oneOption">
              <div class="check"></div>
            </li>
            
            <li>
              <div class="option_img"><img src="../../assets/img/content/pay_optionicon05.png" alt=""></div>
              <label for="oneOption0104"><span class="option_name">휠세척</span><span class="option_price">+3000</span></label>
              <input type="checkbox" name="oneOption01" id="oneOption0104" value="oneOption0104" class="oneOption">
              <div class="check"></div>
            </li>
            
            <li>
              <div class="option_img"><img src="../../assets/img/content/pay_optionicon06.png" alt=""></div>
              <label for="oneOption0105"><span class="option_name">버블폼</span><span class="option_price">+4000</span></label>
              <input type="checkbox" name="oneOption01" id="oneOption0105" value="oneOption0105" class="oneOption">
              <div class="check"></div>
            </li> -->
            
            
          </ul>
          <div class="oneOption_no check_list2" id="noOption01">
            <input type="checkbox" name="oneOption01" id="oneNoOption01" class="oneNoOption" v-model ="no_option"  @click="select_no_option"><div class="check"></div>
            <label for="oneNoOption01"><span class="option_name">세차옵션 선택 안함</span></label>
          </div>
        </section>
        
        <div class="arrow"><img src="../../assets/img/content/arrow01.svg" alt=""></div>
        
        <section class="con3">
          <div class="con_info">
            <p class="sec_txt"><span class="black fontBold">03 세차 마지막 공정</span>을 선택해주세요</p>
          </div>
  <!--
          <ul class="oneOption_wrap check_list" id="option02">
            <li>
              <div class="option_img"><img src="/img/content/pay_oneOption0201.png" alt=""></div><label for="oneOption0201"><span class="option_name">브러시로 물기제거</span><span class="option_price">+2000</span></label>
              <input type="checkbox" name="oneOption02" id="oneOption0201" value="oneOption0201" class="oneOption">
              <div class="check"></div>
            </li>
          </ul>
  -->
          <div class="oneOption_no check_list2" id="noOption02">
            <input type="checkbox" name="oneOption02" id="oneNoOption02" class="oneNoOption" v-model = "brush.menu"><div class="check"></div>
            <label for="oneNoOption02"><span class="option_name">건조브러쉬 미사용</span></label>
          </div>
        </section>
        <section class="how_use">
          <p class="title">1회권 세차상품을 선택 후, 결제하기 버튼을 눌러주세요</p>
        </section>
      </article>
      
    </div>
    <aside>
      <div class="btn_next" v-bind:class = "isActive" style="bottom:56px;">
        <a @click = "onetime_register">1회권 간편 결제</a>
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
      option_list : [],
      no_option : false,
      selected : {
        product : [],
        option : [],
        option_code : [],
        option_name : [],
        option_fee : 0,
        option_plc : [],
      },
      brush : {
        info : [],
        menu : false,
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
  },
  beforeCreate(){
    this.$http.post(this.$server+'/userapp/getMainProduct', {
        pro_type : "PGC001"
      },{
      headers : {
        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
      }
      }).then(
      (res) => {  // 
            this.product_list = res.data;
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
       /* 02 1회권 옵션 선택 이벤트1 */
      let oneOption01 = document.querySelectorAll('#option01 input[type="checkbox"]'),
         oneNoOption01 = document.querySelector('#noOption01 .oneNoOption');
      
      for(let i =0; i<oneOption01.length; i++){
         oneOption01[i].addEventListener('input', function(){
            oneNoOption01.checked = false;
         });
      }
      oneNoOption01.addEventListener('input', function(){
         if(this.checked){
            for(let i =0; i<oneOption01.length; i++){
               oneOption01[i].checked = false;
            }
         } 
      });
    

  },
  methods : {
    getSrcP(index){
      return require('../../assets/img/content/pay_onetime0'+index+'.png')
    },
    getValP(name){
      return "onetime"+name.split(' ')[0]
    },
    select_product(selected){
      this.selected.option = [];
      this.selected.product = selected;
      this.$http.post(this.$server+'/userapp/getOptProduct', {
        pro_type : "PGC001",
        main_seq_no : selected.prod_code,
      },{headers : {
      auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
      }
      }).then(
      (res) => {  // 
            this.option_list = res.data;
      })
    },
    getSrcO(index){
      if(index>=10)
        return require('../../assets/img/content/pay_optionicon'+index+'.png');
      else
        return require('../../assets/img/content/'+index+'.png');
    },
    getValO(index){
      if(index >=10){
        return "oneOption01"+index;
      }
      else
        return "oneOption010"+index;
    },
    onetime_register(){
      if(this.selected.product.length!=0 && (this.no_option || this.selected.option.length!=0)){
        if(!this.option_list.length && !this.selected.product.prod_name.length){
          alert("상품을 선택해주세요!");
          return false;
        }
        if(this.option_list.length && !this.selected.product.prod_name.length && !this.selected.option.length){
          alert("상품을 선택해주세요!");
          return false;
        }
        var send_options = []
        for(var i=0;i<this.option_list.length;i++){
          for(var j=0;j<this.selected.option.length;j++){
            if(this.option_list[i].option_code == this.selected.option[j]){
              send_options.push(this.option_list[i]);
              this.selected.option_code.push(this.option_list[i].option_code);
              this.selected.option_name.push(this.option_list[i].option_name);
              this.selected.option_fee += parseInt(this.option_list[i].option_fee);
              this.selected.option_plc.push(this.option_list[i].option_plc);
            }
            else
              continue;
          }
        }
        var sum_option_plc = "";
        var sum_option_code = "";
        var sum_option_menu = "";
        if(send_options.length == 1){
          sum_option_plc = send_options[0].option_plc;
          sum_option_code = send_options[0].option_code;
          sum_option_menu = send_options[0].option_name;
        }
        else{
          for(var i=0;i<send_options.length;i++){
            if(i==send_options.length-1){
              sum_option_plc += send_options[i].option_plc;
              sum_option_code += send_options[i].option_code;
              sum_option_menu += send_options[i].option_name;
            }
            else{
              sum_option_plc += send_options[i].option_plc;
              sum_option_plc += "::";
              sum_option_code += send_options[i].option_code;
              sum_option_code += "::";
              sum_option_menu += send_options[i].option_name;
              sum_option_menu += "::";
            }
          }
        }
        localStorage.setItem("send_options",JSON.stringify(send_options));
        localStorage.setItem("pin_seq_no",JSON.stringify(this.selected.product.prod_code));
        localStorage.setItem("first_menu",JSON.stringify(this.selected.product.prod_name));
        localStorage.setItem("menu_fee",JSON.stringify(parseInt(this.selected.product.prod_fee)));
        localStorage.setItem("main_plc",JSON.stringify(this.selected.product.main_plc));

        localStorage.setItem("pin2_seq_no",JSON.stringify(sum_option_code));
        localStorage.setItem("second_menu",JSON.stringify(sum_option_menu));
        localStorage.setItem("option_fee",JSON.stringify(this.selected.option_fee));
        localStorage.setItem("option_plc",JSON.stringify(sum_option_plc));
        localStorage.setItem("third_menu",JSON.stringify(this.brush.menu));
        localStorage.setItem("brush_plc",JSON.stringify(this.brush.info.main_plc));
        this.$router.push({name : 'PayOnetimeOrder01'})
      }
    },
    detect_change(){
      if( this.selected.option.length!=0)
        this.no_option = false;
    },
    select_no_option(){
      if(!this.no_option){
        this.selected.option = [];
      }
    },
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
  computed : {
    isActive :  function(){
      return{
        active : this.selected.product.length!=0 && (this.no_option || this.selected.option.length!=0)
      }
    },
  }
};
</script>