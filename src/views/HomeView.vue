<template>
  <div class="home">
   <AppHeader/> 
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "HomeView",
  components: {
    AppHeader,
  },
};
</script>
