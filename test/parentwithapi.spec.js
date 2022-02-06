import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild.vue'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue'

xdescribe('ParentWithAPICallChild.vue', () => {
  it('마운트로 렌더하고 API 호출을 초기화한다', () => {
    // const wrapper = mount(ParentWithAPICallChild)

    // const wrapper = mount(ParentWithAPICallChild, {
    //   stubs: {
    //     ComponentWithAsyncCall: true,
    //   },
    // })

    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: "<div class='stub'></div>",
      },
    })

    console.log(wrapper.html())
    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })

  it('shallowMount로 렌더하고 API 호출을 호기화 하지 않는다', () => {
    const wrapper = shallowMount(ParentWithAPICallChild)
    console.log(wrapper.html())
    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })
})
