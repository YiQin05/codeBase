<template>
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
        <el-form-item label="性别">
          <span :class="{ 'el-tag':true, 'el-tag--info':!tagGenel.tag1, 'el-tag--MyTag':tagGenel.tag1}" @click="changeTag(tagGenel, 'tag1')">全部</span>
          <span :class="{ 'el-tag':true, 'el-tag--info':!tagGenel.tag2, 'el-tag--MyTag':tagGenel.tag2}" @click="changeTag(tagGenel, 'tag2')">男</span>
          <span :class="{ 'el-tag':true, 'el-tag--info':!tagGenel.tag3, 'el-tag--MyTag':tagGenel.tag3}" @click="changeTag(tagGenel, 'tag3')">女</span>
        </el-form-item>
        <el-form-item label="特征">
          <span :class="{ 'el-tag':true, 'el-tag--info':!spacialType.tag1, 'el-tag--MyTag':spacialType.tag1}" @click="changeTag(spacialType, 'tag1')">全部</span>
          <span :class="{ 'el-tag':true, 'el-tag--info':!spacialType.tag2, 'el-tag--MyTag':spacialType.tag2}" @click="changeTag(spacialType, 'tag2')">眼镜</span>
          <span :class="{ 'el-tag':true, 'el-tag--info':!spacialType.tag3, 'el-tag--MyTag':spacialType.tag3}" @click="changeTag(spacialType, 'tag3')">无眼镜</span>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini" label-width="100px">
        <el-form-item label="时间区间：">
          <span :class="{ 'el-tag':true, 'el-tag--info':!tagTime.tag1, 'el-tag--MyTag':tagTime.tag1}" @click="changeTag(tagTime, 'tag1')">全部</span>
          <span :class="{ 'el-tag':true, 'el-tag--info':!tagTime.tag2, 'el-tag--MyTag':tagTime.tag2}" @click="changeTag(tagTime, 'tag2')">今天</span>
          <span :class="{ 'el-tag':true, 'el-tag--info':!tagTime.tag3, 'el-tag--MyTag':tagTime.tag3}" @click="changeTag(tagTime, 'tag3')">近三天</span>
          <span :class="{ 'el-tag':true, 'el-tag--info':!tagTime.tag4, 'el-tag--MyTag':tagTime.tag4}" @click="changeTag(tagTime, 'tag4')">近一周</span>
          <span :class="{ 'el-tag':true, 'el-tag--info':!tagTime.tag5, 'el-tag--MyTag':tagTime.tag5}" @click="changeTag(tagTime, 'tag5')">近一月</span>
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
</template>

<script>
export default {
  name: 'condition',
  data () {
    return {
      activeName: 'first',
      countNum: 3000,
      tagTime: {
        tag1: false,
        tag2: false,
        tag3: false,
        tag4: false,
        tag5: false
      },
      tagGenel: {
        tag1: false,
        tag2: false,
        tag3: false
      },
      spacialType: {
        tag1: false,
        tag2: false,
        tag3: false
      },
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    onSubmit () {
      console.log('submit!')
    },
    changeTag (obj, tag) {
      for (var i in obj) {
        if (i === tag) {
          obj[tag] = !obj[tag]
        } else {
          obj[i] = false
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

</style>
<style lang="less">
.el-tag{
  cursor: pointer;
}
</style>
