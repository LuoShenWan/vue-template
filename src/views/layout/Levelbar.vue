<template>
  <div class="levelbar">
    <el-dropdown>
      <span class="el-dropdown-link">
        用户名<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'levelbar'
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.el-dropdown{
  float: right;
}
</style>
