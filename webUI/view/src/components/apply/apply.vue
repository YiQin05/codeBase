<template>
    <div class="container apply">
        <div class="TopTitle">应用案例</div>
        <el-tabs type="border-card" class="thisTab">
        <el-tab-pane label="小区规划">
          <cell-programme/>
        </el-tab-pane>
        <el-tab-pane label="小区验收">
          <cell-check/>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import cellCheck from './cellCheck'
import cellProgramme from './cellProgramme'
export default {
  name: 'apply',
  data () {
    return {
    }
  },
  components: {
    cellCheck,
    cellProgramme
  }
}
</script>

<style scoped>
</style>
