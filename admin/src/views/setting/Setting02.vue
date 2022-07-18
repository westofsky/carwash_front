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
                <li class="equipment is-sub">
                    <a href="#">장비제어</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Equ01">장비제어</router-link></li> -->
                        <li><router-link to = "/Equ02">세차순서</router-link></li>
                        <!-- <li><router-link to = "/Equ03">이용현황</router-link></li> -->
                    </ul>
                </li>
                <li class="basics is-sub is-current">
                    <a href="#">기초관리</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Setting01">계정생성</router-link></li> -->
                        <li class="is-current"><router-link to = "/Setting02">근무자관리</router-link></li>
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
                    <p>기초관리</p>
                    <p>근무자관리</p>
                </div>
                <div class="contents">
                    <h2 class="title title_setting">근무자관리</h2>
                    <div class="contents_area">
                        <form autocomplete="off">
                            <div class="contents_area-search">
                            
                                <div class="search MT20">
                                    <div class="input_box">
                                        <label for="number">근무자명</label>
                                        <input type="text" id="number" placeholder="근무자명 입력">
                                    </div>
                                    <button type="button" class="btn_blue btn_search ML10 MR20">조회</button>
                                </div>
                            </div>
                        </form>
                        <div class="contents_area-table product_inquire">
                            <p class="contents_area-title">근무자 목록 <font class="fs14"><span>(</span>99,999<span>명의 근무자가 등록되어 있습니다.)</span></font></p>
                            <p class="fl_right"><button type="button" class="btn_add btn_red"  onclick="layerOpen('.layer_worker');">근무자 등록</button></p>
                            <table>
                                <colgroup>
                                    <col width="4%"/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width="20%"/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="thht">No</th>
                                        <th>분류</th>
                                        <th>이름</th>
                                        <th>전화번호</th>
                                        <th>수정/비활성화</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>999</td>
                                        <td>슈퍼바이저</td>
                                        <td>홍길동</td>
                                        <td>010-1234-5678</td>
                                        <td>
                                            <button class="btn-small btn_blue" href="javascript:void(0)" onclick="layerOpen('.layer_worker');">수정</button>
                                            &nbsp;
                                            <button class="btn-small btn_white" href="javascript:void(0)" onclick="layerOpen('.layer_retire');">퇴직</button>
                                        </td>
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
    <!-- 근무자 수정 또는 등록 -->
    <div class="layer layer_worker is-hidden" id="layer">
        <form autocomplete="off">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">근무자 수정 ( or 등록)</p>
                </div>
                <div class="contents input">
                    <div class="select_box MT20">
                        <label for="worker">근무자분류</label>
                        <select name="worker" id="worker">
                            <option value="관리자">관리자</option>
                            <option value="관리자2">관리자2</option>
                            <option value="관리자3">관리자3</option>
                        </select>
                        <span class="MT40">*에러메시지</span>
                    </div>
                    <div class="input_box MT40">
                        <label for="name">이름</label>
                        <input type="text" id="name" placeholder="이름 입력">
                        <span class="MT40">*에러메시지</span>
                    </div>
                    <div class="input_box MT40">
                        <label for="phone">연락처</label>
                        <input type="text" id="phone" placeholder="010-0000-0000">
                        <span class="MT40">*에러메시지</span>
                    </div>
                    <div class="input_box MT40">
                        <label for="pin">핀번호</label>
                        <input type="text" id="pin" placeholder="핀번호 4자리입력">
                        <span class="MT40">*에러메시지</span>
                    </div>
                    <div class="input_box MT40">
                        <label for="pin_confirm">핀번호 확인</label>
                        <input type="text" id="pin_confirm" placeholder="핀번호 4자리 확인 입력">
                        <span class="MT40">*에러메시지</span>
                    </div>
                </div>
                <div class="btn_group2">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_worker')">취소</button>
                    <button type="button" class="btn_blue" onclick="layerClose('.layer_worker')">확인</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_worker')">닫기</button>
            </div>
        </form>
    </div>
    <!-- 퇴직 -->
    <div class="layer layer_retire is-hidden" id="layer"> 
        <div class="inner">
            <div class="top">
                <p class="popup_title">퇴직 설정</p>
            </div>
            <div class="contents">
                <div class="text_area">
                    <p>퇴직자로 설정하시겠습니까?</p>
                    <p>해당 근무자를 퇴직처리 합니다.</p>
                </div>
            </div>
            <div class="btn_group2">
                <button type="button" class="btn_white" onclick="layerClose('.layer_retire')">취소</button>
                <button type="button" class="btn_blue" onclick="layerClose('.layer_retire')">확인</button>
            </div>
            <button type="button" class="btn_close" onclick="layerClose('.layer_retire')">닫기</button>
        </div>
    </div>
</div>
</template>