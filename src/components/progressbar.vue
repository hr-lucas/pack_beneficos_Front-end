<template>
  <div class="w-full h-[5px] mb-4 bg-gray-300">
    <div
      class="bg-secondary h-[5px] bg-ng-green transition-all duration-500 ease-in-out"
      :style="{ width: `${props.progress}%` }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: {
    type: [Number, String],
    required: true,
  },
});
</script>
