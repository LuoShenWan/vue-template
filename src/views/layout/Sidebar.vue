<template>
  <div class="sidebar">
    <div class="logo">
      <router-link to="/home">
        <img src="../../assets/logo.png" alt="logo" />
        <transition name="fade">
          <h1 v-if="!sidebar">vue-templates</h1>
        </transition>
      </router-link>
    </div>
    <el-menu 
      class="el-menu-vertical-demo" 
      :collapse="sidebar" 
      background-color="#545c64" 
      text-color="#fff" 
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">发布管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组1</template>
          <router-link :to="{path:'/pubilc/mobiles'}">
            <el-menu-item index="1-1">选项1</el-menu-item>
          </router-link>
          <router-link :to="{path:'/pubilc/windows'}">
            <el-menu-item index="1-2">选项2</el-menu-item>   
          </router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">分组2</template>
          <el-menu-item index="1-3">选项1</el-menu-item>
          <el-menu-item index="1-4">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">发布管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组1</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">分组2</template>
          <el-menu-item index="2-3">选项1</el-menu-item>
          <el-menu-item index="2-4">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">发布管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'sidebar',
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.sidebar{
  height: 100vh;  
  background: #545c64;
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .logo {
    height: 64px;
    position: relative;
    line-height: 64px;
    background: #002140;
    overflow: hidden;
    text-align: center;
    img {
      display: inline-block;
      vertical-align: middle;
      height: 32px;
    }
    h1 {
      color: #fff;
      display: inline-block;
      vertical-align: middle;
      font-size: 20px;
      margin: 0 0 0 12px;
      font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
      font-weight: 600;
    }
  }
  .el-menu{
    border-right: none;
    p{
      text-align: center;
      color: #fff;
    }
    a{
      text-decoration: none;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
