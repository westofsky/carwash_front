<template>
<div>
    <div id="wrapper">
        <HeaderVue></HeaderVue>
        <nav>
            <ul class="main_menu">
                <!-- 선택한 메뉴 li.is-current // 뎁스 공통 -->
                <!-- 서브메뉴 있으면 li.is-sub 추가해주세요 -->
                <li class="home is-current">
                   <a href="javascript:void(0);">HOME</a>
                </li>
                <li class="sales is-sub">
                    <a href = "#">매출관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Sale01">매출관리</router-link></li>
                        <li><router-link to = "/Sale02">이용현황</router-link></li>
                    </ul>
                </li>
                <li class="customer is-sub">
                    <a href="javascript:void(0);">고객관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Customer01">회원조회</router-link></li>
                        <li><router-link to = "/Customer02">Fleet차량관리</router-link></li>
                        <li><router-link to = "/Customer03">멤버쉽조회</router-link></li>
                        <li><router-link to = "/Customer04">멤버쉽구독결제</router-link></li>
                        <li><router-link to = "/Customer05">멤버쉽알림톡발송</router-link></li>
                        <li><router-link to = "/Customer06">공지사항</router-link></li>
                    </ul>
                </li>
                <li class="promotion is-sub">
                    <a href="javascript:void(0);">프로모션</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Promotion01">프로모션관리</router-link></li>
                        <li><router-link to = "/Promotion02">쿠폰관리</router-link></li>
                        <li><router-link to = "/Promotion03">쿠폰발행</router-link></li>
                        <li><router-link to = "/Promotion04">Gift Card 교환</router-link></li>
                    </ul>
                </li>
                <li class="product is-sub">
                    <a href="javascript:void(0);">상품관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Product01">상품조회</router-link></li>
                        <!-- <li><router-link to = "/Product02">진열관리(상품)</router-link></li>
                        <li><router-link to = "/Product03">진열관리(옵션)</router-link></li> -->
                    </ul>
                </li>
                <li class="equipment is-sub">
                    <a href="javascript:void(0);">장비제어</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Equ01">장비제어</router-link></li> -->
                        <li><router-link to = "/Equ02">세차순서</router-link></li>
                        <!-- <li><router-link to = "/Equ03">이용현황</router-link></li> -->
                    </ul>
                </li>
                <li class="basics is-sub">
                    <a href="javascript:void(0);">기초관리</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Setting01">계정생성</router-link></li> -->
                        <li><router-link to = "/Setting02">근무자관리</router-link></li>
                        <!-- <li><router-link to = "/Setting03">장비/단말기 관리</router-link></li>
                        <li><router-link to = "/Setting04">기초코드관리</router-link></li> -->
                    </ul>
                </li>
            </ul>
            <div class="info">
                <p>(주)엔티아이</p>
                사업자등록번호 : 504-81-15358 ㅣ 대표이사 : 김도연<br>대구광역시 서구 와룡로 335 1층 스파크플러스
            </div>
        </nav>
        <div id="container">
            <section class="main">
                <div class="breadcrumb">
                    <router-link to = "/Home">HOME</router-link>
                    <!-- <p>대출관리</p>
                    <p>매출관리</p> -->
                </div>
                <div class="contents">
                    <h2 class="title">HOME</h2>
                    <div class="contents_area">
                        <div class="first" style="margin-bottom: 50px;">
                            <div>
                                <p class="contents_area-title" style="width:100%">당일 매출 현황 {{get_today()}}
                                    <a style="font-size: 25px;height:100%; float:right;">{{get_real(one_data.today_pay_amount)}} 원/ {{one_data.today_pay_count}} 건</a>
                                </p>
                                <div class="contents_area-article">
                                    <bar-chart v-if="chartData_timesale.loaded" :chart-data="chartData_timesale" :chart-options = "chartOptions"></bar-chart>
                                </div>
                            </div>
                            <div>
                                <p class="contents_area-title" style="width:100%">당월 매출 현황 {{get_month()}}
                                    <a style="font-size: 25px;height:100%; float:right;">{{get_real(one_data.month_pay_amount)}} 원/ {{one_data.month_pay_count}} 건</a>
                                </p>
                                <div class="contents_area-article">
                                    <bar-chart v-if="chartData_daysale.loaded" :chart-data="chartData_daysale" :chart-options = "chartOptions"></bar-chart>
                                </div>
                            </div>
                        </div>
                        <div class="second">
                            <div>
                                <p class="contents_area-title" style="width:100%">당일 이용 현황 {{get_today()}}
                                    <a style="font-size: 25px;height:100%; float:right;">{{get_real(one_data.today_use_amount)}} 원/ {{one_data.today_use_count}} 건</a>
                                </p>
                                <div class="contents_area-article">
                                    <bar-chart v-if="chartData_timeuse.loaded" :chart-data="chartData_timeuse" :chart-options = "chartOptions"></bar-chart>
                                </div>
                            </div>
                            <div>
                                <p class="contents_area-title">공지사항</p>
                                <div class="contents_area-article notice">
                                    <a v-for="(info, index) in notice_data" :key="index">
                                        <router-link to="/Customer03">
                                            <p>{{info.title}}</p>
                                            <p>{{info.wirte_date}}</p>
                                        </router-link>
                                    </a>
                                </div>
                                <router-link to="/Customer06"><button type="button" class="btn_more" >더보기</button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
