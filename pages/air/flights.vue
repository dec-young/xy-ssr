<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div></div>

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <FLightsItem v-for="(item,index) in dataList" :key="index" :data="item" />
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHead from "@/components/air/flightsListHead";
import FLightsItem from "@/components/air/flightsItem";
export default {
  data() {
    return {
      flightsListData: {},
      dataList: [],
      currentPage:1,
      pageSize:5,
      total:4
    };
  },
  components: {
    FlightsListHead,
    FLightsItem
  },
  methods: {
    getData() {
      this.$axios({
        url: "airs",
        params: this.$route.query
      }).then(res => {
        // console.log(res);
        this.flightsListData = res.data;   // 总数据
        this.dataList = res.data.flights; 
        this.total = res.data.flights.length
      });
    },

    // 页码切换时触发
    handleCurrentChange(val){
      // console.log(val)
      // 当前为第1页的时候,第1页展示的数据为 dataList.slice(0,5), pageSize = 5  
      // 当前为第2页的时候,第2页展示的数据为 dataList.slice(5,10), pageSize = 5  
      // 当前为第3页的时候,第3页展示的数据为 dataList.slice(10,15), pageSize = 5  
      
      // (pageSize*(currentPage-1),pageSize*currentPage)
      // 在第1页 当 pageSize = 2 , dataList.slice(0,2)
      // 在第1页 当 pageSize = 3 , dataList.slice(0,3)
      // 在第2页 当 pageSize = 4 , dataList.slice(4,8) 
      // this.dataList = dataList.slice(pageSize*(currentPage-1),pageSize*currentPage)

      this.currentPage = val
      this.dataList = this.flightsListData.flights.slice(this.pageSize*(this.currentPage-1),this.pageSize*this.currentPage)

    },

    // 每页条数变换时触发,条数变化时都会回到第1页
    handleSizeChange(val){

      // console.log(val)
      this.pageSize = val
      this.dataList = this.flightsListData.flights.slice(0,this.pageSize)

    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>