<template>
  <!--首页外卖-->
    <div class="msite">
      <!--首页头部-->
      <HeaderTop :title="address.name">
        <router-link class="header_search" slot="search" to="/search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
        <router-link class="header_login" slot="login" to="/login">
          <span class="header_login_text">登录|注册</span>
        </router-link>
      </HeaderTop>
      <!--首页导航-->
      <nav class="msite_nav border-1px">
        <div class="swiper-container" v-if="categorys.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categorys, index) in categoryArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(category, i) in categorys" :key="i">
                <div class="food_container">
                  <img :src="imgBaseUrl+category.image_url">
                </div>
                <span>{{category.title}}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="./images/msite_back.svg" alt="bg" v-else>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list border-1px">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList/>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'

/* eslint-disable no-new */
export default {
  data () {
    return {
      imgBaseUrl: 'https://fuss10.elemecdn.com'
    }
  },
  computed: {
    ...mapState(['address', 'categorys']),
    categoryArr () {
      const arr = [] // 二维数组
      const {categorys} = this
      let smallArr = [] // 里面的小数组

      // 遍历categorys(一维数组)
      categorys.forEach((c) => {
        // 1.如果小数组为空，先把小数组和大数组关联起来
        if (smallArr.length === 0) {
          arr.push(smallArr)
        }
        // 2.往小数组里面放数据
        smallArr.push(c)
        // 3.如果小数组长度为8了，断开连接生成一个新的小数组
        if (smallArr.length === 8) {
          smallArr = []
        }
      })

      return arr
    }
  },
  mounted () {
    this.$store.dispatch('getCategorys')
  },
  watch: {
    categorys (value) {
      if (this.categorys.length) {
        // 此回调函数在dom更新之后才调用
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    }
  },
  components: {
    HeaderTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.msite  //首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>
