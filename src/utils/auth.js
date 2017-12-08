import Cookies from 'js-cookie'
const date = new Date()
date.setTime(date.getTime() + 2 * 1000 * 3600)// 设置cookies过期时间 为 2个小时
/**
 * 设置 CookieKey
 * @param  {} CookieKey
 * @param  {} CookieValue
 */
export const setCookieKey = (CookieKey, CookieValue) => {
  Cookies.set(CookieKey, CookieValue, { expires: date })
}
/**
 * 获取 CookieKey
 * @param  {} CookieKey
 */
export const getCookieKey = (CookieKey) => Cookies.get(CookieKey)

/**
 * 删除 CookieKey
 * @param  {} CookieKey
 */
export const removeCookieKey = (CookieKey) => Cookies.remove(CookieKey)
