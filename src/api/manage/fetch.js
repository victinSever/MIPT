import axios from 'axios'
import {ipUrl, baseUrl, ipBaseUrl, ipBaseUrlProxy} from './config'

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