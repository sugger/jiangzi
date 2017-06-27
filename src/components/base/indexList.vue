<template>
  <div class="index-list">
    <ul class="index-content-nav clearfix">
      <li @click="updateList(list.componentName,index)"
           v-for="(list,index) in indexLists" :class="{listFontActive:active === index}">
        {{ list.name }}
        <div class="list-line" :class="{listLineActive:active === index}"></div>
      </li>
    </ul>
    <ul class="index-content-lists">
      <keep-alive>
        <p :is="currentList"></p>
      </keep-alive>
    </ul>
  </div>
</template>

<script>
  import Hot from './indexlist/list-hot.vue'
  import Recommond from './indexlist/list-new-recommond.vue'
  import News from './indexlist/list-news.vue'
  import Server from './indexlist/list-new-server.vue'
export default {
  created(){
      this.$http.get('/api/indexlists').then((res) => {
        this.indexLists = res.data
      },(err) => {
        console.log(err)
      })
  },
  components:{
    Hot,
    Recommond,
    News,
    Server
  },
  data () {
    return {
      currentList:'Hot',
      indexLists:[],
      active:0
    }
  },
  methods:{
      updateList(num,index){
        this.currentList = num
        this.active = index
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-content-nav li{
  position: relative;
  float: left;
  width: 25%;
  line-height: 4rem;
  height: 4rem;
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
  color: #999;
}
.list-line{
  position: absolute;
  width: 6rem;
  bottom: 0;
  left: 50%;
  margin-left: -3rem;
}
div.listLineActive{
  border: 0.1rem solid #4385f5;
}
.index-content-nav li.listFontActive{
  color: #4385f5;
}
</style>
