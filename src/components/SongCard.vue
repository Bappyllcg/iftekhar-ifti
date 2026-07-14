<script setup>
defineProps({
  song: { type: Object, required: true },
})

defineEmits(['play'])
</script>

<template>
  <article class="song-card reveal" @click="$emit('play', song)">
    <div class="card-cover">
      <img :src="song.cover" :alt="song.title" loading="lazy" />
      <div class="card-play">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>
      <div class="card-duration">{{ song.duration }}</div>
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ song.title }}</h3>
    </div>
  </article>
</template>

<style scoped>
.song-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: border-color var(--transition-fast);
}

.song-card:active {
  border-color: var(--color-accent);
}

.card-cover {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
}

.card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  transition: opacity var(--transition-normal);
  color: var(--color-accent);
}

.song-card:active .card-play {
  opacity: 1;
}

.card-duration {
  position: absolute;
  bottom: 6px;
  right: 6px;
  background: rgba(0, 0, 0, 0.75);
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 0.65rem;
  color: var(--color-text);
}

.card-body {
  padding: 8px 12px;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.2;
}

@media (min-width: 640px) {
  .card-body {
    padding: 12px 16px;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-duration {
    bottom: 10px;
    right: 10px;
    font-size: 0.75rem;
  }

  .card-play {
    opacity: 0;
  }

  .song-card:hover .card-play {
    opacity: 1;
  }

  .song-card:hover {
    border-color: var(--color-accent);
  }
}
</style>
