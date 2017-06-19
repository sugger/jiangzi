<template>
  <div class="index-list">
    <ul class="index-content-nav clearfix">
      <li @click="updateList(list.componentName,index)" :class="{listActive:active === index}" v-for="(list,index) in indexLists">{{ list.name }}</li>
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
  float: left;
  width: 25%;
  background-color: #f1f0f6;
  line-height: 3rem;
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;
}
  .index-content-nav li.listActive{
    background-color: #ff7800;
    color: #fff;
  }
</style>
