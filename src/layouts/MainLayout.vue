<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleDrawer" />

        <q-toolbar-title align="center">
          <span></span>
          <q-icon
            color="white"
            name="fa-solid fa-handshake"
            size="md"
            class="q-mr-sm"
          />
          TetherYo!
        </q-toolbar-title>
        <q-btn v-if="user" dense flat round icon="logout" @click="signOut"
          ><q-tooltip class="bg-accent">Cikis Yap!</q-tooltip></q-btn
        >
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple to="sell">
            <q-item-section avatar>
              <q-icon name="shopping_cart_checkout " />
            </q-item-section>

            <q-item-section> Tether Sat </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="buy">
            <q-item-section avatar>
              <q-icon name="add_shopping_cart" />
            </q-item-section>

            <q-item-section> Tether Al </q-item-section>
          </q-item>

          <q-separator />

          <q-item v-if="!user" clickable v-ripple to="login">
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>

            <q-item-section> Giris/Kayit </q-item-section>
          </q-item>

          <q-item v-if="user" clickable v-ripple to="profile">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section> Hesabim </q-item-section>
          </q-item>

          <q-item v-if="user" clickable v-ripple to="history">
            <q-item-section avatar>
              <q-icon name="history" />
            </q-item-section>

            <q-item-section> Gecmis Islemler </q-item-section>
          </q-item>

          <q-item v-if="admin" clickable v-ripple to="admin">
            <q-item-section avatar>
              <q-icon name="manage_accounts" />
            </q-item-section>

            <q-item-section> Admin </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container align="center">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title align="center">
          <q-icon name="fas fa-handshake" size="md" />
          TetherYo!
        </q-toolbar-title>
        <q-btn
          round
          flat
          icon="fa-brands fa-whatsapp"
          href="https://api.whatsapp.com/send?phone=905077530489&text=Merhaba%20TetherYo!"
          target="_blank"
          ><q-tooltip class="bg-accent">TetherYo! Whatsapp</q-tooltip></q-btn
        >
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { auth } from "src/boot/firebase";

export default defineComponent({
  name: "MainLayout",
  components: {},
  data() {
    return {
      miniState: false,
      drawer: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.profileAdmin;
    },
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    signOut() {
      auth.signOut();
      window.location.reload();
    },
  },
});
</script>
