<template>
  <div class="recent clearfix">
    <p>最<br/>近<br/>在<br/>玩</p>
    <div class="recent-play-list clearfix">
      <ul>
        <swiper :options="swiperOption">

          <!--v-for-->
          <swiper-slide v-for="list in recentPlay">
          <li>
            <img :src="list.img" alt="">
            <p>{{ list.gamename }}</p>
            <a @click="clickBtn(list.gamename,list.url)">开始</a>
          </li>
          </swiper-slide>
        </swiper>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'
  import tools from '../../util/tool.js'
export default {
  created(){
    this.$http.get('/api/h5/game/history').then(function (res) {
      this.recentPlay = res.body
      console.log()
    },function (err) {
      console.log(err)
    })
  },
  data () {
    return {
      recentPlay:[

      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 4.5,
        paginationClickable: true,
        spaceBetween: 10,
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{
    //游戏点击
    clickBtn(name,url){
      tools.clickNum({
        url : '/api/h5/index/buttonClick',
        data : {
          name : name,
          type : '最近在玩',
          url : url
        },
        href : url
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recent{
    font-size: 62.5%;
    /*height: 11rem;*/
    position: relative;

  }
.recent > p{
  position: absolute;
  top:2.3rem;
  line-height: 1.5rem;
  height: 7.5rem;
  font-size: 1.5rem;
  width: 2.8rem;
  color: #fff;
  background-color: #4385f5;
  text-align: center;
  padding-top: 1.5rem;
  border-radius: .5rem;
  z-index: 2;
}
.recent-play-list{
  /*height:11rem;*/
}
  .recent-play-list ul{
    height: 12rem;
    text-align: center;
  }
  .recent-play-list ul li{
    height: 9rem;
    width: 7rem;
    display: block;
    float: left;
    box-shadow: 0 0 .25rem rgba(0,0,0,.2);
    margin: 2.3rem 0 0.5rem;
    position: relative;
  }

.recent-play-list ul li img{
  position: absolute;
  left: 50%;
  top: -1.4rem;
  margin-left: -2.5rem;
  overflow: hidden;
  width: 5rem;
  height:5rem;
  display: block;
  border-radius: 1rem;
}
.recent-play-list ul li p{
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.4rem;
  height:3rem;
  top: 4rem;
}
  .recent-play-list ul li a{
    position: absolute;
    display: block;
    bottom: 0.5rem;
    width: 4rem;
    height: 2.2rem;
    text-align: center;
    line-height: 2.2rem;
    left: 50%;
    margin-left: -2rem;
    border: 0.1rem solid #4385f5;
    border-radius: 0.3rem;
    color: #4385f5;
    font-size: 1.4rem;
  }
  .recent-play-list{
    background-color: #fff;
  }

  /*.swiper-wrapper .swiper-slide{*/
    /*margin-right: 5px!important;*/
  /*}*/

  .swiper-wrapper .swiper-slide:first-of-type{
    margin-left: 4rem;
  }
  @media only screen and (min-width: 600px){
    .swiper-wrapper .swiper-slide{
      margin-right: -20px!important;
    }
  }
</style>
