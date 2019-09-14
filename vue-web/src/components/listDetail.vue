<template>
    <div class="listDetail">
		<div class="top_bar">
			<router-link to="/index" class="goback">
				<img src="http://localhost/duapp/images/back.png" style="width: 2em;height: 2em;">
			</router-link>
		</div>
		<div class="ico_list" @click="showIt()">
			<img src="http://localhost/duapp/images/more11.png">
		</div>
		<div class="header_nav" id="header_nav" style="display: block;" v-if=bol>
			<div class="inner">
				<ul>
					<li>
						<router-link to="/index" class="icons index">首页</router-link>
					</li>
					<li>
						<router-link to="/mine" class="icons me">我的</router-link>
					</li>
				</ul>
			</div>
		</div>
		
		<router-view/>
		<div class="content">
            <!--  -->
			<div  style="background-color: rgb(244,244,248);width: 100%;padding:1px 0;">
				<div style="width:100%;background-color: white;text-align:center; margin:10px auto;padding: 10px 0;">
					<div class=logo>
						<img src="http://localhost/duapp/images/zheng.png" alt="">
						<div style="text-align: center;">正品保证</div>
					</div>
					<div class=logo>
						<img src="http://localhost/duapp/images/jian.png" alt="">
						<div style="text-align: center;">平台鉴定</div>
					</div>
					<div class=logo>
						<img src="http://localhost/duapp/images/equities.png" alt="">
						<div style="text-align: center;">售后权益</div>
					</div>
				</div>
			</div>

		</div>
		<div class="purchaseNow" v-if=!isBuy>
			<div class="tabbar">
                <div style="width: 70%;height:80%;line-height:10%;background-color: rgb(79,195,195);text-align: center;color: white;margin:5px auto;">
                    <span style="display: inline-block;width: 100%;height: 40px;line-height: 40px;" @click="showCar">立即购买</span>
                </div>
            </div>        
		</div>
        <div class="buyBox fadeInUp"  v-for="(item,index) in arr" :key="index">
                <div v-if=isBuy class="boxInner">
                    <div class="buyHeader">
                        <span style="display: inline-block;position: absolute;top: 0;right: 0;width: 40px;height: 100%;">
                            <img @click="hideCar" src="http://localhost/duapp/images/icon-close.png" alt="" style="position: absolute;top: 11px;right: 10px;width: 15px;">
                        </span>
                    </div>
                    <div class="buyContent">
                        <!-- 价格、信息、图片 -->
                        <div class="info">
                            <div style="display: table;table-layout: fixed;">
                                <div class="info_img">
                                    <img :src=item.img alt="">
                                </div>
                                <div class="info_text">
                                    <div>{{item.name}}</div>
                                    <div>
                                        <span>{{item.price}}</span>
                                        <span>{{item.officialPrice}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 尺寸选择 -->
                        <div class="size">
                            <ul style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);transition-duration: 0ms;transform: translate(0px, 0px) translateZ(0px);">
                                <li>
                                    <h2 style="margin-bottom: 10px;color: #666;font-size: 13px;">尺寸选择</h2>
                                    <span v-for="(item,index) in list" :key="index" style="display: inline-block;float: left;margin-right: 6px;margin-bottom: 6px;padding: 6px 18px;color: #767373;font-size: 12px;border: 1px solid #f0f0f0;text-align: center;border-radius: 4px;">
                                        <checker type="radio" selected-item-class="item-selected">
                                            <checker-item value="index">{{item}}</checker-item>
                                        </checker>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div style="width: 100%;margin-bottom: 10px;padding-bottom: 10px;border-bottom: 1px solid #e6e6e6;">
                            <!-- 数量 -->
                            <div>
                                <group>
                                    <cell title="数量">
                                        <x-number :min="1" :max="5" v-model="value" :value=value @on-change="change"></x-number>
                                    </cell>
                                </group>
                            </div>
                            <!-- 加入购物车 -->
                            <div style="width: 100%;text-align: right;padding-top:10px;">
                                <span style="line-height: 40px;padding: 7px 15px;margin-right:20px;color: #f12525;border: 1px solid #f55050;background-color: #fff7f5;" @click="appendCar()">加入购物车</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <!-- 遮罩层 -->
        <div v-if="isBuy" class="mask maskFadeIn" id="js-mask" style="display: block;"></div>
    </div>
