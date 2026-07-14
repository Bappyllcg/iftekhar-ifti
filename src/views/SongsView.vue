<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import SongCard from '@/components/SongCard.vue'
import VideoModal from '@/components/VideoModal.vue'
import songs from '@/data/songs.json'

const modalOpen = ref(false)
const modalUrl = ref('')
const modalTitle = ref('')

function openVideo(item) {
  modalUrl.value = item.youtubeUrl
  modalTitle.value = item.title
  modalOpen.value = true
}

useScrollReveal()
</script>

<template>
  <div class="songs-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title reveal">Songs</h1>
        <p class="page-subtitle reveal">Musical journey through melody and emotion</p>
        <div class="section-divider reveal"></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="songs-grid stagger-children">
          <SongCard v-for="s in songs" :key="s.id" :song="s" @play="openVideo" />
        </div>
      </div>
    </section>

    <VideoModal :show="modalOpen" :video-url="modalUrl" :title="modalTitle" @close="modalOpen = false" />
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

.songs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (min-width: 640px) {
  .page-hero { padding: 100px 0 50px; }
  .page-title { font-size: 2.5rem; }
  .songs-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
}

@media (min-width: 1024px) {
  .page-hero { padding: 120px 0 60px; }
  .page-title { font-size: 3rem; }
  .songs-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
}
</style>
