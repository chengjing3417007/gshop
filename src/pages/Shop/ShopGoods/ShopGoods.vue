<template>
  <div>ShopGoods</div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getShopsGoods')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
