<template>
    <div class="container">
        <div class="TopTitle">系统管理</div>
        <div class="system">
          <el-tabs type="border-card" tab-position="left" v-model="activeName">
            <el-tab-pane label="用户管理" name="user">
              <div class="user">
                <div class="userList" v-if="userType === '0'? true:false">
                  <div class="userTitle">用户列表</div>
                  <el-button type="success" class="btn" size="small" @click="handleUser">增加用户</el-button>
                  <user ref="user"/>
                </div>
                <div class="userTitle">修改个人密码</div>
                <div class="changePsw">
                  <el-form ref="password" :model="password" :rules="rules" class="demo-form-inline demo-ruleForm" size="mini" label-width="150px">
                    <!-- string类型 -->
                    <el-form-item label="用户ID：" prop="userID">
                        <el-input v-model="userID" disabled></el-input>
                    </el-form-item>
                    <!-- string类型 -->
                    <el-form-item label="请输入旧密码：" prop="oldPasswd">
                        <el-input type="password" v-model="password.oldPasswd"></el-input>
                    </el-form-item>
                    <!-- string类型 -->
                    <el-form-item label="请输入新密码：" prop="newPasswd">
                        <el-input type="password" v-model="password.newPasswd"></el-input>
                    </el-form-item>
                    <!-- string类型 -->
                    <el-form-item label="请再次输入新密码：" prop="checkPasswd">
                        <el-input type="password" v-model="password.checkPasswd"></el-input>
                    </el-form-item>
                    <el-button size="mini" type="primary" @click="passwordSubmit">提交</el-button>
                  </el-form>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane :label="parametersLabel" name="parameters" :disabled="userType === '0'? false:true" >
              <div class="scene">
                <div class="userTitle">场景识别参数</div>
                <div class="sceneForm">
                  <el-form ref="scenePara" size="mini" :model="sceneParameter" :rules="rules" class="demo-form-inline demo-ruleForm" label-width="120px">
                    <el-form-item label="Top Number" prop="sceneTopNum">
                        <el-select v-model.number="sceneParameter.sceneTopNum" placeholder="请选择活动区域">
                          <el-option label="1" value=1></el-option>
                          <el-option label="2" value=2></el-option>
                          <el-option label="3" value=3></el-option>
                          <el-option label="4" value=4></el-option>
                          <el-option label="5" value=5></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="最小置信度" prop="confidence">
                      <el-tooltip class="item" effect="light" content="默认0.05，建议值0.01-0.1之间，可设置0.0-1.0之间" placement="right-end">
                        <el-input v-model="sceneParameter.confidence"></el-input>
                      </el-tooltip>
                    </el-form-item>
                    <el-button size="mini" type="primary" class="bottomBtn" @click="sceneSubmit">提交</el-button>
                  </el-form>
                </div>
              </div>
              <hr/>
              <div class="object">
                <div class="userTitle">物体识别参数</div>
                <div class="objectForm">
                  <el-form ref="objectPar" size="mini" :model="objectParameter" :rules="rules" class="demo-form-inline demo-ruleForm" label-width="120px">
                    <el-form-item label="Top Number" prop="objTopNum">
                        <el-select v-model.number="objectParameter.objTopNum" placeholder="请选择活动区域">
                          <el-option label="1" value=1></el-option>
                          <el-option label="2" value=2></el-option>
                          <el-option label="3" value=3></el-option>
                          <el-option label="4" value=4></el-option>
                          <el-option label="5" value=5></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="最小百分比" prop="rate">
                      <el-tooltip class="item" effect="light" content="默认0.8%，建议值0.3%-2%之间，可设置0%-100%之间" placement="right-end">
                        <el-input v-model="objectParameter.rate"><i slot="suffix" class="el-input__icon fa fa-percent" aria-hidden="true"></i></el-input>
                      </el-tooltip>
                    </el-form-item>
                    <el-button size="mini" type="primary" class="bottomBtn" @click="objectSubmit">提交</el-button>
                  </el-form>
                </div>
              </div>
              <hr/>
              <div class="apply">
                <div class="userTitle">应用参数</div>
                <div class="applyForm">
                  <el-form ref="applyPar" size="mini" :model="applyParameter" :rules="rules" class="demo-form-inline demo-ruleForm" label-width="120px">
                    <el-form-item label="验收通过置信度" prop="passRate">
                      <el-tooltip class="item" effect="light" content="默认0.9，建议值0.8-1.0之间，可设置0.0-1.0之间" placement="right-end">
                        <el-input v-model="applyParameter.passRate"></el-input>
                      </el-tooltip>
                    </el-form-item>
                    <el-form-item label="规划场景置信度" prop="plannerRate">
                      <el-tooltip class="item" effect="light" content="默认0.8，建议值0.7-1.0之间，可设置0.0-1.0之间" placement="right-end">
                        <el-input v-model="applyParameter.plannerRate"></el-input>
                      </el-tooltip>
                    </el-form-item>
                    <el-form-item label="Top Number" prop="applyTopNum">
                        <el-select v-model.number="applyParameter.applyTopNum">
                          <el-option label="1" value=1></el-option>
                          <el-option label="2" value=2></el-option>
                          <el-option label="3" value=3></el-option>
                          <el-option label="4" value=4></el-option>
                          <el-option label="5" value=5></el-option>
                          <el-option label="6" value=6></el-option>
                          <el-option label="7" value=7></el-option>
                          <el-option label="8" value=8></el-option>
                          <el-option label="9" value=9></el-option>
                          <el-option label="10" value=10></el-option>
                        </el-select>
                    </el-form-item>
                    <el-button size="mini" type="primary" class="bottomBtn" @click="applySubmit">提交</el-button>
                  </el-form>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小区管理" name="cell">
              <div class="userTitle">小区列表</div>
                <el-button type="success" class="btn cellBtn" size="small" @click="handleCell" :disabled="(userType !== '2')? false:true">增加小区</el-button>
                <cell ref="cell"/>
            </el-tab-pane>
          </el-tabs>
        </div>
        <el-dialog title="增加用户" width="30%" :visible.sync="userVisible">
          <addUser v-on:showFlag="showFlag"/>
        </el-dialog>
        <el-dialog title="增加小区" width="70%" :visible.sync="cellVisible">
          <add-cell v-on:showFlag="showFlag"/>
        </el-dialog>
    </div>
