// app.js

const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// --- DATOS DE LA APLICACIÓN ---
// Aquí es donde debes poner tus propios links, imágenes y textos.
// He simplificado los datos para asegurar que todo funcione.

const mainCategories = [
    { name: 'Estilos', path: '/estilos', image: 'assets/estilos.png' },
    { name: 'Servicios', path: '/servicios', image: 'assets/servicios.png' },
    { name: 'Productos', path: '/productos', image: 'assets/productos.png' },
];

const stylesData = [
    { id: 'fade', title: 'Fade', image: 'assets/corte-fade.jpg', tiktokLink: 'https://www.tiktok.com/@stivencbarber19/video/7550696346336988472' },
    { id: 'pompadour', title: 'Pompadour', image: 'assets/corte-pompadour.jpg', tiktokLink: 'https://www.tiktok.com/@ejemplo/video/123' },
    { id: 'undercut', title: 'Undercut', image: 'assets/corte-undercut.jpg', tiktokLink: 'https://www.tiktok.com/@ejemplo/video/456' },
];

const servicesData = [
    { id: 'vaporizacion', title: 'Vaporización', image: 'assets/servicio-vapor.jpg' },
    { id: 'masaje-facial', title: 'Masaje Facial', image: 'assets/servicio-masaje.jpg' },
    { id: 'mascarilla', title: 'Mascarilla', image: 'assets/servicio-mascarilla.jpg' },
];

const productsData = [
    { id: 'cera-moldeadora', title: 'Cera Moldeadora', image: 'assets/producto-cera.jpg' },
    { id: 'gel-fijador', title: 'Gel Fijador', image: 'assets/producto-gel.jpg' },
    { id: 'champu', title: 'Champú', image: 'assets/producto-champu.jpg' },
];


// --- COMPONENTES DE VUE ---

// Componente: Pantalla de Carga
const SplashScreen = {
  template: `
    <div class="splash-screen">
      <img class="logo-animado" src="assets/logo.png" alt="Logo Matius Barber">
    </div>`
};

