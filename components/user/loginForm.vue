<template>
  <el-form :model="form" class="form" ref="form" :rules="rules">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="请输入账号" v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="password">
      <el-input placeholder="请输入密码" type="password" v-model="form.password"></el-input>
    </el-form-item>
    <p class="form-text">忘记密码</p>
    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "账户不能为空",
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods:{
    handleLoginSubmit(){
      //验证表单
      this.$refs.form.validate((valid)=>{
        if(valid){
          // valid为true就发送登录请求
         this.$store.dispatch('user/login',this.form).then(res=>{
            console.log(res)
            this.$message({
              type:'success',
              message:'登录成功,正在跳转'
            })
            setTimeout(()=>{
              this.$router.replace('/')
            },1000)
          })
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>