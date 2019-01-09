<template>
  <div class="event container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="黑名单告警查询" name="first">
        <div class="condition">
          <div class="searchForm">
            <el-form :inline="true" :model="formInline" class="demo-form-inline form1" size="mini" label-width="100px">
              <el-form-item label="人员：" class="formItem1">
                <el-input v-model="formInline.user" placeholder="审批人" class="standard"></el-input>
              </el-form-item>
              <el-form-item label="监测点：">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="相似度：">
                <el-col :span="11">
                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-col>
                <el-col class="line" :span="2" style="text-align:center">--</el-col>
                <el-col :span="11">
                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-col>
              </el-form-item>
            </el-form>
            <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini" label-width="100px">
              <el-form-item label="时间区间：">
                <span :class="{ 'el-tag':true, 'el-tag--info':!tagType.tag1, 'el-tag--MyTag':tagType.tag1}" @click="changeTag('tag1')">全部</span>
                <span :class="{ 'el-tag':true, 'el-tag--info':!tagType.tag2, 'el-tag--MyTag':tagType.tag2}" @click="changeTag('tag2')">今天</span>
                <span :class="{ 'el-tag':true, 'el-tag--info':!tagType.tag3, 'el-tag--MyTag':tagType.tag3}" @click="changeTag('tag3')">近三天</span>
                <span :class="{ 'el-tag':true, 'el-tag--info':!tagType.tag4, 'el-tag--MyTag':tagType.tag4}" @click="changeTag('tag4')">近一周</span>
                <span :class="{ 'el-tag':true, 'el-tag--info':!tagType.tag5, 'el-tag--MyTag':tagType.tag5}" @click="changeTag('tag5')">近一月</span>
              </el-form-item>
              <el-form-item label="自定义：">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2" style="text-align:center">--</el-col>
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
            </el-form>
          </div>
          <div class="button">
            <el-button type="primary" @click="onSubmit" size="mini">搜索</el-button>
            <el-button size="mini">重置</el-button>
          </div>
        </div>
        <inquire-result/>
      </el-tab-pane>
      <el-tab-pane label="陌生人告警查询" name="second">
        <stranger-alert/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import inquireResult from '@/components/eventInquire/inquireResult'
import strangerAlert from '@/components/eventInquire/strangerAlert'
export default {
  name: 'event',
  data () {
    return {
      activeName: 'first',
      countNum: 3000,
      tagType: {
        tag1: false,
        tag2: false,
        tag3: false,
        tag4: false,
        tag5: false
      },
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  components: {
    inquireResult,
    strangerAlert
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    onSubmit () {
      console.log('submit!')
    },
    changeTag (tag) {
      for (var i in this.tagType) {
        if (i === tag) {
          this.tagType[tag] = !this.tagType[tag]
        } else {
          this.tagType[i] = false
        }
      }
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="less" scoped>
@formItemWidth: 383px;
@bgColor: rgb(242, 242, 242);
.flexPosition {
  display: flex;
  flex-direction: row;
  justify-content:  start;
  flex-wrap: wrap;
}
.el-tag--MyTag {
  background-color: rgb(84, 210, 20);
  border-color: rgba(103,194,58,.2);
  color: white;
}
.event{
  font-size: 14px;
  .condition{
    position: relative;
    background-color: @bgColor;
    padding-top: 10px;
    margin-bottom: 10px;
    .searchForm{
      .form1{
        .formItem1{
          width: @formItemWidth;
        }
      }
      .form2{
        .formItem1{
          width: @formItemWidth;
        }
      }
    }
    .button{
      position: absolute;
      right: 65px;
      bottom: 10px;
    }
  }
}

</style>
<style lang="less">
@bgColor: rgb(242, 242, 242);
.el-tag{
  cursor: pointer;
}
</style>
