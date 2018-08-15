import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: { title: '控制面板', icon: 'dashboard', noCache: true }
    }]
  },

  {
    path: '/databoard',
    component: Layout,
    redirect: '/databoard/user',
    name: 'Databoard',
    meta: { title: '数据面板', icon: 'list' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/databoard/user/index'),
        meta: { title: '用户资料', icon: 'user' }
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import('@/views/databoard/message/index'),
        meta: { title: '通知信息', icon: 'guide' }
      },
      {
        path: 'image',
        name: 'Image',
        component: () => import('@/views/databoard/image/index'),
        meta: { title: '图片相册', icon: 'tab' }
      },
      {
        path: 'dynamic',
        name: 'Dynamic',
        component: () => import('@/views/databoard/dynamic/index'),
        meta: { title: '用户动态', icon: 'example' }
      }
    ]
  },

  {
    path: '/datachart',
    component: Layout,
    redirect: 'noredirect',
    name: 'Datachart',
    meta: {
      title: '数据分析',
      icon: 'chart'
    },
    children: [
      {
        path: 'keyboard',
        component: () => import('@/views/datachart/keyboard'),
        name: 'keyboardChart',
        meta: { title: '访问量分析', noCache: true }
      },
      {
        path: 'line',
        component: () => import('@/views/datachart/line'),
        name: 'lineChart',
        meta: { title: '活跃度分析', noCache: true }
      },
      {
        path: 'mixchart',
        component: () => import('@/views/datachart/mixChart'),
        name: 'mixChart',
        meta: { title: '消费指数分析', noCache: true }
      }
    ]
  },

  // TODO 待定
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'nested',
    meta: {
      title: 'nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'menu1',
        meta: { title: 'menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'menu1-1',
            meta: { title: 'menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'menu1-2',
            meta: { title: 'menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'menu1-2-1',
                meta: { title: 'menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'menu1-2-2',
                meta: { title: 'menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'menu1-3',
            meta: { title: 'menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

