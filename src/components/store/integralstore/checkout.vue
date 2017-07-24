<template>
  <div class="checkout">
    <div class="wrap">
      <div class="window">
        <p class="success">兑换成功</p>
        <a href="javascript:;" class="link back">返回平台</a>
        <a href="javascript:;" class="link continue">继续兑换</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #4c4c4c;
    opacity: .6;
    z-index: 999;
  }
  .window{
    position: absolute;
    top:50%;
    height: 16rem;
    margin-top: -8rem;
    z-index: 1000;
  }
  .back,.continue{
    position: absolute;
    bottom: 0;
    width: 50%;
  }
  .back{
    left: 0;
  }
.continue{
  background-color: #4385f5;
  color: #fff;
  right: 0;
}
</style>
