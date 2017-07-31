<template>
  <div class="store">
    <gqc-header></gqc-header>
    <!--商城导航 S-->
    <div class="store-nav">
      <ul>
        <router-link tag="li" to="/store/store">
          <p>积分商城</p>
          <div class="triangle"></div>
        </router-link>
        <router-link tag="li" to="/store/task">
          <p>积分任务</p>
          <div class="triangle"></div>
        </router-link>
        <router-link tag="li" to="/store/log">
          <p>积分记录</p>
          <div class="triangle"></div>
        </router-link>
    <!--    <router-link tag="li" to="/store/luck">
          <p>积分抽奖</p>
          <div class="triangle"></div>
        </router-link>-->
      </ul>
    </div>
    <!--商城导航 E-->

    <!--路由切换 S-->
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
    <!--路由切换 E-->
  </div>
</template>

<script>
  import gqcHeader from './base/header'
export default {
  data () {
    return {
    }
  },
  components:{
    gqcHeader
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .store{
    height: 100%;
    background-color: #ececec;
  }
  .store-nav{
    margin-top: 1rem;
    background-color: #fff;
  }
  .store-nav ul{
    overflow: hidden;
  }
.store-nav ul li{
  float: left;
  width: 33%;
  height: 6rem;
  text-align: center;
  font-size: 1.6rem;
  color: #999;
  position: relative;
}
  .triangle{
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -0.6rem;
    border-left: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    border-bottom: 1rem solid #fff;
  }
  .store-nav ul li p{
    width: 100%;
    position: absolute;
    bottom: 1.2rem;
  }
  .store-nav ul li{
    background-size: 2rem!important;
  }
  /*未选路由*/
  .store-nav ul li:first-of-type{
     background: url("../assets/store/integral-store-gray.png") no-repeat center 0.7rem;
   }
  .store-nav ul li:nth-of-type(2){
    background: url("../assets/store/integral-task-gray.png") no-repeat center 0.7rem;
  }
  .store-nav ul li:nth-of-type(3){
    background: url("../assets/store/integral-log-gray.png") no-repeat center 0.7rem;
  }
  .store-nav ul li:last-of-type{
    background: url("../assets/store/integral-luck-gray.png") no-repeat center 0.7rem;
  }
  /*已选路由*/
  .store-nav ul li.router-link-active{
    color: #fff;
  }
  .store-nav ul li:first-of-type.router-link-active{
    background: #4385f5 url("../assets/store/integral-store.png") no-repeat center 0.7rem;
  }
  .store-nav ul li:nth-of-type(2).router-link-active{
    background: #4385f5 url("../assets/store/integral-task.png") no-repeat center 0.7rem;
  }
  .store-nav ul li:nth-of-type(3).router-link-active{
    background: #4385f5 url("../assets/store/integral-log.png") no-repeat center 0.7rem;
  }
  .store-nav ul li:last-of-type.router-link-active{
    background: #4385f5 url("../assets/store/integral-luck.png") no-repeat center 0.7rem;
  }
</style>
