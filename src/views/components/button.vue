<template>
    <button
    type="submit"
    :disabled="props.disabled"
    class="text-white hover:cursor-pointer w-full disabled:opacity-70 disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[18px] px-5 py-2.5 text-center inline-flex justify-center min-h-[50px] items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    
  <span class="text-[16px] font-semibold transition-all group-hover:me-4">
    <slot></slot>
  </span>
    <span v-if="!props.icon" >
      <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </span>

  </button>
</template>

<script setup>
const props = defineProps({
icon: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },

});
</script>

<style lang="scss" scoped>

</style>