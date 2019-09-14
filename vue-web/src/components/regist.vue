<template>
	<div class="regist">
		<div class="top_bar">
			<router-link to="/index" class="goback">
				<img src="http://localhost/duapp/images/back.png" style="width: 2em;height: 2em;">
			</router-link>
		</div>
		<group style="position: relative;top: 50px;">
			<x-input title="" name="mobile" placeholder="请输入手机号" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
			<x-input title="" name="text" placeholder="用户名" v-model="username" required></x-input>
			<x-input title="" type="password" placeholder="请设置登录密码" v-model="password" :min="6" :max="16" required></x-input>
			<x-input title="" type="password" placeholder="确认密码" v-model="passwordC" :min="6" :max="16" required></x-input>
		</group>
		<box gap="10px 25px" style="position: relative;top: 50px;">
			<x-button type="primary" @click.native="handleRegist" style="background-color: skyblue;">注册</x-button>
		</box>
		<div class="log">
			<router-link to="/Login">已有账号？去登录</router-link>
		</div>
	</div>
</template>

<script>
	import { XInput, Box, Group, XButton } from 'vux'
	import axios from 'axios'
	export default {
		name: 'regist',
		data() {
			return {
				mobile: '', //手机号
				username:'',//用户名
				password: '', //密码
				passwordC: '', //确认密码
			}
		},
		methods: {
			handleRegist() {
				if(!this.mobile  || !this.password || !this.passwordC||!this.username) {
					this.$vux.toast.text('您有未填项，不能注册')
				} else if(this.password != this.passwordC) {
					this.$vux.toast.text('两次输入的密码不一致')
				} else {
					let that=this;
					let type=2,username=that.username,password=that.password,mobile=that.mobile;
					let form = new FormData();
					form.append('type',type);
					form.append('mobile',mobile);
					form.append('username',username);
					form.append('password',password);
					axios.post('http://localhost/duapp/php/user.php',form).then(function(res){
						if(res.data=='success'){
							that.$vux.toast.text('注册成功');
							that.$store.state.username=username;
							that.$router.push({path:'/login'});
						}
					});
				}
			}
		},
		created() {
			window.document.title = '注册';
		},
		components: {
			XInput,
			XButton,
			Group,
			Box
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
.regist>.log:first-of-type {
	padding: 10px;
	float: right;
	font-size: 14px;
	margin-bottom: 40px;
} 
.regist>.log:last-of-type {
	width: 100%;
	text-align: center;
	color: #393a31;
	font-size: 14px;
	position: absolute;
	bottom: 25px;
}
</style>
