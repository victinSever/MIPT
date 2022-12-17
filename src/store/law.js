import axios from 'axios'

let lawUrl = 'http://53599s50a3.zicp.vip:31762/api'

export default {
    namespaced: true,//开启命名空间
    actions: {
        // 聚合查询法律条目
        async getlawCategory(state, payload) {
            return await axios({ method: 'post', url: lawUrl + '/pkulaw/agg', data: payload })
        },
        // 分页条件查询
        async getlawList(state, payload) {
            return await axios({ method: 'post', url: lawUrl + '/pkulaw/search', data: payload })
        },
        // 分页条件查询
        async getlaw(state, payload) {
            return await axios({ method: 'get', url: lawUrl + `/pkulaw/${payload}`})
        },

    }
}