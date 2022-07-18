<template>
<div>
    <div id="wrapper">
        <HeaderVue></HeaderVue>
        <nav>
            <ul class="main_menu">
                <!-- 선택한 메뉴 li.is-current // 뎁스 공통 -->
                <!-- 서브메뉴 있으면 li.is-sub 추가해주세요 -->
                <li class="home">
                    <router-link to = "/Home">HOME</router-link>
                </li>
                <li class="sales is-sub">
                    <a href = "#">매출관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Sale01">매출관리</router-link></li>
                        <li><router-link to = "/Sale02">이용현황</router-link></li>
                    </ul>
                </li>
                <li class="customer is-sub">
                    <a href="#">고객관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Customer01">회원조회</router-link></li>
                        <li><router-link to = "/Customer02">멤버쉽조회</router-link></li>
                        <li><router-link to = "/Customer03">공지사항</router-link></li>
                    </ul>
                </li>
                <li class="promotion is-sub">
                    <a href="#">프로모션</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Promotion01">프로모션관리</router-link></li>
                        <li><router-link to = "/Promotion02">쿠폰관리</router-link></li>
                    </ul>
                </li>
                <li class="product is-sub">
                    <a href="#">상품관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Product01">상품조회</router-link></li>
                        <!-- <li><router-link to = "/Product02">진열관리(상품)</router-link></li>
                        <li><router-link to = "/Product03">진열관리(옵션)</router-link></li> -->
                    </ul>
                </li>
                <li class="equipment is-sub is-current">
                    <a href="#">장비제어</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Equ01">장비제어</router-link></li> -->
                        <li class="is-current"><router-link to = "/Equ02">세차순서</router-link></li>
                        <!-- <li><router-link to = "/Equ03">이용현황</router-link></li> -->
                    </ul>
                </li>
                <li class="basics is-sub">
                    <a href="#">기초관리</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Setting01">계정생성</router-link></li> -->
                        <li><router-link to = "/Setting02">근무자관리</router-link></li>
                        <!-- <li><router-link to = "/Setting03">장비/단말기 관리</router-link></li>
                        <li><router-link to = "/Setting04">기초코드관리</router-link></li> -->
                    </ul>
                </li>
            </ul>
        <div class="info">
                <p class="name">스파크플러스</p>
                <p class="address">서울 금천구 범인로 1142 517</p>
                <p class="tel">TEL 02-777-8888</p>
                <p>© Spark Plus, Inc.</p>
            </div>
        </nav>
        <div id="container">
            <section class="sales">
                <div class="breadcrumb">
                    <a href="home.html">HOME</a>
                    <p>장비제어</p>
                    <p>세차순서</p>
                </div>
                <div class="contents">
                    <h2 class="title title_equ">세차순서</h2>
                    <div class="contents_area MT40">
                        <div class="contents_area-table product_inquire">
                            <p class="contents_area-title">세차 진입 차량 순서 제어</p>
                            <div class="carwash_equ">세차기</div>
                            <div class="contents_area-queue">
                                <div v-for="(info,index) in get_washCar" :key="index">
                                    <!-- <div><img src="../../assets/images/carcam.png"  class="carcam" alt="carcam"></div> -->
                                    <div>
                                        <p>{{info.car_no}}</p>
                                        <ul class="process">
                                            <li>세차메뉴 : {{info.prod_name}}</li>
                                            <li>옵션 : {{info.option_name}}</li>
                                            <li>건조브러쉬 : {{info.is_brush}}</li>
                                        </ul>
                                        <button class="btn_red" @click="set_washCtrl(info.use_seq,info.wash_seq)">회차처리</button>
                                    </div>
                                </div>
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
    export default{
        data(){
            return{
                get_washCar : '',

            }
        },
        mounted(){

        },
        methods :{
            get_washCtrl(){
                this.$http.post(this.$server+'/admin/getWashCtrl',
                {
                    
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    this.get_washCar = res.data;
                });
            },
            set_washCtrl(use_seq,wash_seq){
                this.$http.post(this.$server+'/admin/setWashCtrl',
                {
                    use_seq : use_seq,
                    wash_seq : wash_seq,
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    if(res.data.result_code == "Y"){
                        alert("회차처리 성공");
                    }
                });
            }
        }
    }
</script>