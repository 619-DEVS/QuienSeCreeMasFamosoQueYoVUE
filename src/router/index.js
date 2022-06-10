import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomeView from '@/views/HomeView.vue'
import ResultsView from '@/views/ResultsView.vue'
import AboutView from '@/views/AboutView.vue'
const routes = [
  {
    path: '/',
    redirect: '/home/',
  },
  {
    path: '/home/',
    component: HomeView
  },
  {
    path: '/results/',
    component: ResultsView
  },
  {
    path: '/about/',
    component: AboutView
  },
  // {
  //   path: '/tabs/',
  //   component: MainView,
  //   children: [
  //     {
  //       path: '',
  //       redirect: '/tabs/tab1'
  //     },
  //     {
  //       path: 'tab1',
  //       component: () => import('@/views/Tab1Page.vue')
  //     },
  //     {
  //       path: 'tab2',
  //       component: () => import('@/views/Tab2Page.vue')
  //     },
  //     {
  //       path: 'tab3',
  //       component: () => import('@/views/Tab3Page.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
