import fetch from '@/api/manage/fetch'

let lawUrl = 'http://53599s50a3.zicp.vip:31762/api'

export default {
    namespaced:true,//开启命名空间
    state: {
        userInfo: {},
        token: ''
    },
    mutations: {
        // 更新token表示是否登录
        UpdateToken(state, payload) {
            state.token = payload
            sessionStorage.setItem('token', payload)
        },
    },
    actions: {

        // 获取用户ip
        async getUserIP() {
            return await fetch('/ip/cityjson?ie=utf-8', 'get')
        },
        
    }
}