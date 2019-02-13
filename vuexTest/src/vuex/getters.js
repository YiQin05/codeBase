// test
export const getCount = state => {
  return state.count
}
export const getFilter = state => {
  return state.filterData.filter(todo => todo.done)
}
