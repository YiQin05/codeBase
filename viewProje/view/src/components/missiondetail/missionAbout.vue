<template>
    <div class="container">
        <div class="TopTitle">任务详情</div>
        <mission/>
        <el-row>
            <el-button size="mini" type="info" @click="stepBack" class="enquierBut">返回</el-button>
        </el-row>
    </div>
</template>

<script>
import mission from './mission.vue'
export default {
  data () {
    return {
      user: ''
    }
  },
  components: {
    mission
  },
  created () {
    this.user = this.getCookie('userID')
  },
  methods: {
    stepBack () {
      this.$router.push('/home/' + this.user)
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-top: 10px;
  margin-bottom: 10px;
  left: 243px;
}
</style>
