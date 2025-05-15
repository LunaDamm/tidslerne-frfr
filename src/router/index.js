import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: '/',
      name: 'hjem',
      component: HomeView,
    },
    {
      path: '/om-os',
      name: 'om os',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OmOsView.vue'),
    },
    {
      path: '/bladet',
      name: 'bladet',
      component: () => import('../views/BladetView.vue'),
    },
    {
      path: '/artikler',
      name: 'artikler',
      component: () => import('../views/ArtiklerView.vue'),
    },
    {
      path: '/artikler/:id',
      name: 'artikel',
      component: () => import('../views/ArtikelDetails.vue'),
    },

  ],
})

export default router
