<template>
  <div>
    <button @click="increment">
      Count is: {{ count }}, double is: {{ double }}
    </button>
    <input v-model="inputValue" type="text" />
    reversed : {{ reversedInputValue }}
    <p>{{ mousePositionMessage }}</p>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from '@nuxtjs/composition-api'

export default {
  setup() {
    return {
      ...useCount(),
      ...useHandleInput(),
      ...useMousePosition(),
    }
  },
}

function useCount() {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  const increment = () => count.value++

  return { count, double, increment }
}

function useHandleInput() {
  const inputValue = ref('')
  const reversedInputValue = computed(() =>
    inputValue.value.split('').reverse().join('')
  )
  return { inputValue, reversedInputValue }
}

function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  const mousePositionUpdate = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  const mousePositionMessage = computed(() => {
    return `x: ${x.value} y: ${y.value}`
  })
  onMounted(() => {
    window.addEventListener('mousemove', mousePositionUpdate)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', mousePositionUpdate)
  })

  return { x, y, mousePositionMessage }
}
</script>
