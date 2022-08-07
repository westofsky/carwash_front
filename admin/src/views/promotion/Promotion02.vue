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
                    <a href="javascript:void(0);">고객관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Customer01">회원조회</router-link></li>
                        <li><router-link to = "/Customer02">멤버쉽조회</router-link></li>
                        <li><router-link to = "/Customer03">공지사항</router-link></li>
                    </ul>
                </li>
                <li class="promotion is-sub is-current">
                    <a href="javascript:void(0);">프로모션</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Promotion01">프로모션관리</router-link></li>
                        <li class="is-current"><router-link to = "/Promotion02">쿠폰관리</router-link></li>
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
                    <p>프로모션</p>
                    <p>쿠폰 관리</p>
                </div>
                <div class="contents">
                    <h2 class="title title_prom">쿠폰 관리</h2>
                    <div class="contents_area">
                        <form autocomplete="off">
                            <div class="contents_area-search" style="margin : -20px 0 30px;">
                                <div class="select MT20">
                                    <div>
                                        <div class="checksRadio MT08" style="margin-bottom : 20px; display : flex;">
                                            <input type="radio" id="ex_rd3" value = "reg" name="radiobtn" v-model="date_type">
                                            <label for="ex_rd3" style="width:100px">발행일자</label>
                                            <input type="radio" id="ex_rd4" value="use" name="radiobtn" v-model="date_type">
                                            <label for="ex_rd4" style="width:100px">사용일자</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="select MT20">
                                    <div class="input_box date">
                                        <label for="start">조회일자</label>
                                        <input type="date" id="start" v-model="sea_date_start">
                                        <div class="hyphen">-</div>
                                        <input type="date" id="end" v-model="sea_date_end">
                                        <div class="btn_group ML10 MR30">
                                            <button type="button" @click="set_yes">전일</button>
                                            <button type="button" @click="set_today">당일</button>
                                            <button type="button" @click="set_weak">일주일</button>
                                            <button type="button" @click="set_month">한달</button>
                                        </div>
                                    </div>
                                    <div class="select_box MR30">
                                        <label for="">쿠폰종류</label>
                                        <select v-model="sea_cct">
                                            <option disabled value="">쿠폰종류 선택</option>
                                            <option value="">전체</option>
                                            <option v-for="(info, index) in get_cct" :value="info.code" :selected="index == 1" :key="index">
                                                {{info.code_name}}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="select_box MR30">
                                        <label for="approve">사용가능여부</label>
                                        <select name="" id="approve" v-model="sea_use">
                                            <option disabled value="">사용가능여부 선택</option>
                                            <option value="">전체</option>
                                            <option value="Y">사용가능</option>
                                            <option value="N">사용불가</option>
                                        </select>
                                    </div>
                                    <div class="select_box MR30">
                                        <label for="approve">발행구분</label>
                                        <select name="" id="approve" v-model="sea_cpt">
                                            <option disabled value="">발행구분 선택</option>
                                            <option value="">전체</option>
                                            <option v-for="(info, index) in get_cpt" :key="`o-${index}`" :value="info.code">
                                                {{info.code_name}}
                                            </option>
                                        </select>
                                    </div>
                                </div> 
                                
                                <div class="select MT40">
                                    <div class="input_box">
                                            <label for="number">차량번호</label>
                                            <input type="text" id="" placeholder="차량번호 입력"  class="WD180 MR20" v-model="sea_carnum" v-on:keydown.enter.prevent="get_search">
                                    </div>
                                    <button type="button" class="btn_blue btn_search ML10 MR20" @click="get_search">조회</button>
                                    <button type="button" class="btn_yellow btn_excel" @click="makeExcelFile5">엑셀 다운로드</button>
                                </div>
                            </div>
                        </form>
                        <div class="contents_area-table">
                            <p class="contents_area-title">검색결과 <font class="fs14"><span>(</span> 합계 : {{return_one(get_couponsum.account_coupon)}}건)</font></p>
                            <!-- <p class="fl_right">
                                <button type="button" class="btn_add btn_red">쿠폰 등록</button>
                                <button type="button" class="btn_add btn_blue">엑셀 업로드</button>
                            </p> -->
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
                                        <th rowspan="2">쿠폰번호</th>
                                        <th rowspan="2">구매상품</th>
                                        <th rowspan="2">쿠폰종류</th>
                                        <th rowspan="2">사용가능</th>
                                        <th rowspan="2">차량번호</th>
                                        <th rowspan="2">할인율(%)</th>
                                        <th rowspan="2">할인금액</th>
                                        <th rowspan="2">발행일자</th>
                                        <th rowspan="2">사용일시</th>
                                        <th rowspan="2">발행구분</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(info, index) in get_couponresult" v-show="setPaginate(index)" :key="index">
                                        <td class="right">{{ get_couponresult.length - index }}</td>
                                        <td>{{ info.coupon_no }}</td>
                                        <td>{{ info.coupon_name }}</td>
                                        <td>{{ info.coupon_type }}</td>
                                        <td>{{ info.is_use }}</td>
                                        <td>{{ info.car_no }}</td>
                                        <td class="right">{{ info.dc_percent }}</td>
                                        <td class="right">{{ return_one(info.dc_fee)}}</td>
                                        <td>{{ return_date(info.reg_date)}}</td>
                                        <td>{{ return_date(info.use_date)}}</td>
                                        <td>{{ info.publish_type}}</td>
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
</div>
</template>
<script>
import * as Xlsx from 'xlsx'
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
                get_cct : '',
                get_cpt : '',
                sea_date_start: '',
                sea_date_end: '',
                sea_use: '',
                sea_cct: '',
                sea_cpt: '',
                sea_phonenum: '',
                sea_carnum: '',
                get_couponsum: '',
                get_couponresult: '',
                paginate : 25,
                sea_id : '',
                paginate_total: 0,
                current: 1,
                pageCount : 10, // 페이지 버튼 최대 개수
                get_memdetail : '',
                date_type : "reg",
            }
        },
        created(){
            this.get_select();
            this.set_yes();
            this.get_search();
        },
        methods : {
            get_search(){
                if(this.sea_date_start > this.sea_date_end){
                    alert("날짜 선택이 잘못되었습니다.");
                    return false;
                }
                this.current = 1
                this.get_couponresult = '';
                console.log(this.sea_date_start);
                console.log(this.sea_date_end);
                console.log(this.date_type);
                console.log(this.sea_cct);
                console.log(this.sea_use);
                console.log(this.sea_cpt);
                console.log(this.sea_carnum);
                this.$http.post(this.$server+'/admin/getCouponSum',
                {
                    start_date : this.sea_date_start,
                    end_date : this.sea_date_end,
                    date_type : this.date_type,
                    coupon_type : this.sea_cct,
                    is_use : this.sea_use,
                    publish_type : this.sea_cpt,
                    car_no : this.sea_carnum,
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    this.get_couponsum = res.data
                });
                this.$http.post(this.$server+'/admin/getCouponList',
                {
                    start_date : this.sea_date_start,
                    end_date : this.sea_date_end,
                    date_type : this.date_type,
                    coupon_type : this.sea_cct,
                    is_use : this.sea_use,
                    publish_type : this.sea_cpt,
                    car_no : this.sea_carnum,
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    console.log(res.data);
                    this.get_couponresult = res.data
                    this.paginate_total = Math.ceil(this.get_couponresult.length/this.paginate)
                })

            },
            return_one(on_num){
                if(on_num != undefined){
                    const parts = on_num.toString().split('.');
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    return parts.join('.');
                }  
            },
            get_select(){
                this.$http.post(this.$server+'/admin/getCodeList',
                {
                    code_type : 'CCT'
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    
                    this.get_cct = res.data


                })
                this.$http.post(this.$server+'/admin/getCodeList',
                {
                    code_type : 'CPT'
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    
                    this.get_cpt = res.data
                })
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
            set_yes: function(){
                const d = new Date();
                const year = d.getFullYear(); // 년
                const month = (d.getMonth()+1);   // 월
                const day = d.getDate();
                this.sea_date_start = year+'-'+month.toString().padStart(2,'0')+'-'+(day-1).toString().padStart(2,'0')
                this.sea_date_end = year+'-'+month.toString().padStart(2,'0')+'-'+(day-1).toString().padStart(2,'0')
            },
            set_today: function(){
                const d = new Date();
                const year = d.getFullYear(); // 년
                const month = (d.getMonth()+1);   // 월
                const day = d.getDate();
                this.sea_date_start = year+'-'+month.toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
                this.sea_date_end = year+'-'+month.toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
            },
            set_weak: function(){
                const d = new Date();
                const year = d.getFullYear(); // 년
                const month = (d.getMonth()+1);   // 월
                const day = d.getDate();
                this.sea_date_start = year+'-'+month.toString().padStart(2,'0')+'-'+(day-7).toString().padStart(2,'0')
                this.sea_date_end = year+'-'+month.toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
            },
            set_month: function(){
                const d = new Date();
                const year = d.getFullYear(); // 년
                const month = (d.getMonth()+1);   // 월
                const day = d.getDate();
                this.sea_date_start = year+'-'+(month-1).toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
                this.sea_date_end = year+'-'+month.toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
            },
            set_year: function(){
                const d = new Date();
                const year = d.getFullYear(); // 년
                const month = (d.getMonth()+1);   // 월
                const day = d.getDate();
                this.sea_date_start = year+'-'+month.toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
                this.sea_date_end = year+'-'+(month-1).toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
            },
            return_date(date){
                var today = new Date(date);
                today.setHours(today.getHours() + 9);
                return today.toISOString().replace('T', ' ').substring(0, 19);
            },
            makeExcelFile5 () {
                const workBook = Xlsx.utils.book_new()
                const workSheet = Xlsx.utils.json_to_sheet(this.get_couponresult)
                Xlsx.utils.book_append_sheet(workBook, workSheet, '매출')
                Xlsx.writeFile(workBook, 'output.xlsx')
            },
        }
    }

</script>