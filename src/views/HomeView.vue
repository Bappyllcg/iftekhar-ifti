<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import DramaCard from '@/components/DramaCard.vue'
import SongCard from '@/components/SongCard.vue'
import MediaCard from '@/components/MediaCard.vue'
import VideoModal from '@/components/VideoModal.vue'
import biography from '@/data/biography.json'
import drama from '@/data/drama.json'
import songs from '@/data/songs.json'
import media from '@/data/media.json'

const featuredDrama = drama.filter((d) => d.featured).slice(0, 3)
const recentSongs = songs.slice(0, 3)
const recentMedia = media.slice(0, 3)

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
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg hero-bg-mobile"></div>
      <div class="hero-bg hero-bg-desktop"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <p class="hero-tagline hero-animate">{{ biography.tagline }}</p>
        <h1 class="hero-name hero-animate-delay-1">{{ biography.name }}</h1>
        <p class="hero-description hero-animate-delay-2">
          {{ biography.about.substring(0, 120) }}...
        </p>
        <div class="hero-actions hero-animate-delay-2">
          <router-link to="/biography" class="btn btn-primary">Biography</router-link>
          <router-link to="/gallery" class="btn btn-outline">Gallery</router-link>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in biography.stats" :key="stat.label" class="stat-item reveal">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Biography -->
    <section class="section bio-section">
      <div class="container">
        <div class="bio-grid">
          <div class="bio-image reveal-left">
            <img :src="biography.photo" :alt="biography.name" loading="lazy" />
          </div>
          <div class="bio-content reveal-right">
            <h2 class="bio-title">About {{ biography.name }}</h2>
            <p class="bio-tagline">{{ biography.tagline }}</p>
            <p class="bio-text">{{ biography.about }}</p>
            <router-link to="/biography" class="btn btn-primary">Read Full Biography</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Dramas -->
    <section class="section section-alt">
      <div class="container-narrow">
        <div class="section-header reveal">
          <h2>Featured Dramas</h2>
          <p>Recent performances that captivated audiences</p>
          <div class="section-divider"></div>
        </div>
        <div class="hscroll">
          <DramaCard v-for="d in featuredDrama" :key="d.id" :drama="d" @play="openVideo" />
        </div>
        <div class="section-cta reveal">
          <router-link to="/drama" class="btn btn-outline">View All Dramas</router-link>
        </div>
      </div>
    </section>

    <!-- Recent Songs -->
    <section class="section">
      <div class="container-narrow">
        <div class="section-header reveal">
          <h2>Latest Songs</h2>
          <p>Melodies that touch the soul</p>
          <div class="section-divider"></div>
        </div>
        <div class="hscroll">
          <SongCard v-for="s in recentSongs" :key="s.id" :song="s" @play="openVideo" />
        </div>
        <div class="section-cta reveal">
          <router-link to="/songs" class="btn btn-outline">Explore All Songs</router-link>
        </div>
      </div>
    </section>

    <!-- Media Highlights -->
    <section class="section section-alt">
      <div class="container-narrow">
        <div class="section-header reveal">
          <h2>In the Press</h2>
          <p>Latest media coverage and features</p>
          <div class="section-divider"></div>
        </div>
        <div class="hscroll">
          <MediaCard v-for="m in recentMedia" :key="m.id" :media="m" />
        </div>
        <div class="section-cta reveal">
          <router-link to="/media" class="btn btn-outline">See All Coverage</router-link>
        </div>
      </div>
    </section>

    <VideoModal :show="modalOpen" :video-url="modalUrl" :title="modalTitle" @close="modalOpen = false" />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 85vh;
  min-height: 85dvh;
  display: flex;
  align-items: flex-end;
  padding-bottom: 60px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(1.05);
}

.hero-bg-mobile {
  background-image: url('/images/hero-mobile.jpg');
  background-position: center top;
  display: block;
}

.hero-bg-desktop {
  background-image: url('/images/hero.jpg');
  background-position: center;
  display: none;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top,
      rgba(10, 10, 10, 0.95) 0%,
      rgba(10, 10, 10, 0.6) 50%,
      rgba(10, 10, 10, 0.2) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-tagline {
  font-size: 0.75rem;
  color: var(--color-accent);
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 8px;
}

.hero-name {
  font-family: var(--font-serif);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 12px;
}

.hero-description {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 24px;
}

.hero-actions {
  display: flex;
  gap: 12px;
}

/* Stats */
.stats-section {
  padding: 32px 0;
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-value {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-accent);
}

.stat-label {
  color: var(--color-text-muted);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Bio section */
.bio-section {
  background: var(--color-bg);
}

.bio-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: center;
}

.bio-image img {
  width: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-elevated);
}

.bio-title {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.bio-tagline {
  color: var(--color-accent);
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.bio-text {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

/* Horizontal scroll for mobile */
.container-narrow {
  padding: 0 16px;
}

.hscroll {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 4px 0 16px;
}

.hscroll::-webkit-scrollbar {
  display: none;
}

.hscroll > * {
  flex: 0 0 75%;
  scroll-snap-align: start;
  min-width: 0;
}

.section-alt {
  background: var(--color-bg-elevated);
}

/* Tablet */
@media (min-width: 640px) {
  .hero {
    min-height: 90vh;
    min-height: 90dvh;
    align-items: center;
    padding-bottom: 0;
  }

  .hero-overlay {
    background: linear-gradient(to right,
        rgba(10, 10, 10, 0.9) 0%,
        rgba(10, 10, 10, 0.5) 60%,
        rgba(10, 10, 10, 0.1) 100%);
  }

  .hero-name {
    font-size: 3.2rem;
  }

  .hero-tagline {
    font-size: 0.85rem;
  }

  .hero-description {
    font-size: 1.05rem;
  }

  .stat-value {
    font-size: 2rem;
  }

  .container-narrow {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
  }

  .hscroll {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    overflow-x: visible;
    scroll-snap-type: none;
    padding: 0;
  }

  .hscroll > * {
    flex: none;
    scroll-snap-align: unset;
  }

  .bio-grid {
    grid-template-columns: 1fr 1.3fr;
    gap: 40px;
  }

  .bio-title {
    font-size: 1.8rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero-bg-mobile {
    display: none;
  }

  .hero-bg-desktop {
    display: block;
  }

  .hero {
    min-height: 100vh;
    min-height: 100dvh;
  }

  .hero-name {
    font-size: 4rem;
  }

  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 32px;
  }

  .stats-section {
    padding: 48px 0;
  }

  .stat-value {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }

  .hscroll {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .container-narrow {
    padding: 0 32px;
  }

  .bio-grid {
    gap: 60px;
  }

  .bio-title {
    font-size: 2.2rem;
  }

  .bio-text {
    font-size: 1.05rem;
  }
}
</style>
