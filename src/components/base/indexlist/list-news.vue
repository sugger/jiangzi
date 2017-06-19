<template>
  <div class="list-news">
    <ul>
      <li v-for="onenew in news" class="clearfix" @click="pageUrl(onenew.url)">
        <span :class="articleClass(onenew.term_id)">{{ articleName(onenew.term_id) }}</span>
        <span>{{ onenew.post_title }}</span>
        <span>{{ onenew.post_date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/h5/article').then((res) => {
      this.news = res.body
//      console.log('news---',res)
    },(err) => {
      console.log(err)
    })
  },
  data () {
    return {
      news:[],
    }
  },
  methods:{
      articleClass(id){
          //21活动
          //22公告
          //23新闻

          if(id == 21){
              return 'huodong'
          }else if(id == 22){
              return 'gonggao'
          }else if(id == 23){
              return 'xinwen'
          }
      },
      articleName(id){
          if(id == 21){
            return '活动'
          }else if(id == 22){
            return '公告'
          }else if(id == 23){
            return '新闻'
          }
      },
      pageUrl(url){
          if(url){
            window.location.href = url
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-news ul li{
  line-height: 4rem;
  border-bottom: 0.1rem solid #d9d9d9;
}
  .list-news ul li span:first-of-type{
    margin-top: 1rem;
    margin-left: 1rem;
    line-height:2rem;
    text-align: center;
    display: block;
    vertical-align: middle;
    width:4rem;
    height:2rem;
    color: #f4fcf8;
    float: left;
  }
.list-news ul li span:nth-of-type(2){
  font-size: 1.4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  float: left;
  width:13rem;
  text-indent: 1rem;
}
.list-news ul li span:last-of-type{
  float: right;
  font-size: 1.4rem;
  margin-right: 1rem;
}
  .gonggao{
    background-color: #02ca7a;
  }
  .xinwen{
    background-color: #f366c7;
  }
  .huodong{
    background-color: #0088d7;
  }
</style>
