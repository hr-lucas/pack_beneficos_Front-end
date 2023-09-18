import { defineStore } from 'pinia'
import { ref } from 'vue'
import { axios } from '@/resources/axios'

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

const sendRdApi = async (planSelect) => {
  const addressFormart = `${thirdStep.value.address}, ${thirdStep.value.number}, ${thirdStep.value.neighborhood}, ${thirdStep.value.city}, ${thirdStep.value.state} - CEP: ${thirdStep.value.cep} - Complemento: ${thirdStep.value.complement || 'Sem complemento'}`
  const data = {
    event_type: "CONVERSION",
    event_family: "CDP",
    payload: {
      conversion_identifier: "Formulario 2 - Contratação ",
      email: firstStep.value.email,
      name: firstStep.value.name,
      personal_phone: firstStep.value.phone,
      mobile_phone: firstStep.value.phone,
      cf_cpf: secondStep.value.cpf,
      cf_endereco: addressFormart,
      cf_sexo: secondStep.value.sex,
      cf_plano: planSelect,
      cf_forma_pagamento: "Cartão de Crédito",
      cf_data_aniversario: secondStep.value.brithDate,
    }
  }
  await axios.post(import.meta.env.VITE_API_RD, data)
}
return { firstStep, secondStep, thirdStep, sendRdApi }
})