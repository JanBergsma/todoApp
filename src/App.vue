<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div class="center">
    <header>
      <div class="title">
        <h1>#todo</h1>
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">All</RouterLink>
          <RouterLink to="/active">Active</RouterLink>
          <RouterLink to="/completed">Completed</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.center {
  display: grid;
  justify-content: center;
}

.title {
  display: flex;
  justify-content: center;
}

h1 {
  font-weight: bold;

}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

nav a.router-link-exact-active {
  border-bottom: 2px solid var(--color-active);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  color: var(--color-text);
  font-weight: bold;
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  margin-left: 2rem;
}
</style>
