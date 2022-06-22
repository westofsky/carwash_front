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
                        <li><router-link to = "/Customer02">공지사항</router-link></li>
                        <li><router-link to = "/Customer03">SNS관리</router-link></li>
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
                        <li><router-link to = "/Product02">진열관리(상품)</router-link></li>
                        <li><router-link to = "/Product03">진열관리(옵션)</router-link></li>
                    </ul>
                </li>
                <li class="equipment is-sub is-current">
                    <a href="#">장비제어</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Equ01">장비제어</router-link></li>
                        <li class="is-current"><router-link to = "/Equ02">세차순서</router-link></li>
                        <li><router-link to = "/Equ03">이용현황</router-link></li>
                    </ul>
                </li>
                <li class="basics is-sub">
                    <a href="#">기초관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Setting01">계정생성</router-link></li>
                        <li><router-link to = "/Setting02">근무자관리</router-link></li>
                        <li><router-link to = "/Setting03">장비/단말기 관리</router-link></li>
                        <li><router-link to = "/Setting04">기초코드관리</router-link></li>
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
                                <div>
                                    <div><img src="../../assets/images/carcam.png"  class="carcam" alt="carcam"></div>
                                    <div>
                                        <p>123가 4568</p>
                                        <ul class="process">
                                            <li>세차메뉴 : 프리미엄</li>
                                            <li>옵션 : 옵션내용, 옵션내용 옵션내용</li>
                                            <li>회원구분 : 멤버쉽</li>
                                            <li>가격 : 25,000원</li>
                                        </ul>
                                        <button class="btn_red">회차처리</button>
                                    </div>
                                </div>
                                <div>
                                    <div><img src="../../assets/images/carcam.png"  class="carcam" alt="carcam"></div>
                                    <div>
                                        <p>123가 4568</p>
                                        <ul class="process">
                                            <li>세차메뉴 : 프리미엄</li>
                                            <li>옵션 : 옵션내용, 옵션내용 옵션내용</li>
                                            <li>회원구분 : 멤버쉽</li>
                                            <li>가격 : 25,000원</li>
                                        </ul>
                                        <button class="btn_red">회차처리</button>
                                    </div>
                                </div>
                                <div>
                                    <div><img src="../../assets/images/carcam.png"  class="carcam" alt="carcam"></div>
                                    <div>
                                        <p>123가 4568</p>
                                        <ul class="process">
                                            <li>세차메뉴 : 프리미엄</li>
                                            <li>옵션 : 옵션내용, 옵션내용 옵션내용</li>
                                            <li>회원구분 : 멤버쉽</li>
                                            <li>가격 : 25,000원</li>
                                        </ul>
                                        <button class="btn_red">회차처리</button>
                                    </div>
                                </div>
                                <div>
                                    <input type="radio" id="wash1" name="togglewash" value="wash1">	
                                    <label for="wash1" class="MR40">진행 멈춤<br>STOP</label>
                                    <input type="radio" id="wash2" name="togglewash" value="wash2">
                                    <label for="wash2">재 진행<br>RESTART</label>
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