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
                <li class="equipment is-sub is-current">
                    <a href="javascript:void(0);">장비제어</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Equ01">장비제어</router-link></li> -->
                        <li class="is-current"><router-link to = "/Equ02">세차순서</router-link></li>
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
                            <div class="carwash_equ">세차기
                                
                            </div>
                            <div class="contents_area-queue">
                                <div v-for="(info,index) in get_washCar" :key="index">
                                    <div>
                                        <p>{{info.car_no}}</p>
                                        <ul class="process">
                                            <li>세차메뉴 : {{info.prod_name}}</li>
                                            <li>옵션 : {{info.option_name}}</li>
                                            <li>건조브러쉬 : {{info.is_brush}}</li>
                                        </ul>
                                        <button class="btn_red" @click="set_washCtrl(info.use_seq,info.wash_seq,info.car_no)">회차처리</button>
                                    </div>
                                </div>
                                <button class="btn_up btn_up1" @click="gate_up('01')">1호차단기 UP</button>
                                <button class="btn_up btn_down1" @click="gate_down('01')">1호차단기 DOWN</button>
                                <button class="btn_up btn_up2" @click="gate_up('02')">2호차단기 UP</button>
                                <button class="btn_up btn_down2" @click="gate_down('02')">2호차단기 DOWN</button>
                                
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
            clearInterval(this.loading);
            this.loading = setInterval(this.get_washCtrl,1000);
        },
        beforeRouteLeave(to,from,next){
            var result = confirm('이 사이트에서 나가시겠습니까?');
            if(result){
                clearInterval(this.loading);
                next();
            }
        }, 
        methods :{
            get_washCtrl(){
                console.log("보냄");
                this.$http.post(this.$server+'/admin/getWashCtl',
                {
                    
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    this.get_washCar = res.data;
                    console.log(res.data);
                });
            },
            set_washCtrl(use_seq,wash_seq,car_no){
                this.$http.post(this.$server+'/admin/setWashCtl',
                {
                    use_seq : use_seq,
                    wash_seq : wash_seq,
                    car_no : car_no,
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    if(res.data.result_code == "Y"){
                        alert("회차처리 성공");
                        clearInterval(this.loading);
                        this.$router.go();

                    }
                    else{
                        alert("회차처리 실패");
                    }
                });
            },
            gate_up(gate_no){
                this.$http.post(this.$server+'/admin/openGate',
                {
                    gate_no : gate_no
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    if(res.data.result_code == "Y"){
                        alert(gate_no+"호차단기UP 성공");
                    }
                });
            },
            gate_down(gate_no){
                this.$http.post(this.$server+'/admin/closeGate',
                {
                    gate_no : gate_no
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    if(res.data.result_code == "Y"){
                        alert(gate_no+"호차단기DOWN 성공");
                    }
                });
            },
            
        }
    }
</script>