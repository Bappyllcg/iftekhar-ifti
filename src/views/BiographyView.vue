<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
import biography from '@/data/biography.json'

useScrollReveal()
</script>

<template>
  <div class="biography">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title reveal">Biography</h1>
        <div class="section-divider reveal"></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="bio-grid">
          <div class="bio-image reveal-left">
            <img :src="biography.photo" :alt="biography.name" loading="lazy" />
          </div>
          <div class="bio-content reveal-right">
            <h2 class="bio-name">{{ biography.name }}</h2>
            <p class="bio-tagline">{{ biography.tagline }}</p>
            <p class="bio-text">{{ biography.about }}</p>
            <div class="bio-stats">
              <div v-for="stat in biography.stats" :key="stat.label" class="bio-stat">
                <span class="bio-stat-value">{{ stat.value }}</span>
                <span class="bio-stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header reveal">
          <h2>Career Timeline</h2>
          <p>A journey through the years</p>
          <div class="section-divider"></div>
        </div>
        <div class="timeline">
          <div
            v-for="(item, index) in biography.timeline"
            :key="item.year"
            class="timeline-item reveal"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="timeline-year">{{ item.year }}</span>
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-desc">{{ item.description }}</p>
            </div>
          </div>
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

.bio-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.bio-image img {
  width: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-elevated);
}

.bio-name {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.bio-tagline {
  color: var(--color-accent);
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.bio-text {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.bio-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}

.bio-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
}

.bio-stat-value {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-accent);
}

.bio-stat-label {
  color: var(--color-text-dim);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-alt {
  background: var(--color-bg-elevated);
}

/* Timeline - mobile: left-aligned single column */
.timeline {
  position: relative;
  padding-left: 28px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-marker {
  position: absolute;
  left: -28px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-accent);
  border: 3px solid var(--color-bg-elevated);
  z-index: 1;
}

.timeline-year {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-accent);
}

.timeline-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 2px 0 6px;
}

.timeline-desc {
  color: var(--color-text-muted);
  font-size: 0.85rem;
  line-height: 1.6;
}

/* Tablet */
@media (min-width: 640px) {
  .page-hero {
    padding: 100px 0 50px;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .bio-grid {
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
    align-items: center;
  }

  .bio-name {
    font-size: 2rem;
  }

  .bio-stat-value {
    font-size: 1.5rem;
  }

  .bio-stat-label {
    font-size: 0.75rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .page-hero {
    padding: 120px 0 60px;
  }

  .page-title {
    font-size: 3rem;
  }

  .bio-grid {
    gap: 60px;
  }

  .bio-name {
    font-size: 2.2rem;
  }

  .bio-text {
    font-size: 1.05rem;
    line-height: 1.8;
  }

  /* Timeline - desktop: alternating */
  .timeline {
    max-width: 800px;
    margin: 0 auto;
    padding-left: 0;
  }

  .timeline::before {
    left: 50%;
    transform: translateX(-50%);
  }

  .timeline-item {
    display: flex;
    align-items: flex-start;
  }

  .timeline-item:nth-child(odd) {
    justify-content: flex-start;
    padding-right: calc(50% + 30px);
    text-align: right;
  }

  .timeline-item:nth-child(even) {
    justify-content: flex-end;
    padding-left: calc(50% + 30px);
  }

  .timeline-marker {
    left: 50%;
    transform: translateX(-50%);
  }

  .timeline-item:nth-child(odd) .timeline-marker,
  .timeline-item:nth-child(even) .timeline-marker {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
