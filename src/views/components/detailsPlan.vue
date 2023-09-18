<template>
  <div>
    <div class="font-bold leading-6 text-primary text-[22px] text-center my-5">
      <h3>Escolha a assinatura<br />ideal para você</h3>
    </div>
    <div class="max-w-xl mx-auto space-y-2 text-center lg:max-w-none">
      <div
        class="relative z-0 inline-flex overflow-hidden bg-white border-2 p-2 border-secondary rounded-full"
      >
        <button
          class="block w-full px-8 py-2 text-sm font-medium transition rounded-full"
          :class="annual == true ? ' bg-secondary !text-white' : ''"
          @click="annual = true"
          type="button"
        >
          Anual
        </button>
        <button
          class="block w-full px-8 py-2 text-sm font-medium transition rounded-full"
          :class="annual == false ? 'bg-secondary text-white' : ''"
          @click="annual = false"
          type="button"
        >
          Mensal
        </button>
      </div>
    </div>
    <div>
      <div
        class="flex flex-wrap items-center gap-4 sm:gap-10 justify-center max-w-7xl my-10 mx-auto"
      >
        <div
          v-for="(plan, index) in selectPlan"
          :key="index"
          :class="
            plan.name === 'Plano Especialistas' ? 'border-[2px] border-secondary' : ''
          "
          class="drop-shadow-2xl bg-white p-10 rounded-md w-[32%] sm:w-full min-h-[380px] sm:min-h-min flex flex-col flex-[1 1 280px] justify-start gap-3 text-center"
        >
          <h2 class="text-[24px] text-primary font-bold">{{ plan.name }}</h2>
          <p class="text-[14px]">{{ plan.description }}</p>
          <div>
            <div class="flex justify-center items-baseline">
              <span class="text-[32px] text-secondary font-bold">{{ plan.price }}</span
              ><span class="text-secondary">/mês</span>
            </div>
            <button
              @click="redirect(plan.url, plan.select)"
              class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-primary w-full"
              id="button_home"
            >
              Contratar agora</button
            ><span class="text-gray text-[12px]">*Pagamento Cartão de Crédito.</span>
            <div class="w-full">
              <ul class="w-full flex flex-col items-start">
                <li
                  v-for="(details, index) in plan.details"
                  :key="index"
                  class="flex gap-2 border-b-[1px] border-gray w-full text-left p-2 text-primary"
                >
                  <div>
                    <img class="w-[25px]" src="@/assets/check-mark-eeabd946.svg" alt="" />
                  </div>
                  {{ details }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useFormStore } from "../store/form.js";

const annual = ref(true);
const selectPlan = computed(() => {
  return annual.value ? planDetails.anual : planDetails.mensal;
});
const formStore = useFormStore();

const redirect = async (url, plan) => {
  await formStore.sendRdApi(plan);
  window.location.href = url
};
const planDetails = {
  anual: [
    {
      name: "Plano Especialistas",
      select: "Plano Especialistas Anual",
      price: "R$ 49,90",
      url: "https://www.asaas.com/c/860459555471",
      description:
        "Perfeito para quem deseja um cuidado completo, incluindo saúde mental, física e nutricional.",
      details: [
        "Teleconsulta",
        "Pronto atendimento",
        "Nutrição",
        "Psicologia",
        "Adicional R$ 9,90/mês por dependente",
      ],
    },
    {
      name: "Plano Básico",
      select: "Plano Básico Anual",
      price: "R$ 24,90",
      url: "https://www.asaas.com/c/856694414198",
      description: "Ideal para quem precisa de orientação médica básica e regularmente.",
      details: ["Teleconsulta", "Adicional de R$ 3,49/mês por dependente"],
    },
  ],
  mensal: [
    {
      name: "Plano Especialistas",
      select: "Plano Especialistas Mensal",
      price: "R$ 64,90",
      url: "https://www.asaas.com/c/849389027054",
      description:
        "Perfeito para quem deseja um cuidado completo, incluindo saúde mental, física e nutricional.",
      details: [
        "Teleconsulta",
        "Pronto atendimento",
        "Nutrição",
        "Psicologia",
        "Adicional R$ 14,90 por dependente",
      ],
    },
    {
      name: "Plano Básico",
      select: "Plano Básico Mensal",
      price: "R$ 34,90",
      url: "https://www.asaas.com/c/579730803128",
      description: "Ideal para quem precisa de orientação médica básica e regularmente.",
      details: ["Teleconsulta", "Adicional de R$ 4,90/mês por dependente"],
    },
  ],
};
</script>
