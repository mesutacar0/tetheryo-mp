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
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SellingOrders",
  data() {
    return {
      tab: "users",
      model: "",
    };
  },
});
</script>
