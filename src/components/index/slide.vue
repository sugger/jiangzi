<template>
  <div class="slide">
    <slider animation="fade" height="18rem">
      <slider-item v-for="(list, index) in lists" :key="index">
        <a>
          <img :src="list.slide_pic" :alt="list.slide_name" width="100%" height="100%" @click="clickPic(list.slide_id,list.slide_url)">
        </a>
      </slider-item>
    </slider>
  </div>
</template>

<script>
  import { Slider, SliderItem } from 'vue-easy-slider'
  import tools from '../../util/tool.js'
export default {
  created(){
    this.$http.get('/api/h5/index/shounav').then(function (res) {
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
  methods:{
    clickPic(id,url){
        tools.clickNum({
          url : '/api/h5/index/picClick',
          data : {
              slideid : id
          },
          href : url
        })
    },
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
