export default [
    {
        path: 'drafts',
        name: 'drafts',
        component: () => import('@/views/Creator/creator-content/drafts.vue'),
    },
    {
        path: 'essays',
        name: 'essays',
        component: () => import('@/views/Creator/creator-content/essays.vue'),
    },
]