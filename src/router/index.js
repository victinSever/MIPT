import Vue from 'vue';
import Router from 'vue-router';

import NProgress from 'nprogress'   // 导入 nprogress
import 'nprogress/nprogress.css'   // 导入样式，否则看不到效果

NProgress.configure({ showSpinner: false })   // 显示右上角螺旋加载提示

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'passage',
        meta: { title: 'FLPT'},
        component: () => import('@/views/Passage'),
    },
    {
        path: '/caseMatch',
        name: 'caseMatch',
        meta: { title: 'FLPT - 类案匹配'},
        component: () => import('@/views/CaseMatch'),
    },
    {
        path: '/paperwork',
        name: 'paperwork',
        meta: { title: 'FLPT - 文书抽取'},
        component: () => import('@/views/Paperwork'),
    },
    {
        path: '/arguments',
        name: 'arguments',
        meta: { title: 'FLPT - 案情辩论'},
        component: () => import('@/views/Arguments'),
    },
    {
        path: '/courseLearn',
        name: 'courseLearn',
        meta: { title: 'FLPT - 课程学习'},
        component: () => import('@/views/CourseLearn'),
    },
    {
        path: '/aroundShop',
        name: 'aroundShop',
        meta: { title: 'FLPT - 周边商城'},
        component: () => import('@/views/AroundShop'),
    },
    {
        path: '/userAgreement',
        name: 'userAgreement',
        meta: { title: '用户协议'},
        component: () => import('@/views/UserAgreement'),
    },
]

const router = new Router({
    mode: 'history',
    routes: routes
})

router.beforeEach((to, from, next) => { 
    document.title = to.meta.title; //设置标题

    NProgress.start()   // 开启进度条

    
    next() //放行

    NProgress.done()   // 关闭进度条
})

export default router