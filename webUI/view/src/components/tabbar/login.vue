<template>
    <div class="container login">
        <el-card shadow="always" class="card">
            <div class="title">{{ msg }}</div>
            <el-input placeholder="请输入用户ID" v-model="userID" @keyup.enter="submit">
                <template slot="prepend"><i class="fa fa-user-o " aria-hidden="true"></i></template>
            </el-input>
            <el-input placeholder="请输入密码" v-model="passwd" type="password" @keyup.enter="submit">
                <template slot="prepend"><i class="fa fa-lock" aria-hidden="true"></i></template>
            </el-input>
            <el-button size="medium" class="button" @click="submit"  v-loading.fullscreen.lock="loading" @keyup.enter ="submit" autofocus>登录</el-button>
            <!-- <div class="longin-link">
                <router-link to="/home/forget" tag="a">忘记密码</router-link>
            </div> -->
        </el-card>
    </div>
</template>

<script>
export default {
  inject: ['reload'],
  data () {
    return {
      msg: '登录',
      isLogin: false,
      userID: '',
      passwd: '',
      loading: false,
      userList: []
    }
  },
  created () {

  },
  methods: {
    // 验证规则
    login () {
      if (this.account !== '' && this.password !== '') {
        this.submit()
      }
    },
    submit () {
      this.loading = true
      let params = new URLSearchParams()
      params.append('userID', this.userID)
      params.append('passwd', this.passwd)
      let path = this.setAPIPath('login')
      this.$axios
        .post(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.loading = false
            this.openMsg('登录成功！', 'success', this)
            this.openSuccess(response)
          } else {
            setTimeout(() => {
              this.loading = false
            }, 1000)
            this.openMsg('登录失败！账号名或密码错误！', 'error', this)
          }
        })
        .catch(error => {
          setTimeout(() => {
            this.loading = false
          }, 1000)
          this.openMsg('网络错误', 'error', this)
          console.log(error)
        })
    },
    openSuccess (response) {
      let expireDays = 1000 * 60 * 60 * 24 * 15
      this.setCookie('userID', response.config.data, expireDays)
      this.isLogin = true
      this.userID = this.getCookie('userID')
      this.setUserType()
      // this.$router.push({
      //   name: 'home',
      //   params: {
      //     userID: this.userID
      //   }
      // })
      this.reload()
    },
    setUserType () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('user')
      this.$axios
        .get(path, params)
        .then(response => {
          if (response.data.code === 0) {
            for (let i of response.data.data) {
              if (i.userID === this.userID) {
                let expireDays = 1000 * 60 * 60 * 24 * 15
                this.setCookie('userType', i.userType, expireDays)
                break
              }
            }
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
<style scoped>
.login {
  background: url('../../assets/login.jpg');
  height: 472px;
  position: relative;
  background-repeat: no-repeat;
}
.card {
  width: 350px;
  height: 351px;
  position: absolute;
  right: 12%;
  top: 80px;
  background-color: rgba(255, 255, 255, 0.9);
}
.login .el-input {
  margin-bottom: 20px;
  margin-top: 20px;
}
.title {
  font-weight: bolder;
}
.button {
  width: 310px;
  height: 40px;
  background-color: #f40;
  font-size: 14px;
  font-weight: 700;
  color: white;
  margin-top: 20px;
}
.longin-link {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 33px;
  align-items: flex-end;
}
.longin-link a {
  flex-basis: 60px;
  color: #6c6c6c;
  font-size: 12px;
  text-decoration: none;
}
.longin-link a:hover {
  color: #f40;
}
</style>
<style>
.el-input-group--prepend .el-input__inner,
.el-input-group__append {
  border: 1px solid #dcdfe6;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.login .el-input .el-input__inner {
  width: 260px;
}
</style>
