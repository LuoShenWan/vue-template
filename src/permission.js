import router from './router'
// import store from './store'
// import {
//   getCookieKey,
//   setCookieKey
// } from '@/utils/auth' // 验权
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'
// let numberTimes = 0
// const whiteList = ['/login', '/activation', '/forgetpass'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  // numberTimes++
  NProgress.start()
  // if (getCookieKey('token')) {
  //   // setCookieKey('token', getCookieKey('token'))
  //   // if (to.path === '/login') {
  //   //   next({
  //   //     path: '/'
  //   //   })
  //   // } else {
  //   //   // console.log(store.state.user.roles, '1313')
  //   //   // if (store.state.user.roles.length === 0) {
  //   //   //   // store.dispatch('GetInfo').then(res => { // 拉取用户信息
  //   //   //   //   next()
  //   //   //   // })
  //   //   //   next()
  //   //   // } else {
  //   //   //   next()
  //   //   // }
  //   // }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     //  cookie过期处理
  //     if (numberTimes > 1) {
  //       // MessageBox.confirm('您的登入已经超时请重新登录哟', '提示', {
  //       //   confirmButtonText: '重新登录',
  //       //   cancelButtonText: '取消',
  //       //   type: 'warning'
  //       // }).then(() => {
  //       //   next('/login')
  //       // })
  //     }
  //     next('/login')
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  // 结束Progress
  NProgress.done()
})
