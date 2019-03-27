<template>
    <div class="container register">
      <el-card shadow="always" class="card">
            <div class="title">{{ msg }}</div>
            <el-form label-position="right" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" size="mini">
              <el-form-item label="用户ID" prop="Id">
                <el-input placeholder="请输入用户ID" v-model="ruleForm.Id" class="input-with-select">
                  <el-select v-model="ruleForm.type" slot="prepend" placeholder="用户类型">
                    <el-option label="管理员" value="0"></el-option>
                    <el-option label="发布人员" value="1"></el-option>
                    <el-option label="拍摄人员" value="2"></el-option>
                  </el-select>
                </el-input>
              </el-form-item>
              <el-form-item label="用户名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="电话" prop="phone">
                <el-input placeholder="请输入电话号码" v-model="ruleForm.phone" class="input-with-select">
                  <el-select v-model="ruleForm.phoneSelect" slot="prepend" placeholder="+86">
                    <el-option label="+87" value="1"></el-option>
                    <el-option label="+88" value="2"></el-option>
                    <el-option label="+89" value="3"></el-option>
                  </el-select>
                </el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item label="归属地" prop="location">
                <el-input v-model="ruleForm.location"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="passwordAgain">
                <el-input v-model="ruleForm.passwordAgain"></el-input>
              </el-form-item>
            </el-form>
            <el-button size="medium" class="button">注册</el-button>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '注册',
      ruleForm: {
        type: '',
        name: '',
        Id: '',
        phone: '',
        phoneSelect: '',
        email: '',
        location: '',
        password: '',
        passwordAgain: ''
      },
      rules: {
        Id: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        passwordAgain: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
<style scoped>
.register{
    background: url('../../assets/timg.jpg') ;
    height: 500px;
}
.card{
    width: 500px;
    height: 475px;
    position: relative;
    left: 50%;
    margin-left: -250px;
    top: 20px;
    background-color:rgba(255,255,255,.9);
}
.title{
    font-weight: bolder;
    margin-bottom: 10px;
}
.button{
    width: 310px;
    height: 40px;
    background-color: #f40;
    font-size: 14px;
    font-weight: 700;
    color: white;
    margin-bottom: 20px;
}
</style>
<style>
.el-form-item__content .el-input__inner, .el-input-group__append{
    border: 1px solid #dcdfe6;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0xp;
}
.register .el-input--suffix .el-input__inner{
    width:100px;
}
</style>
