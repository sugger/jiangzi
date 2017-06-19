<template>
  <div class="list-hot">
    <ul class="clearfix">
      <li v-for="game in hotgames">
        <img :src="game.img" alt="">
        <div class="game-box clearfix">
          <p class="game-name">
            <span class="game-the-name">{{ game.name }}</span>
            <span v-if="game.hot">热门</span>
            <span v-if="game.new">最新</span>
            <span v-if="game.gift">礼包</span>
          </p>
          <p class="game-content">{{ game.content }}</p>
        </div>
        <a :href="game.url" class="start-game">开始游戏</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/h5/game/hot').then(function (res) {
      this.hotgames = res.body
    },function (err) {
      console.log(err)
    })
  },
  data () {
    return {
      hotgames:[

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-hot ul li{
  height:7rem;
  border-bottom: 0.2rem solid #d9d9d9;
  background-color: #fff;
}
.list-hot ul li img{
  float: left;
  height:5rem;
  width:5rem;
  border-radius: 1rem;
  margin: 0.8rem 0 0 0.8rem
}
.game-box{
  float: left;
}
.game-name{
  line-height: 1.4rem;
  padding-left: 2rem;
  color: #272727;
  margin-top: 2rem;
  font-size: 1.4rem;
}
p.game-content{
  color: #717171;
  font-size: 1rem;
  line-height: 3rem;
  padding-left: 2rem;
}
  .start-game{
    float: right;
    display: block;
    width: 6rem;
    line-height: 2.5rem;
    font-size: 1.4rem;
    border:0.1rem solid #ff7800;
    color: #ff7800;
    text-align: center;
    margin-right: 1.8rem;
    margin-top: 2.4rem;
    cursor: pointer;
  }
</style>
