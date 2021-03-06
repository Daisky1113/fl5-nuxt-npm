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

  test('dataにはinputの文字数を数えるフィールドがある', () => {
    const wrapper = mount(InputForm)
    expect(wrapper.vm.count).toBe(0)
  })

  test('inputに入力できる文字数が7文字以内でなければfalseを返す', () => {
    const wrapper = mount(InputForm)
    const input = wrapper.find('#titleInput')
    input.setValue('hogehoge')
    expect(wrapper.vm.textsizeMin).toBe(false)
  })

})
