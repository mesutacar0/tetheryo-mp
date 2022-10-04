<template>
  <q-dialog :modelValue="modelValue">
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar
          :icon="icon"
          color="primary"
          text-color="white"
          class="q-mr-sm"
        />
        <slot></slot>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Iptal Et" color="negative" v-close-popup />
        <q-btn flat label="Onayla" color="primary" @click="$emit('c-click')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConfirmDialog",
  props: {
    icon: {
      type: String,
      default: "check",
    },
    modelValue: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>
