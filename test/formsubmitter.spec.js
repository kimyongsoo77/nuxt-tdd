import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import FormSubmitter from '@/components/FormSubmitter.vue'

let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url
      data = _data
      resolve('test')
    })
  },
}

describe('FormSubmitter', () => {
  it('제출했을 때 알림이 나타난다', async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp,
      },
    })

    wrapper.find('[data-username]').setValue('alice')
    wrapper.find('form').trigger('submit.prevent')

    // await wrapper.vm.$nextTick()
    await flushPromises()

    expect(url).toBe('/api/v1/register')
    expect(data).toEqual({ username: 'alice' })

    expect(wrapper.find('.message').text()).toBe(
      'Thank you for your submission, alice.'
    )
  })
})
