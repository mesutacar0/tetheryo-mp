<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white rounded-borders">
      <q-toolbar-title class="gt-xs">Yeni Emir Girisi</q-toolbar-title>
      <q-input
        dark
        dense
        standout
        v-model="order.price"
        label="Dolar Miktari"
        type="number"
        input-class="text-right"
        class="q-mr-md"
      >
      </q-input>
      <q-input
        dark
        dense
        standout
        v-model="order.quantity"
        label="Tether Miktari"
        type="number"
        input-class="text-right"
        class="q-mr-md"
      >
      </q-input>
      <q-btn
        :disabled="!user"
        round
        dense
        standout
        outline
        icon="add"
        @click="confirm = true"
        ><q-tooltip class="bg-accent">Emir Gir!</q-tooltip></q-btn
      >
    </q-toolbar>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="help" color="primary" text-color="white" />
          <span class="q-ml-sm">
            Oran: {{ rate }}<br />
            Komisyon: {{ commission }}<br />
            Toplam Odeyeceginiz Tutar:
            {{ order.price + commission }} <br /><br />
            Islemi onayliyor musunuz?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Iptal" color="primary" v-close-popup />
          <q-btn flat label="Islemi Onayla" color="primary" @click="add" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { createBuyingOrder, createSellingOrder } from "src/service/OrderData";

export default defineComponent({
  name: "NewTrade",
  components: {},
  props: {
    title: {
      type: String,
      required: false,
    },

    caption: {
      type: String,
      default: "",
    },

    tradeType: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      default: "",
    },
  },
  data() {
    const $q = useQuasar();
    return {
      order: {},
      confirm: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.profileAdmin;
    },
    userApproved() {
      return this.$store.state.profileApproved;
    },
    commission() {
      return Math.round(
        parseFloat(
          this.order.quantity == null
            ? 0
            : this.order.quantity <= 40000
            ? 10
            : this.order.quantity * 0.00025
        )
      );
    },
    rate() {
      return parseFloat(
        this.order.quantity == null || this.order.price == null
          ? 0
          : (this.order.price - this.order.quantity) /
              (this.order.quantity == 0 ? 1 : this.order.quantity)
      ).toFixed(5);
    },
  },
  methods: {
    async add() {
      this.order.orderUserId = this.user.uid;
      this.order.orderUser = this.user.email;
      this.order.isApproved = false;
      this.order.isTraded = false;
      this.order.isTradeApproved = false;
      this.order.isCancelled = false;
      this.order.tradeUserId = null;
      this.order.tradeUser = null;
      this.order.orderDate = new Date().toLocaleString();
      this.order.tradeDate = null;
      this.order.commission = this.commission;
      this.order.rate = this.rate;
      this.order.orderPayment =
        this.tradeType == "Buy"
          ? this.order.price + this.order.commission
          : this.order.price - this.order.commission;

      if (this.tradeType == "Buy") {
        await createBuyingOrder({ ...this.order });
      } else {
        await createSellingOrder({ ...this.order });
      }
      this.$q.notify({
        color: "info",
        textColor: "white",
        icon: "warning",
        message: "Onay sonrasi listelenecektir",
      });
      this.order = {};
      this.confirm = false;
    },
  },
});
</script>
<style lang="sass" scoped></style>
