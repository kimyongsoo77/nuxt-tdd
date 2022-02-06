// import moment from 'moment'
import * as store from '@/store/index.js'

describe('SET_PAY_TYPE', () => {
  it('상태에 pay tyep 셋팅 한다', () => {
    // const post = { id: 1, title: 'Post' }

    // console.log(mutations)

    const state = store.state()

    store.mutations.setPayType(state, 'test')

    expect(state.PayType).toEqual('test')

    console.log(state)
    // console.log(store.state)

    // expect(store.state).toEqual({
    //   postIds: [1],
    //   posts: { 1: post },
    // })
  })
})
