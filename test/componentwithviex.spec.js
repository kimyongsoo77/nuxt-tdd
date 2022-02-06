import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ComponentWithVuex from '@/components/ComponentWithVuex.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: 'alice',
  },
})

xdescribe('ComponentWithVuex', () => {
  it('실제 Vuex 스토어를 사용해서 username을 렌더한다', () => {
    const wrapper = shallowMount(ComponentWithVuex, {
      store,
      localVue,
    })

    expect(wrapper.find('.username').text()).toBe('alice')
  })
})
