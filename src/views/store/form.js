import { defineStore } from 'pinia'
import { ref } from 'vue'

const defaultState = {
  firstStep: {
    name: '',
    phone: '',
    email: '',
  },
  secondStep: {
    cpf: '',
    brithDate: '',
    sex: '',
  }
}

export const useFormStore = defineStore('form', () => {
const firstStep = ref(defaultState.firstStep)
const secondStep = ref(defaultState.secondStep)

return { firstStep, secondStep }
})