import { shallowMount } from '@vue/test-utils'
import Emitter from '@/components/Emitter.vue'

xdescribe('Emitter', () => {
  it('두 개의 인자를 가진 이벤트를 방출한다', () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.emitEvent()

    console.log(wrapper.emitted())
  })

  it('컴포넌트를 마운트 하지 않고 이벤트를 방출한다', () => {
    const events = {}
    const $emit = (event, ...args) => {
      events[event] = [...args]
    }

    Emitter.methods.emitEvent.call({ $emit })

    expect(events.myEvent).toEqual(['name', 'password'])
  })
})
