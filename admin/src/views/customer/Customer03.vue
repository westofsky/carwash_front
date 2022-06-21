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
                <li class="customer is-sub is-current">
                    <a>고객관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Customer01">회원조회</router-link></li>
                        <li><router-link to = "/Customer02">공지사항</router-link></li>
                        <li class="is-current"><router-link to = "/Customer03">SNS관리</router-link></li>
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
                    <p>SNS 관리</p>
                </div>
                <div class="contents">
                    <h2 class="title title_user">SNS 관리</h2>
                    <div class="contents_area">
                        <form autocomplete="off">
                            <div class="contents_area-search">
                                
                                <div class="select DispBl">
                                
                                    <!--<div class="select_box">
                                        <label for="device">템플릿 선택</label>
                                        <select name="" id="" class="WD250 MR20">
                                            <option value="전체">결제 완료</option>
                                            <option value="선택1">감사 인사</option>
                                            <option value="선택2">긴급 공지</option>
                                        </select>
                                    </div>-->
                                    
                                    <button type="button" class="btn_blue btn_search WD150 MR40">템플릿 조회</button>
                                    
                                    <button type="button" class="btn_add btn_yellow btn_excel" onclick="layerOpen('.layer_sns_register');">수정/추가 등록</button>

                                    
                                </div>
                            </div>
                        </form>
                        <div class="contents_area-box">
                            <table class="tableTypeB MB35">
                                <tr>
                                    <td class="tLeft">템플릿 선택</td>
                                    <td class="tRight">
                                        <div class="select_box">
                                        <select name="" id="" class="WD250 MR20 MT04">
                                            <option value="전체">결제 완료</option>
                                            <option value="선택1">감사 인사</option>
                                            <option value="선택2">긴급 공지</option>
                                        </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tLeft">발송 제목</td>
                                    <td class="tRight"><input type="text" id="" placeholder="제목을 입력하세요" class="WD100-20 MT04"></td>
                                </tr>
                                <tr>
                                    <td class="tLeft">수신자 선택</td>
                                    <td class="tRight">
                                        
                                        <div class="checksRadio MT08">
                                            <input type="radio" id="ex_rd1" name="radiobtn" checked>
                                            <label for="ex_rd1">회원 선택</label>
                                            <span class="Add-btn">
                                                <button type="button" class="btn_blue btn_add WD150">선택하기</button> <div class="number">(선택회원 : 00명)</div>
                                            </span>
                                        
                                            <input type="radio" id="ex_rd2" name="radiobtn">
                                            <label for="ex_rd2">회원번호 직접입력</label>
                                            <div class="MT-37 ML160"><input type="text" id="" placeholder="010-1234-5678"  class="WD150 MR20"></div>

                                        </div>

                                        
                                        
                                
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tLeft">발송 내용</td>
                                    <td class="tRight"><textarea class="TextBox"></textarea></td>
                                </tr>
                                <tr>
                                    <td class="tLeft">문자 내용</td>
                                    <td class="tRight"><textarea class="TextBox"></textarea></td>
                                </tr>
                            </table>
                            
                            <p class="MB20 fl_left">
                            <button type="button" class="btn_yellow WD150 ML20">알림톡 발송</button>
                            </p>
                            
                            <p class="MB20 ta_right">
                            <button type="button" class="btn_blue WD150">확인</button>
                            <button type="button" class="btn_blue WD150 MR20">수정/추가 등록</button>
                            </p>
                        
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
        <div class="layer layer_sns_register is-hidden">
            <form autocomplete="off">
                <div class="inner">
                    <div class="top">
                        <p class="popup_title">SNS 등록</p>
                    </div>
                    <div class="contents">
                        <div class="contents_area">
                            <div class="contents_area-box">
                                <table class="tableTypeB MB35">
                                    <tr>
                                        <td class="tLeft">템플릿 선택</td>
                                        <td class="tRight">
                                            <div class="select_box">
                                            <select name="" id="" class="WD250 MR20 MT04">
                                                <option value="전체">결제 완료</option>
                                                <option value="선택1">감사 인사</option>
                                                <option value="선택2">긴급 공지</option>
                                            </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">발송 제목</td>
                                        <td class="tRight"><input type="text" id="" placeholder="제목을 입력하세요" class="WD100-20 MT04"></td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">수신자 선택</td>
                                        <td class="tRight">
                                            
                                            <div class="checksRadio MT08">
                                                <input type="radio" id="ex_rd3" name="radiobtn" checked>
                                                <label for="ex_rd3">회원 선택</label>
                                                <span class="Add-btn">
                                                    <button type="button" class="btn_blue btn_add WD150">선택하기</button> <div class="number">(선택회원 : 00명)</div>
                                                </span>
                                                <input type="radio" id="ex_rd4" name="radiobtn">
                                                <label for="ex_rd4">회원번호 직접입력</label>
                                                <div class="MT-37 ML160"><input type="text" id="" placeholder="010-1234-5678"  class="WD150 MR20"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">발송 내용</td>
                                        <td class="tRight"><textarea class="TextBox"></textarea></td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">문자 내용</td>
                                        <td class="tRight"><textarea class="TextBox"></textarea></td>
                                    </tr>
                                </table>
                                
                                <p class="MB20 fl_left">
                                <button type="button" class="btn_yellow WD150 ML20">알림톡 발송</button>
                                </p>
                                
                                <p class="MB20 ta_right">
                                <button type="button" class="btn_white WD104 MR8">삭제</button>
                                <button type="button" class="btn_blue WD104 MR20">저장</button>
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn_close" onclick="layerClose('.layer_sns_register');">닫기</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>