import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'Dashboard' },
  },
  {
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/index.vue'),
      },
      {
        name: 'single controller',
        path: 'controller',
        component: () => import('../pages/admin/controller/SingleController.vue'),
      }
    ],
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export { router, routes }
