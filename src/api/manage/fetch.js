import axios from 'axios'
import {ipUrl, baseUrl} from './config'

export default async (type = 'get', data = {}, header = {}, isIp) => {
    let url = baseUrl
    if(isIp) url = ipUrl
    return await axios(
        type, url, data, header
    )
}