import { GET_GOOD_LIST } from './mutation-types'
export default {
    // next(state){
    //     state.page++;
    // },
    // last(state){
    //     state.page--;
    // },
    [GET_GOOD_LIST] (state,{goods}){
        state.goodsArr=goods;
    }
}