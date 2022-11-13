<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="UsersPage" label="Kullanicilar" />
          <q-tab name="buyingOrders" label="Alislar" />
          <q-tab name="sellingOrders" label="Satislar" />
          <q-tab name="commission" label="Komisyonlar" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated keep-alive>
          <q-tab-panel name="UsersPage">
            <UsersPage />
          </q-tab-panel>

          <q-tab-panel name="buyingOrders">
            <BuyingOrders></BuyingOrders>
          </q-tab-panel>

          <q-tab-panel name="sellingOrders">
            <SellingOrders />
          </q-tab-panel>

          <q-tab-panel name="commission">
            <CommissionPage />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import UsersPage from "./adminPages/UsersPage.vue";
import BuyingOrders from "./adminPages/BuyingOrders.vue";
import SellingOrders from "./adminPages/SellingOrders.vue";
import CommissionPage from "./adminPages/CommissionPage.vue";

export default defineComponent({
  name: "AdminPage",
  data() {
    return {
      tab: "UsersPage",
    };
  },
  components: { UsersPage, BuyingOrders, SellingOrders, CommissionPage },
});
</script>
