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
                <li class="customer is-sub is-current">
                    <a>고객관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Customer01">회원조회</router-link></li>
                        <li class="is-current"><router-link to = "/Customer02">공지사항</router-link></li>
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
                    <p>공지사항</p>
                </div>
                <div class="contents">
                    <h2 class="title title_user">공지사항</h2>
                    <div class="contents_area">
                        <form autocomplete="off">
                            <div class="contents_area-search">
                                    
                                        <select name="" id="">
                                            <option value="전체">전체</option>
                                            <option value="선택1">제목</option>
                                            <option value="선택1">내용</option>
                                            <option value="선택2">기간별</option>
                                        </select>
                                        <input type="text" id="" placeholder="검색어 입력" class="WD250 MR10">
                                        
                                        <button type="button" class="btn_blue btn_search">조회</button>
                                
                            </div>
                        </form>
                        <div class="contents_area-table">
                            <p class="contents_area-title">전체공지 <font class="fs14"><span>(</span>99,999<span>건)</span></font></p>
                            
                            <p class="btnRight">
                            <button type="button" class="btn_blue">삭제</button>
                            <button type="button" class="btn_add btn_red" onclick="layerOpen('.layer_notice_register')">공지등록</button>
                            </p>
                            <table>
                                <colgroup>
                                    <col width="40"/>
                                    <col width="4%"/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="thht">선택</th>
                                        <th>NO</th>
                                        <th>제목</th>
                                        <th>등록자</th>
                                        <th>등록일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" id="check1"><label for="check1"></label></td>
                                        <td>1</td>
                                        <td class="subject"><a href="javascript:void(0)" onclick="layerOpen('.layer_notice_modify')">글제목 글제목 공지글제목 입니다.</a></td>
                                        <td>관리자</td>
                                        <td>2022/04/22</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" id="check2" checked><label for="check2"></label></td>
                                        <td>999</td>
                                        <td class="subject"><a href="javascript:void(0)" onclick="layerOpen('.layer_notice_modify')">글제목 글제목 공지글제목 입니다.</a></td>
                                        <td>관리자</td>
                                        <td>2022/04/22</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" id="check3"><label for="check3"></label></td>
                                        <td>999</td>
                                        <td class="subject"><a href="javascript:void(0)" onclick="layerOpen('.layer_notice_modify')">글제목 글제목 공지글제목 입니다.</a></td>
                                        <td>관리자</td>
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
    <!-- 공지사항 수정-->
    <div class="layer layer_notice_modify is-hidden">
        <form autocomplete="off">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">공지사항</p>
                </div>
                <div class="contents input MT20">
                    <div class="input_box MB40">
                        <label for="title">제목</label>
                        <input type="text" id="title" placeholder="제목 입력" value="위시데이에서 알려드립니다.">
                    </div>
                    <div class="input_box w200 MR10 fl_left">
                        <label for="name">등록자</label>
                        <input type="text" id="name" value="관리자명" disabled>
                    </div>
                    <div class="input_box w200 fl_left MB40">
                        <label for="date">작성일</label>
                        <input type="text" id="date" value="2022/04/22" disabled>
                    </div>
                    <div class="textarea clear MB40">
                        <label for="content">내용</label>
                        <textarea name="" id="content" placeholder="내용 입력">위시데이에서 알려드립니다.</textarea>
                    </div>
                </div>
                <div class="btn_group2">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_notice_modify')">취소</button>
                    <button type="button" class="btn_blue">수정</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_notice_modify')">닫기</button>
            </div>
        </form>
    </div>
    <!-- 공지사항 등록-->
    <div class="layer layer_notice_register is-hidden">
        <form autocomplete="off">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">공지사항</p>
                </div>
                <div class="contents input MT20">
                    <div class="input_box MB40">
                        <label for="title">제목</label>
                        <input type="text" id="title" placeholder="제목 입력">
                    </div>
                    <div class="input_box w200 MR10 fl_left">
                        <label for="name">등록자</label>
                        <input type="text" id="name" value="로그인한등록자" disabled>
                    </div>
                    <div class="input_box w200 fl_left MB40">
                        <label for="date">작성일</label>
                        <input type="text" id="date" value="2022/04/22" disabled>
                    </div>
                    <div class="textarea clear MB40">
                        <label for="content">내용</label>
                        <textarea name="" id="content" placeholder="내용 입력"></textarea>
                    </div>
                </div>
                <div class="btn_group2">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_notice_register')">취소</button>
                    <button type="button" class="btn_blue">등록</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_notice_register')">닫기</button>
            </div>
        </form>
    </div>
</div>
</template>