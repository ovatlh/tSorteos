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
  <section>
    <h1>Groups</h1>
    <form @submit.prevent="fnFormSubmit">
      <input type="number" name="txt-size" id="id-size" placeholder="Groups size: example = 5" required>
      <button type="submit">Generate groups</button>
    </form>
  </section>

  <section>
    <h2>List</h2>

    <div class="group-container">
      <div class="group-item-container" v-for="(group, groupIndex) in usersStore.fnGetGroupList()">
        <h3>Group #{{ groupIndex + 1 }}</h3>

        <div class="group-list-container">
          <p v-for="(item, itemIndex) in group.userList">{{ itemIndex + 1 }}: {{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
form {
  display: grid;
  grid-auto-flow: row;
  row-gap: 1em;
}

input[type="number"] {
  width: 100%;
  padding: 1em;
  field-sizing: content;
}

button {
  padding: 0.5em;
  cursor: pointer;
}

.group-container {
  padding: 0.5em;
  display: grid;
  grid-auto-flow: row;
  align-content: start;
  row-gap: 2em;
  background-color: rgba(0, 0, 0, 0.1);
}

.group-list-container {
  padding: 0.5em;
  display: grid;
  grid-auto-flow: row;
  align-content: start;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>