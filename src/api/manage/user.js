import fetch from './fetch'

// 获取用户ip
const getUserIP = () => fetch('get', {}, {}, true)


export {
    getUserIP
}