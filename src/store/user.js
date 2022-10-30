export default {
    state: {
        userInfo: {},
        token: '12321312'
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