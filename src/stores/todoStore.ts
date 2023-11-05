import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import type Todo from './todoInterface'

export const useTodoStore = defineStore('todos', () => {
  const todos = ref(JSON.parse(localStorage.getItem('todos') || '[]') as Array<Todo>)
  const active = computed(() => todos.value.filter((t) => !t.completed))
  const completed = ref(todos.value.filter((t) => t.completed))

  watch(
    todos,
    (newTodos) => {
      console.log(`NewTodos = ${newTodos}`)
      localStorage.setItem('todos', JSON.stringify(newTodos))
    },
    { deep: true }
  )

  const add = (todo: Todo) => todos.value.push(todo)
  const toggleCompleted = (todo: Todo) => {
    const index = todos.value.findIndex((t) => Object.is(t, todo))
    if (index > -1) {
      todos.value[index].completed = !todos.value[index].completed
    }
  }
  const remove = (todo: Todo) => (todos.value = todos.value.filter((t) => !Object.is(t, todo)))

  return {
    todos,
    active,
    completed,
    add,
    remove,
    toggleCompleted
  }
})
