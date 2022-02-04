<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <h2 class="text-2xl leading-7 font-semibold">
      Welcome to your Nuxt Application {{ $store.state.title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'StoreTest',
}
</script>
