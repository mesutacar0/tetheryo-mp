<template>
  <UserGrid></UserGrid>
</template>

<script>
import { defineComponent } from "vue";
import UserGrid from "src/components/UserGrid.vue";

export default defineComponent({
  name: "UsersPage",
  data() {
    return {};
  },
  components: { UserGrid },
  mounted() {
    console.log("UserPage mounted");
  },
});
</script>
