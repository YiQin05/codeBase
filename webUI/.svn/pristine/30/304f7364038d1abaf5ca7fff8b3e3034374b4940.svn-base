<template>
    <div class="container">
        <div class="TopTitle">编辑任务</div>
        <mission ref="mission"/>
        <el-row>
            <el-button size="mini" type="primary" @click="submit" class="enquierBut">提交</el-button>
            <el-button size="mini" type="info" @click="stepBack" class="enquierBut">返回</el-button>
        </el-row>
    </div>
</template>

<script>
import mission from './mission.vue'
export default {
  data () {
    return {
      index: '',
      editForm: {}
    }
  },
  components: {
    mission
  },
  created () {
    this.index = this.$route.params.index
  },
  methods: {
    submit () {
      var storageForm = this.getStorage(this.index)
      this.editForm = storageForm
      var sonForm = this.$refs.mission.formInline
      var flag = false // 用于检测是否有修改
      // console.log(this.editForm)
      // console.log(sonForm)
      // var date = new Date(sonForm.taskPlanCompleteTime.replace(/-/g, '/')) // 将时间格式化
      // console.log(sonForm === this.editForm)
      for (var obj in this.editForm) {
        for (var obj1 in sonForm) {
          if (obj === obj1 && this.editForm[obj] !== sonForm[obj1]) {
            flag = true
            this.missionChange(sonForm)
            break
          }
        }
      }
      if (!flag) {
        alert('请修改后再提交！')
      }
    },
    missionChange (sonForm) {
      let params = new URLSearchParams()
      let path = this.setAPIPath('task')
      params.append('taskID', sonForm.taskID)
      params.append('taskName', sonForm.taskName)
      params.append('bscID', sonForm.bscID)
      params.append('cellID', sonForm.cellID)
      params.append('takePhotoLongitude', sonForm.takePhotoLongitude)
      params.append('takePhotoLatitude', sonForm.takePhotoLatitude)
      params.append('takePhotoAltitude', sonForm.takePhotoAltitude)
      params.append(
        'takePhotoElevationAngle',
        sonForm.takePhotoElevationAngle
      )
      params.append(
        'takePhotoDirectAngleBegin',
        sonForm.takePhotoDirectAngleBegin
      )
      params.append(
        'takePhotoDirectAngleEnd',
        sonForm.takePhotoDirectAngleEnd
      )
      params.append(
        'takePhotoDirectAngleRotate',
        sonForm.takePhotoDirectAngleRotate
      )
      params.append('takePhotoNum', sonForm.takePhotoNum)
      params.append('taskConsumerID', sonForm.taskConsumerID)
      params.append('taskPlanCompleteTime', new Date(sonForm.taskPlanCompleteTime.replace(/-/g, '/')).getTime())
      this.$axios
        .put(path, params)
        .then(response => {
          switch (response.data.code) {
            case 0:
              alert('修改成功！')
              break
            case 20:
              alert('该任务已删除!')
              break
            case 22:
              alert('任务设置的拍摄方向角不合适,请修改')
              break
            case 50:
              alert('数据库错误，请稍后重试')
              break
            default:
              alert('出错了！')
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    stepBack () {
      this.delStorage(this.index)
      this.$router.push({
        name: 'missionDetail'
      })
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-top: 10px;
  margin-bottom: 10px;
  left: 208px;
}
</style>
