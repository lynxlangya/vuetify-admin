import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'

Vue.use(Router)

export const constantRoutes = [{
    path: '/',
    component: Layout,
    name: 'Home',
    meta: {
        icon: 'home',
        title: 'Home'
    },
    children: [{
        path: '/home',
        component: () => import('@/views/home/index.vue')
    }]
},
{
    path: '/dashboard',
    component: Layout,
    name: 'Dashboard',
    meta: {
        icon: 'show_chart',
        title: 'Dashboard'
    },
    children: [{
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue')
    }]
},
{
    path: '/form',
    component: Layout,
    name: 'Form',
    meta: {
        icon: 'format_align_left',
        title: 'form'
    },
    children: [{
        path: '/form',
        component: () => import('@/views/form/index.vue')
    }]
},
{
    path: '/tables',
    component: Layout,
    name: 'Tables',
    meta: {
        icon: 'table_chart',
        title: 'Tables'
    },
    children: [{
        path: '/tables',
        component: () => import('@/views/tables/index.vue')
    }]
}
]

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
