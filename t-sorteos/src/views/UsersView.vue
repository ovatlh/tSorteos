<script setup lang="ts">
import { useUsersStore } from "@/stores/users";
const usersStore = useUsersStore();

function fnFormSubmit() {
  const inputTextArea = document.getElementById("id-users") as HTMLInputElement;
  const userList = inputTextArea.value.split("\n");
  usersStore.fnSetUserList(userList);
}
</script>

<template>
  <section class="content-view">
    <section class="form-container">
      <h1>Users: {{ usersStore.fnGetUserCount() }}</h1>

      <form @submit.prevent="fnFormSubmit">
        <textarea
          name="txt-users"
          id="id-users"
          placeholder="Users, separate with new line"
          required
        ></textarea>

        <button type="submit">Save changes</button>
      </form>
    </section>

    <section class="preview-container">
      <h2>Current users</h2>

      <section class="user-list-container">
        <p class="user-item" v-for="(item, index) in usersStore.fnGetUserList()">
          #{{ index + 1 }}: {{ item }}
        </p>
      </section>
    </section>
  </section>
</template>

<style scoped>
.user-list-container {
  display: grid;
  grid-auto-flow: row;
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
