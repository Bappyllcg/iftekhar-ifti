<script setup>
defineProps({
  media: { type: Object, required: true },
})
</script>

<template>
  <a :href="media.url" target="_blank" rel="noopener" class="media-card reveal">
    <div class="card-thumb">
      <img :src="media.thumbnail" :alt="media.title" loading="lazy" />
    </div>
  </a>
</template>

<style scoped>
.media-card {
  display: block;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: border-color var(--transition-fast);
}

.media-card:active {
  border-color: var(--color-accent);
}

.card-thumb {
  aspect-ratio: 16/9;
  overflow: hidden;
}

.card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 640px) {
  .media-card:hover {
    border-color: var(--color-accent);
  }
}
</style>
