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
                <li class="promotion is-sub is-current">
                    <a href="#">프로모션</a>
                    <ul class="sub_menu">
                        <li class="is-current"><router-link to = "/Promotion01">프로모션관리</router-link></li>
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
                <li class="equipment is-sub">
                    <a href="#">장비제어</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Equ01">장비제어</router-link></li> -->
                        <li><router-link to = "/Equ02">세차순서</router-link></li>
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
                    <router-link to = "/Home">HOME</router-link>
                    <p>프로모션</p>
                    <p>프로모션 관리</p>
                </div>
                <div class="contents">
                    <h2 class="title title_prom">프로모션 관리</h2>
                    <div class="contents_area">
                        <form autocomplete="off">
                            <div class="contents_area-search">
                                <div class="select MT20">
                                    <div class="input_box date">
                                        <label for="start">프로모션기간</label>
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
                                        <div class="input_box MR30">
                                            <label for="number">프로모션명</label>
                                            <input type="text" id="number" placeholder="프로모션명 입력">
                                        </div>

                                        <div class="select_box MR30">
                                            <label for="purchase">사용여부</label>
                                            <select name="" id="purchase">
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
                            
                    
                            <p class="btnRight">
                            <button type="button" class="btn_blue">삭제</button>
                            <button type="button" class="btn_add btn_red" onclick="layerOpen('.layer_member_signup')">프로모션 등록</button>
                            </p>
                            
                            
                            
                            
                            <table>
                                <colgroup>
                                    <col width="4%"/>
                                    <col width="10%"/>
                                    <col width="10%"/>
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
                                        <th class="thht">선택</th>
                                        <th>년도</th>
                                        <th>코드</th>
                                        <th>프로모션명</th>
                                        <th>시작일자</th>
                                        <th>종료일자</th>
                                        <th>혜택</th>
                                        <th>특정매장</th>
                                        <th>조건상품</th>
                                        <th>혜택상품</th>
                                        <th>제외상품</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" id="check1"><label for="check1"></label></td>
                                        <td>1</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_member_modify');">123456</a></td>
                                        <td>프로모션이름 프로모션명</td>
                                        <td>2022-05-12</td>
                                        <td>2022-05-31</td>
                                        <td>쿠폰</td>
                                        <td>전체매장</td>
                                        <td>전체상품</td>
                                        <td>전체상품</td>
                                        <td>없음</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" id="check2"><label for="check2"></label></td>
                                        <td>1</td>
                                        <td>123456</td>
                                        <td>프로모션이름 프로모션명</td>
                                        <td>2022-05-12</td>
                                        <td>2022-05-31</td>
                                        <td>쿠폰</td>
                                        <td>전체매장</td>
                                        <td>전체상품</td>
                                        <td>전체상품</td>
                                        <td>없음</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" id="check3"><label for="check3"></label></td>
                                        <td>1</td>
                                        <td>123456</td>
                                        <td>프로모션이름 프로모션명</td>
                                        <td>2022-05-12</td>
                                        <td>2022-05-31</td>
                                        <td>쿠폰</td>
                                        <td>전체매장</td>
                                        <td>전체상품</td>
                                        <td>전체상품</td>
                                        <td>없음</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" id="check4"><label for="check4"></label></td>
                                        <td>1</td>
                                        <td>123456</td>
                                        <td>프로모션이름 프로모션명</td>
                                        <td>2022-05-12</td>
                                        <td>2022-05-31</td>
                                        <td>쿠폰</td>
                                        <td>전체매장</td>
                                        <td>전체상품</td>
                                        <td>전체상품</td>
                                        <td>없음</td>
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
        
    <!-- 프로모션 등록 -->
    <div class="layer layer_member_signup is-hidden">
        <form autocomplete="off">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">프로모션 등록</p>
                </div>
                <div class="contents input MT20">
                    <div class="input_box fl_left w200 MR10">
                        <label for="number1">회원번호</label>
                        <input type="text" id="number1" placeholder="회원번호 입력">
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="number2">차량번호</label>
                        <input type="text" id="number2" placeholder="차량번호 입력">
                    </div>
                    <div class="select_box fl_left w200 MR10">
                        <label for="select1">회원유형</label>
                        <select name="" id="select1">
                            <option value="비회원">비회원</option>
                            <option value="회원">회원</option>
                        </select>
                    </div>
                    <div class="select_box fl_left w200 MB40">
                        <label for="select2">회원등급</label>
                        <select name="" id="select2">
                            <option value="일반">일반</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left w200 MR10">
                        <label for="select3">FLEET 승인</label>
                        <select name="" id="select3">
                            <option value="일반">승인대기</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="id">FLEET ID</label>
                        <input type="text" id="id" placeholder="FLEET ID 입력">
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="phone">휴대폰 번호</label>
                        <input type="text" id="phone" placeholder="휴대폰번호 입력">
                    </div>
                </div>
                <div class="btn_group2" style="clear:both;">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_member_signup')">취소</button>
                    <button type="button" class="btn_blue">등록</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_member_signup')">닫기</button>
            </div>
        </form>
    </div>
        
        
    <!-- 프로모션 수정 -->
    <div class="layer layer_member_modify is-hidden">
        <form autocomplete="off">
            <div class="inner WD600">
                <div class="top">
                    <p class="popup_title">프로모션 수정</p>
                </div>
                <div class="contents input MT20">
                    <div class="input_box  WD400 MR10">
                        <label for="number1">프로모션명</label>
                        <input type="text" id="number1" placeholder="회원번호 입력">
                    </div>
                    <div class="input_box fl_left w200 MB40 MT40">
                        <label for="number2">프로모션기간</label>
                        <input type="text" id="number2" placeholder="차량번호 입력">
                    </div>
                    <div class="select_box fl_left w200 MR10 MT40">
                        <label for="select1">혜택</label>
                        <select name="" id="select1">
                            <option value="비회원">증정</option>
                            <option value="회원">쿠폰</option>
                        </select>
                    </div>
                    <div class="select_box fl_left w200 MB40">
                        <label for="select2">특정요일적용</label>
                        0000
                    </div>
                    <div class="select_box fl_left w200 MR10">
                        <label for="select3">특정시간</label>
                    000
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="id">조건상품여부</label>
                        <select name="" id="select1">
                            <option value="">전체상품</option>
                        </select>
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="id">혜택상품여부</label>
                        <select name="" id="select1">
                            <option value="">전체상품</option>
                        </select>
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="id">제외상품여부</label>
                        <select name="" id="select1">
                            <option value="">제외없음</option>
                        </select>
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="id">사용여부</label>
                        <select name="" id="select1">
                            <option value="">사용</option>
                        </select>
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="phone">조건상품 구매수량</label>
                        <input type="text" id="phone" placeholder="수량 입력">
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="phone">혜택상품 적용수량</label>
                        <input type="text" id="phone" placeholder="수량 입력">
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="phone">최소구매금액 </label>
                        <input type="text" id="phone" placeholder="금액 입력">
                    </div>
                </div>
                <div class="btn_group2" style="clear:both;">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_member_modify')">취소</button>
                    <button type="button" class="btn_blue">등록</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_member_modify')">닫기</button>
            </div>
        </form>
    </div>
</div>
</template>