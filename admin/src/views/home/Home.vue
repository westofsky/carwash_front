<template>
<div>
    <div id="wrapper">
        <NavVue></NavVue>
        <HeaderVue></HeaderVue>
        <nav>
            <ul class="main_menu">
                <!-- 선택한 메뉴 li.is-current // 뎁스 공통 -->
                <!-- 서브메뉴 있으면 li.is-sub 추가해주세요 -->
                <li class="home is-current">
                   <a href="#">HOME</a>
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
                <li class="equipment is-sub">
                    <a href="#">장비제어</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Equ01">장비제어</router-link></li>
                        <li><router-link to = "/Equ02">세차순서</router-link></li>
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
            <section class="main">
                <div class="breadcrumb">
                    <router-link to = "/Home">HOME</router-link>
                    <!-- <p>대출관리</p>
                    <p>매출관리</p> -->
                </div>
                <div class="contents">
                    <h2 class="title">HOME</h2>
                    <div class="contents_area">
                        <div class="first">
                            <div>
                                <p class="contents_area-title">당일 매출 현황 (2022년 05월 3일 현재)</p>
                                <div class="contents_area-article">

                                </div>
                            </div>
                            <div>
                                <p class="contents_area-title">당일 매출 현황 (2022년 05월 3일 현재)</p>
                                <div class="contents_area-article">

                                </div>
                            </div>
                        </div>
                        <div class="second">
                            <div>
                                <p class="contents_area-title">당일 매출 현황 (2022년 05월 3일 현재)</p>
                                <div class="contents_area-article">

                                </div>
                            </div>
                            <div>
                                <p class="contents_area-title">공지사항</p>
                                <div class="contents_area-article notice">
                                    <a href="javascript:void(0)">
                                        <p>공지사항 글제목 1번 입니다.</p>
                                        <p>2022-03-10</p>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <p>공지사항 글제목 2번 입니다.</p>
                                        <p>2022-03-10</p>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <p>공지사항 글제목 3번 입니다.</p>
                                        <p>2022-03-10</p>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <p>공지사항 글제목 4번 입니다.</p>
                                        <p>2022-03-10</p>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <p>공지사항 글제목 5번 입니다.</p>
                                        <p>2022-03-10</p>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <p>공지사항 글제목 6번 입니다.</p>
                                        <p>2022-03-10</p>
                                    </a>
                                </div>
                                <button type="button" class="btn_more">더보기</button>
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
    }
</script>