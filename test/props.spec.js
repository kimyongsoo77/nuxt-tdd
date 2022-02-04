import { mount } from '@vue/test-utils'
import tutorial from '@/components/Tutorial'

xdescribe('컴포넌트 테스트', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(tutorial, {
      propsData: {
        title: 'red',
      },
    })
    console.log(wrapper)
    expect(wrapper.props().title).toBe('red')
  })
})
