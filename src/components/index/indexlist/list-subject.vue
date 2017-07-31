<template>
  <div class="list-subject">
    <listPublicHeader title="精选专题"></listPublicHeader>

    <ul class="clearfix subject">
      <li v-for="subject in subjects">
        <router-link :to="{path:'/subjectdetial/'+subject.id}">
          <img :src="subject.image" alt="" >
        </router-link>
        <div class="subject-bottom">
          <p class="subject-bottom-title">{{ subject.title }}</p>
          <p class="subject-bottom-time">{{ subject.btime }}</p>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import listPublicHeader from './common/list-public-header.vue'
  export default {
    created(){
      this.$http.get('/api/h5/activity/index').then(function (res) {
        this.subjects = res.body.data
      },function (err) {
        console.log(err)
      })
    },
    data () {
      return {
        subjects:[]
      }
    },
    components:{
      listPublicHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-subject{
    background-color: #ececec;
  }
  .subject li img{
    height: 20rem;
    width: 100%;
    background-size: cover;
  }
  .subject-bottom{
    height: 6rem;
    background-color: #fff;
    position: relative;
  }
  .subject-bottom-title,.subject-bottom-time{
    position: absolute;
    left: 1.5rem;
  }
  .subject-bottom-title{
    top:1rem;
    height: 1.6rem;
    line-height: 1.6rem;
    font-size: 1.6rem;
    color: #333;
  }
  .subject-bottom-time{
    bottom: 1rem;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 1.2rem;
    color: #999;
  }
</style>
