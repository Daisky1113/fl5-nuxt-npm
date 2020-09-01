import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, shallowMount } from '@vue/test-utils'
import InputForm from '../components/InputForm.vue'


Vue.use(Vuetify)

describe('InputForm', () => {

  test('インプットが存在する', () => {
    const wrapper = mount(InputForm)
    const input = wrapper.find('#titleInput')

    expect(input.exists()).toBe(true)
  })

  test('dataにはinputTextフィールドがある', () => {
    const wrapper = mount(InputForm)
    const inputValue = wrapper.vm.$data.inputTex
    expect(inputValue).toBe('')
  })

  test('inputの値が変わるとinputTextの値も変わる', () => {
    const wrapper = mount(InputForm)
    const input = wrapper.find('#titleInput')
    input.setValue('hogehoge')
    expect(wrapper.vm.$data.inputTex).toBe('hogehoge')
  })

})
