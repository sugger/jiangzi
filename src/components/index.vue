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
  import Slide from './base/slide'
  import Recent from './base/recent'
  import indexList from './base/indexList'
  import gqcHeader from './base/header'
  import Boutique from './base/boutique'
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
