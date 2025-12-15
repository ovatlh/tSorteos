<script setup lang="ts">

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/users">Users</RouterLink>
    <RouterLink to="/bygroup">Groups</RouterLink>
    <RouterLink to="/selectone">Select one</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: start;
}

nav a.router-link-exact-active {
  color: var(--clr-green-01);
  text-decoration: underline;
}

nav a {
  display: grid;
  justify-content: center;
  align-content: center;
  height: 3em;
  padding: 0 1.5em;
}

nav a:first-of-type {
  border: 0;
}
</style>