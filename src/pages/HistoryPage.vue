<template>
  <div class="q-pa-xs">
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
        <q-tab name="Buy" label="Aldiklarim" />
        <q-tab name="Sell" label="Sattiklarim" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated keep-alive>
        <q-tab-panel name="Buy">
          <q-table
            :rows="rowsBuy"
            dense
            :columns="columns"
            row-key="id"
            filter="filter"
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
              </q-tr>
            </template>
          </q-table>
        </q-tab-panel>

        <q-tab-panel name="Sell">
          <q-table
            :rows="rows"
            dense
            :columns="columns"
            row-key="id"
            filter="filter"
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
              </q-tr>
            </template>
          </q-table>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>

    <q-btn-toggle
      class="q-mb-xs"
      v-model="orderType"
      toggle-color="primary"
      :options="[
        { label: 'Aldiklarim', value: 'Buy' },
        { label: 'Sattiklarim', value: 'Sell' },
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
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import {
  getUserBuyingOrders,
  getUserSellingOrders,
} from "src/service/OrderData";

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
  { name: "orderDate", label: "Tarih", field: "orderDate", align: "left" },
];

const rows = [];

export default defineComponent({
  name: "HistoryPage",
  props: {},
  data() {
    return {
      columns,
      rowsBuy,
      rowsSell,
      filter: ref(""),
      orderType: ref("one"),
      row: {},
      confirm: false,
      cancelDialog: false,
    };
  },
  mounted() {
    this.rowsBuy = getUserBuyingOrders(this.$store.state.user.uid);
    this.rowsSell = getUserSellingOrders(this.$store.state.user.uid);
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
  components: {},
  methods: {
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
