<template>
  <main>
    <header class="border-b pb-3 border-secondary">
      <div class="flex justify-between p-5 max-w-7xl mx-auto items-center">
        <img
          src="@/assets/logo-d4bbf68c.svg"
          class="w-[120px]"
          alt="Pack Beneficios"
        /><button
          type="submit"
          id="button_checkout"
          class="text-white text-[1rem] px-7 py-3 rounded-md disabled:opacity-60 bg-secondary flex justify-center items-center gap-2"
        >
          <IconWpp /><span class="font-bold text-[18px] sm:text-[16px]">98419-5464</span>
        </button>
      </div>
      <ProgressBar :progress="progressBar" />
      <div class="flex justify-between px-2 max-w-7xl mx-auto text-primary font-bold">
        <h1>{{ steps[stepStore.step].title }}</h1>
        <h2 class=" ">Passo {{ stepStore.step }} de 4</h2>
      </div>
    </header>
    <body class="px-[2%] py-5 min-w-lg">
      <component :is="steps[stepStore.step].componentId"></component>
    </body>
    <footer></footer>
  </main>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import IconWpp from "@/components/wppicon.vue";
import ProgressBar from "../components/progressbar.vue";
const FirstStep = defineAsyncComponent(() => import("./steps/firstStepView.vue"));
const SecondStep = defineAsyncComponent(() => import("./steps/secondStepView.vue"));
const ThirdStep = defineAsyncComponent(() => import("./steps/thirdStepView.vue"));
const FourthStep = defineAsyncComponent(() => import("./steps/FourthStepView.vue"));
import { useStepsStore } from "./store/steps.js";
const stepStore = useStepsStore();

const progressBar = computed(() => {
  return stepStore.step * 25;
});

const steps = {
  1: {
    componentId: FirstStep,
    title: "Cadastro",
  },
  2: {
    componentId: SecondStep,
    title: "Mais informações",
  },
  3: {
    componentId: ThirdStep,
    title: "Endereço",
  },
  4: {
    componentId: FourthStep,
    title: "Pagamento",
  },
};
</script>

<style lang="scss" scoped></style>
