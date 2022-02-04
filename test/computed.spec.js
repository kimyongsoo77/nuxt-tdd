import { shallowMount } from '@vue/test-utils'
import NumberRenderer from '@/components/NumberRenderer.vue'

xdescribe('NumberRenderer', () => {
  it('짝수를 렌더한다', () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: {
        even: true,
      },
    })

    expect(wrapper.text()).toBe('2, 4, 6, 8')
  })

  it('홀수를 렌더한다', () => {
    const localThis = { even: false }

    console.log(this)
    expect(NumberRenderer.computed.numbers.call(localThis)).toBe(
      '1, 3, 5, 7, 9'
    )
  })
})
