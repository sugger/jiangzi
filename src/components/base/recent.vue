<template>
  <div class="recent clearfix">
    <p>最近在玩</p>
    <div class="recent-play-list clearfix">
      <ul>
        <li v-for="list in recentPlay">
          <a :href="list.url"><img :src="list.img" alt=""></a>
          <p>{{ list.gamename }}</p>
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
.recent > p{
  line-height: 2.6rem;
  font-size: 1.4rem;
  padding-left: 1rem;
  color: #272727;
  background-color: #f1f0f6;
}
.recent-play-list{
  height: 6rem;
}
  .recent-play-list ul li{
    width: 6.5rem;
    margin-top: 1rem;
    float: left;
  }
.recent-play-list ul li:first-of-type{
  margin-left: 1rem;
}
.recent-play-list ul li img{
  width: 5rem;
  height:5rem;
  display: block;
  margin: 0 auto;
  border-radius: 1rem;
}
.recent-play-list ul li p{
  text-align: center;
  font-size: 1.2rem;
  color: #272727;
  line-height: 3rem;
  height:3rem;
}
  .recent-play-list{
    background-color: #fff;
  }
</style>
