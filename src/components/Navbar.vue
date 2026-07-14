<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)

const navLinks = [
  { name: 'Home', path: '/', icon: 'home' },
  { name: 'Bio', path: '/biography', icon: 'user' },
  { name: 'Dramas', path: '/drama', icon: 'film' },
  { name: 'Songs', path: '/songs', icon: 'music' },
  { name: 'Gallery', path: '/gallery', icon: 'image' },
  { name: 'Media', path: '/media', icon: 'mic' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- Mobile top bar -->
  <nav :class="['mobile-topbar', { scrolled }]">
    <router-link to="/" class="mobile-logo">Iftekhar Ifti</router-link>
    <div class="mobile-socials">
      <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
      </a>
    </div>
  </nav>

  <!-- Desktop top bar -->
  <nav :class="['desktop-topbar', { scrolled }]">
    <div class="desktop-topbar-inner container">
      <router-link to="/" class="desktop-logo">Iftekhar Ifti</router-link>
      <ul class="desktop-links">
        <li v-for="link in navLinks" :key="link.path">
          <router-link :to="link.path" :class="{ active: route.path === link.path }">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Bottom nav - mobile -->
  <nav class="bottom-nav">
    <router-link
      v-for="link in navLinks"
      :key="link.path"
      :to="link.path"
      :class="['bottom-nav-item', { active: route.path === link.path }]"
    >
      <svg v-if="link.icon === 'home'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <svg v-if="link.icon === 'user'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      <svg v-if="link.icon === 'film'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
      <svg v-if="link.icon === 'music'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      <svg v-if="link.icon === 'image'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      <svg v-if="link.icon === 'mic'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
      <span class="bottom-nav-label">{{ link.name }}</span>
    </router-link>
  </nav>
</template>

<style scoped>
/* ===== MOBILE TOP BAR ===== */
.mobile-topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  padding: 0 16px;
  padding-top: var(--safe-top);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
}

.mobile-logo {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: 0.3px;
}

.mobile-socials {
  display: flex;
  align-items: center;
  gap: 6px;
}

.mobile-socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--color-text-muted);
  transition: all var(--transition-fast);
}

.mobile-socials a:active {
  color: var(--color-accent);
  background: var(--color-accent-dim);
}

/* ===== BOTTOM NAV (mobile) ===== */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--bottom-nav-height);
  padding-bottom: var(--safe-bottom);
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  color: var(--color-text-dim);
  transition: color var(--transition-fast);
  min-width: 48px;
  min-height: 44px;
  justify-content: center;
}

.bottom-nav-item.active {
  color: var(--color-accent);
}

.bottom-nav-label {
  font-size: 0.6rem;
  font-weight: 500;
}

/* ===== DESKTOP TOPBAR (hidden on mobile) ===== */
.desktop-topbar {
  display: none;
}

/* ===== DESKTOP ===== */
@media (min-width: 1024px) {
  .mobile-topbar {
    display: none;
  }

  .bottom-nav {
    display: none;
  }

  .desktop-topbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    background: transparent;
    transition: all var(--transition-normal);
  }

  .desktop-topbar.scrolled {
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
  }

  .desktop-topbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .desktop-logo {
    font-family: var(--font-serif);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-text);
  }

  .desktop-links {
    display: flex;
    gap: 4px;
  }

  .desktop-links a {
    padding: 8px 16px;
    font-size: 0.9rem;
    color: var(--color-text-muted);
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
  }

  .desktop-links a:hover {
    color: var(--color-text);
  }

  .desktop-links a.active {
    color: var(--color-accent);
    background: var(--color-accent-dim);
  }
}
</style>
