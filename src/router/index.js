import Vue from 'vue';
import Router from 'vue-router';

import NProgress from 'nprogress'   // 导入 nprogress
import 'nprogress/nprogress.css'   // 导入样式，否则看不到效果

NProgress.configure({ showSpinner: false })   // 显示右上角螺旋加载提示

Vue.use(Router)

const routes = [
    {
        path: '/',
        meta: { title: 'FLPT'},
        component: () => import('@/views/Home'),
    },
    {
        path: '/tool',
        meta: { title: 'FLPT - 工具箱'},
        component: () => import('@/views/Tool'),
    },
    {
        path: '/arguments',
        meta: { title: 'FLPT - 案情辩论'},
        component: () => import('@/views/Arguments'),
    },
    {
        path: '/courseLearn',
        meta: { title: 'FLPT - 课程学习'},
        component: () => import('@/views/CourseLearn'),
    },
    {
        path: '/aroundShop',
        meta: { title: 'FLPT - 周边商城'},
        component: () => import('@/views/AroundShop'),
    },
    {
        path: '/userAgreement',
        meta: { title: 'FLPT - 用户协议'},
        component: () => import('@/views/UserAgreement'),
    },
    {
        path: '/editor',
        meta: { title: 'FLPT - 创作文章'},
        component: () => import('@/views/Editor'),
    },
    {
        path: '/creator',
        meta: { title: 'FLPT - 创作者中心'},
        component: () => import('@/views/Creator'),
        children: [
            {
                path: 'content',
                meta: { title: 'FLPT - 文章内容'},
                component: () => import('@/views/Creator/creator-content'),
            },
            {
                path: 'dataCenter',
                meta: { title: 'FLPT - 数据中心'},
                component: () => import('@/views/Creator/creator-dataCenter'),
            },
            {
                path: 'groupUp',
                meta: { title: 'FLPT - 创作成长'},
                component: () => import('@/views/Creator/creator-groupUp'),
            },
            {
                path: 'activityCenter',
                meta: { title: 'FLPT - 活动中心'},
                component: () => import('@/views/Creator/creator-activityCenter'),
            },
            {
                path: 'helpCenter',
                meta: { title: 'FLPT - 帮助中心'},
                component: () => import('@/views/Creator/creator-helpCenter'),
            }
        ]
    },
]

const router = new Router({
    //history模式，需要和服务端配合才能在生产环境下正常使用
    // mode: 'history',
    // hash
    mode: 'hash',

    // 基本路由，和vue.config.js中的publicPath一致
    // base: '/vue/',

    routes: routes
})

router.beforeEach((to, from, next) => { 
    document.title = to.meta.title; //设置标题

    NProgress.start()   // 开启进度条

    
    next() //放行

    NProgress.done()   // 关闭进度条
})

export default router