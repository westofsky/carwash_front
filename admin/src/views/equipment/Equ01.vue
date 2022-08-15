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
                        <!-- <li class="is-current"><router-link to = "/Equ01">장비제어</router-link></li> -->
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
            <section class="sales">
                <div class="breadcrumb">
                    <router-link to = "/Home">HOME</router-link>
                    <p>장비제어</p>
                    <p>장비제어</p>
                </div>
                <div class="contents">
                    <h2 class="title title_equ">장비제어</h2>
                    <span class="title_exp">화면에서 차단기 설정을 변경하신 후 [ 처리 ] 버튼을 누르셔야 완료 됩니다.</span>
                    <div class="contents_area">
                        <div class="contents_area-table product_inquire">
                            <p class="fl_right"><button type="button" class="btn_red btn_red_mid">처리</button></p>
                            <div class="contents_area-remote MT20">
                                <div class="MB40">
                                    <img src="../../assets/images/arrow_diagonal.png" alt="">
                                    <ul>
                                        <li><img src="../../assets/images/carcam.png" class="carcam" alt=""></li>
                                        <li>
                                            <input type="text" value="1234">
                                            <input type="text" value="1234">
                                            <input type="text" value="1234">
                                            <input type="text" value="1234">
                                        </li>
                                        <li><button type="button" class="btn_blue">수정</button></li>
                                    </ul>
                                    <img src="../../assets/images/arrow_diagonal.png" alt="" class="arrow_flip">
                                </div>
                                <div>
                                    <div class="MR40">
                                        <div>
                                            <img src="../../assets/images/camera_control_4.png" class="camequ" alt="camera panel">
                                        </div>
                                        <ul>
                                            <li><p>1번(좌측) 차단기</p></li>
                                            <li><hr class="remote_status remote_open"></li>
                                            <li><button type="button" class="remote_btn btn_up MR10">UP</button><button type="button" class="remote_btn btn_down">DOWN</button></li>
                                            <li><img src="../../assets/images/carcam.png"  class="carcam" alt="car"></li>
                                            <li>
                                                <input type="text" value="1234">
                                                <input type="text" value="1234">
                                                <input type="text" value="1234">
                                                <input type="text" value="1234">
                                            </li>
                                            <li><button type="button" class="btn_blue">수정</button></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div>
                                            <img src="../../assets/images/camera_control_4.png" class="camequ" alt="camera panel">
                                        </div>
                                        <ul>
                                            <li><p>2번(우측) 차단기</p></li>
                                            <li><hr class="remote_status"></li>
                                            <li><button type="button" class="remote_btn btn_up MR10">UP</button><button type="button" class="remote_btn btn_down">DOWN</button></li>
                                            <li><img src="../../assets/images/carcam.png"  class="carcam" alt="car"></li>
                                            <li>
                                                <input type="text" value="1234">
                                                <input type="text" value="1234">
                                                <input type="text" value="1234">
                                                <input type="text" value="1234">
                                            </li>
                                            <li><button type="button" class="btn_blue">수정</button></li>
                                        </ul>
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