// Componente: Página de Inicio
const Home = {
  data() {
    return {
      categories: mainCategories
    };
  },
  template: `
    <div class="page-container">
      <header class="main-header">
        <img src="assets/logo.png" alt="Logo" class="header-logo">
        <h1 class="main-title">Matius<br>Barber</h1>
      </header>
      <div class="slider-wrapper">
        <div class="card-slider">
          <router-link v-for="cat in categories" :key="cat.name" :to="cat.path" class="main-card" :style="{ backgroundImage: 'url(' + cat.image + ')' }">
            <h2>{{ cat.name }}</h2>
          </router-link>
        </div>
      </div>
      <footer class="home-footer">
        <div class="footer-info">
          <p><strong>Matius Barber</strong></p>
          <p>Dirección: Calle 22 # 19A - 27, Bogotá</p>
          <p>Celular: +57 310 4750868</p>
        </div>
        <a href="https://beunik.co/entity-view/2162" target="_blank" class="footer-cta">Agendar Cita</a>
        <div class="social-icons">
          <a href="https://www.facebook.com/BarberMathius/" target="_blank" aria-label="Facebook"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.52 4.5 10.02 10 10.02c5.52 0 10-4.5 10-10.02C22 6.53 17.52 2.04 12 2.04zM16.5 8.25h-2.25c-.28 0-.5.22-.5.5v1.5h2.75l-.37 2.25h-2.38V18h-2.5V12.5H9.5V10.25h1.75V8.5c0-1.5 1.12-2.75 2.5-2.75H16.5v2.5z"/></svg></a>
          <a href="https://www.instagram.com/barbermathius/" target="_blank" aria-label="Instagram"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m4.4 3.6a4.8 4.8 0 1 0 0 9.6a4.8 4.8 0 0 0 0-9.6M12 10a2.4 2.4 0 1 1 0 4.8a2.4 2.4 0 0 1 0-4.8m5.5-3.5a1.2 1.2 0 1 0 0 2.4a1.2 1.2 0 0 0 0-2.4"/></svg></a>
          <a href="https://www.tiktok.com/@stivencbarber19" target="_blank" aria-label="TikTok"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.53.02c-4.9.01-8.8 3.92-8.8 8.82c0 1.5.38 2.92 1.05 4.2l-1.1 4.02l4.13-1.08c1.23.62 2.6.95 4 .95h.02c4.9 0 8.8-3.92 8.8-8.82c0-4.9-3.9-8.82-8.8-8.82zM12.53 20.3c-1.28 0-2.52-.3-3.63-.88l-.26-.15l-2.7 1.75l1.8-2.62l-.17-.28c-.6-1.15-.92-2.42-.92-3.73c0-4.02 3.27-7.28 7.3-7.28c4.02 0 7.3 3.27 7.3 7.28c0 4.03-3.28 7.3-7.3 7.3zm-1.1-4.44l-.56-.28c-1.56-.78-2.6-1.32-2.88-1.8c-.28-.48-.28-.9-.28-1.08c0-.18.12-.3.24-.42c.12-.12.28-.18.42-.18h.28c.12 0 .28.06.42.3c.13.24.48.96.54 1.08c.06.12.06.18 0 .3c-.06.12-.12.18-.24.3c-.12.12-.24.18-.3.24c-.06.06-.12.12-.06.24c.06.12.3.48.66.84c.43.43.84.72 1.02.84c.18.12.3.18.42.12c.12-.06.48-.54.6-.72c.12-.18.24-.12.42-.06c.18.06 1.08.54 1.26.6c.18.06.3.12.36.18c.06.06.06.18 0 .36c-.06.18-.42.48-.72.78c-.3.3-.6.48-.84.54c-.24.06-1.08.06-1.56-.18z"/></svg></a>
        </div>
      </footer>
    </div>`
};

// Componente: Vista de Categorías (reutilizable)
const CategoryView = {
  props: ['title', 'items', 'type'],
  template: `
    <div class="page-container">
      <header class="category-header">
        <router-link to="/" class="back-button">&larr;</router-link>
        <h2 class="category-title">{{ title }}</h2>
      </header>
      <div class="slider-wrapper">
        <div class="card-slider">
          <template v-for="item in items" :key="item.id">
            <a v-if="type === 'estilos'" :href="item.tiktokLink" target="_blank" class="content-card" :style="{ backgroundImage: 'url(' + item.image + ')' }">
              <h3>{{ item.title }}</h3>
            </a>
            <div v-else class="content-card" :style="{ backgroundImage: 'url(' + item.image + ')' }">
              <h3>{{ item.title }}</h3>
            </div>
          </template>
        </div>
      </div>
    </div>`
};

// --- CONFIGURACIÓN DE RUTAS ---
const routes = [
  { path: '/', component: Home },
  { path: '/estilos', component: CategoryView, props: { title: 'Estilos de Corte', items: stylesData, type: 'estilos' } },
  { path: '/servicios', component: CategoryView, props: { title: 'Servicios', items: servicesData, type: 'servicios' } },
  { path: '/productos', component: CategoryView, props: { title: 'Productos', items: productsData, type: 'productos' } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// --- APLICACIÓN PRINCIPAL DE VUE ---
// Gestiona la pantalla de carga, la vista de rutas y el botón flotante.
const App = {
  components: {
    SplashScreen
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    // Simula un tiempo de carga de 2 segundos para el splash screen
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  template: `
    <SplashScreen v-if="loading" />
    <template v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <a href="https://beunik.co/entity-view/2162" target="_blank" class="fab" aria-label="Agendar Cita">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"/></svg>
      </a>
    </template>`
};

// --- INICIAR LA APLICACIÓN ---
createApp(App).use(router).mount('#app');