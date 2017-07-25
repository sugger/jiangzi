<template>
  <div class="integral">
    <div class="select">
      <ul>
        <li @click="selectTaskType(1)">获得记录  <div :class="{'integral-task-select-type': 1 == active}"></div></li>
        <li @click="selectTaskType(2)">日常任务 <div :class="{'integral-task-select-type': 2 == active}"></div></li>
      </ul>
    </div>
    <ul class="task-log" v-if="active === 1">
      <!--获得记录-->
      <li v-for="get in getLogs">
        <p class="log-name">{{ get.task_name }}</p>
        <p class="log-time">{{ get.task_time }}</p>
        <p class="log-integral">{{ get.task_count }}</p>
      </li>
    </ul>
    <ul class="task-log" v-if="active === 2">
      <!--兑换记录-->
      <li v-for="exchange in exchangeLogs">
        <p class="log-name">{{ exchange.product_name }}</p>
        <p class="log-time">{{ exchange.exchang_time }}</p>
        <p class="log-integral">+{{ exchange.expend_integral }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created(){
    this.$axios.get('http://h5.wan855.cn/api/Integral/Integral/source')
      .then(res => {
          if (res.code == 200){
            this.getLogs = res.data
          }

      })
      .catch(function(error){
        console.log(error)
      })
    this.$axios.get('http://h5.wan855.cn/api/h5/Goods/record')
      .then(res => {
          if(res.code == 200){
            this.exchangeLogs = res.data
          }
      })
      .catch(function(error){
        console.log(error)
      })
  },
  data () {
    return {
      //1日常任务 2新手任务
      active:1,
      getLogs:[],
      exchangeLogs:[]
    }
  },
  methods:{
    selectTaskType(status){
      this.active = status
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-log li{
  position: relative;
  height: 4rem;
  background-color: #fff;
  margin-top: 0.5rem;
}
  .task-log li .log-name{
    position: absolute;
    font-size: 1.4rem;
    color: #333;
    left: 1rem;
    top:.8rem;
  }
  .task-log li .log-time{
    position: absolute;
    font-size: 1.2rem;
    color: #666;
    top:2.2rem;
    left: 1rem;
  }
  .task-log li .log-integral{
    position: absolute;
    right: 1.5rem;
    height: 1.6rem;
    font-size: 1.6rem;
    top:50%;
    margin-top: -0.8rem;
    color: #4385f5;
  }
</style>
