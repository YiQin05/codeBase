<template>
    <div class="byTimeSearch">
      <div class="filter">
        <el-date-picker
        v-model="time"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions2"
        size="small">
        </el-date-picker>
        <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
      </div>
      <el-table
          :data="pictureList"
          style="width: 100%"
          size="small">
          <el-table-column type="expand">
          <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="照片ID">
                      <span>{{ props.row.fileID }}</span>
                  </el-form-item>
                  <el-form-item label="照片角度标号">
                      <span>{{ props.row.angleIdx }}</span>
                  </el-form-item>
                  <!-- <el-form-item label="任务ID">
                      <span>{{ props.row.taskID }}</span>
                  </el-form-item>
                  <el-form-item label="经度">
                      <span>{{ props.row.picLongitude }}</span>
                  </el-form-item>
                  <el-form-item label="纬度">
                      <span>{{ props.row.picLatitude }}</span>
                  </el-form-item> -->
                  <el-form-item label="海拔高度">
                      <span>{{ props.row.picAltitude }}</span>
                  </el-form-item>
                  <el-form-item label="下倾角">
                      <span>{{ props.row.picElevationAngle }}</span>
                  </el-form-item>
                  <!-- <el-form-item label="方向角">
                      <span>{{ props.row.picDirectAngle }}</span>
                  </el-form-item> -->
                  <!-- <el-form-item label="拍摄时间">
                      <span>{{ props.row.picTime }}</span>
                  </el-form-item> -->
              </el-form>
          </template>
          </el-table-column>
          <el-table-column
          label="拍摄时间"
          prop="picTime">
          </el-table-column>
          <el-table-column
          label="任务ID"
          prop="taskID">
          </el-table-column>
          <el-table-column
          label="经度"
          prop="picLongitude">
          </el-table-column>
          <el-table-column
          label="纬度"
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
      pictureList: [],
      time: '',
      pickerOptions2: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      var beginTime = parseInt(this.time[0].getTime() / 1000)
      var endTime = parseInt(this.time[1].getTime() / 1000)
      this.getImgByTime(beginTime, endTime)
    },
    getImgByTime (beginTime, endTime) {
      let path = this.setAPIPath('/picSearchByTime')
      this.$axios
        .get(path, {
          params: {'beginTime': beginTime, 'endTime': endTime}
        })
        .then(response => {
          if (response.data.code === 0) {
            this.pictureList = response.data.data
          } else {
            this.errorMsg(response.data.code, this)
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
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.filter{
  position: relative;
  left: 0px;
  width: 416px;
  margin-bottom: 20px;
}
.byTimeSearch .demo-table-expand label {
  width: 110px
}
</style>