</template>

<script>
import user from './user.vue'
import cell from './cell.vue'
import addUser from './addUser.vue'
import addCell from './addCell.vue'
import { getSceneConfig, getObjectConfig, getApplyConfig } from '../../config/getData.js'
export default {
  data () {
    var precent = (rule, value, callback) => {
      if (rule.field === 'confidence') {
        if (isNaN(this.sceneParameter.confidence)) {
          callback(new Error('只能填数字！'))
        } else if (parseFloat(this.sceneParameter.confidence) < 0 || parseFloat(this.sceneParameter.confidence) > 1) {
          callback(new Error('只能在0-1之间'))
        } else if (value !== '') {
          this.sceneParameter.confidence = parseFloat(this.sceneParameter.confidence)
          callback()
        }
      } else if (rule.field === 'rate') {
        if (value === '') {
          callback(new Error('不能为空！'))
        } else if (isNaN(this.objectParameter.rate)) {
          callback(new Error('只能填数字！'))
        } else if (parseFloat(this.sceneParameter.confidence) < 0 || parseFloat(this.sceneParameter.confidence) > 100) {
          callback(new Error('百分比只能在0-100之间'))
        } else if (value !== '') {
          this.objectParameter.rate = parseFloat(
            this.objectParameter.rate
          )
          callback()
        }
      } else if (rule.field === 'passRate') {
        if (value === '') {
          callback(new Error('不能为空！'))
        } else if (isNaN(this.applyParameter.passRate)) {
          callback(new Error('只能填数字！'))
        } else if (parseFloat(this.applyParameter.passRate) < 0 || parseFloat(this.applyParameter.passRate) > 1) {
          callback(new Error('百分比只能在0-1之间'))
        } else if (value !== '') {
          this.applyParameter.passRate = parseFloat(
            this.applyParameter.passRate
          )
          callback()
        }
      } else if (rule.field === 'plannerRate') {
        if (value === '') {
          callback(new Error('不能为空！'))
        } else if (isNaN(this.applyParameter.plannerRate)) {
          callback(new Error('只能填数字！'))
        } else if (parseFloat(this.applyParameter.plannerRate) < 0 || parseFloat(this.applyParameter.plannerRate) > 1) {
          callback(new Error('百分比只能在0-1之间'))
        } else if (value !== '') {
          this.applyParameter.plannerRate = parseFloat(
            this.applyParameter.plannerRate
          )
          callback()
        }
      }
    }
    var checkDifferent = (rule, value, callback) => {
      if (rule.field === 'newPasswd') {
        if (this.password.newPasswd === this.password.oldPasswd) {
          callback(new Error('新密码不能与旧密码相同！'))
        } else {
          callback()
        }
      } else if (rule.field === 'checkPasswd') {
        if (this.password.newPasswd !== this.password.checkPasswd) {
          callback(new Error('两次密码输入不一致'))
        } else {
          callback()
        }
      }
    }
    return {
      userID: '',
      userVisible: false,
      cellVisible: false,
      userType: '',
      parametersLabel: '系统参数设置',
      activeName: 'user',
      sceneParameter: {
        sceneTopNum: 5,
        confidence: 0.05
      },
      objectParameter: {
        objTopNum: 5,
        rate: 0.8
      },
      applyParameter: {
        passRate: 0.9,
        plannerRate: 0.8,
        applyTopNum: 5
      },
      password: {
        oldPasswd: '',
        newPasswd: '',
        checkPasswd: ''
      },
      rules: {
        confidence: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: precent, trigger: 'blur' }
        ],
        rate: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: precent, trigger: 'blur' }
        ],
        passRate: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: precent, trigger: 'blur' }
        ],
        plannerRate: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: precent, trigger: 'blur' }
        ],
        oldPasswd: [{ required: true, message: '不能为空！', trigger: 'blur' }],
        newPasswd: [
          { required: true, message: '不能为空！', trigger: 'blur' }
        ],
        checkPasswd: [
          { required: true, message: '不能为空！', trigger: 'blur' },
          { validator: checkDifferent, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    user,
    cell,
    addUser,
    addCell
  },
  created () {
    this.userID = this.getCookie('userID')
    this.userType = this.getCookie('userType')
    this.showParameters()
  },
  mounted () {
    getSceneConfig().then(data => {
      this.sceneParameter.sceneTopNum = data.data.topNum
      this.sceneParameter.confidence = data.data.confidence
    })
    getObjectConfig().then(data => {
      this.objectParameter.objTopNum = data.data.topNum
      this.objectParameter.rate = data.data.rate * 100
    })
    getApplyConfig().then(data => {
      this.applyParameter.passRate = data.data.accpetRate
      this.applyParameter.plannerRate = data.data.planRate
      this.applyParameter.planTopNum = data.data.planTopNum
    })
  },
  methods: {
    showParameters () {
      if (this.userType !== '0') {
        this.parametersLabel = ''
      }
    },
    showFlag (val) {
      this.userVisible = val
      this.cellVisible = val
      this.$refs.user.getUserList()
      this.$refs.cell.toCellList()
    },
    sceneSubmit () {
      this.$refs.scenePara.validate(valid => {
        if (valid) {
          this.undateScene()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    objectSubmit () {
      this.$refs.objectPar.validate(valid => {
        if (valid) {
          this.undateObject()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    applySubmit () {
      this.$refs.applyPar.validate(valid => {
        if (valid) {
          this.updateApply()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    passwordSubmit () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/passwd')
      params.append('userID', this.userID)
      params.append('oldPasswd', this.password.oldPasswd)
      params.append('newPasswd', this.password.newPasswd)
      this.$axios
        .put(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.openMsg('修改成功！', 'success', this)
            for (var i in this.password) {
              this.password[i] = ''
            }
          } else if (response.data.code === 1) {
            this.openMsg('失败，旧密码输入错误！', 'error', this)
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    undateScene () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/updateConfig/sceneParameter')
      params.append('topNum', parseInt(this.sceneParameter.sceneTopNum))
      params.append('confidence', this.sceneParameter.confidence)
      this.$axios
        .put(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.openMsg('提交成功！', 'success', this)
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    undateObject () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/updateConfig/objectParameter')
      params.append('topNum', parseInt(this.objectParameter.objTopNum))
      params.append('confidence', this.objectParameter.rate)
      this.$axios
        .put(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.openMsg('提交成功！', 'success', this)
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateApply () {
      let params = new URLSearchParams()
      let path = this.setAPIPath('/updateConfig/ApplicationParameter')
      console.log(path)
      params.append('accpetRate', this.applyParameter.passRate)
      params.append('planRate', this.applyParameter.plannerRate)
      params.append('planTopNum', this.applyParameter.applyTopNum)
      this.$axios
        .put(path, params)
        .then(response => {
          if (response.data.code === 0) {
            this.openMsg('提交成功！', 'success', this)
          } else {
            this.errorMsg(response.data.code, this)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleUser () {
      this.userVisible = true
      // this.$router.push({
      //   name: 'addUser',
      //   params: {
      //     userID: this.userID
      //   }
      // })
    },
    handleCell () {
      this.cellVisible = true
      // this.$router.push({
      //   name: 'addCell',
      //   params: {
      //     userID: this.userID
      //   }
      // })
    }
  }
}
</script>

<style scoped>
.system .el-input__inner {
  width: 195px;
}
.user,
.cell {
  border: 1px solid #ebeef5;
  margin-bottom: 10px;
  position: relative;
}
.userTitle {
  background: url('..\..\assets\enquiry.png');
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  color: white;
  text-align: left;
  /* display: flex;
    justify-content: space-between; */
  padding-left: 20px;
  margin-bottom: 10px;
  /* padding-right: 20px; */
}
.btn {
  position: absolute;
  z-index: 99;
  right: 10px;
  top: 40px;
}
.scene,.object {
  margin-bottom: 10px;
}
.sceneForm,.objectForm,.applyForm {
  max-width: 340px;
  margin-left: 20%;
}
.object{
  margin-top: 20px;
}
.bottomBtn {
  margin-left: 245px;
}
.el-input.el-input--mini{
  max-width: 195px;
}
</style>
<style>
.system .el-tabs__header.is-left {
  margin-right: 0px;
  width: 200px;
}
.system .el-tabs__nav.is-left .el-tabs__item{
  text-align: center
}
.system .el-tabs--border-card > .el-tabs__content {
  padding: 0px;
  min-height: 719px;
}
.system .el-tabs.el-tabs--left{
  min-width: 1175px;
}
.system #tab-parameters.is-disabled{
  width: 0;
  height: 0;
}
.changePsw {
  max-width: 350px;
  margin-left: 20%;
  text-align: right;
  margin-bottom: 30px
}
</style>
