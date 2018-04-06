import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_SHOPS_RATINGS,
  RECEIVE_SHOPS_INFO,
  RECEIVE_SHOPS_GOODS,
  RECEIVE_USER_INFO
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
  }
}
