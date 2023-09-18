<template>
    <section class="max-w-xl mx-auto">
      <div class="font-bold leading-6 text-primary text-[22px]">
        <h3>Preencha os campos abaixo com o seu endereço.</h3>
      </div>
      <div>
        <form @submit.prevent="submit">
          <inputText
            :label="'Cep'"
            type="tel"
            v-mask="'#####-###'"
            :onblur="pesquisacep(formData.cep)"
            :modelValue="formData.cep"
            v-model="formData.cep"
            :rules="[() => !v$.cep.required.$invalid || 'cep é obrigatório']"
          />
  
          <inputText
            :label="'Rua'"
            type="text"
            :modelValue="formData.address"
            v-model="formData.address"
            :rules="[
              () => !v$.address.required.$invalid || 'Rua é obrigatório',
            ]"
          />
  
          <inputText
            :label="'Bairro'"
            :modelValue="formData.neighborhood"
            v-model="formData.neighborhood"
            :rules="[
              () => !v$.neighborhood.required.$invalid || 'Bairro é obrigatório',
            ]"
          />
          <inputText
            :label="'Número'"
            v-model="formData.number"
            :modelValue="formData.number"
            :rules="[
              () => !v$.number.required.$invalid || 'Número é obrigatório',
            ]"
          />
          <inputText
          :label="'Complemento'"
          v-model="formData.complement"
          :modelValue="formData.complement"
        />
          <Button :disabled="v$.$invalid">Continuar</Button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import inputText from "../components/customInput.vue";
  import Button from "../components/button.vue";
  import { useVuelidate } from "@vuelidate/core";
  import { required } from "@vuelidate/validators";
  import { useFormStore } from "../store/form.js";
  import { useStepsStore } from "../store/steps.js";
  import { axios } from '@/resources/axios'

  const formStore = useFormStore();
  const stepStore = useStepsStore();
  
  const formData = formStore.thirdStep;
  
  const rules = {
    cep: { required },
    address: { required },
    number: { required },
    neighborhood: { required },
  };
  const v$ = useVuelidate(rules, formData);
  const pesquisacep = async (cep) => {
    if (cep.length === 9) {
    const viCepUrl = import.meta.env.VITE_CEP
      const cep = formData.cep.replace(/\D/g, "");
      const url = `${viCepUrl}${cep}/json/`;
      const { data } = await axios.get(url);
      formData.address = data.logradouro;
      formData.neighborhood = data.bairro;
      formData.city = data.localidade;
      formData.state = data.uf;
      formData.neighborhood = data.bairro;
    }
  };
  const submit = () => {
    v$.value.$touch();
    if (v$.value.$invalid) {
      return;
    }
    stepStore.nextStep();
  };
  </script>
  