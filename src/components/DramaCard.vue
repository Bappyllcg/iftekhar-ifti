<script setup>
defineProps({
  drama: { type: Object, required: true },
})

defineEmits(['play'])
</script>

<template>
  <article class="drama-card reveal" @click="$emit('play', drama)">
    <div class="card-poster">
      <img :src="drama.poster" :alt="drama.title" loading="lazy" />
      <div class="card-play">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>
      <div class="card-year">{{ drama.year }}</div>
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ drama.title }}</h3>
      <p class="card-role">as {{ drama.role }}</p>
    </div>
  </article>
</template>

<style scoped>
.drama-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: border-color var(--transition-fast);
}

.drama-card:active {
  border-color: var(--color-accent);
}

.card-poster {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.card-poster img {
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

.drama-card:active .card-play {
  opacity: 1;
}

.card-year {
  position: absolute;
  top: 8px;
  right: 8px;
  background: var(--color-accent);
  color: #0a0a0a;
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 600;
}

.card-body {
  padding: 10px 14px;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 1px;
  line-height: 1.2;
}

.card-role {
  color: var(--color-accent);
  font-size: 0.75rem;
}

@media (min-width: 640px) {
  .card-body {
    padding: 14px 18px;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-role {
    font-size: 0.85rem;
  }

  .card-play {
    opacity: 0;
  }

  .drama-card:hover .card-play {
    opacity: 1;
  }

  .drama-card:hover {
    border-color: var(--color-accent);
  }
}
</style>
