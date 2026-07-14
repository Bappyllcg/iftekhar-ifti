<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const routeKey = computed(() => route.fullPath)
</script>

<template>
  <div class="app">
    <Navbar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="routeKey" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: var(--nav-height);
  padding-bottom: calc(var(--bottom-nav-height) + var(--safe-bottom));
}

@media (min-width: 1024px) {
  main {
    padding-bottom: 0;
  }
}
</style>
