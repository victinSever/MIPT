import fetch from './fetch'

// 获取用户ip
const getUserIP = async () => await fetch('', 'get', {}, {}, true)

//账密登录
const loginByPass = async data => await fetch('/api/user/login/common', 'post', data)

export {
    getUserIP,
    loginByPass
}