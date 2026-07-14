<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">Iftekhar Ifti</span>
        <p class="footer-tagline">Actor | Performer | Artist</p>
      </div>

      <div class="footer-links">
        <router-link to="/">Home</router-link>
        <router-link to="/biography">Biography</router-link>
        <router-link to="/drama">Dramas</router-link>
        <router-link to="/songs">Songs</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/media">Media</router-link>
      </div>

      <div class="footer-social">
        <a href="#" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="#" aria-label="YouTube">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
        <a href="#" aria-label="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
      </div>
    </div>

    <div class="footer-bottom container">
      <p>&copy; {{ currentYear }} Iftekhar Ifti. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
  padding: 32px 0 0;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 24px;
  text-align: center;
}

.footer-logo {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
}

.footer-tagline {
  color: var(--color-text-dim);
  font-size: 0.75rem;
  margin-top: 4px;
}

.footer-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  transition: color var(--transition-fast);
  padding: 4px 0;
}

.footer-links a:active {
  color: var(--color-accent);
}

.footer-social {
  display: flex;
  gap: 20px;
}

.footer-social a {
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
  padding: 8px;
}

.footer-social a:active {
  color: var(--color-accent);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: 16px;
}

.footer-bottom p {
  color: var(--color-text-dim);
  font-size: 0.7rem;
  text-align: center;
}

@media (min-width: 640px) {
  .footer {
    padding: 48px 0 0;
  }

  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    gap: 32px;
  }

  .footer-links {
    justify-content: flex-start;
  }

  .footer-links a {
    font-size: 0.85rem;
  }
}
</style>
