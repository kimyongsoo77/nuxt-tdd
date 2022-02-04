import moment from 'moment'
import _ from 'lodash'

import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  CLEAR_CART_TIMES,
} from './mutation-type'

import { CartItemPrice } from '~/util/common'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  [ADD_CART_ITEM](state, item) {
    // 선택한 옵션만 모아서 selectedOption에 저장
    const Options = _.map(item.productOptionGroups, (OptionGroup) => {
      return _.filter(OptionGroup.productOptions, (option) => {
        return option.Qty > 0
      })
    })
    item.selectedOption = _.flatten(Options)

    // 제품 구성이 같은 것을 찾는다
    const findsameItem = _.find(state.cartItems, function (o) {
      return (
        o.id === item.id && _.isEqual(o.selectedOption, item.selectedOption)
      )
    })

    // 1. 신규 메뉴 추가
    // 2. 기존 제품 수량 및 옵션 수정후 저장인경우 ?
    // 3. 기존 제품 옵션만 수정 했을때 동일한 제품이 있어도 현재 통합이 안됨 고민 필요 or 기획에 시나리오 확인필요
    if (item.cart_seq) {
      // 카트에 있는 제품이면
      const cartItemIndex = state.cartItems.findIndex(
        (i) => i.cart_seq === item.cart_seq
      )
      state.cartItems.splice(cartItemIndex, 1, item)
    } else if (findsameItem !== undefined) {
      findsameItem.Qty++ // 동일제품이 있다면 수량만 증가
    } else {
      // 신규
      item.cart_seq = _.uniqueId(
        moment(this.state.serverTimestamp).format('HHmmss_') // root store call
      )
      state.cartItems.push(item)
    }
  },
  [REMOVE_CART_ITEM](state, item) {
    state.cartItems.splice(state.cartItems.indexOf(item), 1)
  },

  [CLEAR_CART_TIMES](state) {
    state.cartItems = []
  },
}

export const getters = {
  getCartItemList(state) {
    return state.cartItems
  },
  itemCountOfCart(state) {
    return _.sumBy(state.cartItems, 'Qty')
  },
  QtyOfCart(state) {
    return _.reduce(
      state.cartItems,
      function (sum, item) {
        sum += item.Qty
        return sum
      },
      0
    )
  },
  totalPriceOfCart(state, getters, rootState) {
    return _.reduce(
      state.cartItems,
      function (sum, item) {
        sum += CartItemPrice(item, rootState.orderType)
        return Math.floor(sum)
      },
      0
    )
  },
}

// dispatch('rootActiontest', {}, { root: true }); // root에 action 호출 하는 방법
export const actions = {
  // addCartItem({ commit, dispatch }, item) {
  //   commit('addCartItem', item);
  //   // dispatch('rootActiontest');
  // },
  // removeCartItem({ commit }, item) {
  //   commit('removeCartItem', item);
  // },
  // rootActiontest() {
  //   console.log('cart-rootActiontest@@');
  // },
}
