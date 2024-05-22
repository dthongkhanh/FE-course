import DetailView from '@/views/DetailView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/components/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import MyCourse from '@/views/MyCourse.vue'
import MyAccountView from '@/views/MyAccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/detail',
      name: 'Detail',
      component: DetailView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchView
    },
    {
      path: '/my-course',
      name: 'MyCourse',
      component: MyCourse
    },
    {
      path: '/my-account',
      name: 'MyAccount',
      component: MyAccountView
    }
  ]
})

export default router
