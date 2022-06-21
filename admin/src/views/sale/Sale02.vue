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
                    <li class="sales is-sub is-current">
                        <a href = "#">매출관리</a>
                        <ul class="sub_menu">
                            <li><router-link to ="/Sale01">매출관리</router-link></li>
                            <li class="is-current"><router-link to="/Sale02">이용현황</router-link></li>
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
                <section class="sales">
                    <div class="breadcrumb">
                        <router-link to = "/Home">HOME</router-link>
                        <p>매출관리</p>
                        <p>이용현황</p>
                    </div>
                    <div class="contents">
                        <h2 class="title title_sale">이용현황</h2>
                        <div class="contents_area">
                            <form autocomplete="off">
                                <div class="contents_area-search">
                                    <div class="select MT20">
                                        <div class="select_box">
                                            <label for="">상품분류</label>
                                            <select name="" id="product2" class="MR05">
                                                <option value="전체">대분류 전체</option>
                                                <option value="선택1">WASHDAY</option>
                                            </select>
                                        </div>
                                        <div class="select_box">
                                        <label for=""></label>
                                            <select name="" id="product3" class="MR05">
                                                <option value="">중분류 전체</option>
                                                <option value="">세차</option>
                                                <option value="">상품</option>
                                                <option value="">서비스</option>
                                                <option value="">추가</option>
                                            </select>
                                        </div>
                                        <div class="select_box">
                                            <label for="approve"></label>
                                            <select name="" id="" class="MR30">
                                                <option value="">소분류 전체</option>
                                                <option value="">1회권</option>
                                                <option value="">세차옵션</option>
                                                <option value="">멤버쉽</option>
                                                <option value="">Gift 쿠폰</option>
                                                <option value="">무료 쿠폰</option>
                                                <option value="">할인 쿠폰</option>
                                                <option value="">선불권</option>
                                            </select>
                                        </div>
                                        <div class="select_box">
                                            <label for="">검색조건</label>
                                            <select name="" id="" class="MR05">
                                                <option value="">상품명 선택</option>
                                                <option value="BASIC">BASIC</option>
                                                <option value="BUBBLE">BUBBLE</option>
                                                <option value="BEST">BEST</option>
                                                <option value="PREMIUM">PREMIUM</option>
                                            </select>
                                        </div>
                                        
                                        <div class="select_box">
                                            <label for=""></label>
                                            <input type="text" id="000" value="" placeholder="검색어 입력">
                                        </div>
                                        
                                        
                                    </div>
                                    <div class="select MT40">
                                        <div class="input_box date">
                                            <label for="start">조회일자</label>
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
                                        <div class="select_box">
                                            <label for="device">쿠폰적용</label>
                                            <select name="" id="" class="MR30">
                                                <option value="전체">전체</option>
                                                <option value="선택1">쿠폰 적용</option>
                                                <option value="선택2">쿠폰 미적용</option>
                                            </select>
                                        </div>
                                        
                                        

                                        <button type="button" class="btn_blue btn_search MR20">조회</button>
                                        <button type="button" class="btn_yellow btn_excel">엑셀 다운로드</button>

                                        
                                    </div>
                                </div>
                            </form>
                            <div class="contents_area-table">
                                <p class="contents_area-title">검색결과 <font class="fs14"><span>(</span>99,999<span>건)</span></font></p>
                                <table>
                                    <colgroup>
                                        <col width=""/>
                                        <col width="5%"/>
                                        <col width="5%"/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width="5%"/>
                                        <col width="5%"/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th rowspan="2">대분류</th>
                                            <th rowspan="2">중분류</th>
                                            <th rowspan="2">소분류</th>
                                            <th rowspan="2">상품명</th>
                                            <th rowspan="2">쿠폰적용</th>
                                            <th rowspan="2">총수량</th>
                                            <th rowspan="2">총매출</th>
                                            <th rowspan="2">순매출</th>
                                            <th rowspan="2">부가세</th>
                                            <th rowspan="2">비율(%)</th>
                                            <th colspan="4">202201</th>
                                        </tr>
                                        <tr>
                                            <th>수량</th>
                                            <th>총매출</th>
                                            <th>순매출</th>
                                            <th>부가세</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="grey">WASH DAY</td>
                                            <td class="grey">세차</td>
                                            <td class="grey">1회권</td>
                                            <td class="grey">BASIC</td>
                                            <td class="grey">전체</td>
                                            <td class="grey">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">4</td>
                                            <td class="right">293</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                        <tr>
                                            <td class="grey">WASH DAY</td>
                                            <td class="grey">세차</td>
                                            <td class="grey">1회권</td>
                                            <td class="grey">BUBBLE</td>
                                            <td class="grey">전체</td>
                                            <td class="grey">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">4</td>
                                            <td class="right">293</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                        <tr>
                                            <td class="grey">WASH DAY</td>
                                            <td class="grey">세차</td>
                                            <td class="grey">1회권</td>
                                            <td class="grey">BUBBLE</td>
                                            <td class="grey">전체</td>
                                            <td class="grey">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">4</td>
                                            <td class="right">293</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                        <tr>
                                            <td class="grey">WASH DAY</td>
                                            <td class="grey">세차</td>
                                            <td class="grey">1회권</td>
                                            <td class="grey">PREMIUM</td>
                                            <td class="grey">전체</td>
                                            <td class="grey">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">4</td>
                                            <td class="right">293</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                        <tr>
                                            <td class="grey">WASH DAY</td>
                                            <td class="grey">세차</td>
                                            <td class="grey">1회권</td>
                                            <td class="grey">BASIC</td>
                                            <td class="grey">전체</td>
                                            <td class="grey">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">4</td>
                                            <td class="right">293</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                        <tr>
                                            <td class="grey">WASH DAY</td>
                                            <td class="grey">세차</td>
                                            <td class="grey">1회권</td>
                                            <td class="grey">BASIC</td>
                                            <td class="grey">전체</td>
                                            <td class="grey">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">4</td>
                                            <td class="right">293</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                        <tr>
                                            <td class="grey">WASH DAY</td>
                                            <td class="grey">세차</td>
                                            <td class="grey">1회권</td>
                                            <td class="grey">BASIC</td>
                                            <td class="grey">전체</td>
                                            <td class="grey">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">4</td>
                                            <td class="right">293</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                        <tr>
                                            <td class="grey">WASH DAY</td>
                                            <td class="grey">세차</td>
                                            <td class="grey">1회권</td>
                                            <td class="grey">BASIC</td>
                                            <td class="grey">전체</td>
                                            <td class="grey">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">4</td>
                                            <td class="right">293</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                        <tr>
                                            <td class="grey">WASH DAY</td>
                                            <td class="grey">세차</td>
                                            <td class="grey">1회권</td>
                                            <td class="grey">BASIC</td>
                                            <td class="grey">전체</td>
                                            <td class="grey">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">4</td>
                                            <td class="right">293</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                        <tr>
                                            <td class="grey">WASH DAY</td>
                                            <td class="grey">세차</td>
                                            <td class="grey">1회권</td>
                                            <td class="grey">BASIC</td>
                                            <td class="grey">전체</td>
                                            <td class="grey">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">4</td>
                                            <td class="right">293</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr class="sum3">
                                            <td colspan="5">전체합계</td>
                                            <td class="grey">99999999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">100</td>
                                            <td class="right">1817</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                            <td class="right">99,999,999</td>
                                        </tr>
                                    </tfoot>
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
                        
                        <!-- 챠트 들어갈 곳 -->
                        <div class="chart_bottom">
                            챠트 들어갈 곳 입니다. 
                        </div>
                        
                        
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>