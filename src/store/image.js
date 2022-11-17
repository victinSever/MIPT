import fetch from '@/api/manage/fetch'
import {imageSeverUrl} from '@/api/manage/config';

export default {
    namespaced: true,//开启命名空间
    state: {
        image: {},
    },
    mutations: {
    },
    actions: {
        // 获取图片链接
        async getImageUrl(context, payload) {
            return await fetch('/imageSever', 'post', payload, { 
                "Content-Type": "multipart/form-data" 
            })
        }, // 这个和刚才那个不一样哎，这个是跨域
    }
}