import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [{
    path: '/',
    component: () => import('@/Layout'),
    name: 'Home',
    meta: {
        icon: 'home',
        title: 'Home'
    },
    children: [{
        path: '/home',
        component: () => import('@/views/home')
    }]
},
{
    path: '/dashboard',
    component: () => import('@/Layout'),
    name: 'Dashboard',
    meta: {
        icon: 'show_chart',
        title: 'Dashboard'
    },
    children: [{
        path: '/dashboard',
        component: () => import('@/views/dashboard')
    }]
},
{
    path: '/form',
    component: () => import('@/Layout'),
    name: 'Form',
    meta: {
        icon: 'format_align_left',
        title: 'form'
    },
    children: [{
        path: '/form',
        component: () => import('@/views/form')
    }]
},
{
    path: '/tables',
    component: () => import('@/Layout'),
    name: 'Tables',
    meta: {
        icon: 'table_chart',
        title: 'Tables'
    },
    children: [{
        path: '/tables',
        component: () => import('@/views/tables')
    }]
}
]

const createRouter = () => new Router({
    mode: 'history',
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
