
export default [
    {
        path: 'profile',
        meta: { title: '个人资料'},
        component: () => import('@/views/User/setting/profile'),       
    },
    {
        path: 'account',
        meta: { title: '账号设置'},
        component: () => import('@/views/User/setting/account'),
    },    
]