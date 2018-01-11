<template>
  <div class="hello">

  <div class="carousel carousel-slider" data-indicators="true">
    <!-- <div class="carousel-fixed-item center">
      <a class="btn waves-effect white grey-text darken-text-2">button</a>
    </div> -->
    <div class="carousel-item  white-text" :class="item.color" href="#one!" v-for="item in lunboList" >
      <h2>{{item.colorText}}</h2>
      <p class="white-text">{{item.textpoetry}}</p>
    </div>

   <!--  <div class="carousel-item red white-text" href="#one!" v-for="item in lunboList">
     <h2>海棠红</h2>
     <p class="white-text">如姣初开颜，不醉山鬼心。</p>
   </div>
   <div class="carousel-item amber white-text" href="#two!">
     <h2>漆瑜黄</h2>
     <p class="white-text">但比得此一剑心，挥日斩华融婧黄。</p>
   </div>
   <div class="carousel-item green white-text" href="#three!">
     <h2>竹心绿</h2>
     <p class="white-text">宁教竹间绿，可远人山岗。</p>
   </div>
   <div class="carousel-item blue white-text" href="#four!">
     <h2>碧天蓝</h2>
     <p class="white-text">无见无问无心往，高天高远高莽苍。</p>
   </div> -->

</div>


  </div>
</template>

<script>
// import $ from 'jquery';

export default {
  name: 'lunbo',
  data () {
    return {
      msg:'fg',
      lunboList: [
           {
              color: 'red',
              colorText: '海棠红',
              textpoetry: '如姣初开颜，不醉山鬼心。',
            },{
              color: 'amber',
              colorText: '漆瑜黄',
              textpoetry: '但比得此一剑心，挥日斩华融婧黄。',
            },{
              color: 'green',
              colorText: '竹心绿',
              textpoetry: '宁教竹间绿，可远人山岗。',
            },{
              color: 'blue',
              colorText: '碧天蓝',
              textpoetry: '无见无问无心往，高天高远高莽苍。',
            }]
    }
  },
  // 生命周期，可以初始化操作
  mounted: function(){
    // lunboList2: function(){
      // this.$nextTick(function() {
            $('.carousel.carousel-slider').carousel({fullWidth:true});
        //widget
      // })
    // }
  }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
