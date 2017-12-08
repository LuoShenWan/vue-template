import { TOGGLE_SIDEBAR } from './mutation-types.js'

export default {
  // 菜单栏
  ToggleSideBar ({
    commit,
    state
  }) {
    commit(TOGGLE_SIDEBAR, state)
  }
}
