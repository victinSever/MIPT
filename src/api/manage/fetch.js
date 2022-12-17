import axios from 'axios'
import {ipUrl, baseUrl, ipBaseUrl, ipBaseUrlProxy} from './config'

export default async (
    url = '', 
    type = 'GET', 
    params = {}, 
    header = {}, 
    proxyUrl = ''
    ) => {

    // if(!url.includes('/ip') && !url.includes('imageSever')) url = '/serve' + url

    // type = type.toUpperCase()

    // if(type === 'POST') {
    //     return await axios({
    //         method: type, url, data: params, header
    //     })
    // }

    return await axios({
        method: type, url, params, header
    })

    
}