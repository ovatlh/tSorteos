<script setup lang="ts">
import { useUsersStore } from '@/stores/users';
const usersStore = useUsersStore();

function fnFormSubmit() {
  const inputSize = document.getElementById("id-size") as HTMLInputElement;
  const groupSize = Number(inputSize.value);
  usersStore.fnSetNewUserGroups(groupSize);
}
</script>

<template>
  <section class="content-view">
    <section class="form-container">
      <h1>Groups</h1>

      <form @submit.prevent="fnFormSubmit">
        <input type="number" name="txt-size" id="id-size" placeholder="Groups size: example = 5" required>

        <button type="submit">Generate groups</button>
      </form>
    </section>

    <section class="preview-container">
      <h2>List</h2>

      <section class="group-item-container" v-for="(group, groupIndex) in usersStore.fnGetGroupList()">
        <h3>Group #{{ groupIndex + 1 }}</h3>

        <div class="group-list-item-container">
          <p v-for="(item, itemIndex) in group.userList">{{ itemIndex + 1 }}: {{ item }}</p>
        </div>
      </section>
    </section>
  </section>
</template>

<style scoped>
.group-item-container {
  display: grid;
  grid-auto-flow: row;
  align-content: start;
  padding: 0.5em;
  gap: 0.5em;
  background-color: rgba(0, 0, 0, 0.1);
}

.group-list-item-container {
  display: grid;
  grid-auto-flow: row;
  align-content: start;
  padding: 0.5em;
  gap: 0.5em;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>