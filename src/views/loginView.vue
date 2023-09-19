<template>
    <section class=" h-screen w-screen justify-center items-center flex">
        <div class="flex flex-col justify-center !items-center gap-2 w-full max-w-lg mx-auto">
            <div class="text-center flex items-center justify-center flex-col gap-5 border-b-2 w-full pb-6">
                <img
                src="@/assets/logo-d4bbf68c.svg"
                class="w-[140px] "
                alt="Pack Saúde"
              />
              <h2 class="text-[22px] font-bold">Faça seu login</h2>
            </div>
          <form class="w-full max-w-lg mx-auto px-10" @submit.prevent="submit">
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
            <Button class=" !-mt-1.5" :disabled="v$.$invalid">Entrar</Button>
          </form>
        </div>
    </section>
</template>

<script setup>
import inputText from "./components/customInput.vue";
import Button from "./components/button.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import {reactive} from "vue";
import { cpf } from "@/utils/customValidators.js";

const rules = {
  cpf: { required, cpf },
};
const formData = reactive({
  cpf: "",
})
const v$ = useVuelidate(rules, formData);

const submit = () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    return;
  }
  
};
</script>

