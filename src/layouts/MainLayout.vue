<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleDrawer" />
        <q-icon name="handshake" size="md" />
        <q-toolbar-title> TetherYo! </q-toolbar-title>
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
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="shopping_cart_checkout" />
            </q-item-section>

            <q-item-section> Tether Sat </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="add_shopping_cart" />
            </q-item-section>

            <q-item-section> Tether Al </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section> Hesabim </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-icon name="handshake" size="md" />
        <q-toolbar-title>
          <div>TetherYo!</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fasFont } from "@quasar/extras/fontawesome-v6";

export default {
  setup() {
    const drawer = ref(false);

    const miniState = ref(false);

    return {
      miniState,
      drawer,
      toggleDrawer() {
        drawer.value = !drawer.value;
      },
    };
  },
};
</script>
