import axios from 'axios'

let baseUrl = 'https://53r23232p6.goho.co/api'

export default async (
    url = '', 
    type = 'GET', 
    params = {}, 
    header = {}, 
    ) => {

    url = baseUrl + url

    type = type.toUpperCase()

    if(type === 'POST') {
        return await axios({
            method: type, url, data: params, header
        })
    }

    return await axios({
        method: type, url, params, header
    })

    
}