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
                        <li><router-link to = "/Customer02">Fleet차량관리</router-link></li>
                        <li><router-link to = "/Customer03">멤버쉽조회</router-link></li>
                        <li><router-link to = "/Customer04">멤버쉽구독결제</router-link></li>
                        <li><router-link to = "/Customer05">멤버쉽알림톡발송</router-link></li>
                        <li class="is_current"><router-link to = "/Customer06">공지사항</router-link></li>
                    </ul>
                </li>
                <li class="promotion is-sub">
                    <a href="javascript:void(0);">프로모션</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Promotion01">프로모션관리</router-link></li>
                        <li><router-link to = "/Promotion02">쿠폰관리</router-link></li>
                        <li><router-link to = "/Promotion03">쿠폰발행</router-link></li>
                        <li><router-link to = "/Promotion04">Gift Card 교환</router-link></li>
                    </ul>
                </li>
                <li class="product is-sub">
                    <a href="javascript:void(0);">상품관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Product01">상품조회</router-link></li>
                        <!-- <li><router-link to = "/Product02">진열관리(상품)</router-link></li>
                        <li><router-link to = "/Product03">진열관리(옵션)</router-link></li> -->
                    </ul>
                </li>
                <li class="equipment is-sub">
                    <a href="javascript:void(0);">장비제어</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Equ01">장비제어</router-link></li> -->
                        <li><router-link to = "/Equ02">세차순서</router-link></li>
                        <!-- <li><router-link to = "/Equ03">이용현황</router-link></li> -->
                    </ul>
                </li>
                <li class="basics is-sub">
                    <a href="javascript:void(0);">기초관리</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Setting01">계정생성</router-link></li> -->
                        <li><router-link to = "/Setting02">근무자관리</router-link></li>
                        <!-- <li><router-link to = "/Setting03">장비/단말기 관리</router-link></li>
                        <li><router-link to = "/Setting04">기초코드관리</router-link></li> -->
                    </ul>
                </li>
            </ul>
            <div class="info">
                <p>(주)엔티아이</p>
                사업자등록번호 : 504-81-15358 ㅣ 대표이사 : 김도연<br>대구광역시 서구 와룡로 335 1층 스파크플러스
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
                        <form autocomplete="off" v-on:keydown.enter.prevent="search_notice" >
                            <div class="contents_area-search">
                                    
                                <select name="" id="" v-model="search_for">
                                    <option value="1">제목</option>
                                    <option value="2">내용</option>
                                </select>
                                <input type="text" id="" v-model="search_info" placeholder="검색어 입력" class="WD250 MR10">
                                
                                <button type="button" @click="search_notice" class="btn_blue btn_search">조회</button>
                                
                            </div>
                        </form>
                        <div class="contents_area-table">
                            <p class="contents_area-title">전체공지 <font class="fs14"><span>(</span>{{return_sum.account_seq}}<span>건)</span></font></p>
                            
                            <p class="btnRight">
                            <button type="button" class="btn_add btn_red" onclick="layerOpen('.layer_notice_register')">공지등록</button>
                            </p>
                            <table>
                                <colgroup>
                                    <col width="4%"/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="thht">NO</th>
                                        <th>제목</th>
                                        <th>등록자</th>
                                        <th>등록일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(info,index) in return_result" v-show="setPaginate(index)" :key="index">
                                        <td>{{return_result.length - index}}</td>
                                        <td><a href="javascript:void(0)" style="color:inherit;" onclick="layerOpen('.layer_notice_modify')" @click="set_noticeDetail(info.seq_no)">{{info.notice_title}}</a></td>
                                        <td>{{info.write_admin}}</td>
                                        <td>{{info.write_date}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="pagination">
                        <!-- seleted : li.is-current -->
                        <!-- disable : li.disable -->
                        <ul>
                            <li class="page first" :class="{'disable' : current == 1}">
                                <a v-if="!(current==1)" href="javascript:void(0)" @click="updateCurrent(1)">first page</a>
                                <a v-else>first page</a>
                            </li>
                            <li class="page prev" :class="{'disable' : current == 1}">
                                <a v-if="!(current==1)" href="javascript:void(0)" @click="updateCurrent(current-1)">prev page</a>
                                <a v-else>prev page</a>
                            </li>


                            <div v-for="page_index in paginate_total_unit" :key="page_index">
                                <li class="num" @click.prevent="updateCurrent(page_index)" 
                                :class="{'num is-current': page_index == current}" :key="page_index"> 
                                    <a href="">{{ page_index }}</a> 
                                </li>
                            </div>
                            



                            <li class="page next" :class="{'disable' : current == paginate_total}">
                                <a v-if="!(current==paginate_total)" href="javascript:void(0)" @click="updateCurrent(current+1)">next page</a>
                                <a v-else>next page</a>
                            </li>
                            <li class="page last" :class="{'disable' : current == paginate_total}">
                                <a v-if="!(current==paginate_total)" href="javascript:void(0)" @click="updateCurrent(paginate_total)">last page</a>
                                <a v-else>last page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <!-- 공지사항 수정-->
    <div class="layer layer_notice_modify is-hidden">
        <form autocomplete="off" onSubmit="return false;">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">공지사항</p>
                </div>
                <div class="contents input MT20">
                    <div class="input_box MB40">
                        <label for="title">제목</label>
                        <input type="text" id="title" placeholder="제목 입력" v-model = "mod_title">
                    </div>
                    <div class="input_box w200 MR10 fl_left">
                        <label for="name">등록자</label>
                        <input type="text" id="name" v-model = "mod_admin_id" disabled>
                    </div>
                    <div class="input_box w200 fl_left MB40">
                        <label for="date">작성일</label>
                        <input type="text" id="date" v-model = "mod_write_date" disabled>
                    </div>
                    <div class="textarea clear MB40">
                        <label for="content">내용</label>
                        <textarea name="" id="content" v-model = "mod_contents"  placeholder="내용 입력"></textarea>
                    </div>
                </div>
                <div class="btn_group2" style="justify-content : space-around">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_notice_modify')">취소</button>
                    <button type="button" class="btn_blue" @click="mod_notice">수정</button>
                    <button type="button" class="btn_blue" style="background-color:red " @click="delete_notice">삭제</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_notice_modify')">닫기</button>
            </div>
        </form>
    </div>
    <!-- 공지사항 등록-->
    <div class="layer layer_notice_register is-hidden">
        <form autocomplete="off" onSubmit="return false;">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">공지사항</p>
                </div>
                <div class="contents input MT20">
                    <div class="input_box MB40">
                        <label for="title">제목</label>
                        <input type="text" id="title" v-model ="title" placeholder="제목 입력">
                    </div>
                    <div class="input_box w200 MB40 fl_left">
                        <label for="name">등록자</label>
                        <input type="text" id="name" v-model="writter" disabled>
                    </div>
                    <div class="textarea clear MB40">
                        <label for="content">내용</label>
                        <textarea name="" id="content" v-model="contents" placeholder="내용 입력"></textarea>
                    </div>
                </div>
                <div class="btn_group2">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_notice_register')" @click="reset_content">취소</button>
                    <button type="button" class="btn_blue" @click="register_notice">등록</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_notice_register')" @click="reset_content">닫기</button>
            </div>
        </form>
    </div>
</div>
</template>
<script>
export default{
    computed:{
        maxPage() {  // 총 페이지 수(and 최대 페이지 번호)
            return this.paginate_total
        },
        startPage() { // 페이지 시작 번호
            return (Math.trunc((this.current - 1) / this.pageCount) * this.pageCount) + 1
        },
        endPage() { // 페이지 끝 번호
            let end = this.startPage + this.pageCount - 1
            return end < this.maxPage ? end : this.maxPage
        },
        paginate_total_unit(){
            let units = [];
            for(let num = this.startPage;num <=this.endPage;num++){
                units.push(num);
            }
            return units;
        }
    },
    data(){
        return{
            search_for: 1,
            search_info: '',
            return_sum : '',
            return_result: '',
            paginate_total: 0,
            current: 1,
            pageCount : 10,
            paginate : 25,
            title : '',
            writter : sessionStorage.getItem("admin_no") ||'',
            contents : '',
            mod_seq_no : '',
            mod_title : '',
            mod_admin_id : '',
            mod_contents : '',
            mod_write_date : '',
        }
    },
    mounted(){
        this.search_notice();
    },
    methods: {
        search_notice : function(){
            if(this.search_for == 2){
                this.$http.post(this.$server+'/admin/getNoticeSum',
                {
                    contents : this.search_info
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    this.return_sum = res.data
                    console.log(this.return_sum)
                })

                this.$http.post(this.$server+'/admin/getNoticeList',
                {
                    title : '',
                    contents : this.search_info
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    this.return_result = res.data
                    console.log(this.return_result)
                    this.paginate_total = Math.ceil(this.return_result.length/this.paginate)
                    console.log(this.paginate_total)
                })
            }else if(this.search_for == 1){
                this.$http.post(this.$server+'/admin/getNoticeSum',
                {
                    title : this.search_info,
                    contents : '',
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    this.return_sum = res.data
                    console.log(this.return_sum)
                })
                this.$http.post(this.$server+'/admin/getNoticeList',
                {
                    title : this.search_info,
                    contents : '',
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    this.return_result = res.data
                    console.log(this.return_result);
                    console.log(this.return_result.length);
                    this.paginate_total = Math.ceil(this.return_result.length/this.paginate)
                })
            }

        },
        setPaginate: function (i) {
            if (this.current == 1) {
                return i < this.paginate;
            }
            else {
                return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
            }
        },
        updateCurrent: function (i) {
            this.current = i;

        },
        return_one: function(on_num){
            if(on_num != undefined){
                const parts = on_num.toString().split('.');
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                return parts.join('.');
            }  
        },
        reset_content(){
            this.title = '';
            this.contents = '';
        },
        set_noticeDetail(seq_no){
            this.mod_seq_no = seq_no;
            this.$http.post(this.$server+'/admin/getNoticeDetail',
            {
                seq_no : seq_no,
            }
            ,{headers : {
                auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
            }
            }).then((res) => {
                console.log(res.data);
                this.mod_admin_id = res.data.admin_id;
                this.mod_title = res.data.title;
                this.mod_contents = String(res.data.contents).replace(/,+/g,'\n');
                this.mod_write_date = res.data.write_date;
            });
        },
        register_notice(){
            if(!this.title){
                alert("제목을 입력하세요.");
                return false;
            }
            if(!this.contents){
                alert("내용을 입력하세요.");
                return false;
            }
            var result = confirm("공지를 등록하시겠습니까?");
            if(result){
                this.$http.post(this.$server+'/admin/setNoticeInsert',
                {
                    admin_id : this.writter,
                    title : this.title,
                    contents : this.contents,

                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    console.log(res.data);
                    if(res.data.result_code == "Y"){
                        alert("공지가 등록되었습니다.");
                        location.reload();
                        $('.layer_member_modify').removeClass('is-open').addClass('is-hidden');
                        $('body').removeClass('layer-opens');
                        return false;
                    }
                });
            }
        },
        mod_notice(){
            if(!this.mod_title){
                alert("제목을 입력하세요.");
                return false;
            }
            if(!this.mod_contents){
                alert("내용을 입력하세요.");
                return false;
            }
            var result = confirm("공지를 수정하시겠습니까?");
            if(result){
                this.$http.post(this.$server+'/admin/setNoticeUpdate',
                {
                    admin_id : this.mod_admin_id,
                    title : this.mod_title,
                    contents : this.mod_contents,
                    seq_no : this.mod_seq_no,

                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    console.log(res.data);
                    if(res.data.result_code == "Y"){
                        alert("수정되었습니다.");
                        location.reload();
                        $('.layer_notice_modify').removeClass('is-open').addClass('is-hidden');
                        $('body').removeClass('layer-opens');
                        return false;
                    }
                });
            }
        },
        delete_notice(){
            var result = confirm("공지를 삭제하시겠습니까?");
            if(result){
                this.$http.post(this.$server+'/admin/setNoticeDelete',
                {
                    seq_no : this.mod_seq_no,
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    if(res.data.result_code =="Y"){
                        alert("삭제되었습니다.");
                        location.reload();
                        $('.layer_notice_modify').removeClass('is-open').addClass('is-hidden');
                        $('body').removeClass('layer-opens');
                        return false;
                    }
                });
            }
        }

    }
}
</script>