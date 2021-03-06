import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomeView from '@/views/HomeView.vue'
import ResultsView from '@/views/ResultsView.vue'
import AboutView from '@/views/AboutView.vue'
import SecretComponent from '@/components/SecretComponent.vue'
const routes = [
  {
    path: '/',
    redirect: '/home/',
  },
  {
    path: '/home/',
    component: HomeView,

  },
  {
    path: '/results/',
    component: ResultsView,

  },
  {
    path: '/about/',
    component: AboutView
  },
  {
    path: '/secret/',
    component: SecretComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
