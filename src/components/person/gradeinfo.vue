<template>
  <div class="grade-info clearfix">
    <p class="grade-header">
      每日登录任意一款游戏，会获得10点经验值。如果是VIP用户，还
      会获得额外经验值（参见下表）
    </p>
    <div class="v-box">
      <p class="v-0"><span>￥0</span><span>0</span></p>
      <p class="v-1"><span>￥111</span><span>1</span></p>
      <p class="v-2"><span>￥222</span><span>2</span></p>
      <p class="v-3"><span>￥333</span><span>3</span></p>
      <p class="v-4"><span>￥444</span><span>4</span></p>
      <p class="v-5"><span>￥555</span><span>5</span></p>
      <p class="v-6"><span>￥666</span><span>6</span></p>
      <p class="v-7"><span>￥777</span><span>7</span></p>
      <p class="v-8"><span>￥888</span><span>8</span></p>
      <p class="v-9"><span>￥999</span><span>9</span></p>
      <p class="v-10"><span>￥1010</span><span>10</span></p>
      <p class="v-11"><span>￥1111</span><span>11</span></p>
      <p class="v-12"><span>￥1212</span><span>12</span></p>
      <p class="v-13"><span>￥1313</span><span>13</span></p>
      <p class="v-14"><span>￥1414</span><span>14</span></p>
      <p class="v-15"><span>￥1515</span><span>15</span></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grade-info{
  /*background: url("../../assets/grade-info.jpg") 0 0 no-repeat;*/
  height: 270rem;
  background-size: contain;
  position: relative;
}
  .grade-header{
    position: absolute;
    width: 100%;
    top: 16rem;
    font-size: 1.2rem;
    color: #8d8d8d;
    text-align: center;
  }
  .v-box{
    position: absolute;
    top:24rem;
    width: 100%;
  }
  .v-box p{
    height: 2rem;
    line-height: 8rem;
    margin-bottom: 3rem;
    position: relative;
  }
  .v-box span{
    position: absolute;
    font-size: 1.4rem;
    color: #8d8d8d;
  }
  .v-box span:first-of-type{
    left: 47%;
  }
.v-box span:last-of-type{
  left: 83%;
}
</style>
