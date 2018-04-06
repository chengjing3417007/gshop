import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_SHOPS_GOODS,
  RECEIVE_SHOPS_INFO,
  RECEIVE_SHOPS_RATINGS,
  RECEIVE_USER_INFO
} from './mutation-types'
import {
  reqAdress,
  reqFoodList,
  reqShopList,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqUserInfo
} from '../api'

// 发送异步请求的actions
export default {
  // 发送异步请求获取地址
  async getAdress ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqAdress(latitude + ',' + longitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 发送异步请求获取食品列表
  async getCategorys ({commit}) {
    const result = await reqFoodList()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  // 发送异步请求获取商店列表
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    // 需要传参{longitude, latitude}
    const result = await reqShopList({longitude, latitude})
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  saveUserInfo ({commit}, userInfo) { // 同步的action
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  async getUserInfo ({commit}) { // 从cookie中异步获取用户信息
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  // mock数据的三个接口
  // 发送异步接收商店食品列表
  async getShopsGoods ({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const shopsGoods = result.data
      commit(RECEIVE_SHOPS_GOODS, {shopsGoods})
    }
  },
  // 发送异步接收食品列信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const shopInfo = result.data
      commit(RECEIVE_SHOPS_INFO, {shopInfo})
    }
  },
  // 发送异步接收食品列信息
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const shopRatings = result.data
      commit(RECEIVE_SHOPS_RATINGS, {shopRatings})
    }
  }
}
