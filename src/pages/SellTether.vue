<template>
  <TradeGrid tradeType="Sell"></TradeGrid>
</template>

<script>
import { defineComponent } from "vue";
import TradeGrid from "src/components/TradeGrid.vue";

export default defineComponent({
  components: { TradeGrid },
  name: "SellTether",
  mounted() {
    console.log("Sell Tether Mounted");
  },
});
</script>
