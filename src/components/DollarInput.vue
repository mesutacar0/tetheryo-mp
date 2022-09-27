<template>
  <NumberInput icon="attach_money" label="Dolar Miktarini Girin"></NumberInput>
</template>

<script>
import { defineComponent, ref } from "vue";
import NumberInput from "./NumberInput.vue";

export default defineComponent({
  name: "TetherInput",
  components: { NumberInput },
});
</script>
