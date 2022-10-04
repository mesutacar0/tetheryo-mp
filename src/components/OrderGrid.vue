<template>
  <div class="q-pa-xs">
    <q-toggle
      toggle-indeterminate
      v-model="isApproved"
      checked-icon="check"
      color="green"
      unchecked-icon="clear"
      size="md"
    />
    <q-table
      :rows="rows"
      dense
      :columns="columns"
      row-key="name"
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
              v-if="props.row.isApproved == false"
              icon="done"
              color="green"
              @c-click="approve(props.row.id)"
              >Onayla!</RoundButton
            ><RoundButton
              v-if="props.row.isApproved == true"
              icon="close"
              color="red"
              @c-click="unApprove(props.row.id)"
              >Onayi Kaldir!</RoundButton
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
  getPendingBuyingOrders,
  getPendingSellingOrders,
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
    name: "tradeCommission",
    label: "Komisyon2",
    field: "tradeCommission",
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
      isApproved: ref(null),
      row: {},
      confirm: false,
      cancelDialog: false,
    };
  },
  mounted() {
    this.rows =
      this.tradeType == "Buy"
        ? getPendingBuyingOrders()
        : getPendingSellingOrders();
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
    approve(id) {
      approveUser(id);
    },
    unApprove(id) {
      unApproveUser(id);
    },
    filterApproved(rows) {
      return this.isApproved == null
        ? rows
        : rows.filter((row) => row.isApproved == this.isApproved);
    },
  },
});
</script>
