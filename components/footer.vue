<template>
  <footer class="footer">
    <el-row class="main">
      <el-row type="flex" justify>
        <el-col class="mainLeft" :span="18">
          <el-col :span="8">
            <h5>闲云旅游网</h5>
            <ul>
              <li>
                <a href="#">上亿旅行者共同打造的"旅行神奇"</a>
              </li>
              <li>
                <a href="#">
                  <span>60,000</span> 多个全球旅游目的地
                </a>
              </li>
              <li>
                <a href="#">
                  <span>60,000</span> 个细分目的地新玩法
                </a>
              </li>
              <li>
                <a href="#">
                  <span>760,000,000</span> 次攻略下载
                </a>
              </li>
              <li>
                <a href="#">
                  <span>38,000</span> 家旅游产品供应商
                </a>
              </li>
            </ul>
          </el-col>
          <el-col :span="8">
            <h5>关于我们</h5>
            <ul>
              <li>
                <a href="#">隐私政策 商标声明</a>
              </li>
              <li>
                <a href="#">服务协议 游记协议</a>
              </li>
              <li>
                <a href="#">商城平台 服务协议</a>
              </li>
              <li>
                <a href="#">网络信息 侵权通知指引</a>
              </li>
              <li>
                <a href="#">闲云旅游 网服务监督员</a>
              </li>
              <li>
                <a href="#">网站地图 加入闲云旅游</a>
              </li>
            </ul>
          </el-col>
          <el-col :span="8">
            <h5>旅行服务</h5>
            <ul>
              <li>
                <a href="#">旅游攻略 酒店预订</a>
              </li>
              <li>
                <a href="#">旅游特价 国际租车</a>
              </li>
              <li>
                <a href="#">旅游问答 旅游保险</a>
              </li>
              <li>
                <a href="#">旅游指南 订火车票</a>
              </li>
              <li>
                <a href="#">旅游资源 APP下载</a>
              </li>
            </ul>
          </el-col>
        </el-col>
        <el-col class="qrCode" :span="6">
          <el-row type="flex" justify :span="24">
            <img src="@/assets/images/qrCode.png" alt />
          </el-row>
          <el-row type="flex" justify :span="24">
            <span>关注我们</span>
          </el-row>
        </el-col>
      </el-row>
      <el-row type="flex" justify>
        <el-col class="copyRight" :span="24">
          <span>京ICP备08001421号 京公王安备110108007702 Copyright &copy; 2016-2019 博学谷 All Rights Reserved</span>
        </el-col>
      </el-row>
    </el-row>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.footer {
  background-color: #333333;
  .main {
    width: 1000px;
    margin: 0 auto;
    .mainLeft {
      padding: 30px 0;
      h5 {
        margin-left: 30px;
        color: #adadad;
      }
      ul {
        margin: 10px 0 0 30px;
        li {
          a {
            color: #adadad;
            font-size: 12px;
            line-height: 20px;
            span {
              color: #b87d11;
            }
          }
        }
      }
    }
    .qrCode {
      padding: 30px 0;
      img {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto;
      }
      span {
        color: #adadad;
        font-size: 13px;
        text-align: center;
        line-height: 40px;
        width: 100%;
      }
    }
    .copyRight {
      padding: 50px 0;
      color: #adadad;
      text-align: center;
      font-size: 14px;
      border-top: 1px solid #515151;
    }
  }
}
</style>