<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item on" v-for="(starClass, index) in starClasses" :key="index" :class="starClass"></span>
    <!--<span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>-->
  </div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
  props: {
    score: Number,
    size: Number
  },
  computed: {
    starClasses () {
      const scs = [] // 定义一个装星星class的数组
      const scoreInteger = Math.floor(this.score) // 取得整数部分
      // 添加on
      /* for (let i = 0; i < scoreInteger; i++) {
        scs.push(CLASS_ON)
      } */
      while (scs.length < scoreInteger) {
        scs.push(CLASS_ON)
      }
      // 添加half(小数部分小于0.5)
      if ((this.score - scoreInteger) * 10 > 5) {
        scs.push(CLASS_HALF)
      }
      // 添加off
      while (scs.length < 5) {
        scs.push(CLASS_OFF)
      }
      return scs
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>
