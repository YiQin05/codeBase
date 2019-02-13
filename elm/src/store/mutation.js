import { INCREMENT, SAVE_GEOHASH } from './mutation-type'
export default {
  [INCREMENT] (state, playTime) {
    state.count += playTime.amount
  },

  [SAVE_GEOHASH] (state, geohash) {
    state.geohash = geohash
  }
}
