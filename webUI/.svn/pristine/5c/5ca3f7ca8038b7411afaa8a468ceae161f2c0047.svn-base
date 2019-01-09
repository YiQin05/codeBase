<template>
  <div class="outer home">
    <div class="top">
        <img src="../../assets/notice.png" alt="img">
        <div>最新数据</div>
    </div>
    <el-table
        :data="newData"
        style="width: 100%">
        <el-table-column
            prop="picTime"
            label="拍摄时间">
        </el-table-column>
        <el-table-column
            prop="taskID"
            label="任务ID">
        </el-table-column>
        <el-table-column
            label="拍摄经度"
            prop="picLongitude">
        </el-table-column>
        <el-table-column
            label="拍摄纬度"
            prop="picLatitude">
        </el-table-column>
        <el-table-column
            label="方向角"
            prop="picDirectAngle">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newData: []
    }
  },
  created () {
    this.getNewData()
  },
  methods: {
    getNewData () {
      this.newData.length = 0
      let params = new URLSearchParams()
      let user = this.getCookie('userID')
      let path = this.setAPIPath('lastTaskPic/' + user)
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.newData = response.data.data
            this.newData.picTime = this.dateFormat(
              this.newData.picTime
            )
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style>
</style>
