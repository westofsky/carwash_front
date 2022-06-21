<template>
<div>
    <div id="wrapper">
        <HeaderVue></HeaderVue>s
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
                <li class="promotion is-sub is-current">
                    <a href="#">프로모션</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Promotion01">프로모션관리</router-link></li>
                        <li class="is-current"><router-link to = "/Promotion02">쿠폰관리</router-link></li>
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
            <section class="sales">
                <div class="breadcrumb">
                    <router-link to = "/Home">HOME</router-link>
                    <p>프로모션</p>
                    <p>쿠폰 관리</p>
                </div>
                <div class="contents">
                    <h2 class="title title_prom">쿠폰 관리</h2>
                    <div class="contents_area">
                        <form autocomplete="off">
                            <div class="contents_area-search">
                                <div class="select MT20">
                                    <div class="input_box date">
                                        <label for="start">쿠폰사용기간</label>
                                        <input type="date" id="start" placeholder="" value="2022-03-16">
                                        <div class="hyphen">-</div>
                                        <input type="date" id="end" value="2022-03-16">
                                        <div class="btn_group ML10 MR30">
                                            <button type="button">전일</button>
                                            <button type="button">당일</button>
                                            <button type="button">일주일</button>
                                            <button type="button">한달</button>
                                        </div>
                                        </div>
                                        <div class="select_box MR30">
                                            <label for="purchase">쿠폰종류</label>
                                            <select name="" id="">
                                                <option value="전체">무료쿠폰</option>
                                                <option value="선택1">할인쿠폰</option>
                                                <option value="선택2">Gift쿠폰</option>
                                                <option value="선택2">상품교환쿠폰</option>
                                            </select>
                                        </div>

                                        <div class="select_box MR30">
                                            <label for="purchase">사용여부</label>
                                            <select name="" id="">
                                                <option value="전체">전체</option>
                                                <option value="선택1">사용</option>
                                                <option value="선택2">미사용</option>
                                            </select>
                                        </div>
                                    
                                    <button type="button" class="btn_blue btn_search MR20">조회</button>
                                    </div>
                                
                            </div>
                        </form>
                        <div class="contents_area-table">
                            <p class="contents_area-title">검색결과 <font class="fs14"><span>(</span>99,999<span>건)</span></font></p>
                            
                            <p class="fl_right">
                                <button type="button" class="btn_add btn_red">쿠폰 등록</button>
                                <button type="button" class="btn_add btn_blue">엑셀 업로드</button>
                            </p>
                            
                            
                            <table>
                                <colgroup>
                                    <col width="4%"/>
                                    <col width="4%"/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th rowspan="2">NO</th>
                                        <th rowspan="2">단말기 번호</th>
                                        <th rowspan="2">영수번호</th>
                                        <th rowspan="2">결제번호</th>
                                        <th rowspan="2">결제일자</th>
                                        <th rowspan="2">결제시간</th>
                                        <th rowspan="2">매출구분</th>
                                        <th rowspan="2">총매출</th>
                                        <th rowspan="2">순매출</th>
                                        <th rowspan="2">NET매출</th>
                                        <th rowspan="2">부가세</th>
                                        <th colspan="5">결제수단</th>
                                    </tr>
                                    <tr>
                                        <th>현금매출</th>
                                        <th>카드매출</th>
                                        <th>간편결제</th>
                                        <th>Gift쿠폰</th>
                                        <th>선불권</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="grey">999</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="grey">정상</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">9</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="red">반품</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">8</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="grey">정상</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">7</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="red">반품</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">6</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="red">반품</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">5</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="grey">정상</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">4</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="grey">정상</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">3</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="grey">정상</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">2</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="grey">정상</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">1</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="grey">정상</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                    <div class="pagination">
                        <!-- seleted : li.is-current -->
                        <!-- disable : li.disable -->
                        <ul>
                            <li class="page first disable"><a href="javascript:void(0)">first page</a></li>
                            <li class="page prev disable"><a href="javascript:void(0)">prev page</a></li>
                            <li class="num is-current"><a href="javascript:void(0)">1</a></li>
                            <li class="num"><a href="javascript:void(0)">2</a></li>
                            <li class="num"><a href="javascript:void(0)">3</a></li>
                            <li class="num"><a href="javascript:void(0)">4</a></li>
                            <li class="num"><a href="javascript:void(0)">5</a></li>
                            <li class="num"><a href="javascript:void(0)">6</a></li>
                            <li class="num"><a href="javascript:void(0)">7</a></li>
                            <li class="num"><a href="javascript:void(0)">8</a></li>
                            <li class="num"><a href="javascript:void(0)">9</a></li>
                            <li class="num"><a href="javascript:void(0)">10</a></li>
                            <li class="page next"><a href="javascript:void(0)">next page</a></li>
                            <li class="page last"><a href="javascript:void(0)">last page</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
</template>