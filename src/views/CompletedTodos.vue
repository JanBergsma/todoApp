
<template>
    <div v-for="todo in todos" :key="`${todo.details}, ${todo.completed}`">
        {{ todo }}
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTodoStore } from "../stores/todoStore";

const todoStore = useTodoStore()
const todos = computed(() => todoStore.completed)

</script>
