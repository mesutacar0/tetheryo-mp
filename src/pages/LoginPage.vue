<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-card class="my-card" align="center">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">TetherYo!'ya Giris Yap!</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
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
            :rules="[(val) => (val && val.length > 0) || 'Sifrenizi girin']"
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
              @click="signIn"
            />
            <q-btn
              label="Sifremi Unuttum"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
              @click="onReset"
            />
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions class="bg-primary text-white" align="around">
        <q-btn flat>Hesabin yoksa hemen olustur!</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "LoginPage",
  data() {
    const $q = useQuasar();

    return {
      email: "",
      password: "",
      isPwd: true,
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Sell" });
        })
        .catch((err) => {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: err.message,
          });
        });
    },
  },
};
</script>
