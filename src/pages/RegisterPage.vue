<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-card class="my-card" align="center">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">TetherYo!'ya Kaydol!</div>
      </q-card-section>

      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input
            v-model="firstName"
            filled
            hint="Ad"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Adinizi girin']"
          >
            <template v-slot:append>
              <q-icon name="person" class="cursor-pointer" />
            </template>
          </q-input>
          <q-input
            v-model="lastName"
            filled
            hint="Soyad"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Soyadinizi girin']"
          >
            <template v-slot:append>
              <q-icon name="person" class="cursor-pointer" />
            </template>
          </q-input>
          <q-input
            v-model="username"
            filled
            hint="Kullanici Adi"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Kullanici Adinizi girin',
            ]"
          >
            <template v-slot:append>
              <q-icon name="account_circle" class="cursor-pointer" />
            </template>
          </q-input>
          <q-input
            v-model="whatsappNo"
            filled
            hint="Whatsapp No"
            type="tel"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Whatsapp No girin']"
          >
            <template v-slot:append>
              <q-icon name="phone" class="cursor-pointer" />
            </template>
          </q-input>
          <q-input
            v-model="email"
            filled
            type="email"
            hint="Email Adresi"
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
              label="Kayit Ol"
              type="submit"
              color="primary"
              @click.prevent="register"
            />
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions class="bg-primary text-white" align="around">
        <q-btn flat @click.prevent="toLogin">Zaten hesabin var mi?</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { auth, db } from "src/boot/firebase";

export default {
  name: "RegisterPage",
  data() {
    const $q = useQuasar();
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      whatsappNo: "",
      isPwd: ref(true),
    };
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((result) => {
            const dataBase = db.collection("usersTest").doc(result.user.uid);
            dataBase.set({
              firstName: this.firstName,
              lastName: this.lastName,
              username: this.username,
              email: this.email,
              whatsappNo: this.whatsappNo,
              address: null,
              isApproved: false,
              isDeleted: false,
            });
            this.$router.push({ name: "Buy" });
          })
          .catch((err) => {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: err.message,
            });
          });
        return;
      }
      this.$q.notify({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "Kayit Olmak Icin Lutfen Tum Alanlari Doldurun",
      });
      return;
    },
    toLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
