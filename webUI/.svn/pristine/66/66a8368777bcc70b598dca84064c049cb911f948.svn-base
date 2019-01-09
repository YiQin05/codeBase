<template >
    <div>
        <div class="container top">
            <div class="logo"><img src="../../assets/logo.png" alt="img"></div>
            <h3>{{ msg }}</h3>
            <!-- <select id="select">
                <option selected value="珠海">珠海</option>
                <option value="广州">广州</option>
                <option value="深圳">深圳</option>
                <option value="佛山">佛山</option>
                <option value="东莞">东莞</option>
            </select> -->
            <div class="panel"></div>
        </div>
        <div class="container navi">
            <el-menu :default-active="activeIndex" active-text-color="white" class="menuWidth" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><router-link to="/home/:userID" tag="a">首页</router-link></el-menu-item>
                <el-menu-item index="2"><router-link to="/missionDetail/:userID" tag="a">任务管理</router-link></el-menu-item>
                <el-menu-item index="3"><router-link to="/scene/:userID" tag="a">场景识别</router-link></el-menu-item>
                <el-menu-item index="4"><router-link to="/inquire/:userID" tag="a">数据管理</router-link></el-menu-item>
                <el-menu-item index="5"><router-link to="/system/:userID" tag="a">系统管理</router-link></el-menu-item>
                <div id="log" :class="{'show':flag}">
                  <div class="login"><router-link to="/home/login/:userID" tag="a">登录</router-link></div>
                </div>
                <div class="user" :class="{'show': !flag}">
                  <div class="showUser">欢迎您，{{ userID }}</div>
                  <div class="logOut"><div @click="logOut">注销</div></div>
                </div>
            </el-menu>
        </div>
    </div>
</template>
<script>
export default {
  inject: ['reload'],
  name: 'MyHeader',
  data () {
    return {
      msg: '中国移动网络场景识别平台',
      activeIndex: '',
      headSearch: '',
      flag: false, //  false为未登录状态
      userID: ':userID' //  :userID为原始未登录路由路径
    }
  },
  mounted: function () {
    if (this.getCookie('userID') !== null) {
      this.userID = this.getCookie('userID')
      this.flag = true
      this.$router.push({
        name: 'home',
        params: {
          userID: this.userID
        }
      })
    }
    if (this.$route.name === 'home') {
      this.activeIndex = '1'
    }
    var navi = this.getCookie('navi')
    if (navi !== null) {
      this.handleSelect(navi)
    }
    if (this.flag === false) {
      this.$router.push({
        name: 'login'
      })
    }
  },
  methods: {
    handleSelect (key) {
      let expireDays = 1000 * 60 * 60 * 24 * 1
      switch (key) {
        case '1':
          this.setUrlCookie('navi', '1', expireDays)
          // this.setStorage('navi', '1')
          this.$router.push({
            name: 'home',
            params: {
              userID: this.userID
            }
          })
          this.activeIndex = '1'
          break
        case '2':
          this.setUrlCookie('navi', '2', expireDays)
          // this.setStorage('navi', '2')
          this.$router.push({
            name: 'missionDetail',
            params: {
              userID: this.userID
            }
          })
          this.activeIndex = '2'
          break
        case '3':
          this.setUrlCookie('navi', '3', expireDays)
          // this.setStorage('navi', '3')
          this.$router.push({
            name: 'scene',
            params: {
              userID: this.userID
            }
          })
          this.activeIndex = '3'
          break
        case '4':
          this.setUrlCookie('navi', '4', expireDays)
          // this.setStorage('navi', '4')
          this.$router.push({
            name: 'inquire',
            params: {
              userID: this.userID
            }
          })
          this.activeIndex = '4'
          break
        case '5':
          this.setUrlCookie('navi', '5', expireDays)
          // this.setStorage('navi', '5')
          this.$router.push({
            name: 'system',
            params: {
              userID: this.userID
            }
          })
          this.activeIndex = '5'
          break
      }
    },
    logOut () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('logout')
      params.append('userID', this.userID)
      this.$axios
        .post(path, params)
        .then(response => {
          if (response.data.code === 0) {
          }
        })
        .catch(error => {
          console.log(error)
        })
      this.userID = ':userID'
      this.delCookie('userID')
      this.delCookie('navi')
      this.flag = false
      this.$router.push({
        name: 'login',
        params: {
          userID: ':userID'
        }
      })
    }
  }
}
</script>
<style scoped>
.menuWidth{
  min-width: 550px;
}
.show{
  display: none;
}
.top {
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.logo img {
  width: 180px;
  height: 51px;
}

h3 {
  color: blue;
  flex-basis: 260px;
  flex-shrink: 0;
}

select {
  flex-basis: 80px;
  flex-shrink: 0;
}
.panel {
  flex-basis: 300px;
  flex-shrink: 1;
}
.navi ul {
  background-color: rgb(0, 153, 255);
  padding-left: 80px;
}
.navi li {
  color: black;
}
.navi li a {
  text-decoration: none;
}
a:hover {
  font-size: bolder;
}
.navi img {
  width: 40px;
  height: 38px;
}
#log a{
  text-decoration:none;
  color: #6c6c6c;
  /* color: rgba(0, 0, 0, .6); */
  font-weight: 550;
}
#log a:hover{
  text-decoration:none;
  color:white;
}
#log,.user{
  position: absolute;
  right: 20px;
  top:0px;
}
#log div{
  display: inline;
  color:white;
  line-height:42px;
}
.user div{
  display: inline;
  color:white;
  line-height:42px;
  margin-left:10px;
}
.logOut div{
  text-decoration: none;
  color:#6c6c6c;
  cursor: pointer;
}
.logOut div:hover{
  color:rgb(255, 153, 0)
}
@media screen and (max-width: 725px) {
  .user .showUser{
    display: none
  }
}
</style>
<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
* {
  margin: 0px;
  padding: 0px;
}
.TopTitle {
  border: 1px solid #ebeef5;
  border-left: 20px solid rgb(255, 204, 0);
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bolder;
  background-color: rgb(242, 242, 242);
  text-align: left;
  margin-top: 20px;
  margin-bottom: 10px;
}
.navi .el-menu--horizontal>.el-submenu .el-submenu__title{
  height: inherit;
  line-height: inherit;
  color: inherit;
  padding-right: 0px;
}
.el-submenu .el-submenu__title i{
  color: black;
}
.navi .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  background-color: rgb(46, 181, 251)
}
.el-menu--horizontal .el-menu--popup{
  width:96px;
}
.el-submenu{
  padding-right:0px;
}
.el-input .el-input__inner {
  border: 2px solid rgb(46, 181, 251);
  border-radius: 0px;
}
.el-input-group__append {
  border: 2px solid rgb(46, 181, 251);
  background-color: rgb(46, 181, 251);
  border-radius: 0px;
  font-size: 20px;
  color: white;
}
.navi .el-menu-item:not(.is-disabled):hover {
  background-color: rgb(46, 181, 251);
}
.navi .el-menu-item:not(.is-disabled):focus {
  background-color: rgb(46, 181, 251);
}
.el-menu--horizontal > .el-menu-item {
  height: 40px;
  line-height: 40px;
}
.navi .el-menu.el-menu--horizontal {
  border-bottom: 0px;
}
.el-tabs__content {
  min-height: 650px
}
</style>