</template>
<script>
    import axios from 'axios'
    import { Tab, TabItem,GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch ,InlineXNumber,Checker, CheckerItem , Alert} from 'vux'
    import {mapState} from 'vuex'
    export default {
        name: "listDetail",
        data () {
            return {
            	bol:false,
                isBuy:false,
            	id:"",
            	arr:{},
            	value:1,
            	list:[],
                num:0
            }
        },
        computed:{

        },
        mounted () {
            let data=this.$route.query;
            
            this.arr=data;
            
            this.list=["35","36","37","38","39","40","41","42","43","44","45"];
        
        },
        components:{
           	Tab,
    		TabItem,
    		Group,
		    GroupTitle,
		    Cell,
		    XInput,
		    Selector,
		    PopupPicker,
		    XAddress,
		    Datetime,
		    XNumber,
		    XTextarea,
		    XSwitch,
            InlineXNumber,
            Checker, 
            CheckerItem,
            Alert
        },
        methods: {
        	showIt(){
        		this.bol=!this.bol;
        	},
            change (val) {
              this.num=val;

            },
            showCar(){
                this.isBuy=true;
            },
            hideCar(){
                this.isBuy=false;
            },
            // 加入购物车
            appendCar(){
                console.log(this.value);
                let num=this.value;
                let type=2;
                let that=this;
                let form=new FormData();
                let gid=that.$store.state.itemMsg.id;
                let price=that.$store.state.itemMsg.price;
                let img=that.$store.state.itemMsg.img;
                let name=that.$store.state.itemMsg.name;
                let uid=that.$store.state.id;
                let username=that.$store.state.username;

                if(!username){
                    that.$vux.toast.text('请先去登录');
                    that.$router.push({path:'/login'});
                }else{
                    form.append('type',type);
                    form.append('uid',uid);
                    form.append('gid',gid);
                    form.append('price',price);
                    form.append('img',img);
                    form.append('name',name);
                    form.append('num',num);
                    axios.post('http://localhost/duapp/php/shopCar.php',form).then(function(res){
                        console.log(res.data);
                        if(res.statusText=='OK'){
                            that.$vux.toast.text('加入购物车成功');
                            that.isBuy=false;
                        }
                    })
                }
                
            }
        }
    }
</script>
<style scoped>
*{
	margin: 0;
	padding: 0;
}
ol, ul {
    list-style: none;
}
.listDetail{
    padding-bottom: 64px;
}
.top_bar .goback {
    position: absolute;
    left: 0;
    width: 4em;
    top: 0;
    height: 4em;
    align-items: center;
    justify-content: center;
    display: flex;
}
.top_bar .goback img {
    display: block;
    height: 82%;
}
img {
    border: 0;
    outline: 0;
}
.ico_list {
    position: absolute;
    right: 0;
    top: 0;
    width: 4em;
    height: 4em;
    align-items: center;
    justify-content: center;
    display: flex;
}
.ico_list img {
    height: 82%;
}
.header_nav {
    position: absolute;
    width: 36%;
    height: 90px;
    right: 10px;
    top: 3.6em;
    background: rgba(20,20,20,.7);
    border-radius: 4px;
    z-index: 99;
    display: none;
}
.header_nav:before {
    content: "";
    position: absolute;
    right: 8px;
    top: -5px;
    border-bottom: 5px solid rgba(0,0,0,.7);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
}
.header_nav li:first-child {
    border-bottom: 1px solid #5c5c5c;
}
.header_nav a {
    color: #FFF;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
    display: block;
}
a {
    color: #444;
    text-decoration: none;
}
.header_nav a.index:before {
    background-image: url(http://localhost/duapp/images/home.png);
}

.header_nav a:before {
    margin: .26667rem .13333rem 0 0;
    width: .56rem;
    height: .56rem;
}
.header_nav a.me:before {
    background-image: url(http://localhost/duapp/images/user.png);
}

.header_nav a:before {
    content: "";
    display: inline-block;
    margin: 10px 5px 0 0;
    vertical-align: top;
    -webkit-background-size: contain;
    background-size: contain;
    background-position: left center;
    background-color: transparent;
    background-repeat: no-repeat;
    width: 21px;
    height: 21px;
}
.logo{
	display: inline-block;
	width: 32%;
	text-align: center;
}
.logo img{
	width: 30%;
}
.tabbar{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0px;
    text-align: center;
    background-color: white;
    border-top: solid 1px rgb(244,244,248);
}
.fadeInUp {
    -webkit-animation: fadeInUp .4s .2s ease forwards;
    animation: fadeInUp .4s .2s ease forwards;
}
.buyBox{
    position: fixed;
    background-color: white;
    bottom: 0;
    opacity: 0;
    transform: translate3d(0, 100%, 0);
    width: 100%;
    z-index: 1001;
    transform-style: preserve-3d;
}
.buyHeader{
    position: relative;
    padding: 20px;
    color: #d33333;
    font-size: 13px;
    text-align: center;
    background-color: #ececec;
}
@keyframes fadeInUp{
    0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    }
    100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    }
}
.info {
    max-height: 114px;
    padding-bottom: 5px;
    padding-left: 10px;
    border-bottom: 1px solid #e6e6e6;
}
.info_img {
    display: table-cell;
    width: 28%;
    padding-right: 10px;
    border-radius: 3px;
    text-align: center;
    vertical-align: middle;
}
.info_img img {
    max-width: 100%;
    border: 1px solid #eee;
}
.size {
    padding-left: 10px;
    height: 100px;
    overflow: hidden;
    padding-top: 5px;
}
.maskFadeIn {
    -webkit-animation: maskFadeIn .3s ease forwards;
    animation: maskFadeIn .3s ease forwards;
}
.mask {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    z-index: 1000;
}
.item-selected {
    color: red;
}
</style>
