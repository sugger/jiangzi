<template>
  <div>
    <gqc-header></gqc-header>
    <div class="index">
      <slide></slide>
      <index-list></index-list>
      <recent></recent>
      <boutique></boutique>
    </div>
  </div>
</template>

<script>
  import Slide from './index/slide'
  import Recent from './index/recent'
  import indexList from './index/indexList'
  import gqcHeader from './base/header'
  import Boutique from './index/boutique'
export default {
  components:{
    Slide,
    Recent,
    indexList,
    gqcHeader,
    Boutique
  },
  data () {
    return {

    }
  },



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
