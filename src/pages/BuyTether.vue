<template>
  <TradeGrid></TradeGrid>
</template>

<script>
import { defineComponent } from "vue";
import TradeGrid from "src/components/TradeGrid.vue";

export default defineComponent({
  components: { TradeGrid },
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
