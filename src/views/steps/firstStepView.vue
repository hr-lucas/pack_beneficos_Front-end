<template>
  <section class=" max-w-xl mx-auto">
    <div class="font-bold leading-6 text-primary text-[22px]">
      <h3>Vamos precisar de algumas informações rápidas sobre você.</h3>
    </div>
    <div>
      <form @submit.prevent="submit">
        <inputText
          :label="'Nome Completo'"
          type="text"
          v-model="formData.name"
          :rules="[() => !v$.name.required.$invalid || 'Nome Completo é obrigatório']"
        />

        <inputText
          :label="'Celular / Whatsapp (com DDD)'"
          v-mask="'(##) #####-####'"
          type="tel"
          v-model="formData.phone"
          :rules="[
            () => !v$.phone.required.$invalid || 'Celular é obrigatório',
            () => !v$.phone.phone.$invalid || 'Celular é inválido',
          ]"
        />

        <inputText
          :label="'E-mail'"
          v-model="formData.email"
          :rules="[
            () => !v$.email.required.$invalid || 'E-mail é obrigatório',
            () => !v$.email.email.$invalid || 'E-mail inválido',
          ]"
        />
        <Button id="button_firtStep" :disabled="v$.$invalid">Continuar</Button>
      </form>
    </div>
  </section>
</template>

<script setup>
import inputText from "../components/customInput.vue";
import Button from "../components/button.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useFormStore } from "../store/form.js";
import { useStepsStore } from "../store/steps.js";
import { phone } from "../../utils/customValidators.js";

const formStore = useFormStore();
const stepStore = useStepsStore();

const formData = formStore.firstStep;

const rules = {
  name: { required },
  phone: { required, phone },
  email: { required, email },
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
