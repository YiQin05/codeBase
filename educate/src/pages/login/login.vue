<template>
<div class="page_contain">
  <div class="page_title">众石·智能改变未来</div>
  <div class="login">
    <div class="title">登录</div>
    <div class="line">
      <img src="../../assets/icon1.png" alt="" class="icon">
      <input type="text" placeholder="请输入账号">
    </div>
    <div class="line">
      <img src="../../assets/icon2.png" alt="" class="icon">
      <input type="password" placeholder="请输入密码">
    </div>
    <el-button type="success" class="btn_success" @click="login">登录</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login () {
      this.$router.push()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.page_contain{
  background: url('../../assets/bg2.jpg');
  width: 100%;
  height: 1000px;
  position: relative;
  .page_title{
    height: 80px;
    line-height: 80px;
    width: 100%;
    color: white;
    font-size: 30px;
    font-weight: bolder;
    padding-left: 50px;
    text-align: left;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .login{
    position: absolute;
    right: 10%;
    top: 25%;
    width: 500px;
    background-color: white;
    padding: 50px;
    .title{
      width: 100%;
      text-align: center;
      font-size: 20px;
      font-weight: bolder;
      margin-bottom: 40px;
    }
    .line{
      border-bottom: 1px solid #d8d8d8;
      margin: 22px 1%;
      height: 34px;
      line-height: 34px;
      display: flex;
      .icon{
        height: 24px;
      }
      input{
        border: 0px;
        padding-left: 10px;
        font-size: 16px;
        &:focus{
          outline: -webkit-focus-ring-color auto 0px !important;
        }
      }
    }
    .btn_success{
      width: 50%;
      margin-top: 50px;
    }
  }
}
</style>
