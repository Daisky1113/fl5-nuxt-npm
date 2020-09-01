import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'
import InputForm from '../components/InputForm.vue'


Vue.use(Vuetify)

describe('InputForm', () => {
  const wrapper = shallowMount(InputForm)
  const input = wrapper.find('#titleInput')

  test('インプットが存在する', () => {
    expect(input.exists()).toBe(true)
  })
})
