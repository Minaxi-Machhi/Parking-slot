// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'MainPage',
        component: () => import(/* webpackChunkName: "home" */ '@/components/MainPage'),
      },
      {
        path: '/register',
        component: () => import('@/components/Register.vue'),
        name: 'Register',
      },
      {
        path: '/dashboard',
        component: () => import('@/components/Dashboard.vue'),
        name: 'Dashboard',
      },
      {
        path: '/login',
        component: () => import('@/components/Login.vue'),
        name: 'Login',
      },
      {
        path: '/booking',
        component: () => import('@/components/BookingForm.vue'),
        name: 'Booking',
        meta: { requiresAuth: true }
      },
    ],
  },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  const loggedUser = localStorage.getItem('user')
  if (to.meta.requiresAuth && !loggedUser) {
    next({
      name: 'Login',
    })
  }
  next()
})
export default router
