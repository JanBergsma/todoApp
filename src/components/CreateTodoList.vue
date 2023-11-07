<template>
    <div class="form">
        <input type="text" placeholder="add details" v-model="newTodoDetails">
        <button @click="createTodo">Add</button>
    </div>
    <ol>
        <li class="todo" v-for="( todo, index ) in todos" :key="`${todo.details}, ${todo.completed}`">
            <input type="checkbox" :name="todo.details + index" :id="todo.details + index" v-model="todo.completed">
            <div>{{ todo.details }}</div>
        </li>
    </ol>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useTodoStore } from "../stores/todoStore";

export interface Props {
    selectAll: boolean
}
const props = defineProps<Props>()
const todoStore = useTodoStore()

const todos = props.selectAll ? computed(() => todoStore.todos) : computed(() => todoStore.active)

const newTodoDetails = ref('')

const createTodo = () => {
    if (newTodoDetails.value) {
        todoStore.add({ details: newTodoDetails.value, completed: false })
        newTodoDetails.value = ''
    }
}


</script>

