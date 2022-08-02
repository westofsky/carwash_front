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
                    <p>쿠폰 관리</p>
                </div>
                <div class="contents">
                    <h2 class="title title_prom">쿠폰 관리</h2>
                    <div class="contents_area">
                        <form autocomplete="off">
                            <div class="contents_area-search">
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
                                        <label for="">회원구분</label>
                                        <select v-model="sea_wtt">
                                            <option disabled value="">회원구분 선택</option>
                                            <option value="">전체</option>
                                            <option v-for="(info, index) in get_wtt" :value="info.code" :selected="index == 1" :key="index">
                                                {{info.code_name}}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="select_box MR30">
                                        <label for="approve">회원상태</label>
                                        <select name="" id="approve" v-model="sea_pat">
                                            <option disabled value="">회원상태 선택</option>
                                            <option value="">전체</option>
                                            <option v-for="(info, index) in get_pat" :key="`o-${index}`" :value="info.code">
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
                            <p class="contents_area-title">검색결과 <font class="fs14"><span>(</span> 합계 : {{return_one(get_paysum.account_fee)}} 건)</font></p>
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
                                        <th rowspan="2">단말기 번호</th>
                                        <th rowspan="2">영수번호</th>
                                        <th rowspan="2">결제번호</th>
                                        <th rowspan="2">결제일자</th>
                                        <th rowspan="2">결제시간</th>
                                        <th rowspan="2">매출구분</th>
                                        <th rowspan="2">총매출</th>
                                        <th rowspan="2">순매출</th>
                                        <th rowspan="2">NET매출</th>
                                        <th rowspan="2">부가세</th>
                                        <th colspan="5">결제수단</th>
                                    </tr>
                                    <tr>
                                        <th>현금매출</th>
                                        <th>카드매출</th>
                                        <th>간편결제</th>
                                        <th>Gift쿠폰</th>
                                        <th>선불권</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="grey">999</td>
                                        <td class="grey">99</td>
                                        <td class="grey"><a href="javascript:void(0)">123456</a></td>
                                        <td class="grey">12345678</td>
                                        <td class="grey">2022/04/28</td>
                                        <td class="grey">09:40</td>
                                        <td class="grey">정상</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
                                        <td class="right">99,999,999</td>
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
                get_wtt : '',
                get_pat : '',
                get_wut : '',
                sea_date_start: '',
                sea_date_end: '',
                sea_wtt: '',
                sea_pat: '',
                sea_phonenum: '',
                sea_carnum: '',
                get_paysum: '',
                get_payresult: '',
                paginate : 25,
                sea_id : '',
                paginate_total: 0,
                current: 1,
                pageCount : 10, // 페이지 버튼 최대 개수
                get_memdetail : '',
                revise : {
                    mem_no : '',
                    mem_id : '',
                    mem_type : '',
                    mem_status : '',
                    mem_name : '',
                    mem_tel : '',
                    mem_email : '',
                    com_no : '',
                    fleet_dc : '',
                    fleet_prepay : '',
                    fleet_prepay_use : '',
                    reg_date : '',
                    seq_no : '',
                    index : '',
                    t_name : '',
                    s_name : '',
                }
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
                this.get_payresult = '';
                this.$http.post(this.$server+'/admin/getMemSum',
                {
                    start_date : this.sea_date_start,
                    end_date : this.sea_date_end,
                    mem_type : this.sea_wtt,
                    mem_status : this.sea_pat,
                    mem_id : this.sea_id,
                    car_no : this.sea_carnum,
                    mem_tel : this.sea_phonenum
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    console.log(res.data)
                    this.get_paysum = res.data
                });
                this.$http.post(this.$server+'/admin/getMemList',
                {
                    start_date : this.sea_date_start,
                    end_date : this.sea_date_end,
                    mem_type : this.sea_wtt,
                    mem_status : this.sea_pat,
                    mem_id : this.sea_id,
                    car_no : this.sea_carnum,
                    mem_tel : this.sea_phonenum
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    this.get_payresult = res.data
                    console.log(this.get_payresult)
                    console.log(this.get_payresult.length)
                    this.paginate_total = Math.ceil(this.get_payresult.length/this.paginate)
                    console.log(this.paginate_total)
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
                this.$http.post(this.$server+'/admin/getCodeSubList',
                {
                    code_type : 'MMT'
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    
                    this.get_wtt = res.data
                    console.log(typeof this.get_wtt)


                })
                this.$http.post(this.$server+'/admin/getCodeSubList',
                {
                    code_type : 'MMS'
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    
                    this.get_pat = res.data
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
            },
            setReviseInfo(seq_no,index){
                this.revise.index = index;
                this.$http.post(this.$server+'/admin/getMemDetail',
                {
                    seq_no : seq_no,
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then((res) => {
                    console.log(res.data)
                    this.get_memdetail = res.data;
                    this.revise.mem_no = this.get_memdetail.mem_no;
                    this.revise.mem_id = this.get_memdetail.mem_id;
                    this.revise.mem_type = this.get_memdetail.mem_type;
                    this.revise.mem_status = this.get_memdetail.mem_status;
                    this.revise.mem_name = this.get_memdetail.mem_name;
                    this.revise.mem_tel = this.get_memdetail.mem_tel;
                    this.revise.mem_email = this.get_memdetail.mem_email;
                    this.revise.com_no = this.get_memdetail.com_no;
                    this.revise.fleet_dc = this.get_memdetail.fleet_dc;
                    this.revise.fleet_prepay = this.get_memdetail.fleet_prepay;
                    this.revise.fleet_prepay_use = this.get_memdetail.fleet_prepay_use;
                    this.revise.reg_date = this.get_memdetail.reg_date;
                    this.revise.seq_no = seq_no;
                });
                
            },
            mem_Update(){
                console.log(this.revise.mem_type);
                console.log(this.revise.mem_status);
                if(this.revise.mem_type == "MMT"){
                    alert("회원구분을 선택해주세요.");
                    return false;
                }
                if(this.revise.mem_status == "MMS"){
                    alert("회원상태를 선택해주세요.");
                    return false;
                }
                if(!this.revise.mem_name){
                    alert("회원명을 입력해주세요.");
                    return false;
                }
                if(!this.revise.mem_tel){
                    alert("연락처를 입력해주세요.");
                    return false;
                }
                if(this.revise.mem_type != "MMT001"){
                    if(!this.revise.mem_email){
                        alert("이메일을 입력해주세요.");
                        return false;
                    }
                    if(!this.revise.com_no){
                        alert("사업자번호를 입력해주세요.");
                        return false;
                    }
                    if(!this.revise.fleet_dc){
                        alert("Fleet 할인율을 입력해주세요.");
                        return false;
                    }
                    if(!this.revise.fleet_prepay){
                        alert("Fleet 선불 세차 잔여수를 입력해주세요.");
                        return false;
                    }
                    if(!this.revise.fleet_prepay_use){
                        alert("Fleet선불 이용건수를 입력해주세요.");
                        return false;
                    }
                }
                var result = confirm("수정하시겠습니까?");
                if(result){
    
                    this.$http.post(this.$server+'/admin/setUpdateMem',
                    {
                        mem_type : this.revise.mem_type,
                        mem_status : this.revise.mem_status,
                        mem_name : this.revise.mem_name,
                        mem_tel : this.revise.mem_tel,
                        mem_email : this.revise.mem_email,
                        com_no : this.revise.com_no,
                        fleet_dc : this.revise.fleet_dc,
                        fleet_prepay : this.revise.fleet_prepay,
                        fleet_prepay_use : this.revise.fleet_prepay_use,
                        seq_no : this.revise.seq_no,

                    }
                    ,{headers : {
                        auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                    }).then((res) => {
                        console.log(res.data);
                        if(res.data.result_code == "Y"){
                            alert("회원정보 수정이 완료되었습니다.");
                            for(var i =0;i<this.get_wtt.length;i++){
                                if(this.get_wtt[i].code == this.revise.mem_type)
                                    this.revise.t_name = this.get_wtt[i].code_name;
                            }
                            for(var i =0;i<this.get_pat.length;i++){
                                if(this.get_pat[i].code == this.revise.mem_status)
                                    this.revise.s_name = this.get_pat[i].code_name;
                            }
                            this.get_payresult[this.revise.index].mem_name = this.revise.mem_name;
                            this.get_payresult[this.revise.index].mem_status = this.revise.s_name;
                            this.get_payresult[this.revise.index].mem_type = this.revise.t_name;
                            this.get_payresult[this.revise.index].mem_tel = this.revise.mem_tel;
                            this.get_payresult[this.revise.index].fleet_dc = this.revise.fleet_dc;
                            this.get_payresult[this.revise.index].fleet_prepay = this.revise.fleet_prepay;
                            $('.layer_member_modify').removeClass('is-open').addClass('is-hidden');
                            $('body').removeClass('layer-opens');
                            return false;
                        }
                    });
                }
            }
        }
    }

</script>