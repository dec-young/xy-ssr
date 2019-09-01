<template>
  <div>
    <div>
      <span
        v-for="(item,index) in arr"
        :key="index"
        @click="handleClick(index)"
        :class="{active:current===index}" 
      >{{item}}
      </span>
    </div>

    <div v-show="current===0">
      <ul>
        <li>中小学生开学第一天</li>
        <li>中小学生开学第一天</li>
        <li>中小学生开学第一天</li>
      </ul>
    </div>

    <div v-show="current===1">
      <ul>
        <li>男篮世界杯在中国开赛</li>
        <li>男篮世界杯在中国开赛</li>
        <li>男篮世界杯在中国开赛</li>
      </ul>
    </div>

    <div v-show="current===2">
      <ul>
        <li>吴亦凡xx</li>
        <li>吴亦凡xx</li>
        <li>吴亦凡xx</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      arr:['新闻','体育','娱乐']
    };
  },
  methods: {
    handleClick(index) {
      // current
      this.current = index;
    }
  }
};
</script>

<style lang="less" scoped>
.active {
  color: red;
}
</style>