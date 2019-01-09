<template>
  <div class="right">
    <div class="title">右边数据</div>
    <div class="recodate">
      <div class="showData" v-for="item in recoList" :key="item.name">
        <div class="topTitle">
          {{ item.locate }}
          <span>{{ item.time }}</span>
        </div>
        <div class="date">
          <div class="leftImg">
            <img :src="item.shortImg" alt=""> <br>
            <span>抓拍人脸</span>
          </div>
          <div class="middleDate">
            <div class="circle">
              <el-progress type="circle" :percentage="item.present" color="#FFCC00" width=50></el-progress>
            </div>
            <div><span>姓名：</span> {{item.name}} </div>
            <div><span>性别：</span> {{item.sex}} </div>
            <div><span>所在库：</span> {{item.dataBsc}} </div>
            <div><span>证件号：</span> {{item.ID}} </div>
          </div>
          <div class="rightImg">
            <img :src="item.recoImg" alt=""> <br>
            <span>比中人脸</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'right',
  data () {
    return {
      recoList: [
        {
          shortImg: require('../../assets/logo.png'),
          locate: '大礼堂东侧大门',
          time: '2017-05-12 15:54:22',
          name: 1384510,
          sex: '女',
          dataBsc: 'DT1W',
          ID: '未知',
          present: '62',
          recoImg: require('../../assets/logo.png')
        },
        {
          shortImg: require('../../assets/logo.png'),
          locate: '大东侧大门',
          time: '2017-05-12 15:54:22',
          name: 1383570,
          sex: '女',
          dataBsc: 'DT1W',
          ID: '未知',
          present: '70',
          recoImg: require('../../assets/logo.png')
        },
        {
          shortImg: require('../../assets/logo.png'),
          locate: '大礼大门',
          time: '2017-05-12 15:54:22',
          name: 178470,
          sex: '女',
          dataBsc: 'DT1W',
          ID: '未知',
          present: '85',
          recoImg: require('../../assets/logo.png')
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@bgColor: rgb(242, 242, 242);
@borderLeftColor: rgb(255,204,0);
.right{
  min-width: 350px;
  color: gray;
  font-size: 14px;
  .title{
    height: 40px;
    background-color: @bgColor;
    border-left: 5px solid @borderLeftColor;
    padding-left: 10px;
    line-height: 40px;
  }
  .recodate{
    background-color: @bgColor;
    margin-top: 10px;
    padding: 0px;
    .showData{
      border-bottom: 1px dotted gray;
      .topTitle{
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        span{
          float: right;
        }
      }
      .date{
        padding: 0 15px 10px 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        .middleDate{
          min-width: 110px;
          .circle{
            width: 100%;
            text-align: center
          }
        }
        .leftImg,.rightImg{
          text-align: center;
          img{
            width: 84px;
            height: 76px;
          }
        }
      }
    }
  }
}

</style>
