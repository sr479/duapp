<template>
	<div class="login">
		<div class="top_bar">
			<router-link to="/mine" class="goback">
				<img src="http://localhost/duapp/images/back.png" style="width: 2em;height: 2em;">
			</router-link>
		</div>
		<div style="position: relative;top:50px;">
			<group>
			<!-- <p v-show="showTishi">{{tishi}}</p> -->
	      <!-- <x-input title="" name="mobile" placeholder="请输入手机号码" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input> -->
	      <x-input title="" type="text" placeholder="请输入用户名" v-model="username" :min="3" :max="11" @on-change="change" required></x-input>
	      <x-input title="" type="password" placeholder="请输入密码" v-model="password" :min="6" :max="16" @on-change="change" required></x-input>
	    </group>
		</div>
	    <box gap="10px 25px" style="position: relative;top:50px;">
	    	<x-button type="primary" @click.native="handleLogin" style="background-color: skyblue;">登录</x-button>
	    </box>
	    <div class="reg"><span class="to-regist">还没有账号？快去<router-link to="/regist">注册</router-link></span></div>
		
		
	    <router-view/>
	</div>
</template>

<script>
	import { XInput,Box, Group, XButton } from 'vux'
	import {setCookie,getCookie} from '../assets/js/cookie.js'
	import axios from 'axios'
	export default {
		name: 'login',
		data() {
			return {
				mobile:'',//用户手机号
				username:'',//用户名
				password:'',//用户密码
				id:''//用户ID
			}
		},
		components: {
		    XInput,
		    XButton,
		    Group,
		    Box
		},
		mounted(){

  		},
		methods:{
			change (val) {
		      // console.log('on change', val)
			},
			handleLogin(){
				if(this.username == "" || this.password == ""){
            		alert("请输入用户名或密码");
        		}else{
        			let form = new FormData();
        			let username=this.username,password=this.password,type=1;
        			let that=this;
        			// 接口请求
        			form.append('username',username);
        			form.append('password',password);
        			form.append('type',type);
        			axios.post('http://localhost/duapp/php/user.php',form).then(function (res) {
        				if(res.data==-1){
        					alert("密码错误，请重新输入");
        				}else if(res.data==0){
        					alert("用户名不存在,请先注册！");
        					that.$router.push({path:'/regist'});
        				}else{
        					that.$store.state.username=username;
        					that.$store.state.id=res.data.id;
        					that.$router.push({path:'/mine'});
        				}
					})
        		}
			}
		}
	}
</script>

<style scoped>
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
.input-box{
	background-color: #FFFFFF;
}
.login>.reg:first-of-type{
		padding: 20px 15px 40px;
		float: right;
		color: #666666;
		font-size:14px;
}
.login>.reg:last-of-type{
	width: 100%;
	text-align: center;
	color: #393a31;
	font-size:14px;
	position: absolute;
	bottom: 25px;
}

.icon-wx{
	width: 18px;
	height: 14px;
	margin-right: 6px;
}

</style>
