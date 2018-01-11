<template>
  <div class="hello">

<nav>
    <div class="nav-wrapper teal">
      <a href="#!" class="brand-logo white-text">不如归去</a>
      <!-- <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a> -->
      <a href="#" data-activates="slide-out" class="button-collapse white-text" @click="toggle"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
  <!-- sideNav -->
     <ul id="slide-out" class="side-nav grey lighten-1">
          <li><div class="user-view left-align">
            <div class="background">
              <img style="width:100%;" src="../assets/imgs/1.jpg" />
            </div>
            <!-- <a href="#!user"><img class="circle" src="../assets/imgs/布谷.jpg"></a> -->
            <router-link to="/"><img class="circle" src="../assets/imgs/布谷.jpg"></router-link>
            <a href="#!name"><span  :class="user.nameColor">{{user.name}}</span></a>
            <a href="#!email"><span class="white-text email">{{user.sentence}}</span></a>
          </div></li>
          <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
          <!-- <li><a href="#!" >User Photo</a></li> -->
          <li><router-link to="user-photo">User Photo</router-link></li>
          <li><div class="divider"></div></li>
          <li><a class="subheader">Subheader</a></li>
          <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
    </div>


</nav>




  </div>
</template>

<script>
// import $ from 'jquery';

export default {
  name: 'nav',
  data () {
    return {
      msg:'fg',
      user: {
        name: '澹張臺戲',
        nameColor: 'blue-text',
        sentence: '彼黍離離，彼稷之苗。行邁靡靡，中心搖搖。'
      }
    }
  },
  methods: {
    toggle: ()=>{

    }
  }
  // 生命周期，可以初始化操作

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .h6{
    font-weight: bold!important;
  }
</style>



<!--   vue中class的使用方法：
      1. v-bind:class="{'text-center':ok}"
      通过值判断，class为定量
      2. v-bind:class='user.name'
      class为变量

      v-bind:class可缩写为:class
      v-on:click   @click


 -->

