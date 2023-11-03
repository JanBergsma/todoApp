<template>
    <h1>Active Todo list</h1>
    <CreateTodoList :todos="todoStore.getActive" />
</template>

<script setup lang="ts">
import CreateTodoList from "@/components/CreateTodoList.vue";
import { useTodoStore } from "../stores/todoStore";

const todoStore = useTodoStore()

</script>

<style scoped></style>