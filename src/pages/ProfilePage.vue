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
          <div>
            <q-btn
              dense
              label="Hesabimi Sil"
              color="negative"
              flat
              @click="confirm = true"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="help" color="primary" text-color="white" />
          <span class="q-ml-sm">
            Gun icinde tum bilgileriniz silinecek, onayliyor musunuz?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Iptal" color="primary" v-close-popup />
          <q-btn
            flat
            label="Islemi Onayla"
            color="primary"
            @click="deleteAccount"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { getUser, updateUser } from "src/service/UserData";
import { auth } from "src/boot/firebase";

export default {
  name: "ProfilePage",
  data() {
    const $q = useQuasar();
    return {
      User: {},
      userId: null,
      isPwd: ref(true),
      confirm: false,
    };
  },
  async mounted() {
    this.userId = this.$store.state.user.uid;
    this.User = await getUser(this.userId);
  },
  computed: {},
  methods: {
    async updateInfo() {
      await updateUser(this.userId, {
        ...this.User,
      });

      this.$q.notify({
        color: "positive",
        textColor: "white",
        icon: "done",
        message: "Bilgileriniz Guncellendi",
      });
    },
    async deleteAccount() {
      this.User.isDeleted = true;
      await updateUser(this.userId, {
        ...this.User,
      });

      auth.signOut();
      window.location.reload();

      this.$q.notify({
        color: "negative",
        textColor: "white",
        icon: "done",
        message: "Hesabiniz silindi.",
      });
    },
  },
};
</script>
