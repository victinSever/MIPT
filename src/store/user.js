import fetch from '@/api/manage/fetch'

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
        },
        // 更新用户信息
        UpdateUserInfo(state, payload) {
            state.userInfo = payload
        },
        // 退出登录
        SignOut(state) {
            state.userInfo = {}
            state.token = ''
        }
    },
    actions: {
        // 获取信息

        // 获取用户ip
        async getUserIP() {
            return await fetch('', 'get', {}, {}, true)
        },
        // 账密登录
        async getLoginByPass(context, payload) {
            return await fetch('/api/user/login/common', 'post', payload)
        },
        // 手机号登录
        async getLoginByPhone(context, payload) {
            return await fetch('/api/user/login/phone', 'post', payload)
        },       
        // 用户注册
        async registe(data) {
            return await fetch('/api/user/regist/common', 'post', data)
        },

        // 重置信息

        // 手机号重置密码
        async retrievePasswordByPhone(context, payload) {
            return await fetch('/api/user/user/retrievePasswordByPhone', 'post', payload)
        },
        // 邮箱重置密码
        async retrievePasswordByEmail(context, payload) {
            return await fetch('/api/user/user/retrievePasswordByEmail', 'post', payload)
        },

        // 修改信息

        // 用户修改密码
        async updatePassword(data) {
            return await fetch('/api/user/user/updatepassword', 'post', data)
        },
        // 用户修改手机号
        async updatePhone(data) {
            return await fetch('/api/user/user/updatephone', 'post', data)
        },
        // 用户绑定邮箱
        async bindingEmail(data) {
            return await fetch('/api/user/user/firstTimeBindingEmail', 'post', data)
        },
        // 用户修改邮箱
        async updateEmail(data) {
            return await fetch('/api/user/user/updateemail', 'post', data)
        },
        // 用户修改其他信息
        async updateInfo(data) {
            return await fetch('/api/user/user/updatedata', 'post', data)
        },

        // 验证码

        // 发送手机号验证码
        async sendPhoneCode(context, payload) {
            return await fetch('/api/user/sms/sendCode', 'get', payload)
        },
        // 发送邮箱验证码
        async sendEmailCode(context, payload) {
            return await fetch('/api/user/evc/sendCode', 'get', payload)
        },
        
    }
}