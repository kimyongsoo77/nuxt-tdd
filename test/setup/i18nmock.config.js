import { config } from '@vue/test-utils'
import translations from '@/test/translations.js'
const locale = 'en'

config.mocks = {
  $t: (msg) => translations[locale][msg],
}

// console.log(VueTestUtils)
