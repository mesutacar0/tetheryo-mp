<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-input bottom-slots v-model="adminEmail" label="eMail">
      <template v-slot:before>
        <q-icon name="engineering" />
      </template>

      <template v-slot:after>
        <q-btn round flat icon="send" @click="addAdmin" />
      </template>
    </q-input>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import { fireFunction } from "src/boot/firebase";

export default {
  name: "AdminerPage",
  data() {
    const $q = useQuasar();
    return {
      adminEmail: "",
    };
  },
  methods: {
    async addAdmin() {
      const addAdmin = await fireFunction.httpsCallable("addAdminRole");
      const result = await addAdmin({ email: this.adminEmail });

      this.$q.notify({
        color: "info",
        textColor: "white",
        icon: "warning",
        message: result.data.message,
      });
    },
  },
};
</script>
