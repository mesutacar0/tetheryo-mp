<template>
  <q-input
    dark
    dense
    standout
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :label="label"
    type="number"
    input-class="text-right"
    class="q-mr-md"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumberInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:modelValue", "userInput"],
});
</script>
