<template>
  <div class="hello">

     <router-view class="view one" name="c"></router-view>
     <router-view class="view two" name="a"></router-view>
     <router-view class="view three" name="b"></router-view>
    <!-- </router-view> -->
    <!-- 这里的name与路由配置里的name保持一致性 -->
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'hello',
  data () {
    return {
      msg:'fg'
    }
  },
  // 生命周期，可以初始化操作
  mounted: function(){
       // Initialize collapse button
     }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
