<template>
  <div class="index">
    <!-- 搜索框 -->
    <div class="search">
      <search
      @on-result-click="resultClick"
      @on-change="getResult"
      :results="results"
      position="absolute"
      auto-scroll-to-top
      top="0px"
      @on-focus="onFocus"
      @on-blur="onBlur"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
      <!-- 搜索内容 -->
      <div v-if=bol style=" width:100%;position: relative;top: 38px;z-index: 999;background-color: white;display: inline-block;">
        <ul>
          <li v-for="(item,index) in searchArr" :key="index">
            <div  style="display: inline-block;" @click="resultClick(item)">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- 轮播图 -->
    <div>
      <swiper :list="listArr" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <!-- 分类 -->
    <div class="nav_list">
      <ul>
        <li v-for="(item,index) in navArr" style="display: inline-block;" :key="index" @click="navToList(item)">
          <img :src=item.imgurl :alt=item.imgname>
          <div>{{item.imgname}}</div>
        </li>
      </ul>
    </div>
    <!-- 原价购 -->
    <div style="background:white;width: 100% ;">
    <div class="original">
      <div class="ori_logo" style="margin-left: 20px;">
          <div>
            <img :src=ori alt="">
          </div>
          <div>
            <img :src=limit alt="">
          </div>
      </div>
      <div class="ori_text">
        <div>Air Jordan 1 Retro High Off-white University Blue UNC 北卡蓝</div>
        <div>
          <span style="color: black;font:bold;">￥1099</span>
          <span style="text-decoration: line-through;">￥4099</span>
        </div>
      </div>
    </div>
     </div>
    <!-- 品牌 分类 -->
    <div style="width: 100%;margin: 0 auto;background-color: white;">
      <div style="width: 80%;margin: 0 auto;">
        <div v-for="(item,index) in brandArr" :key="index" class="brand_img">
        <div>
          <img :src=item.url alt="">
          <div style="font-size: .6rem;">{{item.name}}</div>
        </div>
      </div>
      </div>
      
    </div>
    <!-- 人气单品 -->
    <div style="vertical-align: middle;text-align: center;background: white;padding-top:10px;padding-bottom:10px;margin-top: 10px;">
      <span style="vertical-align: top;font-size: 15px;"><img :src=img alt="" style="width: 20px;height: 20px; margin-right:10px;">人气单品</span>
    </div>
    <div style="width: 100%;overflow: hidden;background-color: rgb(244,245,248);margin-top: 10px;display: inline-block;padding-bottom: 70px; ">
      <div style="width: 90%;margin: 0 auto;">
        <ul>
        <li v-for="(item,index) in goodsArr" :key="index" style="display: inline-block;width: 47%;text-align: center;margin-left:2.5%;vertical-align: top;" @click="navToList(item)">  
          <img :src=item.img alt="" style="width: 100%;height: 100%;">
          <div style="width: 100%;text-align: left;">{{item.name}}</div> 
          <div style="font-size: .86rem;float: left;font-weight: bold;display: inline-block;margin: 5px 0;">￥{{item.goodsPrice}}</div>
          <div style="display: inline-block; font-size: .56rem;float: right;padding: 5px 0;">{{item.sellPoint}}人付款</div>
        </li>
      </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
import { Swiper,SwiperItem,Search } from 'vux'
import {mapState} from 'vuex'
export default {
  name: 'index',
  components:{
    Swiper,
    SwiperItem,
    Search
  },
  data () {
    return {
      brandArr:[
        {
          url:'http://localhost/duapp/images/ua.png',
          allName:'Under Armour/安德玛',
          name:'UA'
        },
        {
          url:'http://localhost/duapp/images/Jordan.png',
          allName:'"Jordan Brand/乔丹"',
          name:'Air Jordan'
        },
        {
          url:'http://localhost/duapp/images/adidas.png',
          allName:"adidas/阿迪达斯",
          name:'Adidas'
        },
        {
          url:'http://localhost/duapp/images/nike.png',
          allName:"Nike/耐克",
          name:'Nike'
        },
        {
          url:'http://localhost/duapp/images/more.png',
          name:'更多'
        }
      ],
      results:[],
      img:"http://localhost/duapp/images/oneGood.png",
      ori:'http://localhost/duapp/images/oripri.png',
      limit:'http://localhost/duapp/images/limit.png',
      nav_list:[],
      // list:[],
      // goodsArr:[],
      searchArr:[],
      bol:false
    }
  },
  methods:{
    navToList(item){
      this.$store.state.itemMsg=item;
      this.$router.push({
        name:'listDetail',
        query:item
        });
    },
    setFocus () {

    },
    onBlur(){
      // this.bol=false;
      // console.log(this.bol)
    },
    resultClick (item) {
      this.$store.state.itemMsg=item;
      console.log(item)
      // this.$router.push({path:'/listDetail'});
    },
    getResult (val) {
      if(val==""){
        this.searchArr=[];
      }else{

      }
      
    },
    onSubmit (item) {
      console.log(this);
    },
    onFocus () {
      this.bol=true;
    },
    onCancel () {
    }

  },

  computed:{
    ...mapState(['goodsArr','listArr','navArr']),
    
  },
  created () {
    this.$store.dispatch('getGoodsArr');
    this.$store.dispatch('getSwiperArr');
    this.$store.dispatch('getNavArr');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
    background-color: rgb(245,244,248);
}
.nav_list{
  text-align: center;
  margin-top: 1rem;
  background-color: white;
}
.nav_list ul{
  width: 80%;
  margin: 0 auto;
  padding: 2%;
}
.nav_list li{
  display: inline-block;
  width: 25%;
  font-size: 10px;
  text-align: center;
  vertical-align: top;
}
.nav_list img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.nav_list div{
  width: 100%;
}
.original{
  background-color: white;
  position: relative;
  width: 80%;
  margin: 10px auto;
  vertical-align: middle;
}
.ori_logo{
  display: inline-block;
  width: 20%;
  vertical-align: top;

}
.ori_logo img{
  width: 30px;
  height: 30px;
}
.ori_text{
  width: 70%;
  font-size: 10px;
  display: inline-block;
}
.brand_img{
  display: inline-block;
  width: 20%;
  text-align: center;
  padding : 20px 0;
}
.brand_img img{
  width: 100%;
  height: 42px;
}

</style>
