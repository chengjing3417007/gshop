<template>
  <div>ShopRatings</div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getShopRatings')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
