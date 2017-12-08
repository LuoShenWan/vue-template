import { TOGGLE_SIDEBAR } from './mutation-types.js'

// 根据type类型处理数据
export default {
  [TOGGLE_SIDEBAR] (state) {
    state.sidebar = !state.sidebar
  }
}
