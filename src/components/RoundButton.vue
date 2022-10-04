<template>
  <q-btn
    :disabled="disable"
    round
    dense
    standout
    outline
    :color="color"
    :icon="icon"
    @click="$emit('c-click')"
    ><q-tooltip class="bg-accent"><slot /></q-tooltip
  ></q-btn>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RoundButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
  },
});
</script>
