<template>
  <div class="">
    <input class="serarch-game" type="text" placeholder="输入游戏名称搜索" v-model="searchGame" @keyup="searchOnlyGame(searchGame)">
    <div class="pay-list" v-if="searchGame === ''">
      <h3>热门游戏</h3>
      <ul class="pay-hot-list">
        <router-link tag="li" v-for="game in hotgames" :to="{path:'/pay/paying/'+game.id}" :key="1">
          <img src="" alt="">
          <p>{{ game.name }}</p>
          <span>></span>
        </router-link>

      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    created(){
      this.$http.get('/api/hotgames').then(function(res) {
        this.hotgames = res.data
      },function (err) {
        console.log(err)
      })
    },
    name: 'hello',
    data () {
      return {
        hotgames:[],
        searchGame:''
      }
    },
      methods:{
        searchOnlyGame(name){
          this.$http.get('/api/hotgames',{'name': name}).then(function(res) {
            this.hotgames = res.data
          },function (err) {
            console.log(err)
          })
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   input.serarch-game{
    display: block;
    margin: 2rem auto;
    width: 90%;
    height:4rem;
    background-color: #f1f0f6;
    border:none;
    outline: none;
    font-size: 1.4rem;
    text-indent: 1rem;
  }
  .pay-list h3{
    line-height: 4rem;
    border-top: 0.1rem solid #a4a4a4;
    background-color: #f1f0f6;
    padding-left: 2rem;
    color:#656565;
    font-size: 1.6rem;
  }
  .pay-hot-list li{
    height: 6rem;
    border-bottom: 0.1rem solid #a4a4a4;
  }
  .pay-hot-list li img{
    float: left;
    width: 4rem;
    height:4rem;
    border-radius: 1rem;
    margin-top: 1rem;
    margin-left: 2rem;
  }
  .pay-hot-list li p{
    float: left;
    line-height: 6rem;
    font-size: 1.6rem;
    margin-left: 5rem;
  }
  .pay-hot-list li span{
    float: right;
    font-size: 3rem;
    font-weight: bold;
    line-height: 6rem;
    padding-right: 5rem;
    color: #b1b1b1;
  }
</style>
