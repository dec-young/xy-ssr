<template>
  <div class="index">
    <div class="container">
      <div class="banner-content">
        <div class="search-bar">
          <el-row class="search-tab" type="flex">
            <span
              v-for="(tab,index) in options"
              :key="index"
              :class="{active: currentOption === index}"
              @click="handleClick(index)"
            >
              <i>{{tab.title}}</i>
            </span>
          </el-row>
          <el-row class="search-input" type="flex">
            <input type="text" :placeholder="options[currentOption].placeholder"/>
            <i class="el-icon-search"></i>
          </el-row>
        </div>
      </div>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(banner,index) in bannerList" :key="index">
          <img class="banner-image" :src="`${$axios.defaults.baseURL}`+ banner.url" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [],
      options: [
        {
          title: "攻略",
          placeholder: "搜索城市",
          pageUrl: ""
        },
        {
          title: "酒店",
          placeholder: "请输入城市搜索酒店",
          pageUrl: ""
        },
        {
          title: "机票",
          placeholder: "",
          pageUrl: "/air"
        }
      ],
      currentOption: 0
    };
  },
  mounted() {
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      console.log(res);
      this.bannerList = res.data.data;
    });
  },
  methods: {
    handleClick(index) {
      this.currentOption = index;
      console.log(this.currentOption)
      const item = this.options[index];
      if (item.title == "机票") {
        return this.$router.push(item.pageUrl);
      }
    }
  }
};
</script>

<style scoped lang="less">
.container {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;

  /deep/ .el-carousel__container {
    height: 700px;
  }

  .banner-image {
    width: 100%;
    height: 100%;
  }

  .banner-content {
    z-index: 9;
    width: 1000px;
    position: absolute;
    left: 50%;
    top: 45%;
    margin-left: -500px;
    border-top: 1px transparent solid;

    .search-bar {
      width: 552px;
      margin: 0 auto;
    }

    .search-tab {
      .active {
        i {
          color: #333;
        }
        &::after {
          background: #eee;
        }
      }

      span {
        width: 82px;
        height: 36px;
        display: block;
        position: relative;
        margin-right: 8px;
        cursor: pointer;

        i {
          position: absolute;
          z-index: 2;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }

        &:after {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          content: "";
          width: 100%;
          height: 100%;
          border: 1px rgba(255, 255, 255, 0.2) solid;
          border-bottom: none;
          transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
          transform-origin: bottom left;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 1px 2px 0 0;
          box-sizing: border-box;
        }
      }
    }

    .search-input {
      width: 550px;
      height: 46px;
      background: #fff;
      border-radius: 0 4px 4px 4px;
      border: 1px rgba(255, 255, 255, 0.2) solid;
      border-top: none;
      box-sizing: unset;

      input {
        flex: 1;
        height: 20px;
        padding: 13px 15px;
        outline: none;
        border: 0;
        font-size: 16px;
      }

      .el-icon-search {
        cursor: pointer;
        font-size: 22px;
        padding: 0 10px;
        line-height: 46px;
        font-weight: bold;
      }
    }
  }
}
</style>