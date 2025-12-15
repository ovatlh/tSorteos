<script setup lang="ts">
import { useUsersStore } from '@/stores/users';
const usersStore = useUsersStore();

function fnSelectOne() {
  usersStore.fnSelectOneUser();
}

function fnReset() {
  usersStore.fnResetOneUser();
}
</script>

<template>
  <section>
    <h1>Select one</h1>
    <div class="column-buttons">
      <button @click="fnSelectOne">Select</button>
      <button @click="fnReset">Reset</button>
    </div>

    <div class="user-list-container">
      <p v-for="(item, index) in usersStore.fnGetUserSelectedList()">#{{ index + 1 }}: {{ item }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-auto-flow: row;
  row-gap: 1em;
}
</style>