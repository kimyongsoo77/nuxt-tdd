import { config } from '@vue/test-utils'
import translations from '@/test/translations.js'
const locale = 'ja'

config.mocks = {
  $t: (msg) => translations[locale][msg],
}

// console.log(VueTestUtils)
