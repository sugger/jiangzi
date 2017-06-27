<template>
  <div class="recent clearfix">
    <p>最<br/>近<br/>在<br/>玩</p>
    <div class="recent-play-list clearfix">
      <ul>
        <li v-for="list in recentPlay">
          <img :src="list.img" alt="">
          <p>{{ list.gamename }}</p>
          <a :href="list.url">开始</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/index.php?m=game&a=history').then(function (res) {
      this.recentPlay = res.body
      console.log()
    },function (err) {
      console.log(err)
    })
  },
  data () {
    return {
      recentPlay:[

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recent{
    font-size: 62.5%;
    height: 14rem;
    position: relative;
  }
.recent > p{
  position: absolute;
  top:3.1rem;
  line-height: 1.5rem;
  height: 8.2rem;
  font-size: 1.5rem;
  width: 3.1rem;
  color: #fff;
  background-color: #4385f5;
  text-align: center;
  padding-top: 1.6rem;
  border-radius: .5rem;
}
.recent-play-list{
  height:14rem;
}
  .recent-play-list ul{
    height: 14rem;
    text-align: center;
  }
  .recent-play-list ul li{
    height: 10rem;
    width: 7.5rem;
    display: inline-block;
    box-shadow: 0 0 20px #cfcfcf;
    margin: 2.5rem 0.5rem;
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
  border: 0.1rem solid #4385f5;
}
.recent-play-list ul li p{
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  color: #333;
  line-height: 1.4rem;
  height:3rem;
  top: 4.2rem;
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
</style>
