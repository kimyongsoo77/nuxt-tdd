// store 내용이 변경하는 mutation함수명을 상수로 만들어 분석하기 쉽도록 처리
// http://yorr.tistory.com/13 참조

// index.js
export const SET_CATEGORY = 'setCategory';
export const SET_PRODUCTLIST = 'setProductList';
export const SET_CATEGORY_SELECTED = 'setCategorySelected';
export const SET_PRODUCT_OPTION_GROUPS = 'setProductOptonGroups';
export const SET_PRODUCT_OPTIONS = 'setProductOptions';
export const SET_PRODUCT_GROUPS_QUANTITY = 'setProductGroupsQuantity';
export const SET_PRODUCT_OPTION_DEFAULT_QUANTITY =
  'setProductOptionDefaultQuantity';

export const SET_ORDER_TYPE = 'setOrderType';
export const SET_PAY_TYPE = 'setPayType';

// Cart.js'
export const ADD_CART_ITEM = 'addCartItem';
export const REMOVE_CART_ITEM = 'removeCartItem';
export const CLEAR_CART_TIMES = 'clearCartItems';

// language.js
export const SET_LOCALE = 'setLocale';
