import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStepsStore = defineStore('steps', () => {
  const step = ref(1)
  const error = ref(null)

  const nextStep = () => {
    step.value++
  }
  const prevStep = () => {
    step.value--
  }
  return { step, error, nextStep, prevStep }
})