// await dispatch('getMenuInfo', process.env.API_SECURE)

import actions from '@/test/setup/store.js'

let url = ''
let body = {}
let mockError = false

jest.mock('axios', () => ({
  post: (_url, _body) => {
    return new Promise((resolve) => {
      if (mockError) throw new Error('error')

      url = _url
      body = _body
      resolve(true)
    })
  },
}))

describe('authenticate', () => {
  it('인증된 유저', async () => {
    const commit = jest.fn()
    const username = 'alice'
    const password = 'password'

    await actions.authenticate({ commit }, { username, password })

    expect(url).toBe('/api/authenticate')
    expect(body).toEqual({ username, password })
    expect(commit).toHaveBeenCalledWith('SET_AUTHENTICATED', true)
  })

  it('에러를 캐치한다', async () => {
    mockError = true

    await expect(
      actions.authenticate({ commit: jest.fn() }, {})
    ).rejects.toThrow('API 에러가 발생했다')
  })
})
