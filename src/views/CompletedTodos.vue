
<template>
    <h1>Delete Todo list</h1>
    <div v-for="todo in todos" :key="`${todo.details}, ${todo.completed}`">
        {{ todo }}
    </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../stores/todoStore";

const todoStore = useTodoStore()

const todos = todoStore.getCompleted
</script>
