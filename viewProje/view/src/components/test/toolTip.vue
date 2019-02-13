<template>
  <div>
    <el-tooltip content="Top center" placement="top">
      <el-button>Dark</el-button>
    </el-tooltip>
    <el-tooltip content="Bottom center" placement="bottom" effect="light">
      <el-button>Light</el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'toolTip'
}
</script>

<style scoped>
</style>
