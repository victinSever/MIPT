import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const route = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/home'),
        // children: [
        //     {

        //     }
        // ]
    },
]

export default new Router({
    routes: route
})