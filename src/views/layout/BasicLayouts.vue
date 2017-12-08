<template>
  <div id="layout">
    <el-container>
      <Sidebar></Sidebar>
      <el-container>
        <el-header>
          <Navbar></Navbar>
        </el-header>
        <el-main>
          <BreadCrumb></BreadCrumb>
          <app-main></app-main>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Sidebar, AppMain, BreadCrumb, Navbar } from '@/views/layout'
export default {
  name: 'layout',
  components: {
    Sidebar,
    AppMain,
    BreadCrumb,
    Navbar
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
#layout {
  .el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
    background-color: #B3C0D1;
    -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
