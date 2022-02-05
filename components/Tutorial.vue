<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
      <h2 class="text-2xl leading-7 font-semibold">
        Welcome to your Nuxt Application {{ title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
