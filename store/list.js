export const state = () => ({
  listItems: []
})

export const mutations = {
  addListItem(state, payload) {
    state.listItems.push(payload)
  },
  removeListItem(state, itemId) {
    const index = state.listItems.findIndex(el => el.id == itemId)
    state.listItems.splice(index, 1)
  }
}
