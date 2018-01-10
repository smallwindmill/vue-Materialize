<template>
  <div class="hello">

<!--       <nav>
  <div class="nav-wrapper teal letter-white">
    <a href="#!" class="brand-logo center">Logo</a>
    <ul class="left hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li class="active"><a href="collapsible.html">JavaScript</a></li>
    </ul>
  </div>
</nav> -->

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
            <a href="#!user"><img class="circle" src="../assets/imgs/布谷.jpg"></a>
            <a href="#!name"><span class="white-text name">John Doe</span></a>
            <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
          </div></li>
          <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
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
      msg:'fg'
    }
  },
  methods: {
    toggle: ()=>{
     /* console.log(22);
      $('.button-collapse').hide();
        $('.button-collapse').sideNav({
           menuWidth: 300, // Default is 300
           edge: 'left', // Choose the horizontal origin
           closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
           draggable: true, // Choose whether you can drag to open on touch screens,
           onOpen: function(el) { }, // A function to be called when sideNav is opened
           onClose: function(el) {  }, // A function to be called when sideNav is closed
         });*/
    }
  }
  // 生命周期，可以初始化操作

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
