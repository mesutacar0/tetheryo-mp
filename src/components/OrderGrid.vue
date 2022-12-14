<template>
  <div class="q-pa-xs">
    <q-btn-toggle
      class="q-mb-xs"
      v-model="orderType"
      toggle-color="primary"
      :options="[
        { label: 'Onay Bekleyenler', value: 'one' },
        { label: 'Satis Onayi Bekleyenler', value: 'two' },
        { label: 'Tamamlananlar', value: 'three' },
        { label: 'Tum Islemler', value: 'four' },
      ]"
    />
    <q-table
      :rows="rows"
      dense
      :columns="columns"
      row-key="id"
      filter="filter"
      :filter-method="filterApproved"
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
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
          <q-td auto-width
            ><RoundButton
              v-if="
                (!props.row.isApproved ||
                  (props.row.isTraded && !props.row.isTradeApproved)) &&
                orderType != 'four'
              "
              icon="done"
              color="green"
              @c-click="approve(props.row)"
              >Onayla!</RoundButton
            ><RoundButton
              v-if="
                !(props.row.isApproved && props.row.isTradeApproved) &&
                orderType != 'four'
              "
              icon="delete"
              color="red"
              @c-click="deleteOrder(props.row.id)"
              >Sil!</RoundButton
            ></q-td
          >
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import {
  getAllBuyingOrders,
  getAllSellingOrders,
  deleteBuyingOrder,
  deleteSellingOrder,
  approveBuyingOrder,
  approveSellingOrder,
  approveBuyingOrderTrade,
  approveSellingOrderTrade,
} from "src/service/OrderData";
import RoundButton from "./RoundButton.vue";

const columns = [
  {
    name: "quantity",
    label: "Tether",
    field: "quantity",
    sortable: true,
    align: "left",
  },
  {
    name: "price",
    label: "Dolar",
    field: "price",
    sortable: true,
    align: "left",
  },
  { name: "rate", label: "Oran", field: "rate", align: "left" },
  { name: "commission", label: "Komisyon", field: "commission", align: "left" },
  {
    name: "commission",
    label: "Komisyon2",
    field: "commission",
    align: "left",
  },
  { name: "orderDate", label: "Tarih", field: "orderDate", align: "left" },
  { name: "orderUser", label: "Kullanici", field: "orderUser", align: "left" },
  {
    name: "tradeDate",
    label: "Teklif Tarih",
    field: "tradeDate",
    align: "left",
  },
  {
    name: "tradeUser",
    label: "Teklif Veren",
    field: "tradeUser",
    align: "left",
  },
];

const rows = [];

export default defineComponent({
  name: "OrderGrid",
  props: {
    tradeType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      columns,
      rows,
      filter: ref(""),
      orderType: ref("one"),
      row: {},
      confirm: false,
      cancelDialog: false,
    };
  },
  mounted() {
    this.rows =
      this.tradeType == "Buy" ? getAllBuyingOrders() : getAllSellingOrders();
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
  },
  components: { RoundButton },
  methods: {
    approve(row) {
      !row.isApproved
        ? this.tradeType == "Buy"
          ? approveBuyingOrder(row.id)
          : approveSellingOrder(row.id)
        : this.tradeType == "Buy"
        ? approveBuyingOrderTrade(row.id)
        : approveSellingOrderTrade(row.id);
    },
    deleteOrder(id) {
      this.tradeType == "Buy" ? deleteBuyingOrder(id) : deleteSellingOrder(id);
    },
    filterApproved(rows) {
      if (this.orderType == "one") return rows.filter((row) => !row.isApproved);

      if (this.orderType == "two")
        return rows.filter(
          (row) => row.isApproved && row.isTraded && !row.isTradeApproved
        );
      if (this.orderType == "three")
        return rows.filter((row) => row.isApproved && row.isTradeApproved);
      if (this.orderType == "four") return rows;
    },
  },
});
</script>
