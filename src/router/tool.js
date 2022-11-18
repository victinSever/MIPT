export default [
    {
        path: 'entity',
        name: 'entity',
        meta: { title: 'CLF - 工具箱 - 实体抽取', hidden: true},
        component: () => import('@/views/Tool/tool-entity'),
    },
    {
        path: 'info',
        name: 'info',
        meta: { title: 'CLF - 工具箱 - 信息抽取', hidden: true},
        component: () => import('@/views/Tool/tool-info'),
    },
]