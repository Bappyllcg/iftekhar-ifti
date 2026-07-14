<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  videoUrl: { type: String, default: '' },
  title: { type: String, default: '' },
})

const emit = defineEmits(['close'])

watch(() => props.show, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

function close() {
  emit('close')
  document.body.style.overflow = ''
}

function onKeydown(e) {
  if (e.key === 'Escape' && props.show) close()
}

window.addEventListener('keydown', onKeydown)
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="video-modal" @click.self="close">
        <div class="modal-backdrop" @click="close"></div>
        <div class="modal-content">
          <button class="modal-close" @click="close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div class="modal-title" v-if="title">{{ title }}</div>
          <div class="video-wrapper">
            <iframe
              v-if="show && videoUrl"
              :src="videoUrl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.video-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 900px;
  background: var(--color-bg-elevated);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-elevated);
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: var(--color-text);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.modal-title {
  padding: 12px 16px 0;
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.video-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (min-width: 640px) {
  .video-modal {
    padding: 24px;
  }

  .modal-close {
    top: 12px;
    right: 12px;
  }

  .modal-title {
    padding: 16px 20px 0;
    font-size: 1.1rem;
  }
}
</style>
