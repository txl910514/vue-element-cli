/**
 * Created by txl-pc on 2017/8/3.
 */
import Vue from 'vue'

export default {
  search_music (params) {
    let param = {
      params
    }
    return Vue.http('base')
      .get('/search_music', param)
      .then((res) => {
        return res
      })
  },
  getGt () {
    return Vue.http('')
      .get('http://www.geetest.com/demo/gt/register-click?t=' + (new Date()).getTime())
      .then((res) => {
        return res
      })
  }
}
