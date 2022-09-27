<template>
  <q-input
    v-model.number="model"
    type="number"
    :label="label"
    :disable="disable"
    maxlength="12"
  >
    <template v-slot:before>
      <q-icon :name="icon" />
    </template>
  </q-input>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NumberInput",
  props: {
    label: {
      type: String,
    },
    icon: {
      type: String,
      default: "pin",
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      model: ref(),
    };
  },
});
</script>
