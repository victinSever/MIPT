export default {
    state: {
        userInfo: {},
        token: ''
    },
    mutations: {
        UpdateToken(state, payload) {
            state.token = payload
        },
        UpdateUserInfo(state, payload) {
            state.userInfo = payload
        }
    }
}