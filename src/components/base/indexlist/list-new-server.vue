<template>
  <div class="list-new-server">
    <ul class="server-select">
      <li v-for="(server,index) in serverStyle" @click="toggleServer(index)" :class="{'server-select-content':active === index}">{{ server.name }}</li>
    </ul>

    <ul class="clearfix list-content" v-if="active === 0">

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
        <a :href="game.url" class="start-game">开始游戏</a>
      </li>
    </ul>
    <ul class="clearfix list-content" v-if="active === 1">
      <li v-for="game in games">
        <img :src="game.img" alt="">
        <div class="game-box clearfix">
          <p class="game-name">
            <span class="game-the-name">{{ game.name }}</span>
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
    height:7rem;
    border-bottom: 0.2rem solid #d9d9d9;
    background-color: #fff;
  }
  .list-new-server ul li img{
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
</style>
