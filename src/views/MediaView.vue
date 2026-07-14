<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
import MediaCard from '@/components/MediaCard.vue'
import media from '@/data/media.json'

useScrollReveal()
</script>

<template>
  <div class="media-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title reveal">Media Coverage</h1>
        <p class="page-subtitle reveal">Press features, interviews, and more</p>
        <div class="section-divider reveal"></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="media-grid stagger-children">
          <MediaCard v-for="m in media" :key="m.id" :media="m" />
        </div>
      </div>
    </section>
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

.media-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (min-width: 640px) {
  .page-hero { padding: 100px 0 50px; }
  .page-title { font-size: 2.5rem; }
  .media-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
}

@media (min-width: 1024px) {
  .page-hero { padding: 120px 0 60px; }
  .page-title { font-size: 3rem; }
}
</style>
