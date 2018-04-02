<template>
  <div>
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import {reqAdress} from './api'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  async mounted () {
    const result = await reqAdress('40.10038,116.36867')
    console.log(result)
  },
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
