<template>
    <button
    type="submit"
    :disabled="props.disabled"
    class="text-white hover:cursor-pointer w-full disabled:opacity-70 disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[18px] px-5 py-2.5 text-center inline-flex justify-center min-h-[50px] items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    
  <span class="text-[16px] font-semibold transition-all group-hover:me-4">
    <slot></slot>
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