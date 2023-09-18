<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const $router = useRouter();
const route = useRoute();

const annual = ref(true);
const selectPlan = computed(() => {
  return annual.value ? planDetails.anual : planDetails.mensal;
});
const planDetails = {
  anual: [
    {
      name: "Plano Especialistas",
      price: "R$ 49,90",
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
      price: "R$ 24,90",
      description: "Ideal para quem precisa de orientação médica básica e regularmente.",
      details: ["Teleconsulta", "Adicional de R$ 3,49/mês por dependente"],
    },
  ],
  mensal: [
    {
      name: "Plano Especialistas",
      price: "R$ 64,90",
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
      price: "R$ 34,90",
      description: "Ideal para quem precisa de orientação médica básica e regularmente.",
      details: ["Teleconsulta", "Adicional de R$ 4,90/mês por dependente"],
    },
  ],
};
</script>

<template>
  <main>
    <div class="w-full">
      <div class="w-full border-b-[1px] border-secondary p-3">
        <header class="max-w-7xl m-auto flex justify-between w-full items-center">
          <div class="w-6/12">
            <img
              src="@/assets/logo-d4bbf68c.svg"
              class="sm:w-[130px]"
              alt="Pack Beneficios"
            />
          </div>
          <div class="w-6/12 flex justify-end">
            <button
              class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-primary !min-w-[auto]"
              id="button_home"
              @click="$router.push({ name: 'contratacao', query: route.query })"
            >
              Contratar agora
            </button>
          </div>
        </header>
      </div>
      <main class="max-w-7xl m-auto">
        <section class="flex justify-center sm:flex-col-reverse items-center p-10 sm:p-5">
          <div class="w-1/2 p-20 sm:w-full sm:p-0">
            <h1 class="text-title_lg text-primary">
              A saúde e o cuidado que você precisa sem sair de casa.
            </h1>
            <p class="text-subtitle_lg text-[#5b5b5ba7] text-justify my-3">
              Os melhores profissionais ao seu alcance quando e onde estiver: pronto
              atendimento, agendamento com especialistas, acompanhamento nutricional e
              psicológico, tudo online. A solução completa em saúde digital é Pack
              Benefícios.
            </p>
            <button
              class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-secondary sm:w-full sm:!p-5"
              id="button_home"
              @click="$router.push({ name: 'contratacao', query: route.query })"
            >
              Contratar agora
            </button>
          </div>
          <div class="w-1/2 sm:w-full">
            <img
              src="@/assets/banner_01-044d71f8.png"
              alt="A saúde e o cuidado que você precisa sem sair de casas"
            />
          </div>
        </section>
      </main>
      <section class="bg-primary w-full text-center p-20 sm:p-5 sm:py-20">
        <div class="max-w-7xl mx-auto flex justify-center items-center flex-col gap-3">
          <h2 class="text-title_lg text-white">Um atendimento que você pode contar.</h2>
          <p class="text-subtitle_lg text-white text-center my-3">
            Aqui, sempre vai ter um especialista pronto para te ajudar! Nosso atendimento
            é humanizado e ágil para que<br />
            você use sua proteção com facilidade e segurança.
          </p>
          <img src="@/assets/card-c8e888e1.png" alt="4.100 avalições" />
        </div>
      </section>
      <section class="text-center p-20 sm:p-10 flex flex-col gap-10">
        <h2 class="text-title_lg text-primary">
          Cuidado e Tratamento que você pode confiar
        </h2>
        <div
          class="flex flex-wrap items-center gap-4 justify-center w-full sm:w-full mt-4 mx-auto max-w-7xl"
        >
          <div
            class="flex items-center w-[22%] sm:w-[100%] flex-col p-10 rounded-md gap-2 flex-[1 1 200px] min-h-[200px] bg-secondary text-white"
          >
            <img
              src="@/assets/device-5fb0b5a4.svg"
              alt="Maior plataforma da América Latina"
            />
            <p class="text-white">Maior plataforma da América Latina</p>
          </div>
          <div
            class="flex items-center w-[22%] sm:w-[100%] flex-col p-10 rounded-md gap-2 flex-[1 1 200px] min-h-[200px] bg-secondary text-white"
          >
            <img
              src="@/assets/health-de21869e.svg"
              alt="Maior plataforma da América Latina"
            />
            <p class="text-white">+70 mil profissionais de saúde</p>
          </div>
          <div
            class="flex items-center w-[22%] sm:w-[100%] flex-col p-10 rounded-md gap-2 min-h-[200px] flex-[1 1 200px] bg-secondary text-white"
          >
            <img
              src="@/assets/ps_header-ae7da4dc.svg"
              alt="Maior plataforma da América Latina"
            />
            <p class="text-white">+3.300 psicólogos</p>
          </div>
          <div
            class="flex items-center w-[22%] sm:w-[100%] flex-col p-10 rounded-md gap-2 flex-[1 1 200px] min-h-[200px] bg-secondary text-white"
          >
            <img
              src="@/assets/medical-03783c61.svg"
              alt="Maior plataforma da América Latina"
            />
            <p class="text-white">+30 especialidades médicas</p>
          </div>
        </div>
        <div>
          <button
            class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-primary sm:w-full sm:p-5"
            id="button_home"
            @click="$router.push({ name: 'contratacao', query: route.query })"
          >
            Contratar agora
          </button>
        </div>
      </section>
      <section
        class="bg-primary w-full text-left p-20 sm:p-2 flex justify-center items-center flex-col gap-3"
      >
        <div
          class="flex justify-center items-center flex-row-reverse sm:flex-col-reverse p-10 sm:p-3 sm:py-10 max-w-7xl mx-auto"
        >
          <div class="w-1/2 p-20 sm:p-5 sm:w-full">
            <h1 class="text-title_lg text-white">
              O primeiro plano de Teleconsulta pensado para cuidar de profissionais
              autônomos e PJs.
            </h1>
            <p class="text-subtitle_lg text-white text-justify my-3">
              Cansado de ficar horas no hospital esperando atendimento? Não pode pagar
              caro para se consultar com um especialista? A Telemedicina poupa seu tempo e
              dinheiro, te conectando com profissionais especializados sem pesar no seu
              bolso
            </p>
            <button
              class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-secondary sm:w-full sm:p-5"
              id="button_home"
                  @click="$router.push({ name: 'contratacao', query: route.query })"
            >
              Contratar agora
            </button>
          </div>
          <div class="w-1/2 sm:w-full">
            <img
              src="@/assets/callAction-1690d834.svg"
              alt="A saúde e o cuidado que você precisa sem sair de casas"
            />
          </div>
        </div>
      </section>
      <section class="p-20 sm:p-5 sm:py-10 max-w-7xl mx-auto">
        <h1 class="text-title_lg text-primary">Sua mente também merece esse cuidado</h1>
        <p class="text-subtitle_lg text-[#5b5b5ba7] !font-light text-justify my-3">
          A Pack Benefícios se preocupa com você de maneira completa. <br />Faça consultas
          online com psicólogos e cuide da sua saúde mental.
        </p>
        <div class="flex justify-center items-center sm:flex-col-reverse">
          <div class="w-1/2 sm:w-full flex flex-col gap-8 mt-7 justify-start">
            <div class="flex gap-4 items-center w-full">
              <div class="w-[7px] rounded-full h-full min-h-[100px] bg-gray"></div>
              <div>
                <h3 class="text-[24px] sm:text-[20px] font-bold text-primary">
                  Flexibilidade que se encaixa na sua rotina
                </h3>
                <p class="text-[1rem] font-light text-[#5b5b5ba7]">
                  Você não precisa gastar tempo com deslocamento para fazer
                  <br class="sm:hidden" />sua terapia online.
                </p>
              </div>
            </div>
            <div class="flex gap-4 items-center w-full">
              <div class="w-[7px] rounded-full h-full min-h-[100px] bg-secondary"></div>
              <div>
                <h3 class="text-[24px] sm:text-[20px] font-bold text-secondary">
                  Liberdade para se cuidar de onde estiver
                </h3>
                <p class="text-[1rem] font-light text-[#5b5b5ba7]">
                  A sessão de psicologia online está a apenas uma conexão
                  <br class="sm:hidden" />
                  de distância de você.
                </p>
              </div>
            </div>
            <div class="flex gap-4 items-center w-full">
              <div class="w-[7px] rounded-full h-full min-h-[100px] bg-gray"></div>
              <div>
                <h3 class="text-[24px] sm:text-[20px] font-bold text-primary">
                  Investimento que cabe no seu bolso
                </h3>
                <p class="text-[1rem] font-light text-[#5b5b5ba7]">
                  Com pequenos investimentos, você tem acompanhamento<br
                    class="sm:hidden"
                  />
                  psicológico online de qualidade.
                </p>
              </div>
            </div>
            <div class="flex gap-4 items-center w-full">
              <div class="w-[7px] rounded-full h-full min-h-[100px] bg-gray"></div>
              <div>
                <h3 class="text-[24px] sm:text-[20px] font-bold text-primary">
                  Qualidade da terapia presencial em casa
                </h3>
                <p class="text-[1rem] font-light text-[#5b5b5ba7]">
                  São milhares de profissionais especializados para
                  <br class="sm:hidden" />
                  te atender de forma online.
                </p>
              </div>
            </div>
          </div>
          <div class="w-1/2 sm:w-full">
            <img
              src="@/assets/cuidado-972a23f4.svg"
              alt="Sua mente também merece esse cuidado"
            />
          </div>
        </div>
        <button
          class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-secondary mt-10 sm:w-full sm:p-5"
          id="button_home"
              @click="$router.push({ name: 'contratacao', query: route.query })"
        >
          Contratar agora
        </button>
      </section>
      <section class="p-20 sm:p-5 text-center max-w-7xl mx-auto">
        <h1 class="text-title_lg text-primary">
          Conheça os benefícios da<br class="sm:hidden" />
          Pack Benefícios
        </h1>
        <div class="flex flex-wrap items-center gap-4 justify-center mt-4 mx-auto">
          <div
            class="flex items-left text-left w-[32%] sm:w-full max-h-60 h-full flex-col p-5 rounded-md gap-2 flex-[1 1 350px] h-full min-h-[200px] text-primary"
          >
            <div class="h-[70px]">
              <img
                src="@/assets/hospital-93730179.svg"
                class="w-[15%]"
                alt="Maior plataforma da América Latina"
              />
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="text-primary text-[18px] font-bold">
                Consulta com especialistas
              </h1>
              <p class="text-[#5b5b5ba7] font-light text-[14px]">
                Além do pronto atendimento, seu plano inclui consulta com especialistas.
                Sem custo extra.
              </p>
            </div>
          </div>
          <div
            class="flex items-left text-left w-[32%] sm:w-full max-h-60 h-full flex-col p-5 rounded-md gap-2 flex-[1 1 350px] h-full min-h-[200px] text-primary"
          >
            <div class="h-[70px]">
              <img
                src="@/assets/atendiment-0e2e4d5e.svg"
                class="w-[11%]"
                alt="Maior plataforma da América Latina"
              />
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="text-primary text-[18px] font-bold">
                Pronto atendimento sem limites
              </h1>
              <p class="text-[#5b5b5ba7] font-light text-[14px]">
                Além do pronto atendimento, seu plano inclui consulta com especialistas.
                Sem custo extra.
              </p>
            </div>
          </div>
          <div
            class="flex items-left text-left w-[32%] sm:w-full max-h-60 h-full flex-col p-5 rounded-md gap-2 flex-[1 1 350px] h-full min-h-[200px] text-primary"
          >
            <div class="h-[70px]">
              <img
                src="@/assets/helf-cb0d33ca.svg"
                class="w-[15%]"
                alt="Maior plataforma da América Latina"
              />
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="text-primary text-[18px] font-bold">Cobertura completa</h1>
              <p class="text-[#5b5b5ba7] font-light text-[14px]">
                Conte com médicos especialistas, psicólogos e nutricionistas para cuidar
                do seu corpo e mente.
              </p>
            </div>
          </div>
          <div
            class="flex items-left text-left w-[32%] sm:w-full max-h-60 h-full flex-col p-5 rounded-md gap-2 flex-[1 1 350px] h-full min-h-[200px] text-primary"
          >
            <div class="h-[70px]">
              <img
                src="@/assets/checked-b6240e1a.svg"
                class="w-[15%]"
                alt="Maior plataforma da América Latina"
              />
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="text-primary text-[18px] font-bold">Carência Zero</h1>
              <p class="text-[#5b5b5ba7] font-light text-[14px]">
                Acesso imediato ao pronto atendimento após<br />
                que contratar.
              </p>
            </div>
          </div>
          <div
            class="flex items-left text-left w-[32%] sm:w-full max-h-60 h-full flex-col p-5 rounded-md gap-2 flex-[1 1 350px] h-full min-h-[200px] text-primary"
          >
            <div class="h-[70px]">
              <img
                src="@/assets/conection-61841f45.svg"
                class="w-[15%]"
                alt="Maior plataforma da América Latina"
              />
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="text-primary text-[18px] font-bold">Fácil de usar</h1>
              <p class="text-[#5b5b5ba7] font-light text-[14px]">
                Experiência 100% digital.
              </p>
            </div>
          </div>
          <div
            class="flex items-left text-left w-[32%] sm:w-full max-h-60 h-full flex-col p-5 rounded-md gap-2 flex-[1 1 350px] h-full min-h-[200px] text-primary"
          >
            <div class="h-[70px]">
              <img
                src="@/assets/contract-85655406.svg"
                class="w-[13%]"
                alt="Maior plataforma da América Latina"
              />
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="text-primary text-[18px] font-bold">Contratação simplificada</h1>
              <p class="text-[#5b5b5ba7] font-light text-[14px]">
                Rápido e sem burocracia.
              </p>
            </div>
          </div>
        </div>
        <button
          class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-primary sm:w-full sm:p-5"
          id="button_home"
              @click="$router.push({ name: 'contratacao', query: route.query })"
        >
          Contratar agora
        </button>
      </section>
      <section class="p-20 sm:p-5 sm:py-10 max-w-7xl mx-auto">
        <div class="w-[40%] sm:w-full">
          <h1 class="text-title_lg text-primary">É fácil de contratar</h1>
          <p class="text-subtitle_lg text-[#5b5b5ba7] !font-light text-justify my-3">
            Em apenas 3 passos que levam poucos minutos, você já tem acesso a tudo que
            precisa para cuidar da saúde do seu corpo e mente com tranquilidade.
          </p>
        </div>
        <div
          class="flex flex-wrap items-center gap-4 sm:gap-10 justify-center my-10 mx-auto"
        >
          <div
            class="w-[32%] sm:w-full flex justify-center rounded-xl relative items-center flex-col flex-[1 1 280px] p-8 drop-shadow-2xl bg-white"
          >
            <div
              class="w-[30px] h-10 text-white font-bold rounded-full absolute bottom-[125px] bg-secondary p-5 flex justify-center items-center"
            >
              <h1 class="text-[22px]">1</h1>
            </div>
            <div class="text-center flex flex-col gap-3">
              <h2 class="font-semibold text-[20px]">Escolha o plano.</h2>
              <p>Clique no botão e escolha o plano ideal para você.</p>
            </div>
          </div>
          <div
            class="w-[32%] sm:w-full flex justify-center rounded-xl relative items-center flex-col flex-[1 1 350px] p-8 drop-shadow-2xl bg-white"
          >
            <div
              class="w-[30px] h-10 text-white font-bold rounded-full absolute bottom-[125px] bg-secondary p-5 flex justify-center items-center"
            >
              <h1 class="text-[22px]">2</h1>
            </div>
            <div class="text-center flex flex-col gap-3">
              <h2 class="font-semibold text-[20px]">Faça o cadastro.</h2>
              <p>Faça o pagamento e cadastre seus dados no aplicativo.</p>
            </div>
          </div>
          <div
            class="w-[32%] sm:w-full flex justify-center relative rounded-xl items-center flex-col flex-[1 1 350px] p-8 drop-shadow-2xl bg-white"
          >
            <div
              class="w-[30px] h-10 text-white font-bold rounded-full absolute bottom-[130px] bg-secondary p-5 flex justify-center items-center"
            >
              <h1 class="text-[22px]">3</h1>
            </div>
            <div class="text-center flex flex-col gap-3">
              <h2 class="font-semibold text-[20px]">Acesse o Pack Benefícios.</h2>
              <p>
                Pronto! Você já tem acesso assim que o pagamento é confirmado. Sem
                carência.
              </p>
            </div>
          </div>
        </div>
        <button
          class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-secondary hidden sm:block mt-10 sm:w-full sm:p-5"
          id="button_home"
              @click="$router.push({ name: 'contratacao', query: route.query })"
        >
          Contratar agora
        </button>
      </section>
      <section class="p-20 sm:p-5 sm:py-10 max-w-7xl mx-auto">
        <div class="w-full">
          <h1 class="text-title_lg text-primary">Planos que cabem no seu bolso</h1>
          <p class="text-subtitle_lg text-[#5b5b5ba7] !font-light text-justify my-3">
            Os melhores profissionais ao seu alcance quando e onde estiver:<br />
            pronto atendimento, agendamento com especialistas, acompanhamento nutricional
            e psicológico
          </p>
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
                  class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-primary w-full"
                  id="button_home"
                  @click="$router.push({ name: 'contratacao', query: route.query })"
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
      </section>
      <section class="p-20 flex sm:flex-col sm:p-5 justify-between max-w-7xl mx-auto">
        <div class="w-1/2 sm:w-full max-w-md">
          <img
            src="@/assets/call-8d596235.svg"
            alt="Especialistas que atendem na 
        Pack Benefícios."
          />
          <h1 class="text-title_lg mt-10 text-primary">Precisa de mais informações?</h1>
          <p class="text-subtitle_lg text-[#5b5b5ba7] !font-light text-justify my-3">
            Fale com a gente. Um especilsita vai te ajudar!
          </p>
          <button
            class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-secondary sm:w-full w-[70%] !p-5"
            id="button_home"
                @click="$router.push({ name: 'contratacao', query: route.query })"
          >
            Falar com especialista
          </button>
        </div>
        <div class="w-1/2 sm:w-full sm:mt-5 flex items-center justify-center">
          <div class="space-y-4 w-full">
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-primary border-[1px]"
              >
                <h2 class="font-medium">O que é a Pack Beneficios?</h2>
                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                Pronto atendimento 24h e consultas médicas online de forma fácil, rápida e
                de qualidade. Tudo isso por meio de uma plataforma muita segura.
              </p>
            </details>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-primary border-[1px]"
              >
                <h2 class="font-medium">Qual o limite de atendimentos?</h2>
                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                Não há limite de atendimentos, você pode fazer quantas consultas precisar
                e quiser.
              </p>
            </details>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-primary border-[1px]"
              >
                <h2 class="font-medium">
                  Quais são as especialidades disponíveis para atendimento?
                </h2>
                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                São diversas especialidades, além de clínicos gerais, nutricionistas e
                psicólogos: Alergia e Imunologia - Pediátrica; Cardiologia; Cirurgia Geral
                e Vascular; Coloproctologia; Dermatologia - Pediátrica; Endocrinologia;
                Gastroenterologia - Pediátrica; Geriatria; Ginecologia e Obstetrícia;
                Hematologia; Hemoterapia; Homeopatia Pediátrica; Infectologia; Mastologia;
                Nefrologia; Neurologia; Oftalmologia; Ortopedia; Otorrinolaringologia;
                Pediatria; Pneumologia - Pediátrica; Psiquiatria; Reumatologia; Urologia e
                Fonoaudiologia.
              </p>
            </details>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-primary border-[1px]"
              >
                <h2 class="font-medium">
                  Quais os horários de atendimento da teleconsulta?
                </h2>
                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                As teleconsultas estão disponiveis em nossa plataforma todos os dias a
                qualquer horário. 24h por dia, 7 dias por semana."
              </p>
            </details>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-primary border-[1px]"
              >
                <h2 class="font-medium">As consultas são confiáveis?</h2>
                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                As consultas são 100% confiáveis. Todos os médicos são qualificados e
                especialistas em suas áreas de atuação. Só em 2022, 33% dos médicos e 26%
                dos enfermeiros atenderam por teleconsulta no Brasil, de acordo com o
                TIC.Saúde 2022. Todas as informações dos pacientes são tratadas de modo
                seguro e confidencial, com acesso apenas a ele e a profissionais da saúde
                autorizados. A confiabilidade é tanta que mais de 70% dos pacientes que
                utilizaram a consulta online durante a pandemia utilizaria novamente o
                serviço, de acordo com pesquisas.
              </p>
            </details>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-primary border-[1px]"
              >
                <h2 class="font-medium">Como faço para agendar uma teleconsulta?</h2>
                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                Basta acessar a sua página logada da Pack. Na página “Início”, procure
                pelo card “Teleconsulta”. Lá você encontra os links para acessar cada um
                dos serviços contratados.
              </p>
            </details>
            <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-primary border-[1px]"
              >
                <h2 class="font-medium">
                  A Teleconsulta é o mesmo que um plano de saúde?
                </h2>
                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                A Teleconsulta é diferente de um plano de saúde: nós oferecemos consultas
                ilimitadas com pronto-atendimento e especialistas, de maneira muito mais
                simples e rápida.
              </p>
            </details>
          </div>
        </div>
      </section>
      <footer class="bg-primary">
        <div class="mx-auto max-w-7xl px-4 py-8">
          <div class="flex items-center justify-between">
            <div class="flex justify-center text-teal-600 sm:justify-start">
              <img src="@/assets/logo_white-4b6a2359.svg" alt="Pack Beneficios" />
            </div>
            <p class="mt-4 text-center text-sm text-white">
              Copyright © 2023. Todos direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      <a
        href="https://api.whatsapp.com/send?phone=3484327928"
        id="wpp_tudo"
        class="float"
        target="_blank"
        ><i class="uil uil-whatsapp"></i
      ></a>
    </div>
  </main>
</template>
