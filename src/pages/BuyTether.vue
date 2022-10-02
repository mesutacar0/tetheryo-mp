<template>
  <TradeGrid></TradeGrid>
</template>

<script>
import { defineComponent } from "vue";
import TradeGrid from "src/components/TradeGrid.vue";

export default defineComponent({
  components: { TradeGrid },
  name: "BuyTether",
  props: {
    title: {
      type: String,
    },

    caption: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
