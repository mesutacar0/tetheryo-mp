<template>
  <NumberInput
    icon="currency_bitcoin"
    label="Tether Miktarini Girin"
  ></NumberInput>
</template>

<script>
import { defineComponent, ref } from "vue";
import NumberInput from "./NumberInput.vue";

export default defineComponent({
  name: "TetherInput",
  components: { NumberInput },
});
</script>
