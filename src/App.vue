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
          <RouterLink to="/all">All</RouterLink>
          <RouterLink to="/active">Active</RouterLink>
          <RouterLink to="/completed">Completed</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView v-slot="{ Component, route }">
        <Transition name="bounce">
          <Component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>


