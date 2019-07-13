import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'
import dashboard from '../views/dashboard'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    meta: {
      icon: 'home',
      name: 'History'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
      icon: 'trending_up',
      name: 'Dashboard'
    }
  }
]

// export default new Router({
//   // ?history 需要服务支持
//   // mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [{
//     path: '/',
// //     name: 'layout',
// //     component: Layout
// //   }
//     {
//       path: "/dashboard",
//       name: "dashboard",
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () =>
//         import(/* webpackChunkName: "about" */ "./views/About.vue")
//     }
// //   ]
// // })
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
