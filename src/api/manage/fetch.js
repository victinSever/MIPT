import axios from 'axios'
import {ipUrl, baseUrl, ipBaseUrl, ipBaseUrlProxy} from './config'

import nprogress from 'nprogress'

// axios前置拦截
axios.interceptors.request.use(request => {
    // 加载进度条
    nprogress.start()
    // config.headers.Authorization = window.sessionStorage.getItem('token')
    //为请求对象添加token验证的Authorization
    return request
})

// axios后置拦截
axios.interceptors.response.use(response => {
    // 结束进度条
    nprogress.done()
    return response
})


export default async (
    url = '', 
    type = 'GET', 
    params = {}, 
    header = {}, 
    proxyUrl = ''
    ) => {

    // // 向第三方获取ip更改代理地址
    // if(proxyUrl) {
    //     url = proxyUrl + url
    // }
    if(!url.includes('/ip') && !url.includes('imageSever')) url = '/serve' + url

    type = type.toUpperCase()

    if(type === 'POST') {
        return await axios({
            method: type, url, data: params, header
        })
    }

    console.log(url);
    return await axios({
        method: type, url, params, header
    })

    
}