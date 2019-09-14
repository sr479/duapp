<template>
	<div class="car">
		<x-header style="background-color:rgb(245,245,248);" :left-options="{backText: ''}">购物车</x-header>
		<div class="noGoods" v-if=!isEmpty>
			<div style="text-align: center;">
				<img src="http://localhost/duapp/images/nothing.png" alt="">
				<p><router-link to="/index">购物车是空的！！去逛逛</router-link></p>
			</div>
		</div>
		<div v-else>
			<div style="padding-bottom: 50px;">
				<ul>
					<li>
						<div style="margin: 20px 0;display: table;width: 100%;">
							<!-- 全选 -->
							<div style="display: table-cell;width: 11%;min-height: 100%;text-align: center;vertical-align: middle;" >
								<input type="checkbox" @click="checkedAll()" v-model="bol"></input>
							</div>
							<span v-if=isDel style="float: right;margin-right: 10px;" @click="changeIt()">编辑</span>
							<span v-else style="float: right;margin-right: 10px;" @click="changeIt()">完成</span>	
						</div>
						<ul>
							<li v-for="(item,index) in goodList" style="margin-top: 20px;">
								<div style="display: table;width: 100%;">
									<!-- checkbox单选 -->
									<div   style="display: table-cell;width: 11%;min-height: 100%;text-align: center;vertical-align: middle;">
										<input type="checkbox" @click="checkedIt(index)" v-model="checkedModel" :value="item.id">	
										</input>
									</div>
									<!-- 商品图片 -->
									<div style="display: table-cell;width: 16%;vertical-align: middle;">
										<div style="width: 80px;height: 80px;border: 1px solid #eee;border-radius: 4px;text-align: center;">
											<img style="max-width: 100%;max-height: 100%;line-height: 70px;" :src=item.goodspic alt="">
										</div>
									</div>
									<!-- 名称价格 -->
									<div style="display: table-cell;width: 73%;">
										<div style="display: table;width: 100%;padding-left: 10px;">
											<div style="display: table-cell;width: 70%;padding-right: 15px;">
												<span style="width:100%;margin-bottom: 10px;color: #444;font-size: 12px;font-weight: normal;overflow: hidden;text-overflow: ellipsis;word-break: break-all;">{{item.goodsname}}</span>
												<p style="line-height: 1.4;margin: 0;color: #999;font-size: 11px;">
													Size:41
												</p>
												<p v-if=!isDel>
													<group>
                                    					<x-number :min="1" v-model="item.goodsNum" :value=value @on-change="change"></x-number>
													</group>
												</p>
											</div>
											<div style="display: table-cell;width: 20%;text-align: center;margin-right: 10px;">
												<span style="margin-bottom: 5px;color: #d33333;display: block;font-size: 13px;">
													{{item.goodsprice}}
												</span>
												<span style="display: block;font-size: 13px;color: #999;">
													x{{item.goodsNum}}
												</span>
												<p v-if=!isDel @click="delGoods(index)"><img src="http://localhost/duapp/images/del.png" alt="" style="width: 20px;height: 20px;"></p>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="cart-bar">
	            <div class="cart-bar-inner">
	            	<div></div>
	                <div>
	                    合计:
	                    <span class="total">
	                        <span class="symbol">￥</span>
	                        <span class="int" v-if="bol">{{totalPrice}}</span>
	                        <span class="int">0</span>
	                    </span>
	                    <span class="express-tip">不含运费</span>
	                    <a class="btn-bill" href="#">结算</a>
	                </div>
	            </div>
    		</div>
		</div>
		<router-view/>	
	</div>
</template>
<script>
import {XHeader, Group,  Cell,CheckIcon, InlineXNumber,XNumber } from 'vux'
import axios from 'axios'
export default {
	components: {
		XHeader,
		Group, 
		Cell,
		CheckIcon,
		InlineXNumber,
		XNumber
	},
	data () {
		return {
			isEmpty:true,
			bol:false,
			isDel:true,
			username:'',
			id:"",
			goodList:[],
			checkedModel:[],
			value:0
		}
	},
	
	mounted(){
		this.username=this.$store.state.username;
		let data=new FormData();
		let type=1;
		let uid=this.$store.state.id;
		data.append('type',type);
		data.append('uid',uid);
		let that=this;
		axios.post('http://localhost/duapp/php/shopCar.php',data).then(function(res){
			that.goodList=res.data;
			if(that.goodList.length==0){
				that.isEmpty=false;
			}else{
				that.isEmpty=true;
				for(let i=0;i<that.goodList.length;i++){
					that.goodList.bol=false;
					that.value=that.goodList.goodsNum;
				}
			}
			
		})
		
	},
	computed: {
        totalPrice: function(){
            let total = 0;
            for(let i=0;i<this.goodList.length;i++){
                let item = this.goodList[i];
                total += item.goodsprice * item.goodsNum;
            }
            // 每隔三位加,
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
	methods:{
		selectEach(e){
			this.bol=!this.bol;
		},
		change(val){
			// console.log(val)
		},
		changeIt(){
			this.isDel=!this.isDel;
		},
		checkedAll(){
			let that=this;
			if(this.bol){
				this.checkedModel=[];
			}else{
				this.checkedModel=[];
				for(let item of this.goodList){
					that.checkedModel.push(item.id);
				}
				
			}
			if(this.checkedModel.length==this.goodList.length){
				that.bol=true;
			}
		},
		checkedIt(index){
			console.log(index)
		},
		delGoods(index){
			
			// 数据库中删除
			let type=3;
			let gid=this.goodList[index].gid;
			let uid=this.$store.state.id;
			let data=new FormData();
			data.append('type',type);
			data.append('gid',gid);
			data.append('uid',uid);
			let that=this;
			axios.post('http://localhost/duapp/php/shopCar.php',data).then(function(res){
				if(res.statusText=="OK"){
					that.$vux.toast.text('成功从购物车删除');
					if(that.goodList.length==0){
						that.isEmpty=false;
					}
				}
			})
			// 从数组中删除此商品
			this.goodList.splice(index,1);
		}
	}
}
</script>
<style>
.car{
	display: table;
	overflow: hidden;
	width: 100%;
}
a{
	color: gray;
	text-decoration: none;
}
input{
	display: inline-block;
	width: 15px;
	height: 15px;

}
.cart-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 42px;
    padding: 0 10px;
    background-color: #fafafa;
}
.cart-bar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #666;
    font-size: 13px;
}
.total {
    margin-right: 10px;
    color: #d33333;
    font-size: 0;
}
.express-tip {
    margin-right: 10px;
    color: #999;
    font-size: 11px;
}
.btn-bill {
	margin-right: 20px; 
    width: 45px;
    line-height: 34px;
    padding: 8px 16px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    background-color: #e43232;
}
.symbol {
    font-size: 13px;
}
.int {
    font-size: 12px;
}
.express-tip {
    margin-right: 10px;
    color: #999;
    font-size: 11px;
}
</style>
