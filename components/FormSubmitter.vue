<template>
  <div>
    <form @submit.prevent="handleSubmitAsync">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>

    <div v-if="submitted" class="message">
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormSubmitter',

  data() {
    return {
      username: '',
      submitted: false,
    }
  },

  methods: {
    handleSubmit() {},
    handleSubmitAsync() {
      return this.$http
        .get('/api/v1/register', { username: this.username })
        .then((response) => {
          // 성공 메세지나 기타 등등을 보여줍니다
          console.log('response : ' + response)
          this.submitted = true
        })
        .catch((e) => {
          // 에러를 다룹니다
          throw new Error('Something went wrong', e)
        })
    },
  },
}
</script>
