<template>
    <div class="addressManage">
        <div class="top_bar">
            <router-link to="/mine" class="goback">
                <img src="http://localhost/duapp/images/back.png" style="width: 2em;height: 2em;">
            </router-link>
        </div>
        <div style="margin-top: 60px;"></div>
        <div v-if=bol>
                <a class="btn-add-address">
                    <img src="http://localhost/duapp/images/icon-add.png">
                    <span @click="add()">添加收货地址</span>
                </a>
        </div>
        <div v-else>
            <group>
                <x-input title="收货人" placeholder="填写姓名" v-model="name"></x-input>
                <x-input title="联系电话" placeholder="填写手机号" v-model="mobile" is-type="china-mobile"></x-input>
                <x-address v-model="addressArr" title="所在区域" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
            </group>
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
                addressValue: ['陕西省', '延安市', '宝塔区'],
                addressData: ChinaAddressData,
                showAddress: false,
                addressArr:[],
                name:"",
                mobile:""
            }
        },
        mounted () {
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
            add(){
                this.bol=false;

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
.btn-add-address {
    display: block;
    position: relative;
    left: 50%;
    margin-top: 15px;
    margin-bottom: 15px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 52.777778%;
    padding: 10px 0;
    color: white;
    font-size: 15px;
    background-color: skyblue;
    border-radius: 4px;
    text-align: center;
}

a {
    color: white;
    text-decoration: none;
}
.btn-add-address img {
    width: 11px;
    height: 11px;
    margin-right: 5px;
    vertical-align: 0;
}

img {
    vertical-align: middle;
    border: none;
    outline: 0;
}
</style>
