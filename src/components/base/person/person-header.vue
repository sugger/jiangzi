<template>
  <div class="person-header">
      <img :src="user.avatar" alt="" class="person-img">
      <div class="person-box">
        <p class="person-name">{{ user.user_nicename }}</p>
        <p class="person-id">UID: {{ user.id }}</p>
      </div>
  </div>

 <!-- <div class="person-header">
    <img src="user.avatar" alt="" class="person-img">
    <div class="person-box">
      <p class="person-name">user.user_nicename</p>
      <p class="person-id">UID:  user.id </p>
    </div>
  </div>-->
</template>

<script>
export default {
  created(){
    this.$http.get('http://h5.wan855.cn/api/index.php?m=User&a=getUserinfo').then(function (res) {
      //平台登录信息
      this.user = res.body.user
    }, function (err) {
      console.log(err)
    })
  },
  data () {
    return {
      user: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .person-header{
    height: 6rem;
    position: relative;

  }
  .person-img{
    position: absolute;
    height: 4rem;
    width: 4rem;
    top:50%;
    margin-top: -2rem;
    border-radius: 50%;
    left: 1.8rem;
  }
  .person-box{
    position: absolute;
    left: 7rem;
    top:50%;
    height: 4rem;
    margin-top: -2rem;
  }
  .person-name{
    height: 2rem;
    line-height: 2rem;
    font-size: 1.6rem;
    color: #333;
  }
  .person-id{
    height: 2rem;
    line-height: 2rem;
    font-size: 1.6rem;
    color: #666;
  }
</style>
