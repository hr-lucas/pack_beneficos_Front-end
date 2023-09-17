<template>
  <div>
    <div class="information_radios">
      <p>{{ props.title }}</p>
    </div>
    <div class="flex items-center my-4 gap-14 mr-10">
      <template v-for="(item, index) in items" :key="index">
        <div class="flex items-center gap-2">
          <input
            :id="`inline-radio-${item.value}`"
            type="radio"
            :value="item.value"
            name="inline-radio-group"
            @click="model = item.value"
            class="custom-radio"
            :disabled="props.disabled"
            :checked="item.value === value"
          />
          <label
            :for="`inline-radio-${item.value}`"
            class="ml-2 text-sm font-medium text-black"
            >{{ item.label }}</label
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  value: {
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const model = ref(props.value);

const emit = defineEmits(["update:modelValue"]);

watch(model, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    emit("update:modelValue", newValue);
  }
});
</script>

<style lang="scss">
.information_radios {
  @apply text-xs font-medium text-gray-800;
}
input[type="radio"] {
  @apply appearance-none p-2 w-6 h-6 rounded-full border border-gray-300 outline-none grid place-content-center before:w-3 before:h-3  before:rounded-[50%] before:content-[''] before:scale-[0] before:ease-in-out before:duration-100 before:shadow-radio;
}

input[type="radio"]:checked::before {
  @apply scale-100;
}
</style>
