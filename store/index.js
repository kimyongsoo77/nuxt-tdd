import moment from 'moment'
import _ from 'lodash'

// import categoryList from '@/sampledata/categoryList.json';
// import apidata from '@/sampledata/apidata.json';
// import orgdata from '@/sampledata/productlist.json';
// import category from '@/sampledata/categoryList.json';
// import productlist from '@/sampledata/productlist2.json';
import {
  SET_CATEGORY,
  SET_PRODUCTLIST,
  SET_CATEGORY_SELECTED,
  SET_PRODUCT_OPTION_GROUPS,
  SET_PRODUCT_OPTIONS,
  // SET_PRODUCT_GROUPS_QUANTITY,
  SET_PRODUCT_OPTION_DEFAULT_QUANTITY,
  SET_ORDER_TYPE,
  SET_PAY_TYPE,
} from './mutation-type'

export const state = () => ({
  serverTimestamp: moment().valueOf(),
  categoryList: [],
  selectedCategoryId: '',
  products: [],
  productOptionGroups: [],
  productOptions: [],
  productGroupsQuantity: [],
  productOptionDefaultQuantitys: [],
  orderType: 'takeOut',
  storeName: 'Store Name',
  PayType: '',
})

export const getters = {
  getProdcutList(state) {
    const products = _.filter(state.products, (product) => {
      return _.includes(product.productCategoryIds, state.selectedCategoryId)
    })
    return products
  },
}

export const mutations = {
  // main category set
  [SET_CATEGORY](state, data) {
    if (data.length <= 0) return

    state.categoryList = _.orderBy(data, ['sort'], ['asc'])
    state.selectedCategoryId = state.categoryList[0].id
  },

  [SET_PRODUCTLIST](state, data) {
    state.products = data
  },

  [SET_PRODUCT_OPTION_GROUPS](state, data) {
    state.productOptionGroups = data
  },

  [SET_PRODUCT_OPTIONS](state, data) {
    state.productOptions = data
  },

  // [SET_PRODUCT_GROUPS_QUANTITY](state, data) {
  //   state.productGroupsQuantity = data;
  // },

  [SET_PRODUCT_OPTION_DEFAULT_QUANTITY](state, data) {
    state.productOptionDefaultQuantitys = data
  },

  [SET_CATEGORY_SELECTED](state, data) {
    state.selectedCategoryId = data.id
  },

  [SET_ORDER_TYPE](state, data) {
    state.orderType = data
  },

  [SET_PAY_TYPE](state, data) {
    state.PayType = data
  },
}

export const actions = {
  async nuxtServerInit(
    { state, commit, dispatch },
    { app, req, query, error, redirect }
  ) {
    console.log(
      'nuxtServerInit \n [req.session] \n',
      req.session,
      '\n[req.sessionID] \n',
      req.sessionID,
      '\n[=query=] \n',
      query
    )

    // console.log(app.$axios.defaults.baseURL);
    // process.env.API_URL +
    // data: {
    //   id: process.env.API_SECURE_ID,
    //   secure: process.env.API_SECURE_CODE,
    // },
    // 'https://sks-kiosk-api-thxmckzr2q-du.a.run.app/login'

    // await getMenuInfo(process.env.API_SECURE);

    if (query.auth === '1') {
      await dispatch('getMenuInfo', process.env.API_SECURE2)
    } else if (query.auth === '2') {
      await dispatch('getMenuInfo', process.env.API_SECURE3)
    } else {
      await dispatch('getMenuInfo', process.env.API_SECURE)
    }

    // try {
    //   var config = {
    //     headers: {
    //       'Content-Type': 'application/json; charset=UTF-8',
    //     },
    //   };
    //   await this.$axios
    //     .post(`${process.env.API_URL}/login`, process.env.API_SECURE, config)
    //     .then(async (res) => {
    //       var config = {
    //         headers: {
    //           Authorization: res.data,
    //         },
    //       };

    //       // 카테고리
    //       await this.$axios
    //         .get(
    //           `${process.env.API_URL}/kiosk/api/v0/product_categories`,
    //           config
    //         )
    //         .then((res) => {
    //           commit('setCategory', res.data);
    //         });
    //       // commit('setCategory', apidata.productCategories);

    //       // 메뉴
    //       await this.$axios
    //         .get(`${process.env.API_URL}/kiosk/api/v0/products`, config)
    //         .then((res) => {
    //           commit('setProductList', res.data);
    //         });

    //       // option groups
    //       await this.$axios
    //         .get(
    //           `${process.env.API_URL}/kiosk/api/v0/product_option_groups`,
    //           config
    //         )
    //         .then((res) => {
    //           commit('setProductOptonGroups', res.data);
    //         });

    //       // option groups
    //       await this.$axios
    //         .get(`${process.env.API_URL}/kiosk/api/v0/product_options`, config)
    //         .then((res) => {
    //           commit('setProductOptions', res.data);
    //         });

    //       // commit('setProductOptions', apidata.productOptions);
    //     });
    // } catch (e) {
    //   console.log(e);
    // }

    // commit('setProductList', apidata.products);
    // commit('setProductOptonGroups', apidata.productOptionGroups);
    // commit('setProductOptions', apidata.productOptions);
    // // prettier-ignore
    // // commit('setProductGroupsQuantity', apidata.productProductOptionGroups);
    // commit('setProductList', apidata.products);
  },

  async getMenuInfo({ commit }, auth) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
      await this.$axios
        .post(`${process.env.API_URL}/login`, auth, config)
        .then(async (res) => {
          const config = {
            headers: {
              Authorization: res.data,
            },
          }

          // 카테고리
          await this.$axios
            .get(
              `${process.env.API_URL}/kiosk/api/v0/product_categories`,
              config
            )
            .then((res) => {
              commit('setCategory', res.data)
            })
          // commit('setCategory', apidata.productCategories);

          // 메뉴
          await this.$axios
            .get(`${process.env.API_URL}/kiosk/api/v0/products`, config)
            .then((res) => {
              commit('setProductList', res.data)
            })

          // option groups
          await this.$axios
            .get(
              `${process.env.API_URL}/kiosk/api/v0/product_option_groups`,
              config
            )
            .then((res) => {
              commit('setProductOptonGroups', res.data)
            })

          // option groups
          await this.$axios
            .get(`${process.env.API_URL}/kiosk/api/v0/product_options`, config)
            .then((res) => {
              commit('setProductOptions', res.data)
            })

          // commit('setProductOptions', apidata.productOptions);
        })
    } catch (e) {
      console.log(e)
    }
  },
  // rootActiontest({ dispatch }) {
  //   // console.log('root-rootActiontest@@');
  //   // dispatch('cart/rootActiontest');
  // },
}

export const strict = false
