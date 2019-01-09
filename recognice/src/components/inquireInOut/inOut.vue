<template>
  <div class="container">
    <div class="topCondition">
      <condition/>
    </div>
    <div class="mainData">
      <el-table
        :data="inOutData"
        style="width: 100%">
        <el-table-column
          label="抓拍人脸"
          width="140">
          <template slot-scope="scope">
            <img :src="scope.row.shootImg" alt="抓拍人脸" style="width:76px;height:66px">
          </template>
        </el-table-column>
        <el-table-column
          prop="rate"
          label="相识度"
          sortable
          width="90">
        </el-table-column>
        <el-table-column
          label="人脸库图"
          width="140">
          <template slot-scope="scope">
            <img :src="scope.row.dbImg" alt="人脸库图" style="width:76px;height:66px">
          </template>
        </el-table-column>
        <el-table-column
          prop="record"
          label="进出记录"
          sortable>
        </el-table-column>
        <el-table-column
          prop="alertCamer"
          label="报警摄像机">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="dbLocate"
          label="所在库">
        </el-table-column>
        <el-table-column
          prop="department"
          label="部门">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import condition from '@/components/inquireInOut/condition'
export default {
  name: 'inOut',
  data () {
    return {
      inOutData: [
        {
          shootImg: require('../../assets/logo.png'),
          rate: '66%',
          dbImg: require('../../assets/1.png'),
          record: '2018-11-28 16:20:11',
          alertCamer: '东大门-摄像头1',
          name: '张平',
          dbLocate: 'DT1W',
          department: '数学组'
        },
        {
          shootImg: require('../../assets/logo.png'),
          rate: '58%',
          dbImg: require('../../assets/1.png'),
          record: '2018-11-28 14:28:11',
          alertCamer: '东大门-摄像头1',
          name: '张平',
          dbLocate: 'DT1W',
          department: '数学组'
        },
        {
          shootImg: require('../../assets/logo.png'),
          rate: '67%',
          dbImg: require('../../assets/1.png'),
          record: '2018-11-28 13:28:11',
          alertCamer: '东大门-摄像头1',
          name: '张平',
          dbLocate: 'DT1W',
          department: '数学组'
        },
        {
          shootImg: require('../../assets/logo.png'),
          rate: '59%',
          dbImg: require('../../assets/1.png'),
          record: '2018-11-28 12:28:11',
          alertCamer: '东大门-摄像头1',
          name: '张平',
          dbLocate: 'DT1W',
          department: '数学组'
        },
        {
          shootImg: require('../../assets/logo.png'),
          rate: '80%',
          dbImg: require('../../assets/1.png'),
          record: '2018-11-28 11:28:11',
          alertCamer: '东大门-摄像头1',
          name: '张平',
          dbLocate: 'DT1W',
          department: '数学组'
        },
        {
          shootImg: require('../../assets/logo.png'),
          rate: '70%',
          dbImg: require('../../assets/1.png'),
          record: '2018-11-28 10:28:11',
          alertCamer: '东大门-摄像头1',
          name: '张平',
          dbLocate: 'DT1W',
          department: '数学组'
        }
      ]
    }
  },
  components: {
    condition
  }
}
</script>
<style lang="less" scoped>
</style>
