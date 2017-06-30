<template>
  <div class="list-new-server">
<!--    <ul class="server-select">
      <li v-for="(server,index) in serverStyle" @click="toggleServer(index)" :class="{'server-select-content':active === index}">{{ server.name }}</li>
    </ul>-->

    <!--<ul class="clearfix list-content" v-if="active === 0">-->
    <ul class="clearfix list-content">
      <li v-for="game in games">
        <router-link :to="{path:'/gamedetial/'+ game.id}">
        <img :src="game.img" alt="">
        <div class="game-box clearfix">
          <p class="game-name">
            <span class="game-the-name">{{ game.name }}</span>
          </p>
          <p class="game-content">{{ game.content }}</p>
        </div>
        </router-link>
        <a :href="game.url" class="start-game">开始</a>
      </li>
    </ul>
    <!--<ul class="clearfix list-content" v-if="active === 1">
      <li v-for="game in games">
        <img :src="game.img" alt="">
        <div class="game-box clearfix">
          <p class="game-name">
            <span class="game-the-name">{{ game.name }}</span>
          </p>
          <p class="game-content">{{ game.content }}</p>
        </div>
        <a :href="game.url" class="start-game">开始</a>
      </li>-->
     <!-- <li>
        <img src="" alt="">
        <div class="game-box clearfix">
          <p class="game-name">
            <span class="game-the-name">游戏名</span>
            <span class="is-hot">热门</span>
            <span class="is-new">最新</span>
            <span class="is-gift">礼包</span>
          </p>
          <p class="game-content">123456798</p>
        </div>
        <a href="" class="start-game">开始</a>
      </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/h5/game/server').then((res) => {
      this.games = res.body
    },(err) => {
      console.log(err)
    })
  },
  data () {
    return {
      serverStyle:[
        {
            name:'已开新服',
        },
        {
            name:'新服预告'
        }
      ],
      active:0,
      games:[]
    }

  },
  methods:{
    toggleServer(index){
      this.active = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-new-server .list-content li{
    height:6.2rem;
    border-top: 0.1rem solid rgb(237,237,237);
    background-color: #fff;
    position: relative;
  }
  .list-new-server ul li img{
    position: absolute;
    top: 50%;
    margin-top: -2.5rem;
    float: left;
    height:5rem;
    width:5rem;
    border-radius: 1rem;
    left: 1.8rem;
    overflow: hidden;
  }
  .game-box{
    position: absolute;
    left: 6rem;
  }
  .game-name{
    line-height: 1.6rem;
    padding-left: 2rem;
    color: #272727;
    margin-top: 1.2rem;
    font-size: 1.6rem;
  }
  p.game-content{
    color: #717171;
    font-size: 1.2rem;
    line-height: 3rem;
    padding-left: 2rem;
    max-width: 18rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .start-game{
    position: absolute;
    display: block;
    width: 5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.4rem;
    border:0.1rem solid #4385f5;
    color: #4385f5;
    text-align: center;
    /*margin-right: 1.8rem;*/
    /*margin-top: 2.4rem;*/
    cursor: pointer;
    top: 50%;
    margin-top: -1.25rem;
    right: 1.8rem;
    border-radius: 0.5rem;
  }

  .list-new-server .server-select{
    text-align: center;
  }
  .list-new-server .server-select li{
    display: inline-block ;
    width: 7rem;
    border: 0.1rem solid #ff7800;
    line-height: 2rem;
    color: #ff7800;
    font-size: 1.4rem;
    cursor: pointer;
  }
  .list-new-server .server-select li.server-select-content{
    background-color: #ff7800;
    color: #fff;
  }
  .server-select{
    margin-top: 1.5rem;
  }
  .is-hot,.is-new,.is-gift{
    display: inline-block;
    color: #fff;
    font-size: 0.8rem;
    line-height: 1.4rem;
    height: 1.4rem;
    padding: 0 0.3rem;
    transform: translateY(-0.2rem);
    border-radius: 0.3rem;
  }
  .is-hot{
    border: 0.1rem solid #e32e16;
    color: #e32e16;
  }
  .is-new{
    border: 0.1rem solid #4db233;
    color: #4db233;
  }
  .is-gift{
    border: 0.1rem solid #4385f5;
    color: #4385f5;
  }
  @media only screen and (max-width: 350px){
    .list-hot ul li img{
      margin-top: -2rem;
      height:4rem;
      width:4rem;
      left: 1rem;
    }
    .game-box{
      left: 4rem;
    }
    .start-game{
      right: 1rem;
    }
    p.game-content{
      max-width: 15rem;
    }
  }
</style>
