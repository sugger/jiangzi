<template>
  <div class="slide">
    <slider animation="fade" height="16rem">
      <slider-item v-for="(list, index) in lists" :key="index">
        <!--<div :style="i">-->
          <!--<p style="line-height: 13rem; font-size: 5rem; text-align: center;">Page{{ index + 1 }}</p>-->
        <!--</div>-->
        <a :href="list.slide_url">
          <img :src="list.slide_pic" :alt="list.slide_name" width="100%" height="100%">
        </a>
      </slider-item>
    </slider>
  </div>
</template>

<script>
  import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/h5/index/shounav').then(function (res) {
      this.lists = res.body
    },function (err) {
      console.log(err)
    })
  },
  data () {
    return {
      lists: [

      ],
    }
  },
  components: {
    Slider,
    SliderItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slider{
    position: relative;
    z-index: 1;
  }
  /*@media only screen and (max-width: 37.5em) {*/
    /*.banner-image{*/
      /*width: 100%;*/
      /*height: 20rem!important;*/
    /*}*/
  /*}*/
</style>
