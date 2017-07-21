<template>
  <div class="broadcast">
    <swiper :options="swiperOption">
      <swiper-slide><p class="broadcast-list"><span>[飞天小猪猪]</span>1234567890</p></swiper-slide>
      <swiper-slide><p class="broadcast-list"><span>[飞天小猪猪]</span>1234567890</p></swiper-slide>
      <swiper-slide><p class="broadcast-list"><span>[飞天小猪猪]</span>1234567890</p></swiper-slide>
      <swiper-slide><p class="broadcast-list"><span>[飞天小猪猪]</span>1234567890</p></swiper-slide>
      <swiper-slide><p class="broadcast-list"><span>[飞天小猪猪]</span>1234567890</p></swiper-slide>
      <swiper-slide><p class="broadcast-list"><span>[飞天小猪猪]</span>1234567890</p></swiper-slide>
      <swiper-slide><p class="broadcast-list"><span>[飞天小猪猪]</span>1234567890</p></swiper-slide>
      <swiper-slide><p class="broadcast-list"><span>[飞天小猪猪]</span>1234567890</p></swiper-slide>
      <swiper-slide><p class="broadcast-list"><span>[飞天小猪猪]</span>1234567890</p></swiper-slide>
      <swiper-slide><p class="broadcast-list"><span>[飞天小猪猪]</span>1234567890</p></swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        autoplay:1000,
        width:window.innerWidth,
        height: 30,
        autoHeight:true
      },
    }
  },
  components: {
    swiper,
    swiperSlide
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .broadcast{
    height: 3rem;
    background-color: #ececec;
  }
  .broadcast-list{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.3rem;
    color: #999;
    background-size: 1.4rem!important;
    background: url("../../../assets/store/store-boradcast.png") no-repeat 1rem center;
  }
  .broadcast-list span{
    color: #ff6b4f;
    padding: 0 1rem 0 3rem;
  }
</style>
