// 공용 함수

import _ from 'lodash'

// 카트에 담긴 메뉴 가격 계산, 기본 + 옵션(cart.vue, cart.js에서 사용)
// 카트에 담길때 선택된 옵션만 필터링하여 Item.selectedOption에 저장된다
function CartItemPrice(Item, orderType) {
  const menuprice = Item.price[orderType]
  const optionprice =
    _.sumBy(Item.selectedOption, function (o) {
      return o.price * o.Qty
    }) || 0
  return (menuprice + optionprice) * Item.Qty
}

// FoodPopup.vue,FoodOptionPopup.vue에서 사용(카드에 담기전에 사용)
// 카트에 담기기전 가격 계산
function ItemPrice(Item, orderType) {
  // 선택된 아이템만 필터링
  const Options = _.map(Item.productOptionGroups, (OptionGroup) => {
    return _.filter(OptionGroup.productOptions, (option) => {
      return option.Qty > 0
    })
  })

  const menuprice = Item.price[orderType]
  const optionprice =
    _.sumBy(_.flatten(Options), function (o) {
      return o.price * o.Qty
    }) || 0
  return (menuprice + optionprice) * Item.Qty
}

export { CartItemPrice, ItemPrice }
