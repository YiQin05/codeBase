<template>
    <div class="container">
      <div class="TopTitle">系统管理</div>
      <el-tabs type="border-card" tab-position="left">
        <el-tab-pane label="用户列表">
          <pageUser/>
        </el-tab-pane>
        <el-tab-pane label="执行者用户">
          <pageExecutor/>
        </el-tab-pane>
        <el-tab-pane label="小区">
          <cell/>
        </el-tab-pane>
        <el-tab-pane label="增加小区/用户">
            <!-- 嵌套 -->
          <el-tabs type="border-card" tab-position="Top">
            <el-tab-pane label="增加小区">
              <add-cell/>
            </el-tab-pane>
            <el-tab-pane label="增加用户">
              <add-user/>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import pageUser from './pageUser.vue'
import pageExecutor from './pageExecutor.vue'
import cell from './cell.vue'
import addCell from './addCell.vue'
import addUser from './addUser.vue'
export default {
  data () {
    return {
      msg: '系统管理'
    }
  },
  components: {
    pageUser,
    pageExecutor,
    cell,
    addCell,
    addUser
  }
}
</script>
<style scoped>
</style>
