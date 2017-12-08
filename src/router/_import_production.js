// import return Promise
// 参考文档 https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
module.exports = file => () => import('@/views/' + file + '.vue')
