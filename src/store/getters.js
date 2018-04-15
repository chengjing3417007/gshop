export default {
  totalCount (state) { // 总数量
    return state.shopCart.reduce((preTotal, food) => preTotal + food.count, 0)
  },
  totalPrice (state) { // 总价格
    return state.shopCart.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
  }
}
