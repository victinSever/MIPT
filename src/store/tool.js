import axios from 'axios';

let lawUrl = 'http://huyaoqi.tpddns.cn:5000/entity/extraction'

export default {
    namespaced:true,
    actions: {
        // 对模型接口进行文书实体抽取
        async getEntity(state, payload) {
            return await axios({method: 'post', url: lawUrl, data: payload})
        },       
    }
}