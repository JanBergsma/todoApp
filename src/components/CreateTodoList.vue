<template>
    <h1>Create Todo list</h1>
    <div v-for="todo in props.todos" :key="`${todo.details}, ${todo.completed}`">
        {{ todo }}
    </div>
</template>

<script setup lang="ts">
import type Todo from "@/stores/todoInterface";

export interface Props {
    todos: Array<Todo>
}
const props = defineProps<Props>()


</script>

<style scoped></style>