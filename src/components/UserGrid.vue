<template>
  <div class="q-pa-xs">
    <q-btn-toggle
      class="q-mb-xs"
      v-model="isApproved"
      toggle-color="primary"
      :options="[
        { label: 'Onay Bekleyenler', value: 'one' },
        { label: 'Onaylananlar', value: 'two' },
        { label: 'Tum Kullanicilar', value: 'three' },
      ]"
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
  getActiveUsers,
  approveUser,
  unApproveUser,
} from "src/service/UserData";
import RoundButton from "./RoundButton.vue";

const columns = [
  {
    name: "email",
    label: "Email",
    field: "email",
    sortable: true,
    align: "left",
  },
  {
    name: "firstName",
    label: "Isim",
    field: "firstName",
    sortable: true,
    align: "left",
  },
  { name: "lastName", label: "Soyisim", field: "lastName", align: "left" },
  { name: "whatsappNo", label: "Whatsapp", field: "whatsappNo", align: "left" },
  { name: "address", label: "Adres", field: "address", align: "left" },
];

const rows = [];

export default defineComponent({
  name: "UserGrid",
  props: {},
  data() {
    return {
      columns,
      rows,
      filter: ref(""),
      isApproved: "one",
      row: {},
      confirm: false,
      cancelDialog: false,
    };
  },
  mounted() {
    this.rows = getActiveUsers();
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
      if (this.isApproved == "one")
        return rows.filter((row) => !row.isApproved);

      if (this.isApproved == "two") return rows.filter((row) => row.isApproved);
      if (this.isApproved == "three") return rows;
    },
  },
});
</script>
