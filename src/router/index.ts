import { createRouter, createWebHistory } from 'vue-router'
import AllTodos from '../views/AllTodos.vue'
import ActiveTodos from '../views/ActiveTodos.vue'
import CompletedTodos from '../views/CompletedTodos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all',
      component: AllTodos
    },
    {
      path: '/active',
      name: 'active',
      component: ActiveTodos
    },
    {
      path: '/completed',
      name: 'completed',
      component: CompletedTodos
    }
  ]
})

export default router
