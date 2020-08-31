export const state = () => ({
  message: "msg from store",
  userId: 'hogehogefoobar'
})

export const mutations = {
  changeMessage(state, newMessage) {
    state.message = newMessage
  }
}
