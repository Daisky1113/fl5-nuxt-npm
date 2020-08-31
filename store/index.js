export const state = () => ({
  message: "msg from store"
})

export const mutations = {
  changeMessage(state, newMessage) {
    state.message = newMessage
  }
}
