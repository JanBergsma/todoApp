
<template>
    <div class="container" v-if="todos.length">
        <ol>
            <li class="todo" v-for="( todo, index ) in todos" :key="`${todo.details}, ${todo.completed}`">
                <input type="checkbox" :name="todo.details + index" :id="todo.details + index" v-model="todo.completed">
                <div>{{ todo.details }}</div>
                <button class="delete-todo" @click="() => todoStore.remove(todo)">
                    <span class="material-icons">
                        delete
                    </span>
                </button>
            </li>
        </ol>
        <div class="button-wrapper">
            <button class="delete-all" @click="todoStore.clear">
                <span class="material-icons">
                    delete
                </span>
                delete all
            </button>
        </div>
    </div>
    <div class="empty-text" v-else>
        <p>There are no completed Todos.</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTodoStore } from "../stores/todoStore";

const todoStore = useTodoStore()
const todos = computed(() => todoStore.completed)

</script>

