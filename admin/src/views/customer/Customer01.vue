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
                    <a>매출관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Sale01">매출관리</router-link></li>
                        <li><router-link to = "/Sale02">이용현황</router-link></li>
                    </ul>
                </li>
                <li class="customer is-sub is-current" >
                    <a>고객관리</a>
                    <ul class="sub_menu">
                        <li class="is-current"><router-link to = "/Customer01">회원조회</router-link></li>
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
                    <p>고객관리</p>
                    <p>회원조회</p>
                </div>
                <div class="contents">
                    <h2 class="title title_user">회원조회</h2>
                    <div class="contents_area">
                        <form autocomplete="off">
                            <div class="contents_area-search">
                                <div class="select PDB20">
                                    <span class="ShopName">매장명</span><span class="f-red fB">WASHDAY 왜관점</span>
                                </div> 
                                <div class="select MT20">
                                    <div class="input_box">
                                        <label for="number">회원번호</label>
                                        <input type="text" id="" placeholder="YGP22021600000001" class="WD180 MR20">
                                    </div>
                                    <div class="input_box">
                                        <label for="number">차량번호</label>
                                        <input type="text" id="" placeholder="차량번호 입력" class="WD150 MR20">
                                    </div>
                                    <div class="select_box">
                                        <label for="purchase">회원유무</label>
                                        <select name="" id="" class="WD150 MR20">
                                            <option value="전체">전체</option>
                                            <option value="선택1">선택1</option>
                                            <option value="선택2">선택2</option>
                                        </select>
                                    </div>
                                    <div class="select_box">
                                        <label for="purchase">회원유형</label>
                                        <select name="" id="" class="WD150 MR20">
                                            <option value="전체">전체</option>
                                            <option value="선택1">선택1</option>
                                            <option value="선택2">선택2</option>
                                        </select>
                                    </div>
                                    <div class="select_box">
                                        <label for="purchase">회원등급</label>
                                        <select name="" id="" class="WD150">
                                            <option value="전체">전체</option>
                                            <option value="선택1">선택1</option>
                                            <option value="선택2">선택2</option>
                                        </select>
                                    </div>
                                </div> 
                                
                                <div class="select MT40">
                                <div class="input_box">
                                        <label for="number">FLEET ID</label>
                                        <input type="text" id="" placeholder=""  class="WD180 MR20">
                                </div>
                                <div class="input_box">
                                        <label for="number">휴대폰번호</label>
                                        <input type="text" id="" placeholder="010-1234-5678"  class="WD150 MR20">
                                </div>
                                <div class="input_box">
                                        <label for="number">쿠폰번호</label>
                                        <input type="text" id="" placeholder="123456789"  class="WD150 MR20">
                                </div>
                                
                                <div class="input_box date">
                                        <label for="start">회원가입일</label>
                                        <input type="date" id="" placeholder="" value="2022-03-16" class="MR20">
                                </div>
                                    
                                <button type="button" class="btn_blue btn_search MR20">조회</button>
                                <button type="button" class="btn_yellow btn_excel">엑셀 다운로드</button>
                                
                            </div>
                                
                            </div>
                            
                            
                        </form>
                        <div class="contents_area-table">
                            <p class="contents_area-title">검색결과 <font class="fs14"><span>(</span>99,999<span>건)</span></font></p>
                            
                            <p class="fl_right"><button type="button" class="btn_add btn_red" onclick="layerOpen('.layer_member_signup')">회원등록</button></p>
                            
                            <table>
                                <colgroup>
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
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="thht">NO</th>
                                        <th>회원번호</th>
                                        <th>차량번호</th>
                                        <th>회원유무</th>
                                        <th>회원유형</th>
                                        <th>회원등급</th>
                                        <th>FLEET 승인</th>
                                        <th>FLEET ID</th>
                                        <th>휴대폰번호</th>
                                        <th>보유쿠폰</th>
                                        <th>회원가입일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>999</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_member_modify');">YGP22021600000001</a></td>
                                        <td>서울 123가 1234</td>
                                        <td>회원</td>
                                        <td>FLEET선불전용</td>
                                        <td>일반</td>
                                        <td>승인완료</td>
                                        <td>porche</td>
                                        <td>010-1234-5678</td>
                                        <td><a href="javascript:void(0)" onClick="layerOpen('.layer_coupon')">33</a></td>
                                        <td>2022/04/22</td>
                                    </tr>
                                    <tr>
                                        <td>999</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_member_modify');">YGP22021600000001</a></td>
                                        <td>서울 123가 1234</td>
                                        <td><span class="f-lightgrey">비회원</span></td>
                                        <td>FLEET선불전용</td>
                                        <td><span class="f-purple">멤버쉽</span></td>
                                        <td><span class="f-yellow">승인대기</span></td>
                                        <td>porche</td>
                                        <td>010-1234-5678</td>
                                        <td><a href="javascript:void(0)" onClick="layerOpen('.layer_coupon')">33</a></td>
                                        <td>2022/04/22</td>
                                    </tr>
                                    <tr>
                                        <td>999</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_member_modify');">YGP22021600000001</a></td>
                                        <td>서울 123가 1234</td>
                                        <td>회원</td>
                                        <td>FLEET선불전용</td>
                                        <td>일반</td>
                                        <td>승인완료</td>
                                        <td>porche</td>
                                        <td>010-1234-5678</td>
                                        <td><a href="javascript:void(0)" onClick="layerOpen('.layer_coupon')">33</a></td>
                                        <td>2022/04/22</td>
                                    </tr>
                                    <tr>
                                        <td>999</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_member_modify');">YGP22021600000001</a></td>
                                        <td>서울 123가 1234</td>
                                        <td>회원</td>
                                        <td>FLEET선불전용</td>
                                        <td>일반</td>
                                        <td>승인완료</td>
                                        <td>porche</td>
                                        <td>010-1234-5678</td>
                                        <td><a href="javascript:void(0)" onClick="layerOpen('.layer_coupon')">33</a></td>
                                        <td>2022/04/22</td>
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
    <!-- 쿠폰 보유 내역 -->
    <div class="layer layer_coupon is-hidden"> 
        <div class="inner">
            <div class="top">
                <p class="popup_title">쿠폰 보유 내역</p>
            </div>
            <div class="contents">
                <div class="coupon_area">
                    <ul class="coupon">
                        <li class="number">쿠폰번호 : WDC2022050401</li>
                        <li class="name">쿠폰종류 : <span>Gift_BASIC 1장</span></li>
                        <li class="date">유효기간 : 2022/06/03 24:00:00</li>
                    </ul>
                    <ul class="coupon">
                        <li class="number">쿠폰번호 : WDC2022050401</li>
                        <li class="name">쿠폰종류 : <span>Gift_BASIC 1장</span></li>
                        <li class="date">유효기간 : 2022/06/03 24:00:00</li>
                    </ul>
                    <ul class="coupon">
                        <li class="number">쿠폰번호 : WDC2022050401</li>
                        <li class="name">쿠폰종류 : <span>Gift_BASIC 1장</span></li>
                        <li class="date">유효기간 : 2022/06/03 24:00:00</li>
                    </ul>
                </div>
            </div>
            <button type="button" class="btn_close" onclick="layerClose('.layer_coupon')">닫기</button>
        </div>
    </div>
    <!-- 회원정보 수정 -->
    <div class="layer layer_member_modify is-hidden">
        <form autocomplete="off">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">회원정보 수정</p>
                </div>
                <div class="contents input MT20">
                    <div class="input_box fl_left w200 MR10">
                        <label for="number1">회원번호</label>
                        <input type="text" id="number1" placeholder="회원번호 입력" value="YGP22021600000001">
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="number2">차량번호</label>
                        <input type="text" id="number2" placeholder="차량번호 입력" value="서울 123나 1234">
                    </div>
                    <div class="select_box fl_left w200 MR10">
                        <label for="select1">회원유무</label>
                        <select name="" id="select1">
                            <option value="비회원">비회원</option>
                            <option value="회원">회원</option>
                        </select>
                    </div>
                    <div class="select_box fl_left w200 MB40">
                        <label for="select2">회원유형</label>
                        <select name="" id="select2">
                            <option value="FLEET할인전용">FLEET할인전용</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left w200 MR10">
                        <label for="select3">회원등급</label>
                        <select name="" id="select3">
                            <option value="일반">일반</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left w200 MB40">
                        <label for="select4">FLEET 승인</label>
                        <select name="" id="select4">
                            <option value="승인대기">승인대기</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="input_box fl_left w200 MR10">
                        <label for="id">FLEET ID</label>
                        <input type="text" id="id" placeholder="아이디 입력" value="베이직">
                    </div>
                    <div class="input_box fl_left w200 MB40">
                        <label for="phone">휴대폰 번호</label>
                        <input type="text" id="phone" placeholder="휴대폰 번호 입력" value="010-1234-5678">
                    </div>
                    <div class="input_box fl_left w200 MR10">
                        <label for="coupon">보유쿠폰</label>
                        <input type="text" id="coupon" value="3" class="red" disabled>
                    </div>
                    <div class="input_box fl_left w200 MB50">
                        <label for="join_date">회원가입일</label>
                        <input type="text" id="join_date" value="2022/04/22" disabled>
                    </div>
                </div>
                <div class="btn_group2" style="clear:both;">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_member_modify')">취소</button>
                    <button type="button" class="btn_blue">저장</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_member_modify')">닫기</button>
            </div>
        </form>
    </div>
    <!-- 회원 등록 -->
    <div class="layer layer_member_signup is-hidden">
        <form autocomplete="off">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">회원 등록</p>
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
</div>
</template>