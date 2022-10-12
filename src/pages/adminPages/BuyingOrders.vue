<template>
  <div>
    <OrderGrid tradeType="Buy"></OrderGrid>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import OrderGrid from "src/components/OrderGrid.vue";

export default defineComponent({
  name: "BuyingOrders",
  data() {
    return {};
  },
  components: { OrderGrid },
});
</script>
