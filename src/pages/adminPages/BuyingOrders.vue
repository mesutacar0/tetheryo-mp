<template>
  <div>
    <q-btn-toggle
      class="q-mb-xs"
      v-model="isApproved"
      toggle-color="primary"
      :options="[
        { label: 'Onay Bekleyenler', value: 'one' },
        { label: 'Alis Onayi Bekleyenler', value: 'two' },
        { label: 'Tamamlananlar', value: 'three' },
      ]"
    />
    <OrderGrid></OrderGrid>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import OrderGrid from "src/components/OrderGrid.vue";

export default defineComponent({
  name: "BuyingOrders",
  data() {
    return {
      tab: "users",
    };
  },
  components: { OrderGrid, OrderGrid },
});
</script>
