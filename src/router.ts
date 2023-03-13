import { createRouter, createWebHashHistory } from "vue-router";

const routes= [
    {
        path: '/login',
        component: ()=> import('./pages/Login.vue')
    },
    {
        path: '/layout',
        component: ()=> import('./layout/Layout.vue'),
        children: [
            {
                path: '/home',
                component: ()=> import('./pages/Home.vue')
            },
            {
                path: '/customer-service',
                component: ()=> import('./pages/Customer-service.vue')
            }
        ]
    }
];

const router= createRouter({
    history: createWebHashHistory(),
    routes
})

export default router