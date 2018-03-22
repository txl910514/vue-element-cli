/**
 * Created by txl-pc on 2017/8/3.
 */
import * as types from '../types'
import api from '@/api/member'
const actions = {
  [types.SEARCH_MUSIC] ({commit, state}, member) {
    return new Promise((resolve, reject) => {
      api.search_music(member)
        .then((res) => {
          commit(types.SEARCH_MUSIC, res)
          resolve(res)
        })
        .catch((res, v) => {
          console.log(res)
        })
        .then((res) => {
        })
    })
  },
  [types.GET_GT] ({commit, state}, member) {
    return new Promise((resolve, reject) => {
      api.getGt(member)
        .then((res) => {
          commit(types.GET_GT, res)
          resolve(res)
        })
        .catch((res, v) => {
          console.log(res)
        })
        .then((res) => {
        })
    })
  }
}
export default actions
