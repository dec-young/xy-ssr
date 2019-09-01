<template>
  <header class="header">
    <el-row class="main" type="flex" justify="sapce-between">
      <div class="logo">
        <nuxt-link to="/">
          <img src="@/assets/images/logo.png" alt />
        </nuxt-link>
      </div>
      <el-row class="nav" type="flex">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <el-row class="login" type="flex" justify>
        <nuxt-link to="/user/login">登录/注册</nuxt-link>
      </el-row>
    </el-row>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  .main {
    width: 1000px;
    margin: 0 auto;
    .logo {
      padding-top: 10px;
      img {
        display: block;
        height: 40px;
      }
    }
    .nav {
      margin: 0 20px;
      flex: 1;
      a {
        display: block;
        height: 60px;
        padding: 0 20px;
        color: #000;
        box-sizing: border-box;
        &:hover {
          color: #409eff;
          border-bottom: 5px solid #409eff;
        }
      }
      .nuxt-link-exact-active {
        color: #fff;
        background-color: #409eff;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>