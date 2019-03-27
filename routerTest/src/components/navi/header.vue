<template >
    <div>
      <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
          <el-menu-item index="1"><router-link to="/home/:userID" tag="a">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/missionDetail/:userID" tag="a">任务管理</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/scene/:userID" tag="a">场景识别</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/inquire/:userID" tag="a">数据管理</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/system/:userID" tag="a">系统管理</router-link></el-menu-item>
      </el-menu>
    </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
</style>
