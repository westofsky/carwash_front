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
                                    <div class="select MT30">
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
                                            <div class="select_box MR30">
                                                <label for="purchase">구매 구분</label>
                                                <select name="" id="purchase" v-model="sea_wut">
                                                    <option disabled value="">구매구분 선택</option>
                                                    <option v-for="(info, index) in get_wut" :key="`o-${index}`" :value="info.code">
                                                        {{info.code_name}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search MT30">
                                    <div class="input_box">
                                        <label for="number" >차량번호</label>
                                        <input type="text" id="number" placeholder="차량번호 입력" v-model="sea_carnum">
                                    </div>
                                    <button type="button" class="btn_blue btn_search ML10 MR20" @click="get_search">조회</button>
                                    <button type="button" class="btn_yellow btn_excel" @click="makeExcelFile5">엑셀 다운로드</button>
                                </div>
                                </div>
                            </form>
                            <div class="contents_area-table">
                                <p class="contents_area-title">검색결과 <font class="fs14"><span>(</span> 합계 : {{return_one(get_paysum.amount_fee)}} 원 / {{get_paysum.account_fee}} 건)</font></p>
                                <table>
                                    <!-- <colgroup>
                                        <col width=""/>
                                        <col width="5%"/>
                                        <col width="5%"/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                    </colgroup> -->
                                    <thead>
                                        <tr>
                                            <th rowspan="2">NO</th>
                                            <th rowspan="2">차량번호</th>
                                            <th rowspan="2">이용구분</th>
                                            <th rowspan="2">이용일시</th>
                                            <th rowspan="2">QR사용</th>
                                            <th rowspan="2">세차메뉴</th>
                                            <th rowspan="2">옵션명</th>
                                            <th rowspan="2">건조브러쉬</th>
                                            <th rowspan="2">결제금액</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(info, index) in get_payresult" v-show="setPaginate(index)">
                                            <td class="right">{{ info.seq_no }}</td>
                                            <td>{{ info.car_no }}</td>
                                            <td>{{ info.use_name }}</td>
                                            <td>{{ return_date(info.use_date) }}</td>
                                            <td>{{ info.qr_is }}</td>
                                            <td>{{ info.prod_name }}</td>
                                            <td>{{ info.option_name }}</td>
                                            <td>{{ info.brush_is }}</td>
                                            <td class="right">{{ return_one(info.pay_fee)}}</td>
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
                                <li class="num" v-for="page_index in paginate_total" @click.prevent="updateCurrent(page_index)" :class="{'num is-current': page_index == current}"> <a href="">{{ page_index }}</a> </li>
                                <li class="page next"><a href="javascript:void(0)">next page</a></li>
                                <li class="page last"><a href="javascript:void(0)">last page</a></li>
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
        data(){
            return{
                get_wtt : '',
                get_pat : '',
                get_wut : '',
                sea_date_start: '',
                sea_date_end: '',
                sea_wtt: '',
                sea_pat: '',
                sea_wut: '',
                sea_carnum: '',
                get_paysum: '',
                get_payresult: '',
                paginate : 50,
                paginate_total: 0,
                current: 1
            }
        },
        created(){
            this.get_select();
        },
        methods : {
            
            async get_search(){
                console.log(this.sea_date_start);
                console.log(this.sea_date_end);
                console.log(this.sea_wtt)
                console.log(this.sea_pat)
                console.log(this.sea_wut)
                console.log(this.sea_carnum)
                this.$http.post(this.$server+'/admin/getUseSum',
                {
                    start_date : this.sea_date_start,
                    end_date : this.sea_date_end,
                    use_type : this.sea_wut,
                    car_no : this.sea_carnum
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    console.log(res.data)
                    this.get_paysum = res.data
                })
                this.$http.post(this.$server+'/admin/getUseList',
                {
                    start_date : this.sea_date_start,
                    end_date : this.sea_date_end,
                    use_type : this.sea_wut,
                    car_no : this.sea_carnum
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    this.get_payresult = res.data
                    console.log(this.get_payresult)
                    console.log(this.get_payresult.length)
                    this.paginate_total = Math.floor(this.get_payresult.length/this.paginate)+1
                    console.log(this.paginate_total)
                })

            },
            return_one(on_num){
                if(on_num != undefined){
                    let cn1 = on_num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                    return cn1
                }  
            },
            get_select(){
                this.$http.post(this.$server+'/admin/getCodeList',
                {
                    code_type : 'WUT'
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    
                    this.get_wut = res.data
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
                this.sea_date_end = year+'-'+month.toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
                console.log(this.sea_date_start);
                console.log(this.sea_date_end);
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
                const workSheet = Xlsx.utils.json_to_sheet(this.get_payresult)
                Xlsx.utils.book_append_sheet(workBook, workSheet, '매출')
                Xlsx.writeFile(workBook, 'output.xlsx')
            }
        }
    }

</script>