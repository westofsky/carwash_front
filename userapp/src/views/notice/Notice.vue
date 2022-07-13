<template>
  <div>
    <div id="content_wrap" class="notice_detail">
      <div id="top">
        <div id="nav">
          <!-- <a class="btn_back" href="./notice_list.html"><img src="../../assets/img/btn_back.svg" alt="뒤로가기"></a> -->
          <router-link to="/homebasic" class="btn_back">
            <img src="../../assets/img/btn_back.svg" alt="뒤로가기">
          </router-link>
          <p class="current">공지사항</p>
          <a class="btn_alarm" href="#"><img src="../../assets/img/btn_alarm.svg" alt="알람"></a>
        </div>
        <div id="top_info">
        </div>
      </div>
      <article class="scontainer">
        <section class="con1">
          <div class="notice_content">
            <div class="top">
              <h2 class="subject">{{notice_data.title}}</h2>
              <p class="date">{{return_date(notice_data.write_date)}}</p>
            </div>
            <div class="scontent">
              <p v-html="str_contents"></p>
            </div>
          </div>
        </section>
      </article>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import FooterVue from "../footer/FooterVue.vue";

export default {

  data(){
    return{
      mem_no : sessionStorage.getItem('mem_no'),
      mem_chk : sessionStorage.getItem('mem_type'),
      mem_name : sessionStorage.getItem('mem_name'),
      notice_data : {},
      str_contents: ''
    }
  },
  components: {
    FooterVue
  },
  mounted(){
    this.get_detail();
  },
  methods: {
    return_date(date){
      const write = new Date(date);
      let year = write.getFullYear();
      console.log(year);
      let month = write.getMonth()+1;
      console.log(month);
      month = month.toString().padStart(2,'0');
      const day = write.getDate().toString().padStart(2,'0');

      return year+ '.'+month+'.'+day;    
    },
    re_br(data){
        return data.replace(/,+/g,'<br />')
    },
    async get_detail(){
        
      this.$http.post(this.$server+'/userapp/getnoticedetail', {
      seq_no : this.$route.query.seq_no
      },{headers : {
            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
        }
      }).then((res) => {
        this.notice_data = res.data
        this.str_contents = String(this.notice_data.contents).replace(/,+/g,'<br />')
      })
    }
  }
};
</script>