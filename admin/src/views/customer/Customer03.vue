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
                        <li><router-link to = "/Customer02">멤버쉽조회</router-link></li>
                        <li class="is-current"><router-link to = "/Customer03">공지사항</router-link></li>
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
                    <p>고객관리</p>
                    <p>공지사항</p>
                </div>
                <div class="contents">
                    <h2 class="title title_user">공지사항</h2>
                    <div class="contents_area">
                        <form autocomplete="off">
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
                            <p class="contents_area-title">전체공지 <font class="fs14"><span>(</span>{{return_sum.account_fee}}<span>건)</span></font></p>
                            
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
                                        <th class="thht">선택</th>
                                        <th>제목</th>
                                        <th>등록자</th>
                                        <th>등록일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(info,index) in result_for" v-show="setPaginate(index)" :key="index">
                                        <td>{{result_for.length - index}}</td>
                                        <td>{{info.notice_title}}</td>
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
            paginate : 25
        }
    },
    mounted(){
        search_notice();
    },
    methods: {
        search_notice : function(){
            if(search_for == 2){
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
            }else if(search_for == 1){
                this.$http.post(this.$server+'/admin/getNoticeSum',
                {
                    title : this.search_info
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
                    title : this.search_info
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
    }
}
</script>