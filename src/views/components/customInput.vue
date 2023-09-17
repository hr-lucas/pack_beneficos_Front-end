<script setup>
import { watch, ref, onMounted, computed } from "vue";
import moment from "moment";
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  rules: {
    type: [Object],
  },
  type: {
    type: [String],
    default: "text",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const model = ref();
const error = ref("");
const required = ref(false);
const emit = defineEmits(["update:modelValue"]);

onMounted(() => {
  if (props.modelValue) model.value = props.modelValue;
  required.value = props?.rules?.reduce((value, i) => {
    if (/required/.test(i) || value) return true;
    return value;
  }, false);
});
if(props.type !== 'date') {
  watch(() => props.modelValue, (newValue) => {
  model.value = newValue;
});
}

const label = computed(() => {
  if (props.label) return props.label;
  return "";
});

const validInput = () => {
  error.value = props?.rules?.reduce((value, i) => {
    if (typeof model.value === "string" && !model.value && !required.value) return false;
    if (typeof i() !== "boolean" && typeof value === "boolean") return i();
    return value;
  }, false);
};

watch(model, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    if(props.type === 'date') {
      emit("update:modelValue", moment(newValue).format("DD/MM/YYYY"));
      return;
    }
    emit("update:modelValue", newValue);
  }
});
</script>

<template>
  <div class="my-8">
    <label
    for="Username"
    class="relative block rounded-md border border-gray-200 text-[18px] p-3 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
    :class="error ? 'error__input' : ''"
  >
    <input
      :id="label"
      v-bind="$attrs"
      :type="props.type"
      v-model="model"
      @blur="validInput"
      :disabled="props.disabled"
      :class="error ? 'error__input' : ''"
      class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
      :placeholder="label"
    />

    <span
    :class="error ? 'error__label' : ''"
      class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-base"
    >
      {{label}}
    </span>
  </label>
  <p v-if="error" class="mt-2 text-xs font-medium text-red-600">
    <span class="font-medium">{{ error }}</span>
  </p>
  </div>
</template>
<style>
.error__label {
  @apply !text-[#C10015];
}

.error__input {
  @apply focus:!border-[#C10015] !border-[#C10015];
}
</style>
