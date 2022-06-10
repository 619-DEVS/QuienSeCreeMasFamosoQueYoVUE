import { createRouter, createWebHistory } from '@ionic/vue-router';
import MainView from '../views/MainView.vue'
import HomeView from '@/views/HomeView.vue'
const routes  = [
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '/home/',
        component: HomeView
      },
      {
        path: '/tabs/tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: '/tabs/tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: '/tabs/tab3',
        component: () => import('@/views/Tab3Page.vue')
      }  
      
    ]
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
