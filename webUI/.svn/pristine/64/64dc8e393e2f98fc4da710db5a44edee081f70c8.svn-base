<template>
  <div>
    <el-table
    :data="singInList"
    stripe
    style="width: 100%">
    <el-table-column
      prop="userID"
      label="用户ID">
    </el-table-column>
    <el-table-column
      prop="signInTime"
      label="签到时间">
    </el-table-column>
    <el-table-column
      prop="signInLongitude"
      label="经度">
    </el-table-column>
    <el-table-column
      prop="signInLatitude"
      label="纬度">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      singInList: []
    }
  },
  created () {
    this.getSignIn()
  },
  methods: {
    getSignIn () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/getCurrentSignInUser')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              i.signInTime = this.dateFormat(i.signInTime)
              this.singInList.push(i)
            }
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
    // timestampToString (timestamp) {
    //   var date = new Date(timestamp * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    //   var Y = date.getFullYear() + '-'
    //   var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    //   var D = date.getDate() + ' '
    //   var h = date.getHours() + ':'
    //   var m = date.getMinutes() + ':'
    //   var s = date.getSeconds()
    //   return Y + M + D + h + m + s
    // }
  }
}
</script>
<style scoped>
</style>
