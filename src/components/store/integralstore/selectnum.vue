<template>
  <div class="selectnum">
    <input class="btn select-btn" type="button" value="+" @click="add()">
    <input class="btn" type="text" v-model.number="goodsNum">
    <input class="btn select-btn" type="button" value="-" @click="minus()">
  </div>
</template>

<script>
export default {
  props:['goodsintegral','userintegral'],
  data () {
    return {
      goodsNum:0
    }
  },
  methods:{
      add(){
          this.goodsNum++

          let allIntegral = parseInt(this.goodsintegral) * parseInt(this.goodsNum)    //商品数 * 商品单价 = 商品积分总数
          console.log(allIntegral)
          if (allIntegral > this.userintegral){
              this.goodsNum--
              this.$emit('my-event',this.goodsNum)
              console.log('我比你大')
              return;
          }
          this.$emit('my-event',this.goodsNum)
      },
      minus(){
          if (this.goodsNum>0){
            this.goodsNum--
            this.$emit('my-event',this.goodsNum)
          }else{
              return;
          }

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selectnum{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 6rem;
  height: 2rem;
  margin-left: 1rem;
}
  .selectnum input[type="text"]{
    width: 2rem;
    text-align: center;
    color: #aaa;
    font-size: 1.6rem;
  }
  .select-btn{
    color: #888;
    background-color: #ececec;
    width: 1.6rem;
    height: 1.6rem;
  }
</style>
