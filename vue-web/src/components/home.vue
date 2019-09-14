<template>
    <div class="home">
        <router-view/>
        <div class="tabbar">
            <router-link to="/find" class="tabarList">
                <img :src=find alt="" style="width: 30px;height:30px">
                <div>发现</div>
            </router-link>
            <router-link to="/index" class="tabarList">
                <img :src=index alt="" style="width: 30px;height:30px">
                <div>首页</div>
            </router-link>
            <router-link to="/mine" class="tabarList">
                <img :src=mine alt="" style="width: 30px;height:30px">
                <div>我的</div>
            </router-link>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "home",
        data () {
            return {
                find:'http://localhost/duapp/images/find.png',
                index:'http://localhost/duapp/images/index.png',
                mine:'http://localhost/duapp/images/mine.png'
            }
        },
        mounted () {

        },
        methods: {

        },
        props:{

        }
    }
</script>
<style scoped>
*{
      background-color: rgb(245,244,248);
}
.home{
    background-color: rgb(245,244,248);
}
    .tabbar{
        width: 100%;
        position: fixed;
        bottom: 0px;
        border-top: solid 1px rgba();
        text-align: center;
    }
    .tabbar a{
        width: 30%;
        color: #2c3e50;
        vertical-align: middle;
        font-size: .6666rem;
    }
    .tabarList{
        display: inline-block;
        text-decoration: none;
    }
</style>
