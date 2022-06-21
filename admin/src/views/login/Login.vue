<template>
<div>
    <div id = "layer-opens">
        <div id="wrapper">
            <div style="width:100%;" class="login"></div>
        </div>
        <div class="layer layer_login is-open" id="layer">
            <form autocomplete="off">
                <div class="inner">
                    <div class="top">
                        <h1 class="login_logo">spark plus</h1>
                        <p class="title">스파크 플러스 관리자 로그인</p>
                    </div>
                    <div class="contents">
                        <div class="input_box id MB35">
                            <label for="id">아이디</label>
                            <input type="text" id="id" placeholder="아이디">
                            <span class="MT-25">*잘못된 아이디입니다.</span>
                        </div>
                        <div class="input_box password">
                            <label for="password">비밀번호</label>
                            <input type="password" id="password" placeholder="비밀번호">
                            <span class="MT-25">*잘못된 비밀번호입니다.</span>
                        </div>
                        <router-link to = "/Home" class = "btns PDT20"><a class="Btn-blue-Large">로그인</a></router-link>
                        <div class="btns PDT20"></div>
                        <div class="contents_bottom">
                            <div class="check_box" style="">
                                <input type="checkbox" id="auto_login" checked>
                                <label for="auto_login">자동로그인</label>
                            </div>
                            <a href="javascript:void(0)" class="search_id">아이디/비밀번호 찾기</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>    
    </div>
</div>
</template>