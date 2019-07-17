import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [{
    path: '/',
    component: () => import('@/Layout'),
    meta: {
        icon: 'home',
        title: 'Home'
    },
    children: [{
        name: 'Home',
        path: '/',
        component: () => import('@/views/home')
    }]
},
{
    path: '/dashboard',
    component: () => import('@/Layout'),
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
    path: '/menu',
    name: 'Menu',
    component: () => import('@/Layout'),
    meta: {
        icon: 'menu',
        title: 'Menu',
        child: true
    },
    children: [{
        path: '/menu1-1',
        name: 'Menu1',
        component: () => import('@/views/menu/menu1-1'),
        meta: {
            icon: 'menu',
            title: 'Menu1-1'
        }
    }, {
        path: '/menu1-2',
        name: 'Menu2',
        component: () => import('@/views/menu/menu1-2'),
        meta: {
            icon: 'menu',
            title: 'Menu1-2'
        }
    }, {
        path: '/menu1-3',
        name: 'Menu3',
        component: () => import('@/views/menu/menu1-3'),
        meta: {
            icon: 'menu',
            title: 'Menu1-3'
        }
    }]
}
    // {
    //     path: '/form',
    //     component: () => import('@/Layout'),
    //     meta: {
    //         icon: 'format_align_left',
    //         title: 'form'
    //     },
    //     children: [{
    //         path: '/form',
    //         component: () => import('@/views/form')
    //     }]
    // },
    // {
    //     path: '/tables',
    //     component: () => import('@/Layout'),
    //     meta: {
    //         icon: 'table_chart',
    //         title: 'Tables'
    //     },
    //     children: [{
    //         path: '/tables',
    //         component: () => import('@/views/tables')
    //     }]
    // },
    // {
    //     path: '/menu',
    //     component: () => import('@/Layout'),
    //     meta: {
    //         icon: 'menu',
    //         title: 'Menu'
    //     },
    //     children: [{
    //         path: '/menu',
    //         component: () => import('@/views/menu')
    //     }]
    // }
]

const createRouter = () => new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
