import axios from 'axios'

export default {
  async authenticate({ commit }, { username, password }) {
    try {
      const authenticated = await axios.post('/api/authenticate', {
        username,
        password,
      })

      commit('SET_AUTHENTICATED', authenticated)
    } catch (e) {
      throw new Error('API 에러가 발생했다')
    }
  },
}
