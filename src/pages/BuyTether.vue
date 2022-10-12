<template>
  <TradeGrid tradeType="Buy"></TradeGrid>
</template>

<script>
import { defineComponent } from "vue";
import TradeGrid from "src/components/TradeGrid.vue";

export default defineComponent({
  components: { TradeGrid },
  name: "BuyTether",
  mounted() {},
});
</script>
