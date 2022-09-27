<template>
  <q-toolbar class="text-primary bg-grey-3">
    <q-toolbar-title> Yeni Emir Girisi </q-toolbar-title>
    <DollarInput></DollarInput>
    <q-space />
    <TetherInput></TetherInput>
    <q-space />
    <NumberInput icon="percent" label="Oran" disable></NumberInput>
    <q-space />
    <NumberInput icon="sell" label="Komisyon" disable></NumberInput>
    <q-space />

    <q-icon size="md" name="currency_bitcoin" />
  </q-toolbar>
</template>

<script>
import { defineComponent } from "vue";
import DollarInput from "./DollarInput.vue";
import TetherInput from "./TetherInput.vue";
import NumberInput from "./NumberInput.vue";

export default defineComponent({
  name: "NewTrade",
  components: { DollarInput, TetherInput, NumberInput },
  props: {
    title: {
      type: String,
      required: false,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
