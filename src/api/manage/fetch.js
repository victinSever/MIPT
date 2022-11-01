import axios from 'axios'
import {ipUrl, baseUrl, ipBaseUrl, ipBaseUrlProxy} from './config'


export default async (url = '', type = 'GET', params = {}, header = {}, isIp = false) => {

    // 向第三方获取ip更改代理地址
    if(isIp) url = ipUrl.replace(ipBaseUrl, ipBaseUrlProxy)

    else url = baseUrl + url

    return await axios({
        method: type, url, data: params, header
    })
}