<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  mounted () {
    this.$store.dispatch('getAdress')
    this.$store.dispatch('getUserInfo')
    this.$store.dispatch('getShopInfo')
  },
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
