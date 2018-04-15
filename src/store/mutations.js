import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_SHOPS_RATINGS,
  RECEIVE_SHOPS_INFO,
  RECEIVE_SHOPS_GOODS,
  RECEIVE_USER_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CHART
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  // mock数据
  [RECEIVE_SHOPS_GOODS] (state, {shopsGoods}) {
    state.shopGoods = shopsGoods
  },
  [RECEIVE_SHOPS_RATINGS] (state, {shopRatings}) {
    state.shopRatings = shopRatings
  },
  [RECEIVE_SHOPS_INFO] (state, {shopInfo}) {
    state.shopInfo = shopInfo
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) { // 如果food有count属性，直接++
      food.count++
    } else { // 如果food没有count属性，添加一个属性并且赋值为1
      // food.count = 1   //新添加的属性没有数据绑定，因为没有set方法
      Vue.set(food, 'count', 1)
      state.shopCart.push(food)
    }
  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) { // 移除该food
        state.shopCart.splice(state.shopCart.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CHART] (state) {
    state.shopCart.forEach((food, index) => {
      food.count = 0
    })
    state.shopCart = []
  }
}
