<template>
  <div class="q-pb-md">
    <q-bar dense class="lt-sm bg-primary text-white text-right rounded-borders">
      {{ headerText() }}
    </q-bar>
    <q-toolbar class="bg-primary text-white rounded-borders">
      <q-toolbar-title class="gt-xs">{{ headerText() }} </q-toolbar-title>
      <NumberInput v-model="order.quantity" label="Ether Miktari" />
      <NumberInput v-model="order.price" label="Mangir Miktari" />
      <RoundButton icon="add" @c-click="confirm = true" :disable="!userApproved"
        >Emir Gir!</RoundButton
      > </q-toolbar
    ><q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="help" color="primary" text-color="white" />
          <span class="q-ml-sm">
            {{ order.price }} karsiligi olarak {{ order.quantity }} Ether
            <br />
            Oran: {{ rate }} Komisyon: {{ commission }}<br /><br />
            {{ text(order.price, commission) }}<br /><br />
            Yukaridaki bilgilerle emir girisinizi onayliyor musunuz?</span
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
import NumberInput from "./NumberInput.vue";
import RoundButton from "./RoundButton.vue";

export default defineComponent({
  name: "NewTrade",
  components: { NumberInput, RoundButton },
  props: {
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
    text(price, commission) {
      return (
        "Toplam: " +
        (this.tradeType == "Buy"
          ? Number(Number(price) + Number(commission)) + " odeyeceksiniz"
          : Number(Number(price) - Number(commission)) + " alacaksiniz") +
        ". "
      );
    },
    headerText() {
      return this.tradeType == "Buy"
        ? "Yeni Alis Emri Girisi"
        : "Yeni Satis Emri Girisi";
    },
  },
});
</script>
<style lang="sass" scoped></style>
