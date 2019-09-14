import { reqGoods } from '../api'
import { GET_GOOD_LIST } from './mutation-types'
export default {
    // 首页商品列表获取
    async getGoodsArr({ commit }) {
        commit(GET_GOOD_LIST,{  })
        console.log(1)
        // // 发送异步ajax请求
        // const { goodsArr } = state;
        // const result = await reqGoods(goodsArr);
        // // // 提交一个mutation
        // // const goods=result.data;
        // commit(GET_GOOD_LIST,{  })
        
        // console.log(result)
    },

}