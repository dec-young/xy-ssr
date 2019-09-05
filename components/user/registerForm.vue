<template>
  <el-form class="form" ref="form" :rules="rules" :model="form">
    <el-form-item class="form-item" prop="username">
      <el-input v-model="form.username" placeholder="用户名手机"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input v-model="form.captcha" placeholder="验证码" class="input-with-select">
        <el-button slot="append" @click="handleSendCaptcha">发送验证码</el-button>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="nickname">
      <el-input v-model="form.nickname" placeholder="你的名字"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="checkPassword">
      <el-input v-model="form.checkPassword" placeholder="确认密码" type="password"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    const checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        captcha: "",
        nickname: "",
        password: "",
        checkPassword: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        captcha: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ],
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        checkPassword: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSendCaptcha() {
      // 手机号码为空,不发送请求
      if (!this.form.username) {
        this.$message.error("请输入手机号");
        return;
      }
      // if(this.form.username.length !== 11){
      //   this.$message.error("手机号格式不正确")
      //   return;
      // }
      this.$axios({
        url: "/captchas",
        method: "POST",
        data: {
          tel: this.form.username
        }
      }).then(res => {
        // console.log(res)
        const { code } = res.data;
        // this.$message.success(`模拟手机验证码为${code}`)
        this.$alert(`模拟手机验证码为${code}`, "验证码");
      });
    },
    handleRegSubmit() {
      // console.log(this.form)
      this.$refs.form.validate(valid => {
        if (valid) {
          const {checkPassword,...rest} = this.form
          this.$axios({
            url: "/accounts/register",
            method: "POST",
            data: rest
          }).then(res => {
            // console.log(res);
            this.$message.success('注册成功')
            this.$store.commit('user/setUserInfo',res.data)
            this.$router.replace('/')
          });
        }
      });
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