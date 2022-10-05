<template>
  <div>
    <OrderGrid tradeType="Sell"></OrderGrid>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import OrderGrid from "src/components/OrderGrid.vue";

export default defineComponent({
  name: "SellingOrders",
  components: { OrderGrid },
  data() {
    return {
      model: "",
    };
  },
});
</script>
