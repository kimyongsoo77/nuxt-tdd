import { shallowMount } from '@vue/test-utils'
import Bilingual from '@/components/Bilingual.vue'

// import translations from '@/test/translations.js'
// config.mocks = {
//   $t: (msg) => msg, // 입력값 그대로 출력 ex) $t('helloWorld') => helloWorld가 출력됨
// }

// const locale = 'ja'
// config.mocks = {
//   $t: (msg) => translations[locale][msg],
// }

xdescribe('Bilingual', () => {
  it('성공적으로 렌더한다', () => {
    // console.log(config)
    // const wrapper = shallowMount(Bilingual, {
    //   mocks: {
    //     $t: (msg) => msg, // 입력값 그대로 출력 ex) $t('helloWorld') => helloWorld가 출력됨
    //   },
    // })

    const wrapper = shallowMount(Bilingual)
    const b = wrapper.find('.hello')
    expect(b.text()).toBe('Hello world!')
    console.log(wrapper.html())
  })
})
