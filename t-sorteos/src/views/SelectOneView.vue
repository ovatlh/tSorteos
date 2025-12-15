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
  <section class="content-view">
    <section class="form-container">
      <h1>Select one</h1>

      <div class="column-buttons">
        <button @click="fnSelectOne">Select</button>

        <button @click="fnReset">Reset</button>
      </div>
    </section>

    <section class="preview-container">
      <h2>List</h2>

      <div class="user-list-item-container">
        <p class="user-item" v-for="(item, index) in usersStore.fnGetUserSelectedList()">#{{ index + 1 }}: {{ item }}</p>
      </div>
    </section>
  </section>
</template>

<style scoped>
.user-list-item-container {
  display: grid;
  grid-auto-flow: row;
  align-content: start;
  gap: 0.5em;
}

.user-item {
  display: grid;
  border: 1px solid gray;
  border-radius: 0.2em;
  padding: 1em;
  word-break: break-all;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>