import Vue from "vue"
import Vuex from "vuex"
// import state from './state'
// import mutations from './mutations'
// import actions from './actions';
import createPersistedState from 'vuex-persistedstate';
import {reqGoods, reqSwiper, reqNav} from '../api'
import { GET_GOOD_LIST, GET_SWIPER_LIST, GET_NAV_LIST } from './mutation-types'
// 配置并导出路由
Vue.use(Vuex);
const state = {
    page:1,
    itemMsg:{},
    goodsArr:[]
}
const mutations = {
    next(state){
        state.page++;
    },
    last(state){
        state.page--;
    },
    [GET_GOOD_LIST](state,goods){
        state.goodsArr=goods;
    },
    [GET_SWIPER_LIST](state,list){
        state.listArr=list;
    },
    [GET_NAV_LIST](state,nav){
        state.navArr=nav;
    }
}
const actions = {
     getSwiperArr({commit}){  
        reqSwiper().then(res=>{
            console.log(res)
            const list=res.data;
            commit(GET_SWIPER_LIST,list);
        });

        
    },
    async getGoodsArr({dispatch,commit}){
        await dispatch('getSwiperArr');
        const result = await reqGoods();

        if(result.status==200){
            const goods=result.data
            commit(GET_GOOD_LIST,goods);
        }
        
    },
    async getNavArr({commit}){
        const result = await reqNav();
        console.log(result);
        const nav=result.data;
        commit(GET_NAV_LIST,nav);
    }
    
}
export default new Vuex.Store({
    plugins:[createPersistedState()],
    state,
    mutations,
    actions,
    
})