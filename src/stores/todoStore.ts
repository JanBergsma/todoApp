import { defineStore } from 'pinia'
import type Todo from './todoInterface'
import { computed, ref, watch } from 'vue'

export const useTodoStore = defineStore('alerts', () => {
  // const todos = ref(JSON.parse(localStorage.getItem('todos') || '[]') as Array<Todo>)
  const todos = ref([
    { details: 'Finish TodoApp', completed: false },
    { details: 'blabla', completed: false },
    { details: 'nanan', completed: true },
    { details: 'cxvxh', completed: false }
  ] as Array<Todo>)

  watch(todos, (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos))
  })

  const getAll = computed(() => todos)
  const getActive = computed(() => todos.value.filter((t) => !t.completed))
  const getCompleted = computed(() => todos.value.filter((t) => t.completed))

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
    getAll,
    getActive,
    getCompleted,
    add,
    remove,
    toggleCompleted
  }
})
