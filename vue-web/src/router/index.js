import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import find from '@/components/find'
import mine from '@/components/mine'
import listDetail from '@/components/listDetail'
import login from '@/components/login'
import regist from '@/components/regist'
import addressManage from '@/components/addressManage'
import shopCar from '@/components/shopCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'home',
    	component:home,
    	redirect:'/index',
    	children:[
    	{
    		path:'/index',
    		name:'index',
    		component:index
    	},
    	{
            path:'/find',
            name:'find',
            component:find
        },
        {
            path:'/mine',
            name:'mine',
            component:mine
        }
    	]
    },
    {
        path:'/listDetail',
        name:'listDetail',
        component:listDetail
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
        path:'/regist',
        name:'regist',
        component:regist
    },
    {
        path:'/addressManage',
        name:'addressManage',
        component:addressManage
    },
    {
        path:'/shopCar',
        name:'shopCar',
        component:shopCar
    }
  ]
})
