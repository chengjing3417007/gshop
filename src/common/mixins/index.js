export const ratingsMixin = {
  data () {
    return {
      selectType: 0, // 满意
      onlyContent: true // 显不显示文本
    }
  },
  computed: {
    fliterRatings () {
      // 根据selectType和onlyContent计算过滤后的数组
      const {selectType, onlyContent} = this
      const ratings = this.shopRatings || this.food.ratings
      if (!ratings) {
        return []
      }
      return ratings.filter((rating) => {
        const {rateType, text} = rating
        return (selectType === 2 || selectType === rateType) && (!onlyContent || text.length > 0)
      })
    }
  },
  methods: {
    setSelectType (selectType) {
      this.selectType = selectType
    },
    toggleOnlyContent () {
      this.onlyContent = !this.onlyContent
    }
  }
}
