import fetch from '@/api/manage/fetch'

export default {
    namespaced:true,
    actions: {
        // 获取推荐文章、热门文章、最新文章
        async getPassageList(state, payload) {
            return await fetch('/forun/article/list', 'get', payload)
        },   
        // 浏览文章增加访问量接口
        async getPassageRead(state, payload) {
            return await fetch('/forun/article/read', 'post', payload)
        },      
    }
}