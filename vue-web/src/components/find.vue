<template>
    <div class="find">
        <div class="swiper">
            <swiper :list="list" loop auto :aspect-ratio="268/750" style="width:100%;margin:0 auto;"></swiper>
        </div>
        <div>
            <div class="section-title">
                <a><img src="http://www.dunkhome.com/images/h5/icon_home_news.svg" alt=""></a>
            </div>
            <div class="news_list">
                <ul>
                    <li>
                        <router-link to="">
                            <div class="find-main">
                                <div class="find-text">
                                    <h6>Virgil Abloh 透露新联名的对象是香槟？</h6>
                                    <p>Virgil Abloh 近日在&nbsp;Instagram&nbsp;上透露 OFF-W...</p>
                                </div>
                                <div class="find-img">
                                    <img src="http://localhost/duapp/images/find_img/f1.jpg">
                                </div>
                            </div>
                            <div class="find-tips">
                                <div class="tip-date">
                                    <span>20:00:00</span>
                                </div>
                                <div class="tip-count">
                                    <span><img src="http://localhost/duapp/images/find_img/preview.png"><span>1265</span></span>
                                    <span><img src="http://localhost/duapp/images/find_img/repeat.png"><span>0</span></span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="find-main">
                                <div class="find-text">
                                    <h6>Virgil Abloh 透露新联名的对象是香槟？</h6>
                                    <p>Virgil Abloh 近日在&nbsp;Instagram&nbsp;上透露 OFF-W...</p>
                                </div>
                                <div class="find-img">
                                    <img src="http://localhost/duapp/images/find_img/f1.jpg">
                                </div>
                            </div>
                            <div class="find-tips">
                                <div class="tip-date">
                                    <span>20:00:00</span>
                                </div>
                                <div class="tip-count">
                                    <span><img src="http://localhost/duapp/images/find_img/preview.png"><span>1265</span></span>
                                    <span><img src="http://localhost/duapp/images/find_img/repeat.png"><span>0</span></span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="find-main">
                                <div class="find-text">
                                    <h6>Virgil Abloh 透露新联名的对象是香槟？</h6>
                                    <p>Virgil Abloh 近日在&nbsp;Instagram&nbsp;上透露 OFF-W...</p>
                                </div>
                                <div class="find-img">
                                    <img src="http://localhost/duapp/images/find_img/f1.jpg">
                                </div>
                            </div>
                            <div class="find-tips">
                                <div class="tip-date">
                                    <span>20:00:00</span>
                                </div>
                                <div class="tip-count">
                                    <span><img src="http://localhost/duapp/images/find_img/preview.png"><span>1265</span></span>
                                    <span><img src="http://localhost/duapp/images/find_img/repeat.png"><span>0</span></span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="find-main">
                                <div class="find-text">
                                    <h6>Virgil Abloh 透露新联名的对象是香槟？</h6>
                                    <p>Virgil Abloh 近日在&nbsp;Instagram&nbsp;上透露 OFF-W...</p>
                                </div>
                                <div class="find-img">
                                    <img src="http://localhost/duapp/images/find_img/f1.jpg">
                                </div>
                            </div>
                            <div class="find-tips">
                                <div class="tip-date">
                                    <span>20:00:00</span>
                                </div>
                                <div class="tip-count">
                                    <span><img src="http://localhost/duapp/images/find_img/preview.png"><span>1265</span></span>
                                    <span><img src="http://localhost/duapp/images/find_img/repeat.png"><span>0</span></span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="find-main">
                                <div class="find-text">
                                    <h6>Virgil Abloh 透露新联名的对象是香槟？</h6>
                                    <p>Virgil Abloh 近日在&nbsp;Instagram&nbsp;上透露 OFF-W...</p>
                                </div>
                                <div class="find-img">
                                    <img src="http://localhost/duapp/images/find_img/f1.jpg">
                                </div>
                            </div>
                            <div class="find-tips">
                                <div class="tip-date">
                                    <span>20:00:00</span>
                                </div>
                                <div class="tip-count">
                                    <span><img src="http://localhost/duapp/images/find_img/preview.png"><span>1265</span></span>
                                    <span><img src="http://localhost/duapp/images/find_img/repeat.png"><span>0</span></span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import { Swiper, SwiperItem} from 'vux'
    export default {
        name: "find",
        components: {
            Swiper,
            SwiperItem,
        },
        data () {
            return {
                list:[
                    {
                      url: 'javascript:',
                      img: 'http://localhost/duapp/images/find_lb/lb1.jpg'
                    },
                    {
                      url: 'javascript:',
                      img: 'http://localhost/duapp/images/find_lb/lb2.jpg'
                    },
                    {
                      url: 'javascript:',
                      img: 'http://localhost/duapp/images/find_lb/lb3.png'
                    },
                    {
                      url: 'javascript:',
                      img: 'http://localhost/duapp/images/find_lb/lb4.jpg'
                    },
                    {
                      url: 'javascript:',
                      img: 'http://localhost/duapp/images/find_lb/lb5.jpg'
                    }
                ]
            }
        },
        mounted () {

        },
        methods: {

        }
    }
</script>
<style scoped>
.find{
    background-color: white;
    padding-bottom: 64px;
}
.swiper{
    width: 100%;
}
.section-title {
    text-align: center;
    margin: 20px 0;
}
a {
    text-decoration: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    color: #333;
}
.section-title img {
    width: 150px;
}
.news_list li{
    margin-bottom: 15px;
}
.news_list li a{
    padding-bottom: 15px;
    border-bottom: 1px solid #ECECEC;
}
.find-text{
    vertical-align: top;
    margin-left: 5%;
    display: inline-block;
    width: 50%;
}
.find-text p{
    font-size: 15px;
    width: 100%;
    overflow: hidden;
}
.find-img{
    display: inline-block;
    margin-left: 5%;
    width: 150px;
    height: 94px;
}
.find-img img{
    width: 100%;
}
.tip-date{
    display: inline-block;
    width: 50%;
    margin-left: 5%;
    margin-top: 10px;
}
.tip-count{
    display: inline-block;
    width: 150px;
    margin-left: 5%;
}
.tip-count img{
    height: 15px;
}
</style>
