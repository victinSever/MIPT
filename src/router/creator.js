export default [
    {
        path: 'content',
        meta: { title: 'CLF - 文章内容'},
        component: () => import('@/views/Creator/creator-content'),
    },
    {
        path: 'dataCenter',
        meta: { title: 'CLF - 数据中心'},
        component: () => import('@/views/Creator/creator-dataCenter'),
    },
    {
        path: 'groupUp',
        meta: { title: 'CLF - 创作成长'},
        component: () => import('@/views/Creator/creator-groupUp'),
    },
    {
        path: 'activityCenter',
        meta: { title: 'CLF - 活动中心'},
        component: () => import('@/views/Creator/creator-activityCenter'),
    },
    {
        path: 'helpCenter',
        meta: { title: 'CLF - 帮助中心'},
        component: () => import('@/views/Creator/creator-helpCenter'),
    }
]