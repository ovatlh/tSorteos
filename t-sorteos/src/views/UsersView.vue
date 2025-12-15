<script setup lang="ts">
import { useUsersStore } from '@/stores/users';
const usersStore = useUsersStore();

function fnFormSubmit() {
  const inputTextArea = document.getElementById("id-users") as HTMLInputElement;
  const userList = inputTextArea.value.split("\n");
  usersStore.fnSetUserList(userList);
}
</script>

<template>
  <section>
    <h1>Users: {{ usersStore.fnGetUserCount() }}</h1>
    <form @submit.prevent="fnFormSubmit">
      <textarea name="txt-users" id="id-users" placeholder="Users, separate with new line" required></textarea>
      <button type="submit">Save changes</button>
    </form>
  </section>
</template>

<style scoped>
  
</style>