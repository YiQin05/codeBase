<template>
  <div>
    <div class="result">
      <div class="imgPanel" v-for="item in showList" :key="item.ID">
        <div class="img">
          <img :src="item.url" alt="">
          <img :src="item.url2" alt="">
        </div>
        <div class="detailData">
          <div class="detailTop">{{ item.name }}<span>相似度：</span><span>{{ item.rate }}%</span></div>
          <div class="detailBottom"><span>地点：{{ item.locate }}</span><span>{{ item.time }}</span></div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="pageButon">
      <div class="left">
        共<span>{{ countNum }}</span>条
        <span>
          每页
          <span>
            <select v-model="showNum">
              <option value =5>5</option>
              <option value =10>10</option>
              <option value=15>15</option>
              <option value=20>20</option>
            </select>
          </span>
          条
        </span>
      </div>
      <div class="right">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="showNum"
          layout="prev, pager, next, jumper"
          :total="countNum">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inquireResult',
  data () {
    return {
      countNum: 3000,
      showNum: 5,
      page: 1,
      newNum: 6,
      imgList: [
        {
          ID: 1,
          name: '杜涛',
          rate: '89',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/logo.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 2,
          name: '杜海',
          rate: '90',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/1.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 3,
          name: '杜海涛',
          rate: '91',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/2.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 4,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/3.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 5,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/4.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 6,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/logo.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 7,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/logo.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 8,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/1.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 9,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/2.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 10,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/3.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 11,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/4.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 12,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/logo.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 13,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/logo.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 14,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/1.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 15,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/2.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 16,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/3.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 17,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/4.png'),
          url2: require('../../assets/logo.png')
        },
        {
          ID: 18,
          name: '杜海涛',
          rate: '88',
          locate: '西坝河姜汁可乐',
          time: '2016.10.25 00:00:00',
          url: require('../../assets/logo.png'),
          url2: require('../../assets/logo.png')
        }
      ],
      showList: []
    }
  },
  created () {
    this.countNum = this.imgList.length
    this.showList.length = 0
    for (var i = 0; i < this.showNum; i++) {
      this.showList.push(this.imgList[i])
    }
  },
  watch: {
    showNum (newVal, oldVal) {
      this.showList.length = 0
      for (var i = 0; i < newVal; i++) {
        if (i < this.countNum) {
          this.showList.push(this.imgList[i])
        }
      }
    }
  },
  computed: {
    changeShowList () {
      return this.showList.length
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.page = val
      var start = this.showNum * (val - 1)
      var end = val * this.showNum
      this.showList.length = 0
      for (var i = start; i < end; i++) {
        if (i < this.countNum) {
          this.showList.push(this.imgList[i])
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@bgColor: rgb(242, 242, 242);
.flexPosition {
  display: flex;
  flex-direction: row;
  justify-content:  start;
  flex-wrap: wrap;
}

.result{
  background-color: @bgColor;
  height: 100%;
  // min-height: 700px;
  padding-top: 10px;
  .flexPosition();
  .imgPanel{
    background-color: white;
    width: 340px;
    // height: 191px;
    // float: left;
    margin-left: 5px;
    border: 1px solid @bgColor;
    padding: 10px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
    .img{
      img{
        width: 165px;
        height: 116px;
        &:last-child{
          margin-left: 5px;
        }
      }
    }
    .detailData{
      @fontSize:16px;

      .heightContrl {
        height: 25px;
        line-height: 25px;
      }
      color: gray;
      .detailTop{
        font-weight: bolder;
        font-size: @fontSize;
        color: rgb(80, 80, 80);
        .heightContrl();
        span{
          color: gray;
          font-weight: normal;
          font-size: 14px;
          margin-left: 20px;
          &:nth-child(2){
            font-weight: bolder;
            margin-left: 0px;
            font-size: @fontSize;
            color: rgb(0, 153, 255);
          }
        }
      }
      .detailBottom{
        .heightContrl();
        position: relative;
        span{
          &:last-child{
            position: absolute;
            right: 0px;
          }
        }
      }
    }
  }
  .clear{
    clear: both;
  }
}
.pageButon{
  background-color: @bgColor;
  margin-bottom: 20px;
  .flexPosition();
  justify-content: space-between;
  .left{
    margin-left: 120px;
    width: 250px;
    margin-top: 10px;
    margin-bottom: 20px;
    span{
      &:first-child{
        margin-left: 10px;
        margin-right: 10px;
      }
      &:last-child{
        margin-left: 20px;
        span{
          margin-left: 10px;
          margin-right: 10px;
          select{
            width: 70px;
          }
        }
      }
    }
  }
  .right{
    width: 500px;
    margin-right: 40px;
    margin-top: 10px;
  }
}
</style>
<style lang="less">
@bgColor: rgb(242, 242, 242);
.right{
  .el-pagination{
    button.btn-prev,button.btn-next{
      background-color: @bgColor;
    }
    ul.el-pager{
      li{
        background-color: @bgColor;
      }
    }
  }
}
</style>
