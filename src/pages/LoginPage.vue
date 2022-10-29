<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-card>
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">TetherYo!'ya Giris Yap!</div>
      </q-card-section>

      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input
            v-model="email"
            filled
            type="email"
            hint="Email adresinizi girin"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Email adresinizi girin',
            ]"
          >
            <template v-slot:append>
              <q-icon name="alternate_email" class="cursor-pointer" />
            </template>
          </q-input>
          <q-input
            v-model="password"
            filled
            :type="isPwd ? 'password' : 'text'"
            hint="Sifrenizi girin"
            lazy-rules
            :rules="[(val) => (val && val.length >= 0) || 'Sifrenizi girin']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div>
            <q-btn
              label="Giris"
              type="submit"
              color="primary"
              @click.prevent="signIn"
            />
            <q-btn
              label="Sifremi Unuttum"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions class="bg-primary text-white" align="around">
        <q-btn flat @click.prevent="toRegister"
          >Hesabin yoksa hemen olustur!</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { auth } from "src/boot/firebase";

export default {
  name: "LoginPage",
  data() {
    const $q = useQuasar();
    return {
      email: "",
      password: "",
      isPwd: ref(true),
    };
  },
  methods: {
    async signIn() {
      if (this.email !== "" && this.password !== "") {
        await auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({ name: "Buy" });
          })
          .catch((err) => {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Bilgilerinizi Kontrol Edip Tekrar Deneyin.",
            });
          });
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Giris Yapmak icin Email ve Sifrenizi girin!",
        });
      }
    },
    toRegister() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>
