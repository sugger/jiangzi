<template>
  <div class="index-list">
    <ul class="index-content-nav clearfix">
      <router-link :to="{path:'/hot'}" tag="li">
        <p>热门</p>
      </router-link>
      <router-link :to="{path:'/new-server'}" tag="li">
        <p>新开服</p>
      </router-link>
      <router-link :to="{path:'/news'}" tag="li">
        <p>资讯</p>
      </router-link>
      <router-link :to="{path:'/subject'}" tag="li">
        <p>专题</p>
      </router-link>
    </ul>
  <!--  <ul class="index-content-lists">
      <keep-alive>
        <p :is="currentList"></p>
      </keep-alive>
    </ul>-->
   <!-- <ul class="index-content-nav clearfix">
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
    </ul>-->
  </div>
</template>

<script>
  import Hot from './indexlist/list-hot.vue'
  import Recommond from './indexlist/list-subject.vue'
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
  .index-list{

    background-color: #fff;
  }
.index-content-nav li{
  position: relative;
  float: left;
  width: 25%;
  line-height: 3.6rem;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  color: #333;
  height: 8rem;
  background-size: 4rem!important;
}
.index-content-nav li p{
  position: absolute;
  font-size: 1.4rem;
  height: 1.4rem;
  line-height: 1.4rem;
  text-align: center;
  width: 100%;
  bottom: 0.5rem;

}
.index-content-nav li:first-of-type{
  background: url("../../assets/list-hot.png") center 1rem no-repeat;
}
.index-content-nav li:nth-child(2){
  background: url("../../assets/list-new-server.png") center 1rem no-repeat;
}
.index-content-nav li:nth-child(3){
  background: url("../../assets/list-news.png") center 1rem no-repeat;
}
.index-content-nav li:last-of-type{
  background: url("../../assets/list-subject.png") center 1rem no-repeat;
}


/*previous*/

/*.list-line{*/
  /*position: absolute;*/
  /*width: 6rem;*/
  /*bottom: 0;*/
  /*left: 50%;*/
  /*margin-left: -3rem;*/
/*}*/

/*div.listLineActive{*/
  /*border: 0.1rem solid #4385f5;*/
/*}*/
/*.index-content-nav li.listFontActive{*/
  /*color: #4385f5;*/
/*}*/
  /*@media only screen and (max-width:400px){*/
    /*.index-content-nav li{*/
      /*line-height: 3rem;*/
      /*height: 3rem;*/
      /*font-size: 1.4rem;*/
    /*}*/
  /*}*/
</style>
