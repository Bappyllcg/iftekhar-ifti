<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import gallery from '@/data/gallery.json'

const lightboxOpen = ref(false)
const currentIndex = ref(0)
const activeFilter = ref('all')
let touchStartX = 0

const categories = computed(() => {
  const cats = [...new Set(gallery.map((g) => g.category))]
  return ['all', ...cats]
})

const filteredGallery = computed(() => {
  if (activeFilter.value === 'all') return gallery
  return gallery.filter((g) => g.category === activeFilter.value)
})

const currentImage = computed(() => filteredGallery.value[currentIndex.value])

function openLightbox(index) {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % filteredGallery.value.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + filteredGallery.value.length) % filteredGallery.value.length
}

function handleKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

function onTouchStart(e) {
  touchStartX = e.touches[0].clientX
}

function onTouchEnd(e) {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 50) {
    if (diff > 0) next()
    else prev()
  }
}

function setFilter(cat) {
  activeFilter.value = cat
  currentIndex.value = 0
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))

useScrollReveal()
</script>

<template>
  <div class="gallery-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title reveal">Photo Gallery</h1>
        <p class="page-subtitle reveal">Moments captured in time</p>
        <div class="section-divider reveal"></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="gallery-filters reveal">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="['filter-btn', { active: activeFilter === cat }]"
            @click="setFilter(cat)"
          >
            {{ cat === 'all' ? 'All' : cat.replace('-', ' ') }}
          </button>
        </div>

        <div class="gallery-grid stagger-children">
          <div
            v-for="(photo, index) in filteredGallery"
            :key="photo.id"
            class="gallery-item reveal"
            @click="openLightbox(index)"
          >
            <img :src="photo.src" :alt="photo.alt" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-caption">{{ photo.caption }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="lightbox"
        @click.self="closeLightbox"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <button class="lightbox-close" @click="closeLightbox">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <button class="lightbox-nav lightbox-prev" @click.stop="prev">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div class="lightbox-content" @click.stop>
          <img :src="currentImage?.src" :alt="currentImage?.alt" />
          <div class="lightbox-info">
            <p class="lightbox-caption">{{ currentImage?.caption }}</p>
            <p class="lightbox-counter">{{ currentIndex + 1 }} / {{ filteredGallery.length }}</p>
          </div>
        </div>

        <button class="lightbox-nav lightbox-next" @click.stop="next">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 80px 0 40px;
  text-align: center;
  background: var(--color-bg-elevated);
  border-bottom: 1px solid var(--color-border);
}

.page-title {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 700;
}

.page-subtitle {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-top: 6px;
}

.gallery-filters {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-bottom: 4px;
}

.gallery-filters::-webkit-scrollbar {
  display: none;
}

.filter-btn {
  padding: 8px 16px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 100px;
  color: var(--color-text-muted);
  font-family: var(--font-sans);
  font-size: 0.8rem;
  cursor: pointer;
  text-transform: capitalize;
  transition: all var(--transition-fast);
  white-space: nowrap;
  min-height: 36px;
}

.filter-btn.active {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #0a0a0a;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.gallery-item {
  position: relative;
  border-radius: var(--radius-sm);
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.gallery-item:active .gallery-overlay {
  opacity: 1;
}

.gallery-caption {
  font-size: 0.75rem;
  color: var(--color-text);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: var(--color-text);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}

.lightbox-content {
  width: 100%;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.lightbox-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 0;
}

.lightbox-caption {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.lightbox-counter {
  color: var(--color-text-dim);
  font-size: 0.8rem;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: var(--color-text);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.lightbox-prev { left: 8px; }
.lightbox-next { right: 8px; }

@media (min-width: 640px) {
  .page-hero {
    padding: 100px 0 50px;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .gallery-overlay {
    opacity: 0;
  }

  .gallery-item:hover .gallery-overlay {
    opacity: 1;
  }

  .lightbox-prev { left: 20px; }
  .lightbox-next { right: 20px; }
}

@media (min-width: 1024px) {
  .page-hero {
    padding: 120px 0 60px;
  }

  .page-title {
    font-size: 3rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .lightbox-nav {
    width: 52px;
    height: 52px;
  }

  .lightbox-prev { left: 24px; }
  .lightbox-next { right: 24px; }
}
</style>
