<script setup lang="ts">
import { RouterView } from "vue-router";
import NavbarComp from "./components/navbar/NavbarComp.vue";
</script>

<template>
  <NavbarComp />

  <main class="view-container">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
