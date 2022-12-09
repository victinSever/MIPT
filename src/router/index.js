import Vue from 'vue';
import Router from 'vue-router';

import NProgress from 'nprogress'   // 导入 nprogress
import 'nprogress/nprogress.css'   // 导入样式，否则看不到效果

NProgress.configure({ showSpinner: false })   // 显示右上角螺旋加载提示

Vue.use(Router)

// 二级路由
import creator from './creator'
import tool from './tool'
import user from './user'

// 一级路由
const routes = [
    {
        path: '/',
        meta: { title: 'CLF'},
        component: () => import('@/views/Home'),
    },
    {
        path: '/tool',
        meta: { title: 'CLF - 工具箱'},
        component: () => import('@/views/Tool'),
        redirect: '/tool/entity',
        children: tool
    },
    {
        path: '/arguments',
        meta: { title: 'CLF - 案情辩论'},
        component: () => import('@/views/Arguments'),
    },
    {
        path: '/course',
        meta: { title: 'CLF - 课程学习'},
        component: () => import('@/views/Course'),
    },
    {
        path: '/shop',
        meta: { title: 'CLF - 周边商城'},
        component: () => import('@/views/Shop'),
    },
    {
        path: '/userAgreement',
        meta: { title: 'CLF - 用户协议'},
        component: () => import('@/views/UserAgreement'),
    },
    {
        path: '/editor/:id',
        name: 'editor',
        meta: { title: 'CLF - 创作文章', hiddenHeader: true},
        component: () => import('@/views/Editor'),
    },
    {
        path: '/creator',
        meta: { title: 'CLF - 创作者中心'},
        component: () => import('@/views/Creator'),
        redirect: '/creator/content',
        children: creator
    },
    {
        path: '/search',
        meta: { title: 'CLF - 搜索'},
        component: () => import('@/views/Search'),
    },
    {
        path: '/post/:id',
        name: 'post',
        meta: { title: 'CLF'},
        component: () => import('@/views/Post'),
    },
    {
        path: '/user',
        name: 'user',
        meta: { title: 'CLF - 个人中心'},
        component: () => import('@/views/User'),
        children: user
    },
    {
        path: '/my-course',
        name: 'my-course',
        meta: { title: 'CLF - 课程中心'},
        component: () => import('@/views/Course/my-course'),
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

// 拦截器
router.beforeEach((to, from, next) => { 
    if(to.meta.title)
        document.title = to.meta.title; //设置标题
    
    if(to.name === 'post') {
        if(to.params.title) document.title += ' - ' + to.params.title
    }

    NProgress.start()   // 开启进度条

    
    next() //放行

    NProgress.done()   // 关闭进度条
})

export default router