</template>
<script>
import BarChart from './Bar.vue'
    export default{
        components: {
            BarChart
        },
        data(){
            return{
                one_data : [],
                notice_data : [],
                chartData_timesale: {
                    loaded : false,
                    labels: [],
                    datasets: [
                        {
                            label: '당일 매출 현황',
                            backgroundColor: '#f87979',
                            data: []
                        }
                    ]
                },
                chartData_daysale: {
                    loaded : false,
                    labels: [],
                    datasets: [
                        {
                            label: '당월 매출 현황',
                            backgroundColor: '#f87979',
                            data: []
                        }
                    ]
                },
                chartData_timeuse: {
                    loaded : false,
                    labels: [],
                    datasets: [
                        {
                            label: '당일 이용 현황',
                            backgroundColor: '#f87979',
                            data: []
                        }
                    ]
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted(){
            this.chartData_timesale.loaded=false;
            this.chartData_daysale.loaded=false;
            this.chartData_timeuse.loaded=false;
            this.get_one();
            this.get_notice();
            this.get_timesale();
            this.get_daysale();
            this.get_timeuse();
        },
        methods : {
            get_timesale(){
                this.$http.post(this.$server+'/admin/getStaticsTimeSale',{}
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    for(var i =0;i<res.data.length;i++){
                        this.chartData_timesale.labels.push(res.data[i].time_hour+"시");
                        this.chartData_timesale.datasets[0].data.push(res.data[i].time_amount);
                    }
                    this.chartData_timesale.loaded = true;
                    
                })
            },
            get_daysale(){
                this.$http.post(this.$server+'/admin/getStaticsDaySale',{}
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    for(var i =0;i<res.data.length;i++){
                        this.chartData_daysale.labels.push(res.data[i].day_date);
                        this.chartData_daysale.datasets[0].data.push(res.data[i].day_amount);
                    }
                    this.chartData_daysale.loaded = true;
                })
            },
            get_timeuse(){
                this.$http.post(this.$server+'/admin/getStaticsTimeUse',{}
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    for(var i =0;i<res.data.length;i++){
                        this.chartData_timeuse.labels.push(res.data[i].time_hour+"시");
                        this.chartData_timeuse.datasets[0].data.push(res.data[i].time_use);
                    }
                    this.chartData_timeuse.loaded = true;
                })
            },
            get_real(on_num){
                if(on_num != undefined){
                    const parts = on_num.toString().split('.');
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    return parts.join('.');
                }  
            },
            get_one(){
                this.$http.post(this.$server+'/admin/getStatic',{}
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    this.one_data = res.data
                })
            },
            get_notice(){
                this.$http.post(this.$server+'/admin/getNoticeMain',{
                    list_count : '6'
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    this.notice_data = res.data
                })
            },
            get_today(){
                const d = new Date();
                const year = d.getFullYear(); // 년
                const month = (d.getMonth()+1);   // 월
                const day = d.getDate();
                return "("+year+"년 "+month+"월 "+day+"일 현재)"
            },
            get_month(){
                const d = new Date();
                const year = d.getFullYear(); // 년
                const month = (d.getMonth()+1);   // 월
                const day = d.getDate();
                return "("+year+"년 "+month+"월 현재)"

            },
        }
    }
</script>