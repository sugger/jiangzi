<template>
  <div>
    <gqc-header></gqc-header>
    <div class="index">
      <slide></slide>
      <recent></recent>
      <index-list></index-list>
    </div>
  </div>
</template>

<script>
  import Slide from './base/slide'
  import Recent from './base/recent'
  import indexList from './base/indexList'
  import gqcHeader from './base/header'
export default {
  components:{
    Slide,
    Recent,
    indexList,
    gqcHeader
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
