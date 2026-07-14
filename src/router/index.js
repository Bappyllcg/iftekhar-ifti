import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/biography', name: 'biography', component: () => import('@/views/BiographyView.vue') },
  { path: '/drama', name: 'drama', component: () => import('@/views/DramaView.vue') },
  { path: '/songs', name: 'songs', component: () => import('@/views/SongsView.vue') },
  { path: '/gallery', name: 'gallery', component: () => import('@/views/GalleryView.vue') },
  { path: '/media', name: 'media', component: () => import('@/views/MediaView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
