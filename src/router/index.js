import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/BasicLayouts'

const _import = require('./_import_' + process.env.NODE_ENV) // 开发阶段不采用lazy loading

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: '',
    children: [
      {
        path: 'home',
        component: _import('pubilc/Index')
      }
    ]
  },
  {
    path: '/pubilc',
    component: Layout,
    name: '',
    children: [
      {
        path: 'mobiles',
        name: '移动端',
        component: _import('pubilc/mobiles/Index')
      },
      {
        path: 'windows',
        name: 'PC端',
        component: _import('pubilc/windows/Index')
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
