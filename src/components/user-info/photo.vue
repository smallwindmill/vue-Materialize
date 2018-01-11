<template>
  <div class="photo">

    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img src="../../assets/imgs/sample-1.jpg">
                <a class="btn-floating btn-large halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content left-align">
                <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
        </div>

    <div class="row">
        <div class="card col s12 m6">
          <div class="card-content blue white-text">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-tabs blue white-text">
            <ul class="tabs tabs-fixed-width blue white-text">
              <li class="tab"><a href="#test4">Test 1</a></li>
              <li class="tab"><a class="active" href="#test5">Test 2</a></li>
              <li class="tab"><a href="#test6">Test 3</a></li>
            </ul>
          </div>
          <div class="card-content">
            <div id="test4">Test 1 content</div>
            <div id="test5">Test 2  content</div>
            <div id="test6">Test 3  content</div>
          </div>
        </div>
    </div>





  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'photo',
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

.tab .active,.tabs .indicator{
     color: white!important;
}
</style>
