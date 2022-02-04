import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeTest from '@/components/StoreTest'

const localVue = createLocalVue()
localVue.use(Vuex)

xdescribe('Footer tests', () => {
  let wrapper
  let store
  let state

  beforeEach(() => {
    state = {
      title: 'kys',
      app: {
        easg_logo: {
          src: '~/assets/images/easg.jpg',
          text: 'EASG',
          top: {
            height: 72,
            width: 82,
          },
        },
        oma_logo: {
          src: '~/assets/images/oma.jpg',
          text: 'OMA',
          top: {
            height: 72,
            width: 82,
          },
        },
      },
    }

    store = new Vuex.Store({
      state,
    })
  })

  test('store test', () => {
    wrapper = shallowMount(storeTest, { store, localVue })
    console.log(wrapper.html())
    const a = 'a'
    expect(a).toBe('a')
  })
})
