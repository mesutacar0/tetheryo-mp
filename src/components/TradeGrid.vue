<template>
  <div class="q-pa-md">
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="help" color="primary" text-color="white" />
          <span class="q-ml-sm"
            >Tether: {{ order.quantity }} <br />
            Dolar: {{ order.price }} <br />
            Komisyon: {{ commission }}<br />
            Oran: {{ rate }}<br />
            Toplam Odeyeceginiz:
            {{ order.price + commission }} <br /><br />
            Islemi onayliyor musunuz?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Iptal" color="primary" v-close-popup />
          <q-btn
            flat
            label="Islemi Onayla"
            color="primary"
            @click="confirmTrade"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="cancelDialog" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="help" color="primary" text-color="white" />
          <span class="q-ml-sm"
            >Islemi iptal etmek istediginize emin misiniz?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Iptal" color="primary" v-close-popup />
          <q-btn
            flat
            label="Islemi Onayla"
            color="primary"
            @click="cancelTrade"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-table
      :rows="orders"
      :columns="columns"
      row-key="id"
      pagination.rowsPerPage="20"
    >
      <template v-slot:top>
        <NewTrade />
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
          <q-th auto-width />
          <q-th auto-width />
          <q-th auto-width />
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
          <q-td auto-width>
            <q-btn
              size="md"
              color="accent"
              round
              dense
              @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'"
            />
          </q-td>
          <q-td auto-width>
            <q-btn
              v-if="
                (user &&
                  user.uid == props.row.orderUserId &&
                  props.row.isTraded == false) ||
                admin
              "
              size="md"
              color="negative"
              round
              dense
              @click="cancel(props.row)"
              icon="cancel"
          /></q-td>
          <q-td auto-width
            ><q-btn
              v-if="props.row.isTraded == true"
              size="md"
              disabled
              color="primary"
              round
              dense
              icon="shopping_bag"
          /></q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              {{ props.row.price }} $ karsilignda {{ props.row.quantity }} adet
              Tether icin odeyeceginiz tutar
              {{ props.row.price + props.row.commission }}.
            </div>
          </q-td>
          <q-td auto-width
            ><q-btn
              v-if="
                ((user && user.uid != props.row.orderUserId) || !user) &&
                props.row.isTraded == false
              "
              :disabled="!userApproved"
              size="md"
              color="accent"
              round
              dense
              @click="trade(props.row)"
              icon="shopping_bag"
          /></q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import NewTrade from "./NewTrade.vue";
import {
  useLoadBuyingOrders,
  updateBuyingOrder,
  updateSellingOrder,
} from "src/service/OrderData";

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
  data() {
    return {
      columns,
      orders,
      order: {},
      confirm: false,
      cancelDialog: false,
    };
  },
  mounted() {
    this.orders = useLoadBuyingOrders();
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
  components: { NewTrade },
  methods: {
    trade(order) {
      this.order = order;
      this.confirm = true;
    },
    async confirmTrade() {
      if (this.order.orderUserId) {
        this.order.isTraded = true;
        this.order.tradeUserId = this.user.uid;
        this.order.tradeUser = this.user.email;
        this.order.tradeDate = new Date().toLocaleString();
        this.order.tradeCommission = this.order.commission;
        this.order.tradePayment =
          this.tradeType == "Alis"
            ? this.order.price - this.order.tradeCommission
            : this.order.price + this.order.tradeCommission;

        if (this.tradeType == "Alis") {
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
          message: "Onay sonrasi listelenecektir",
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

        if (this.tradeType == "Alis") {
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
