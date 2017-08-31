const files = require.context('.', true, /\.js$/)

import eleEN from 'element-ui/lib/locale/lang/en'
import eleZH from 'element-ui/lib/locale/lang/zh-CN'
import store from '@/store'
import * as types from '@/store/types'

let customZh = {}
let customEn = {}
let locale = {}

files.keys().forEach((key) => {
  if (key === './index.js') return
  console.log(files(key))
  Object.assign(customZh, files(key).default['zh'])
  Object.assign(customEn, files(key).default['en'])
})

function addLang (key, a, b) {
  locale[key] = Object.assign(a, b)
}
console.log(customZh)
console.log(eleZH)
addLang('zh', customZh, eleZH)
addLang('en', customEn, eleEN)
store.commit(types.LOCAL_LANG, locale)
export default locale
