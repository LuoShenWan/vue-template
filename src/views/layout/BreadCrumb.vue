<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
      <router-link v-if='item.redirect==="noredirect"||index==levelList.length-1' to="" class="no-redirect">{{item.name}}</router-link>
      <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  created () {
    this.getBreadcrumb()
  },
  data () {
    return {
      levelList: null
    }
  },
  methods: {
    getBreadcrumb () {
      console.log(this.$route.matched)
      let matched = this.$route.matched.filter(item => item.name)
      console.log(matched)
      // const first = matched[0]
      // if (first && (first.name !== 'Home' || first.path !== '')) {
      matched = [{ name: 'Home', path: '/' }].concat(matched)
      // }
      this.levelList = matched
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.el-breadcrumb {
  background-color: #fff;
  font-size: 14px;
  line-height: 50px;
  padding-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
