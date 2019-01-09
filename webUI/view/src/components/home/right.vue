<template>
  <div class="outer home">
    <div class="top">
        <img src="../../assets/notice.png" alt="img">
        <div>最新数据</div>
    </div>
    <el-table
        :data="newData"
        style="width: 100%;padding-left:15px;">
        <el-table-column
            prop="picTime"
            label="拍摄时间"
            width="180">
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
            this.newData.length = 0
            for (var i of response.data.data) {
              i.picTime = this.dateFormat(i.picTime)
              i.picLongitude = Math.ceil(i.picLongitude * 100000) / 100000
              i.picLatitude = Math.ceil(i.picLatitude * 100000) / 100000
              this.newData.push(i)
            }
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
