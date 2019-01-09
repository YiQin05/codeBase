<template>
  <div class="outer home">
    <div class="top">
        <img src="../../assets/news.png" alt="img">
        <div>最新任务</div>
    </div>
    <div class="homeTableContain">
      <el-table
        :data="missionList"
        style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form inline class="demo-table-expand">
                    <el-form-item label="任务名称：">
                      <span>{{ props.row.taskName }}</span>
                    </el-form-item>
                    <el-form-item label="拍摄经度：">
                        <span>{{ props.row.takePhotoLongitude }}</span>
                    </el-form-item>
                    <el-form-item label="拍摄纬度：">
                        <span>{{ props.row.takePhotoLatitude }}</span>
                    </el-form-item>
                    <el-form-item label="海拔高度：">
                        <span>{{ props.row.takePhotoAltitude }}</span>
                    </el-form-item>
                    <el-form-item label="拍摄下倾角：">
                        <span>{{ props.row.takePhotoElevationAngle }}</span>
                    </el-form-item>
                    <el-form-item label="方向角起点：">
                        <span>{{ props.row.takePhotoDirectAngleBegin }}</span>
                    </el-form-item>
                    <el-form-item label="方向角终点：">
                        <span>{{ props.row.takePhotoDirectAngleEnd }}</span>
                    </el-form-item>
                    <el-form-item label="拍摄偏移角：">
                        <span>{{ props.row.takePhotoDirectAngleRotate }}</span>
                    </el-form-item>
                    <el-form-item label="拍摄图片数：">
                        <span>{{ props.row.takePhotoNum }}</span>
                    </el-form-item>
                    <el-form-item label="创建者：">
                        <span>{{ props.row.taskProducerID }}</span>
                    </el-form-item>
                    <el-form-item label="任务状态：">
                        <span>{{ props.row.taskStatus }}</span>
                    </el-form-item>
                    <el-form-item label="接收人：">
                        <span>{{ props.row.taskConsumerID }}</span>
                    </el-form-item>
                    <el-form-item label="计划完成日期：">
                        <span>{{ props.row.taskPlanCompleteTime }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
            prop="taskProduceTime"
            label="创建时间"
            header-align="center"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="bscID"
            label="基站ID"
            header-align="center"
            align="center">
        </el-table-column>
        <el-table-column
            prop="cellID"
            label="小区ID"
            header-align="center"
            align="center">
        </el-table-column>
        <el-table-column
            prop="taskID"
            label="任务ID"
            header-align="center"
            align="center">
        </el-table-column>
        <el-table-column
            prop="taskStatus"
            label="任务状态"
            header-align="center"
            align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      missionList: [],
      user: ''
    }
  },
  created () {
    this.user = this.getCookie('userID')
    this.getNewmission()
  },
  methods: {
    getNewmission () {
      this.missionList.length = 0
      let params = new URLSearchParams()
      let path = this.setAPIPath('task/' + this.user)
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (var i = 0; i < response.data.data.length; i++) {
              var resData = response.data.data[i]
              var missionStatus = ''
              switch (resData.taskStatus) {
                case 0:
                  missionStatus = '创建'
                  break
                case 1:
                  missionStatus = '发布'
                  break
                case 2:
                  missionStatus = '拍摄'
                  break
                case 3:
                  missionStatus = '上传'
                  break
                case 4:
                  missionStatus = '完成'
                  break
                default:
                  missionStatus = ''
                  break
              }
              // resData.taskPublishTime = this.dateFormat(
              //   resData.taskPublishTime
              // )
              // resData.taskProduceTime = this.dateFormat(
              //   resData.taskProduceTime
              // )
              // resData.taskPlanCompleteTime = this.dateFormat(
              //   resData.taskPlanCompleteTime
              // )
              resData.taskStatus = missionStatus
              this.missionList.push(response.data.data[i])
            }
            this.sortByTime()
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    sortByTime () {
      this.missionList.sort(function (a, b) {
        return b.taskProduceTime - a.taskProduceTime // 时间正序
      })
      if (this.missionList.length > 10) {
        this.missionList.length = 10
      }
      for (var i of this.missionList) {
        i.taskPublishTime = this.dateFormat(i.taskPublishTime)
        i.taskProduceTime = this.dateFormat(i.taskProduceTime)
        i.taskPlanCompleteTime = this.dateFormat(i.taskPlanCompleteTime, 1)
      }
    }
  }
}
</script>
<style>
.home .top {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ebeef5;
  height: 44px;
  align-items: center;
}
.home .top img {
  width: 38px;
  height: 38px;
  flex-basis: 40px;
  flex-shrink: 0;
  margin-left: 5px;
}
.home .top > div:nth-child(2) {
  flex-basis: 80px;
  flex-shrink: 0;
  font-weight: bolder;
}
.home .top > div:nth-child(3) {
  flex-basis: 400px;
  flex-shrink: 1;
}
.home .top > div:nth-child(4) {
  flex-basis: 80px;
  flex-shrink: 0;
}
.home .top a {
  color: #909399;
  font-size: 16px;
  text-decoration: none;
}
.outer {
  border: 1px solid #ebeef5;
}
/* .el-table {
  padding-left: 10px;
  padding-right: 10px;
} */
.el-table__body-wrapper tr td {
  border: 0px;
}
.homeTableContain .demo-table-expand .el-form-item{
  margin-right: 0;
  margin-bottom: 0;
  width: 49%
}
.homeTableContain .demo-table-expand label {
  width: 110px;
}
.homeTableContain .el-table__body .el-table__expanded-cell {
    background-color: rgb(242, 242, 242);
}
.homeTableContain .el-table__body .el-table__expanded-cell:hover {
    background-color: rgb(242, 242, 242) !important;
}
</style>
