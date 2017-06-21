<template>
  <div class="gamedetial">
    <div class="game-bg">
      <img :src="game.navimg" alt="">
    </div>
    <div class="game-head">
      <img :src="game.img" alt="">
      <p class="game-name">{{ game.name }}</p>
      <p class="game-brief">{{ game.excerpt }}</p>
      <a :href="game.url" class="game-start">开始游戏</a>
    </div>
    <div class="game-intruction">
      <p class="game-intruction-tit">游戏简介</p>
      <p class="game-intruction-content">
        {{ game.content }}</p>
    </div>
    <div class="game-bottom">
      <ul class="game-tit">
        <li class="game-tit-active">礼包</li>
        <li>资讯</li>
      </ul>
      <ul class="game-gift">
        <li>
          <p class="game-gift-name">礼包名</p>
          <p class="game-gift-content">礼包内容</p>
          <a href="javascript:;" class="game-gift-get">领取</a>
          <!--<a href="javascript:;">查看</a>-->
        </li>
      </ul>
      <ul class="game-article">
        <li>
          <p>
            <span class="game-article-style">活动</span>
            <span class="game-article-content">资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯</span>
            <span class="game-article-time">2017-06-19 14:00</span>
          </p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/h5/game/gameinfo/gid/'+this.$route.params.gid).then(function (res) {
      this.game = res.body
    },function (err) {
      console.log(err)
    })
  },
  data () {
    return {
      game:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .gamedetial{
    background-color: #f6f5fb;
  }
  .game-bg{
    background-color: red;
    height: 16rem;
  }
  .game-head{
    position: relative;
    height: 6rem;
    background-color: #fff;
  }
  .game-head img{
    position: absolute;
    width: 7rem;
    height: 7rem;
    border-radius: 1rem;
    display: block;
    left: 2rem;
    top: -2rem;
  }
  .game-head .game-name{
    position: absolute;
    color: #222;
    font-size: 1.4rem;
    left: 10rem;
    top: 1.5rem;
  }
  .game-head .game-brief{
    font-size: 1.2rem;
    color: #adadad;
    position: absolute;
    left: 10rem;
    top:3.3rem;
    max-width: 8rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .game-head .game-start{
    position: absolute;
    display: block;
    width: 6rem;
    line-height: 2.5rem;
    font-size: 1.4rem;
    border: .1rem solid #ff7800;
    color: #ff7800;
    text-align: center;
    cursor: pointer;
    top: 2rem;
    right: 2rem;
  }
  .game-intruction{
    margin-top: 1rem;
    background-color: #fff;
    height: 10rem;
  }
  .game-intruction-tit{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.6rem;
    text-indent: 2rem;
  }
  .game-intruction-content{
    color: #6a6a6a;
    margin:0 2rem;
    line-height: 1.4rem;
  }
  .game-bottom{
    margin-top: 1rem;
    background-color: #fff;
  }
  .game-tit{
    height: 3rem;
  }
  .game-tit > li{
    float: left;
    width: 50%;
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.6rem;
    border-bottom: 0.2rem solid #f6f5fa;
  }
  .game-tit-active{
    border-bottom: 0.2rem solid #3d91f1!important;
  }

  .game-gift > li{
    position: relative;
    border-bottom: 0.2rem solid #f1f1f1;
    height: 6rem;
  }
  .game-gift .game-gift-name{
    position: absolute;
    font-size: 1.6rem;
    line-height: 1.6rem;
    height: 1.6rem;
    color: #222;
    left: 2rem;
    top: 1.5rem;
  }
  .game-gift .game-gift-content{
    position: absolute;
    top:3.5rem;
    left: 2rem;
    color: #989898;
  }
  .game-gift .game-gift-get{
    position: absolute;
    display: block;
    width: 6rem;
    line-height: 2.5rem;
    font-size: 1.4rem;
    border: .1rem solid #ff7800;
    color: #ff7800;
    text-align: center;
    cursor: pointer;
    top: 2rem;
    right: 2rem;
  }
  .game-article li{
    position: relative;
    height: 3rem;
    border-bottom: 0.2rem solid #f1f1f1;;
  }
  .game-article li p{
    height: 3rem;
    font-size: 1.2rem;
    line-height: 3rem;
    margin: 0 2rem;
  }
  .game-article li p span{
    display: block;
  }
  .game-article-style,
  .game-article-content{
    float: left;
  }
  .game-article-content{
    width: 40%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  span.game-article-time{
    float: right!important;
  }
</style>
