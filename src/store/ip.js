import axios from 'axios';

let baseUrl = '/ip/cityjson?ie=utf-8'

export default {
    namespaced:true,
    actions: {
        // 对模型接口进行文书实体抽取
        async getUserIP() {
            return await axios({method: 'get', url: baseUrl})
        },       
    }
}