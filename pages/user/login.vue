<template>
  <div class="container">
    <el-row class="main" align="middle" type="flex" justify="center">
      <div class="form-wrapper">
        <el-row class="tabs" type="flex" justify="center">
          <span v-for="(item,index) in [`登录`,`注册`]" :key="index"
          :class="{active: currentTab === index}"
          @click="handleChangeTab(index)">
            {{item}}
          </span>
        </el-row>
        <!-- 登录表单 -->
        <LoginForm v-show="currentTab==0" />
        <!-- 注册表单 -->
        <RegisterForm v-show="currentTab==1"/>
      </div>
    </el-row>
  </div>
</template>

<script>
// 导入登录表单组件
import LoginForm from "@/components/user/loginForm";
import RegisterForm from '@/components/user/registerForm'
export default {
  data() {
    return {
      currentTab:0
    };
  },
  components: {
    LoginForm,
    RegisterForm
  },
  methods:{
    handleChangeTab(index){
      this.currentTab = index
    }
  }
};
</script>

<style lang="less" scoped>
.container{
    background:url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
    height: 700px;
    min-width:1000px;

    .main{
        width:1000px;
        height: 100%;
        margin:0 auto;
        position: relative;
        
        .form-wrapper{
            width:400px;
            margin:0 auto;
            background:#fff;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
            overflow:hidden;
            
            .tabs{
                span{
                    display: block;
                    width:50%;
                    height: 50px;
                    box-sizing: border-box;
                    border-top:2px #eee solid;
                    background:#eee;
                    line-height: 48px;
                    text-align: center;
                    cursor: pointer;
                    color:#666;

                    &.active{
                        color:orange;
                        border-top-color: orange;
                        background:#fff;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>