<template>
  <section>
    <div class="font-bold leading-6 text-primary text-[22px]">
      <h3>Vamos precisar de mais algumas informações para continuar o cadastro.</h3>
    </div>
    <div>
      <form @submit.prevent="submit">
        <inputText
          :label="'CPF'"
          type="tel"
          v-mask="'###.###.###-##'"
          v-model="formData.cpf"
          :rules="[
            () => !v$.cpf.required.$invalid || 'CPF é obrigatório',
            () => !v$.cpf.cpf.$invalid || 'CPF é inválido',
          ]"
        />

        <inputText
          :label="'Data de nascimento'"
          type="date"
          v-model="formData.brithDate"
          :rules="[
            () => !v$.brithDate.required.$invalid || 'Data de nascimento é obrigatório',
            () => !v$.brithDate.date.$invalid || 'Data é inválida',
          ]"
        />

        <Radios
        title="Sexo"
        :items="option"
        :value="formData.sex"
        v-model="formData.sex"
      />
        <Button :disabled="v$.$invalid">Continuar</Button>
      </form>
    </div>
  </section>
</template>

<script setup>
import inputText from "../components/customInput.vue";
import Button from "../components/button.vue";
import Radios from "../components/inputRadios.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useFormStore } from "../store/form.js";
import { useStepsStore } from "../store/steps.js";
import { cpf, date } from "../../utils/customValidators.js";

const formStore = useFormStore();
const stepStore = useStepsStore();

const formData = formStore.secondStep;

const option = [
  {
    label: "Masculino",
    value: "Masculino",
  },
  {
    label: "Feminino",
    value: "Feminino",
  },
];

const rules = {
  cpf: { required, cpf },
  brithDate: { required, date },
  sex: { required },
};
const v$ = useVuelidate(rules, formData);

const submit = () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    return;
  }
  stepStore.nextStep();
};
</script>
