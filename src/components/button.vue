<template>
    <div>
        <button
        class="text-white text-[1.2rem] min-w-[280px] max-w-[480px] px-7 py-3 rounded-md disabled:opacity-60 bg-primary !min-w-[auto]"
        id="button_home"
        @click="$router.push({ name: 'contratacao', query: route.query })"
      >
        Contratar agora
      </button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const $router = useRouter();
</script>
