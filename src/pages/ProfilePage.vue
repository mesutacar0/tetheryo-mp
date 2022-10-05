<template>
  <div class="q-pa-sm" style="max-width: 400px">
    <q-card>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input dense v-model="User.firstName" label="Ad" />
          <q-input dense v-model="User.lastName" label="Soyad" />
          <q-input dense v-model="User.userName" label="Kullanici Adi" />
          <q-input dense v-model="User.whatsappNo" label="Whatsapp" />
          <div>
            <q-btn
              dense
              label="Bilgilerimi Guncelle"
              color="primary"
              flat
              @click="updateInfo"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { getUser, updateUser } from "src/service/UserData";

export default {
  name: "ProfilePage",
  data() {
    const $q = useQuasar();
    return {
      User: {},
      isPwd: ref(true),
    };
  },
  async mounted() {
    this.User = await getUser(this.$store.state.user.uid);
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async updateInfo() {
      await updateUser(this.User.id, {
        ...this.User,
      });

      this.$q.notify({
        color: "positive",
        textColor: "white",
        icon: "done",
        message: "Bilgileriniz Guncellendi",
      });
    },
  },
};
</script>
