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
  },
  thirdStep: {
    cep: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  },
}

export const useFormStore = defineStore('form', () => {
const firstStep = ref(defaultState.firstStep)
const secondStep = ref(defaultState.secondStep)
const thirdStep = ref(defaultState.thirdStep)

return { firstStep, secondStep, thirdStep }
})