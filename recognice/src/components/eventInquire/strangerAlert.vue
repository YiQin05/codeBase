<template>
  <div>
    <div class="condition">
      <div class="searchForm">
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
  </div>
</template>

<script>
import inquireResult from '@/components/eventInquire/inquireResult'
export default {
  name: 'strangerAlert',
  data () {
    return {
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
    inquireResult
  },
  methods: {
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
