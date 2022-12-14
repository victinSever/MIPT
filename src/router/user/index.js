
export default [
    {
        path: 'passage',
        name: 'passage',
        meta: { title: '文章' },
        component: () => import('@/views/User/passage'),
    },
    {
        path: 'active',
        name: 'active',
        meta: { title: '动态' },
        component: () => import('@/views/User/active')
    },
    {
        path: 'columns',
        name: 'columns',
        meta: { title: '专栏' },
        component: () => import('@/views/User/columns')
    },

    {
        path: 'collect',
        name: 'collect',
        meta: { title: '收藏' },
        component: () => import('@/views/User/collect')
    },
    {
        path: 'concern',
        name: 'concern',
        meta: { title: '关注' },
        component: () => import('@/views/User/concern')
    },
    {
        path: 'data',
        name: 'data',
        meta: { title: '博客数据' },
        component: () => import('@/views/User/data')
    },
    {
        path: 'column/:id',
        name: 'column',
        meta: { title: '专栏详情' },
        component: () => import('@/views/User/columns/column')
    },
]