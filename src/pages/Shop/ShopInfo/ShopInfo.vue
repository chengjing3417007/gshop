<template>
  <div class="shop-info">
    <div class="info-content">
      <div class="overview">
        <h1 class="title">{{shopInfo.name}}</h1>
        <div class="desc">
          <span>
            <Star :size="36" :score="shopInfo.score"/>
          </span>
          <span class="text">({{shopInfo.sellCount}})</span>
          <span class="text">月售单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{shopInfo.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{shopInfo.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{shopInfo.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite" @click="addFavorite">
          <span class="iconfont icon-favorite favorite" :class="{active:favorite}"></span>
          <span class="text">收藏</span>
        </div>
      </div>

      <div class="split"></div>

      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper">
          <p class="content">{{shopInfo.bulletin}}</p>
        </div>
        <ul class="supports">
          <li class="support-item" v-for="(support,index) in shopInfo.supports" :key="index">
            <span class="icon" :class="supportsClassName[support.type]"></span>
            <span class="text">{{support.description}}</span>
          </li>
        </ul>
      </div>

      <Split/>

      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper">
          <ul class="pic-list" ref="picUL">
            <li class="pic-item" v-for="(pic,index) in shopInfo.pics" :key="index">
              <img width="120" height="90" :src="pic">
            </li>
          </ul>
        </div>
      </div>

      <div class="split"></div>

      <div class="info">
        <h1 class="title">商家信息</h1>
        <ul>
          <li class="info-item" v-for="(info,index) in shopInfo.infos" :key="index">
            {{info}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import Star from '../../../components/Stars/Star.vue'
export default {
  data () {
    return {
      supportsClassName: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
      favorite: localStorage.getItem('favorite_key') === 'true'
    }
  },
  mounted () {
    this.$store.dispatch('getShopInfo', () => {
      this.$nextTick(() => {

      })
    })
  },
  computed: {
    ...mapState(['shopInfo'])
  },
  watch: {
    shopInfo (value) { // 当shopInfo改变时即获取了数据
      this._initScroll()
    }
  },
  methods: {
    _initScroll () { // 动态获取Ul的高度
      if (!this.scroll) {
        this.$nextTick(() => {
          this.scroll = new BScroll('.shop-info', {
            click: true
          })
          // 滑动之前给ul动态设置宽度
          let width = 120
          const lis = this.$refs.picUL.getElementsByClassName('pic-item')
          Array.prototype.slice.call(lis).forEach(li => {
            width += li.clientHeight
            return width
          })
          // console.log(width)
          this.$refs.picUL.style.width = width + 'px'
          new BScroll('.pic-wrapper', { // 此时还是不能滑动，因为ul和包裹器宽高一样
            click: true,
            scrollX: true
          })
        })
      }
    },
    addFavorite () {
      this.favorite = !this.favorite
      localStorage.setItem('favorite_key', this.favorite)
    }
  },
  components: {
    Star
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .shop-info
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      position: relative
      padding: 18px
      .title
        margin-bottom: 8px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-size: 14px
      .desc
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size: 0
        .star
          display: inline-block
          margin-right: 8px
          vertical-align: top
        .text
          display: inline-block
          margin-right: 12px
          line-height: 18px
          vertical-align: top
          font-size: 10px
          color: rgb(77, 85, 93)
      .remark
        display: flex
        padding-top: 18px
        .block
          flex: 1
          text-align: center
          border-right: 1px solid rgba(7, 17, 27, 0.1)
          &:last-child
            border: none
          h2
            margin-bottom: 4px
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .content
            line-height: 24px
            font-size: 10px
            color: rgb(7, 17, 27)
            .stress
              font-size: 24px
      .favorite
        position: absolute
        width: 50px
        right: 11px
        top: 18px
        text-align: center
        .icon-favorite
          display: block
          margin-bottom: 4px
          line-height: 24px
          font-size: 24px
          color: #d4d6d9
          &.active
            color: $green
        .text
          line-height: 10px
          font-size: 10px
          color: rgb(77, 85, 93)
    .bulletin
      padding: 18px 18px 0 18px
      .title
        margin-bottom: 8px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-size: 14px
      .content-wrapper
        padding: 0 12px 16px 12px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        .content
          line-height: 24px
          font-size: 12px
          color: $yellow
      .supports
        .support-item
          padding: 16px 12px
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 0
          &:last-child
            border-none()
        .icon
          display: inline-block
          width: 16px
          height: 16px
          vertical-align: top
          margin-right: 6px
          background-size: 16px 16px
          background-repeat: no-repeat
          &.decrease
            bg-image('./images/decrease_4')
          &.discount
            bg-image('./images/discount_4')
          &.guarantee
            bg-image('./images/guarantee_4')
          &.invoice
            bg-image('./images/invoice_4')
          &.special
            bg-image('./images/special_4')
        .text
          line-height: 16px
          font-size: 12px
          color: rgb(7, 17, 27)
    .pics
      padding: 18px
      .title
        margin-bottom: 12px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-size: 14px
      .pic-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
            &:last-child
              margin: 0
    .info
      padding: 18px 18px 0 18px
      color: rgb(7, 17, 27)
      .title
        padding-bottom: 12px
        line-height: 14px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size: 14px
      .info-item
        padding: 16px 12px
        line-height: 16px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size: 12px
        &:last-child
          border-none()
</style>
