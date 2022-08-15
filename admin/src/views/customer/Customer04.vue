<template>
<div>
    <div id="wrapper">
    <div class="waiting" v-if="waiting">
        <img src="../../assets/images/ZombieingDoodle.png" class="bored-image"/>
        <div class="waiting-notice">
            <img src="../../assets/images/sync.svg" class="sync-image"/>
            처리중입니다.. 잠시만 기다려주세요.
        </div>
    </div>
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
                        <li><router-link to = "/Customer01">회원조회</router-link></li>
                        <li><router-link to = "/Customer02">Fleet차량관리</router-link></li>
                        <li><router-link to = "/Customer03">멤버쉽조회</router-link></li>
                        <li class="is-current"><router-link to = "/Customer04">멤버쉽구독결제</router-link></li>
                        <li><router-link to = "/Customer05">멤버쉽알림톡발송</router-link></li>
                        <li><router-link to = "/Customer06">공지사항</router-link></li>
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
                    <p>멤버쉽구독결제</p>
                </div>
                <div class="contents">
                    <h2 class="title title_user">멤버쉽구독결제</h2>
                    <div class="contents_area">
                        <form autocomplete="off">
                            <div class="contents_area-search">
                                <div class="select MT20">
                                    <div class="input_box date">
                                        <label for="start">조회일자</label>
                                        <input type="date" id="start" v-model="sea_date_start">
                                    </div>
                                <button type="button" class="btn_blue btn_search ML10 MR20" @click="get_search">조회</button>
                            </div>
                            </div>
                        </form>
                        <div class="contents_area-table">
                            <p class="contents_area-title">검색결과 <font class="fs14"></font></p>
                            <!-- <p class="fl_right"><button type="button" class="btn_add btn_red" onclick="layerOpen('.layer_member_signup')">회원등록</button></p> -->
                            <p class="btnRight">
                            <button type="button" class="btn_red" @click="Membership_pay" style="padding : 0px;">멤버쉽결제하기</button>
                            </p>
                            
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
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="thht">NO</th>
                                        <th>차량번호</th>
                                        <th>회원번호</th>
                                        <th>세차메뉴</th>
                                        <th>건조브러쉬</th>
                                        <th>결제금액</th>
                                        <th>결제일</th>
                                        <th>휴대폰</th>
                                        <th>결제단말기</th>
                                        <th>최종결제일자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(info, index) in get_payresult" v-show="setPaginate(index)" :key="index">
                                        <td class="right">{{ get_payresult.length - index }}</td>
                                        <td class="left"><a href="javascript:void(0);">{{ info.car_no }}</a></td>
                                        <td class="left">{{ info.mem_no }}</td>
                                        <td class="left">{{ info.prod_name }}</td>
                                        <td v-if="info.is_brush=='Y'">사용</td>
                                        <td v-if="info.is_brush=='N'">미사용</td>
                                        <td class="right">{{ return_one(info.pay_fee) }}</td>
                                        <td class="right">{{ info.pay_day }}일</td>
                                        <td>{{ info.phone_no }}</td>
                                        <td class="right">{{ info.terminal_name }}</td>
                                        <td>{{ info.pay_date}}</td>
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
            },
        },
        data(){
            return{
                sea_date_start: '',
                get_payresult: '',
                paginate : 25,
                paginate_total: 0,
                current: 1,
                pageCount : 10, // 페이지 버튼 최대 개수
                waiting : false,
                pay_success_count : 0,
                pay_success_sum : 0,
                pay_fail_count : 0,
            }
        },
        created(){
            this.set_today();
            this.get_search();
        },
        methods : {
            get_search(){
                if(this.sea_date_start.length == 0){
                    alert("날짜를 선택해주세요.");
                    return false;
                }
                this.current = 1
                this.get_payresult = '';
                this.$http.post(this.$server+'/admin/getMembershipPayList',
                {
                    search_date : this.sea_date_start,
                }
                ,{headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                    }
                }).then((res) => {
                    this.get_payresult = res.data
                    console.log(res.data)
                    this.paginate_total = Math.ceil(this.get_payresult.length/this.paginate)
                })

            },
            return_one(on_num){
                if(on_num != undefined){
                    const parts = on_num.toString().split('.');
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    return parts.join('.');
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
            set_yes: function(){
                const d = new Date();
                const b = new Date();
                const year = d.getFullYear(); // 년
                const month = (d.getMonth()+1);   // 월
                const day = d.getDate();
                var pastDate = b.getDate() - 1;
                b.setDate(pastDate);
                const b_year = b.getFullYear(); // 년
                const b_month = (b.getMonth()+1);   // 월
                const b_day = b.getDate();
                this.sea_date_start = b_year+'-'+b_month.toString().padStart(2,'0')+'-'+b_day.toString().padStart(2,'0')
                this.sea_date_end = year+'-'+month.toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
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
                const b = new Date();
                const year = d.getFullYear(); // 년
                const month = (d.getMonth()+1);   // 월
                const day = d.getDate();
                var pastDate = b.getDate() - 7;
                b.setDate(pastDate);
                const b_year = b.getFullYear(); // 년
                const b_month = (b.getMonth()+1);   // 월
                const b_day = b.getDate();
                this.sea_date_start = b_year+'-'+b_month.toString().padStart(2,'0')+'-'+b_day.toString().padStart(2,'0')
                this.sea_date_end = year+'-'+month.toString().padStart(2,'0')+'-'+day.toString().padStart(2,'0')
            },
            set_month: function(){
                const d = new Date();
                const b = new Date();
                const year = d.getFullYear(); // 년
                const month = (d.getMonth()+1);   // 월
                const day = d.getDate();
                var pastDate = b.getMonth() - 1;
                b.setDate(pastDate);
                const b_year = b.getFullYear(); // 년
                const b_month = (b.getMonth());   // 월
                const b_day = b.getDate();
                this.sea_date_start = b_year+'-'+b_month.toString().padStart(2,'0')+'-'+b_day.toString().padStart(2,'0')
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
            Membership_pay(){
                var result = confirm(this.get_payresult.length + '건을 결제처리 하시겠습니까?');
                if(result){
                    this.waiting = true;
                    for(var i=0;i<this.get_payresult.length;i++){
                        var token = this.get_payresult[i].token;
                        var today = new Date();
                        var year = today.getFullYear();
                        var month = ('0' + (today.getMonth() + 1)).slice(-2);
                        var day = ('0' + today.getDate()).slice(-2);
                        var id = new Uint32Array(1);
                        var trans_id = (window.crypto.getRandomValues(id)[0]%1000000).toString();
                        do{
                            trans_id = (window.crypto.getRandomValues(id)[0]%1000000).toString()
                        }while(trans_id.length!=6);
                        trans_id = year+month+day+trans_id;
                        var req_data = {
                            "mallId":"05562973", //KICC에서 발급한 상점ID
                            "shopTransactionId":trans_id, // 상점거래고유번호
                            "amount":this.get_payresult[i].pay_fee, // 가격
                            "shopOrderNo" : trans_id, //상점 주문번호
                            "approvalReqDate": year+month+day, //승인요청일자 YYYYMMDD
                            "payMethodInfo":{ //결제수단관리정보
                            "billKeyMethodInfo":{
                                "batchKey" : token,
                            }
                            },
                            "orderInfo":{
                            "goodsName" : this.get_payresult[i].prod_name, // 상품명
                            "customerName" : this.get_payresult[i].mem_no,
                            }
                        };
                        this.$http.post('https://pgapi.easypay.co.kr/api/trades/approval/batch', req_data,
                            {headers : {"Content-type" : "application/json", "Charset" : "utf-8"}}
                        ).then(
                        (res) => {
                            if(res.data.resCd == "0000"){
                                this.pay_success_count++;
                                this.pay_success_sum += this.get_payresult[i].pay_fee;
                                this.set_washPay(this.get_payresult[i].car_no,this.get_payresult[i].mem_no,this.get_payresult[i].prod_name,
                                this.get_payresult[i].is_brush,this.get_payresult[i].pay_fee,this.get_payresult[i].token,this.get_payresult[i].prod_code,this.get_payresult[i].plc_code,res.data.transactionDate,res.datapgCno,res.data.shopTransactionId,res.data.paymentInfo.cardInfo.cardNo,res.data.paymentInfo.cardInfo.issuerName,this.get_payresult[i].phone_no);
                            }
                            else{
                                this.pay_fail_count++;
                            }
                        })
                    }
                    this.waiting = false;
                    alert(this.pay_success_count+"건 "+this.pay_success_sum+"원을 결제 승인 되었습니다. \n 결제처리 실패 "+this.pay_fail_count+"건이 발생했습니다.");
                    location.reload();

                    //모든 결제 끝
                }
                
            },
            set_washPay(car_no,mem_no,prod_name,is_brush,pay_fee,token,prod_code,plc_code,tr_date,auth_no,tr_no,card_no,card_name,phone_no){
                this.$http.post(this.$server+'/admin/setWashpay', {
                    car_no : car_no,
                    is_member : (mem_no!="N") ? "Y" : "N",
                    use_type : "WUT002",
                    prod_name : prod_name,
                    prod_code : prod_code,
                    option_code : '',
                    option_name : '',
                    is_brush : is_brush,
                    wash_fee : pay_fee,
                    dc_fee : 0,
                    option_fee : 0,
                    pay_fee : pay_fee,
                    plc_code : plc_code,
                    pay_type : 'WPT001',
                    terminal_type : 'WTT001',
                },{
                headers : {
                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
                }).then(
                (res) => {  // 
                    if(res.data.result_code=="Y"){
                        var pay_seq_no = res.data.pay_seq_no;
                        //승인 후 사용 결제 승인 저장 처리
                        this.$http.post(this.$server+'/admin/setApprovalPay', {
                            car_no : car_no,
                            pay_fee : pay_fee,
                            trd_date : tr_date.substring(0,8),
                            trd_time : tr_date.substring(8,tr_date.length),
                            auth_no : auth_no,
                            tr_no : tr_no,
                            token : token,
                        },{
                        headers : {
                            auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                        }
                        }).then(
                        (res) => {  
                            if(res.data.result_code=="Y"){
                                var today = new Date();
                                var year = today.getFullYear();
                                var month = ('0' + (today.getMonth() + 1)).slice(-2);
                                var day = ('0' + today.getDate()).slice(-2);
                                this.$http.post(this.$server+'/admin/setMembershipPay', {
                                    car_no : car_no,
                                    is_member : (mem_no!="N") ? "Y" : "N",
                                    prod_code : prod_code,
                                    is_brush : is_brush,
                                    pay_day : day,
                                    reg_type : "MRT001",
                                    pay_fee : pay_fee,
                                    start_date : year+'-'+month+'-'+day,
                                    end_date : year+'-'+('0' + (today.getMonth() + 2)).slice(-2)+'-'+day,
                                    token : token,
                                    phone_no : phone_no,
                                },{
                                headers : {
                                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                                }
                                }).then(
                                (res) => {  // 
                                    if(res.data.result_code=="Y"){

                                        // this.confirm();
                                    }
                                    else{
                                    }
                                });
                                
                                this.$http.post('https://app.sparkpluswash.com:9000/biztalk/getMembershipWash', {
                                    car_no : car_no,
                                    get_date : year+'-'+month+'-'+day,
                                    pay_product : prod_name,
                                    option_product : '',
                                    start_date : year+'-'+month+'-'+day,
                                    end_date : year+'-'+('0' + (today.getMonth() + 2)).slice(-2)+'-'+day,
                                    total_pay : pay_fee,
                                    approval_no : auth_no,
                                    phone_no : phone_no,
                                },{headers : {
                                    auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                                    }
                                }).then((res) => {
                                })
                            }
                        });
                    }
                });
            },
        }
    }

</script>
<style>
.waiting {
	position: fixed;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 100;
	margin : 0 auto;
	background: rgba(0, 0, 0, .8);
    text-align: center;
}
.bored-image {
		margin-top: 15vh;
		width: 30rem;
		animation: rotateFlip 0.5s infinite steps(2);
}
.sync-image {
		width: 1rem;
		animation: rotation 2s infinite linear;
		margin-right: .5rem;
}
.waiting-notice {
  	position: absolute;
		bottom: 10rem;
		left: 50%;
		transform: translate(-50%, 0px);
		color: white;
		background: #5f5fff;
		padding: 1rem 2.5rem 1rem 2rem;
		border-radius: .5rem;
}
@keyframes rotation {
	from {
		transform: rotate(359deg);
	}
	to {
		transform: rotate(0deg);
	}
}
@keyframes rotateFlip {
	from {
		transform: rotate(10deg);
	}
	to {
		transform: rotate(-10deg);
	}
}
</style>