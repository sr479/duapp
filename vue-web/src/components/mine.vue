<template>
    <div class="mine">
        <div style="background-color: white">
            <div class="banner_block" v-if=bol>
                <div class="userface">
                    <img src="http://localhost/duapp/images/noLogin.png" alt="">
                </div>
                <div class="login">
                    <a @click="login()">登录</a>
                    <router-link to="/regist">注册</router-link>
                </div>
            </div>
            <div class="banner_block" v-else>
                <div class="userface">
                    <img src="http://localhost/duapp/images/mine.png" alt="">
                </div>
                <div class="login">{{username}}您好！</div>
                <!-- <div style="float: right;margin-right: 10px;margin-top: 50px;" @click="quitLogin()">注销</div> -->
            </div>
            <div class="shopCar" >
                <group label-width="4.5em" label-margin-right="2em" label-align="center">
                    <cell title="购物车" v-model="goodsNum" is-link v-if="username" link="/shopCar"></cell>
                    <cell title="收藏"  is-link>
                        <img src="http://localhost/duapp/images/shoes.png" alt="" style="width: 40px;height: 40px;">
                        <img src="http://localhost/duapp/images/shoes.png" alt="" style="width: 40px;height: 40px;">
                        <img src="http://localhost/duapp/images/shoes.png" alt="" style="width: 40px;height: 40px;">
                    </cell>
                    <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
                    <cell title="地址管理" is-link link="/addressManage"></cell>
                </group>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
    import axios from 'axios'
    import {Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch } from 'vux'
    export default {
        name: "mine",
        data () {
            return {
                bol:true,
                goodsNum:0,
                addressValue: ['陕西省', '延安市', '宝塔区'],
                addressData: ChinaAddressData,
                username:'',
                uid:''
            }
        },
        mounted () {
            this.username=this.$store.state.username;
            this.uid=this.$store.state.id;
            if(this.username){
                this.bol=false;
            }
        },
        components:{
            Group,
            Cell,
            XInput,
            Selector,
            PopupPicker,
            XAddress,
            Datetime,
            XNumber,
            XTextarea,
            XSwitch
        },
        methods: {
            login(){
                this.$router.push({name:'login'})
            },
            quitLogin(){
                this.bol=true;
            }
        }
    }
</script>
<style scoped>
.banner_block {
    width: 100%;
    height: 13rem;
    background:rgb(245,245,248);
    font-family: Helvetica,sans-serif;
}
.banner_block .userface {
    width: 4rem;
    height: 4rem;
    margin-top: 4.6rem;
    border-radius: 50%;
    margin-left: 4.66667rem;
    box-shadow: 0 0 30px rgba(255,255,255,.5);
    float: left;
}
.banner_block .login{
    margin-left: 1.66667rem;
    width: 60%;
    float: left;
    margin-top: 6rem;
    color: #000;
}
.banner_block .userface img {
    width: 100%;
    height: 100%;
}
.banner_block .login a {
    color: #000;
    font-size: 15px;
    margin-right: .26667rem;
}
.shopCar{
    width: 100%;
    height: 10rem;
    margin: 4rem 0;
}

</style>
