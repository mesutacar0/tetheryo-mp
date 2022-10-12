<template>
  <div class="q-pa-md">
    <NewTrade :tradeType="tradeType" />
    <q-table
      :rows="orders"
      :columns="columns"
      row-key="id"
      :rows-per-page-options="[25, 50]"
    >
      <template v-slot:header="props">
        <q-tr :props="props" class="bg-dark text-white">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
          <q-th auto-width />
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            @click="
              props.expand =
                user.uid == props.row.orderUserId || props.row.isTraded
                  ? props.expand
                  : !props.expand
            "
          >
            {{ col.value }}
          </q-td>

          <q-td auto-width>
            <RoundButton
              v-if="props.row.isTraded == true"
              color="info"
              icon="shopping_bag"
              >Rezerve Edilmis!</RoundButton
            ><RoundButton
              v-if="
                (user &&
                  user.uid == props.row.orderUserId &&
                  props.row.isTraded == false) ||
                admin
              "
              color="negative"
              icon="close"
              @c-click="cancel(props.row)"
              >Iptal Et!</RoundButton
            ></q-td
          >
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="4" class="bg-blue-grey-2">
            <div class="text-center text-bold">
              {{ text(props.row) }}
            </div>
          </q-td>

          <q-td auto-width>
            <RoundButton
              v-if="
                ((user && user.uid != props.row.orderUserId) || !user) &&
                props.row.isTraded == false
              "
              color="positive"
              :disabled="!userApproved"
              @c-click="trade(props.row), (props.expand = !props.expand)"
              icon="add"
              >Al!</RoundButton
            ></q-td
          >
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="cancelDialog" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="help" color="primary" text-color="white" />
          <span class="q-ml-sm"
            >Islemi iptal etmek istediginize emin misiniz?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Vazgectim" color="primary" v-close-popup />
          <q-btn flat label="Evet" color="primary" @click="cancelTrade" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import NewTrade from "./NewTrade.vue";
import {
  getActiveBuyingOrders,
  getActiveSellingOrders,
  updateBuyingOrder,
  updateSellingOrder,
} from "src/service/OrderData";
import RoundButton from "./RoundButton.vue";

const columns = [
  {
    name: "price",
    label: "Dolar Miktari",
    field: "price",
    sortable: true,
  },
  {
    name: "quantity",
    label: "Tether Miktari",
    field: "quantity",
    sortable: true,
  },
  { name: "commission", label: "Komisyon", field: "commission" },
  {
    name: "rate",
    label: "Oran (%)",
    field: "rate",
  },
];

const orders = [];

export default {
  props: {
    tradeType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      columns,
      orders,
      order: {},
      confirm: false,
      cancelDialog: false,
      expanded: false,
    };
  },
  mounted() {
    this.orders =
      this.tradeType == "Buy"
        ? getActiveBuyingOrders()
        : getActiveSellingOrders();
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
  components: { NewTrade, RoundButton },
  methods: {
    trade(order) {
      this.order = order;
      this.confirmTrade();
      //this.confirm = true;
    },
    text(row) {
      return (
        "Toplam: " +
        (this.tradeType == "Buy"
          ? Number(Number(row.price) + Number(row.commission)) +
            "$ odeyeceksiniz"
          : Number(Number(row.price) - Number(row.commission)) +
            "$ alacaksiniz") +
        ". Onayliyor musunuz?"
      );
    },
    async confirmTrade() {
      if (this.order.orderUserId) {
        this.order.isTraded = true;
        this.order.tradeUserId = this.user.uid;
        this.order.tradeUser = this.user.email;
        this.order.tradeDate = new Date().toLocaleString();
        this.order.tradeCommission = this.order.commission;
        this.order.tradePayment =
          this.tradeType == "Buy"
            ? this.order.price - this.order.tradeCommission
            : this.order.price + this.order.tradeCommission;

        if (this.tradeType == "Buy") {
          await updateBuyingOrder(this.order.id, {
            ...this.order,
          });
        } else {
          await updateSellingOrder(this.order.id, {
            ...this.order,
          });
        }

        this.$q.notify({
          color: "info",
          textColor: "white",
          icon: "warning",
          message:
            "Emir girisiniz iletildi, kisa sure icinde bilgilendirileceksiniz",
        });
      }

      this.order = {};
      this.confirm = false;
    },
    cancel(order) {
      this.order = order;
      this.cancelDialog = true;
    },
    async cancelTrade() {
      if (this.order.orderUserId) {
        this.order.isCancelled = true;

        if (this.tradeType == "Buy") {
          await updateBuyingOrder(this.order.id, {
            ...this.order,
          });
        } else {
          await updateSellingOrder(this.order.id, {
            ...this.order,
          });
        }

        this.$q.notify({
          color: "info",
          textColor: "white",
          icon: "warning",
          message: "Emriniz iptal edildi",
        });
      }

      this.order = {};
      this.cancelDialog = false;
    },
  },
};
</script>
