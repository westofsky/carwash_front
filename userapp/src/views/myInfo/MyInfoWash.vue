<template>
  <div>
    <div id="content_wrap" class="myinfo_wash">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./register_basic02.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/myInfoList" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">세차기록부</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="myinfo_wash_cal" style="margin : 0 0 80px">
            <p class="title">기간검색</p>
            <vc-date-picker v-model="range" is-range>
              <template v-slot="{ inputValue, inputEvents }">
                <div class="flex justify-center items-center">
                  <input
                    :value="inputValue.start"
                    v-on="inputEvents.start"
                  />
                  <span> ~ </span>
                  <input
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                  />
                </div>
              </template>
            </vc-date-picker>
            <button type="submit" style="width:100%" @click="search">검색</button>
          </div>
          <div class="myinfo_wash_empty" v-if="!washuse_in_date.length">
            <p>세차 이용 정보가 없습니다.</p>
          </div>
          <div class="myinfo_wash_list" v-else>
            <ul>
              <li class="wash_list" v-for="(washuse,index) in washuse" :key="index">
                <div class="wash_list_name">
                  <img :src="getSrc(washuse.prod_type)" alt="">
                  <p>{{washuse.prod_name}}</p>
                </div>
                <div class="wash_info">
                  <ul>
                    <li>세차일시 : {{washuse.washdate}}</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
    <aside>
      <div class="btn_next">
        <!-- <a href="#">확 인</a> -->
        <router-link to="/myInfoList">확 인</router-link>
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
  data() {
    return {
      range: {
        start: new Date(2022, 4, 5),
        end: new Date(2022, 7, 7),
      },
      is_date : false,
      washuse : [],
      washuse_in_date : [],
    };
  },
  mounted(){
    this.$http.post(this.$server+'/userapp/getWashUse', {
        mem_no : sessionStorage.getItem("mem_no"),
    },{headers : {
    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
    }
    }).then(
    (res) => {  //
      this.washuse = res.data;
      var temp = res.data;
      for(var i=0;i<temp.length;i++){
        var year = temp[i].wash_date.split(' ')[0].split('-')[0];
        var month = temp[i].wash_date.split(' ')[0].split('-')[1];
        var day = temp[i].wash_date.split(' ')[0].split('-')[2];
        var date = new Date(year,month,day);
        if(date>this.range.start && date<this.range.end)
          this.washuse_in_date.push(temp[i]);
      }
    })
  },
  methods : {
    search(){
      this.washuse_in_date = [];
      for(var i=0;i<this.washuse.length;i++){
        var year = this.washuse[i].wash_date.split(' ')[0].split('-')[0];
        var month = this.washuse[i].wash_date.split(' ')[0].split('-')[1];
        var day = this.washuse[i].wash_date.split(' ')[0].split('-')[2];
        var date = new Date(year,month,day);
        if(date>this.range.start && date<this.range.end)
          this.washuse_in_date.push(this.washuse[i]);
      }
    },
    getSrc(value){
      return require('../../assets/img/content/pay_onetime0'+value+'.png');
    }
  }
};
</script>