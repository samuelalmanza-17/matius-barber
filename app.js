// app.js

const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// --- DATOS DE LA APLICACIÓN ---

const mainCategories = [
    { name: 'Estilos', path: '/estilos', image: 'assets/estilos.png' },
    { name: 'Servicios', path: '/servicios', image: 'assets/servicios.png' },
    { name: 'Productos', path: '/productos', image: 'assets/productos.png' },
];

// --- DATOS DE ESTILOS ACTUALIZADOS ---
const stylesData = [
    { id: 'mid-fade', title: 'Mid Fade', image: 'assets/corte-mid-fade.png', tiktokId: '7350696346336988472' },
    { id: 'low-fade', title: 'Low Fade', image: 'assets/corte-low-fade.png', tiktokId: '7350696346336988472' },
    { id: 'taper-fade', title: 'Taper Fade', image: 'assets/corte-taper-fade.png', tiktokId: '7350696346336988472' },
    { id: 'mullet', title: 'Mullet Moderno', image: 'assets/corte-mullet.png', tiktokId: '7350696346336988472' },
    { id: 'buzz-cut', title: 'Buzz Cut', image: 'assets/corte-buzz-cut.png', tiktokId: '7269229075704941830' },
    { id: 'french-crop', title: 'French Crop', image: 'assets/corte-french-crop.png', tiktokId: '7305963288289053957' },
    { id: 'textured-quiff', title: 'Quiff Texturizado', image: 'assets/corte-quiff.png', tiktokId: '7162973713633889541' },
    { id: 'side-part', title: 'Side Part Clásico', image: 'assets/corte-side-part.png', tiktokId: '7233858602213756166' },
    { id: 'high-fade', title: 'High Fade', image: 'assets/corte-high-fade.png', tiktokId: '7294247268310322478' },
    { id: 'burst-fade', title: 'Burst Fade', image: 'assets/corte-burst-fade.png', tiktokId: '7350435122171120902' },
];


// --- DATOS DE SERVICIOS ACTUALIZADOS ---
const servicesData = [
    { 
        id: 'corte-basico', 
        title: 'Corte Básico', 
        price: '$20.000',
        image: 'assets/servicio-corte-basico.jpg',
        description: 'Un corte de cabello clásico y a la medida, realizado con máquina y/o tijera para lograr el estilo que prefieras. Incluye perfilado de contornos para un acabado limpio y profesional.',
        tiktokLink: 'https://www.tiktok.com/@stivencbarber19/video/7549617388086398213'
    },
    { 
        id: 'corte-nino', 
        title: 'Corte de Niño', 
        price: '$20.000',
        image: 'assets/servicio-corte-nino.jpg',
        description: 'Cortes modernos y divertidos para los más pequeños. Nuestros barberos tienen la paciencia y la habilidad para que los niños se sientan cómodos y salgan con un look increíble.',
        tiktokLink: 'https://www.tiktok.com/@stivencbarber19/video/7549617388086398213'
    },
    { 
        id: 'corte-cejas-barba', 
        title: 'Corte + Cejas + Barba', 
        price: '$32.000',
        image: 'assets/servicio-combo.jpg',
        description: 'El paquete completo para un look impecable. Incluye un corte de cabello personalizado, perfilado y diseño de cejas, y un arreglo y delineado de barba con vapor y toallas calientes.',
        tiktokLink: 'https://www.tiktok.com/@stivencbarber19/video/7549617388086398213'
    },
     { 
        id: 'cejas', 
        title: 'Perfilado de Cejas', 
        price: '$5.000',
        image: 'assets/servicio-cejas.jpg',
        description: 'Define y limpia la forma de tus cejas con navaja para enmarcar tu mirada y dar un aspecto más pulcro y definido a tu rostro.',
        tiktokLink: 'https://www.tiktok.com/@stivencbarber19/video/7549617388086398213'
    },
    { 
        id: 'limpieza-facial', 
        title: 'Limpieza Facial', 
        price: '$25.000',
        image: 'assets/servicio-limpieza.jpg',
        description: 'Un tratamiento esencial para eliminar impurezas, puntos negros y células muertas. Incluye exfoliación y aplicación de mascarilla para una piel renovada y fresca.',
        tiktokLink: 'https://www.tiktok.com/@stivencbarber19/video/7549617388086398213'
    },
     { 
        id: 'spa-facial', 
        title: 'Spa Facial Completo', 
        price: '$60.000',
        image: 'assets/servicio-spa.jpg',
        description: 'La experiencia de relajación definitiva. Incluye vaporización con ozono, exfoliación profunda, mascarilla purificante, masaje facial y hidratación para una piel completamente rejuvenecida.',
        tiktokLink: 'https://www.tiktok.com/@stivencbarber19/video/7549617388086398213'
    },
     { 
        id: 'tinte', 
        title: 'Tinte de Cabello', 
        price: 'Desde $50.000',
        image: 'assets/servicio-tinte.jpg',
        description: 'Cubre las canas o atrévete con un nuevo look. Utilizamos tintes de alta calidad para un color uniforme y duradero. El precio varía según el largo y la complejidad del trabajo.',
        tiktokLink: 'https://www.tiktok.com/@stivencbarber19/video/7549617388086398213'
    },
];

const productsData = [
    { id: 'cera-moldeadora', title: 'Cera Moldeadora', price: '$45.000', image: 'assets/producto-cera.jpg', galleryImages: ['assets/cera-1.jpg', 'assets/cera-2.jpg', 'assets/cera-3.jpg'], features: ['Fijación alta y flexible.', 'Acabado mate natural.', 'No deja residuos grasos.', 'Aroma amaderado y sutil.', 'Fácil de aplicar y remover.'], whatsappLink: 'https://wa.me/573104750868?text=Hola,%20quisiera%20comprar%20la%20Cera%20Moldeadora.' },
    { id: 'gel-fijador', title: 'Gel Fijador', price: '$38.000', image: 'assets/producto-gel.jpg', galleryImages: ['assets/gel-1.jpg', 'assets/gel-2.jpg', 'assets/gel-3.jpg'], features: ['Control extremo y duradero.', 'Acabado de efecto húmedo.', 'Fórmula libre de alcohol.', 'Protección contra la humedad.', 'Se activa con el calor.'], whatsappLink: 'https://wa.me/573104750868?text=Hola,%20quisiera%20comprar%20el%20Gel%20Fijador.' },
    { id: 'champu', title: 'Champú Fortificante', price: '$55.000', image: 'assets/producto-champu.jpg', galleryImages: ['assets/champu-1.jpg', 'assets/champu-2.jpg', 'assets/champu-3.jpg'], features: ['Limpia profundamente el cuero cabelludo.', 'Fortalece la raíz y previene la caída.', 'Con extractos de menta y romero.', 'Libre de sulfatos y parabenos.', 'Uso diario recomendado.'], whatsappLink: 'https://wa.me/573104750868?text=Hola,%20quisiera%20comprar%20el%20Champú%20Fortificante.' },
    { id: 'gel-afeitar', title: 'Gel de Afeitar', price: '$42.000', image: 'assets/producto-gel-afeitar.jpg', galleryImages: ['assets/afeitar-1.jpg', 'assets/afeitar-2.jpg', 'assets/afeitar-3.jpg'], features: ['Fórmula transparente para mayor precisión.', 'Hidrata y calma la piel irritada.', 'Permite un deslizamiento suave de la navaja.', 'Con aloe vera y agentes refrescantes.', 'Ideal para piel sensible.'], whatsappLink: 'https://wa.me/573104750868?text=Hola,%20quisiera%20comprar%20el%20Gel%20de%20Afeitar.' },
    { id: 'minoxidil', title: 'Minoxidil 5%', price: '$75.000', image: 'assets/producto-minoxidil.jpg', galleryImages: ['assets/minoxidil-1.jpg', 'assets/minoxidil-2.jpg', 'assets/minoxidil-3.jpg'], features: ['Estimula el crecimiento de barba y cabello.', 'Concentración al 5% para máxima eficacia.', 'Resultados visibles en 8-12 semanas.', 'Aplicador en gotero para fácil uso.', 'Clínicamente probado.'], whatsappLink: 'https://wa.me/573104750868?text=Hola,%20quisiera%20comprar%20el%20Minoxidil%205%25.' },
    { id: 'tonico-capilar', title: 'Tónico Capilar', price: '$60.000', image: 'assets/producto-tonico.jpg', galleryImages: ['assets/tonico-1.jpg', 'assets/tonico-2.jpg', 'assets/tonico-3.jpg'], features: ['Revitaliza el folículo piloso.', 'Aporta volumen y densidad.', 'Combate la caspa y la resequedad.', 'Sensación refrescante y energizante.', 'Hecho con ingredientes naturales.'], whatsappLink: 'https://wa.me/573104750868?text=Hola,%20quisiera%20comprar%20el%20Tónico%20Capilar.' },
    { id: 'polvo-texturizador', title: 'Polvo Texturizador', price: '$50.000', image: 'assets/producto-polvo.jpg', galleryImages: ['assets/polvo-1.jpg', 'assets/polvo-2.jpg', 'assets/polvo-3.jpg'], features: ['Volumen instantáneo desde la raíz.', 'Acabado ultra mate y sin peso.', 'Fijación ligera para looks despeinados.', 'Absorbe el exceso de grasa.', 'Aplicación directa y sencilla.'], whatsappLink: 'https://wa.me/573104750868?text=Hola,%20quisiera%20comprar%20el%20Polvo%20Texturizador.' },
];

// --- COMPONENTES DE VUE ---

const SplashScreen = {
  template: `<div class="splash-screen"><img class="logo-animado" src="assets/logo.png" alt="Logo Matius Barber"></div>`
};

const Home = {
  data() { return { categories: mainCategories }; },
  template: `
    <div class="page-container">
      <header class="main-header"><img src="assets/logo.png" alt="Logo" class="header-logo"><h1 class="main-title">Matius<br>Barber</h1></header>
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
          <a href="https://www.google.com/maps/place/Cra.+19a+%2322-1,+Villavicencio,+Meta/@4.135276,-73.651034,17z/data=!4m6!3m5!1s0x8e3e2e0d3c6b1a27:0x51b51a5a7da41d7c!8m2!3d4.1350614!4d-73.6493774!16s%2Fg%2F11h6g_wgx0?hl=es-419&entry=ttu" target="_blank"><p>Dirección: Calle 22 # 19A - 27, Villavicencio 📍</p></a>
          <a href="https://wa.me/573104750868" target="_blank"><p>Celular: +57 310 4750868 📱</p></a>
        </div>
        <a href="https://beunik.co/entity-view/2162" target="_blank" class="footer-cta">Agendar Cita</a>
        <div class="social-icons">
          <a href="https://www.facebook.com/BarberMathius/" target="_blank" aria-label="Facebook"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.52 4.5 10.02 10 10.02c5.52 0 10-4.5 10-10.02C22 6.53 17.52 2.04 12 2.04zM16.5 8.25h-2.25c-.28 0-.5.22-.5.5v1.5h2.75l-.37 2.25h-2.38V18h-2.5V12.5H9.5V10.25h1.75V8.5c0-1.5 1.12-2.75 2.5-2.75H16.5v2.5z"/></svg></a>
          <a href="https://www.instagram.com/barbermathius/" target="_blank" aria-label="Instagram"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m4.4 3.6a4.8 4.8 0 1 0 0 9.6a4.8 4.8 0 0 0 0-9.6M12 10a2.4 2.4 0 1 1 0 4.8a2.4 2.4 0 0 1 0-4.8m5.5-3.5a1.2 1.2 0 1 0 0 2.4a1.2 1.2 0 0 0 0-2.4"/></svg></a>
          <a href="https://www.tiktok.com/@stivencbarber19" target="_blank" aria-label="TikTok"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.22 6.31c.9-1.92 2.26-2.56 3.61-2.56V1h-2.3c-2.41 0-4.29 1.58-4.94 3.73h-.05v6.97h2.89V6.31zm-6.22 9.67c0 3.3 2.69 5.98 6 5.98s6-2.69 6-5.98s-2.69-5.98-6-5.98c-3.3 0-6 2.68-6 5.98zM16 16c0 1.65-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3z"/></svg></a>
        </div>
      </footer>
    </div>`
};

const CategoryView = {
  props: ['title', 'items', 'type'],
  data() { return { selectedStyle: null }; },
  methods: {
    showStyleVideo(style) {
      this.selectedStyle = style;
      // Este es el truco: le pedimos a Vue que espere a que el modal
      // se haya renderizado en la página antes de decirle a TikTok que cargue el video.
      this.$nextTick(() => {
        // Verificamos que el script de TikTok (window.tiktok) exista
        if (window.tiktok) {
          window.tiktok.load();
        }
      });
    },
    closeModal() { this.selectedStyle = null; }
  },
  template: `
    <div class="page-container">
      <header class="category-header">
        <router-link to="/" class="back-button">←</router-link>
        <h2 class="category-title">{{ title }}</h2>
      </header>
      <div class="card-grid-wrapper">
        <div class="card-grid">
          <template v-for="item in items" :key="item.id">
            <div v-if="type === 'estilos'" @click="showStyleVideo(item)" class="content-card" :style="{ backgroundImage: 'url(' + item.image + ')' }"><h3>{{ item.title }}</h3></div>
            <router-link v-if="type === 'servicios'" :to="'/servicio/' + item.id" class="content-card" :style="{ backgroundImage: 'url(' + item.image + ')' }"><h3>{{ item.title }}</h3></router-link>
            <router-link v-if="type === 'productos'" :to="'/producto/' + item.id" class="content-card" :style="{ backgroundImage: 'url(' + item.image + ')' }"><h3>{{ item.title }}</h3></router-link>
          </template>
        </div>
      </div>
      <div v-if="selectedStyle" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button @click="closeModal" class="modal-close">×</button>
          <blockquote class="tiktok-embed" :cite="'https://www.tiktok.com/@stivencbarber19/video/' + selectedStyle.tiktokId" :data-video-id="selectedStyle.tiktokId" style="max-width: 605px;min-width: 325px;"></blockquote>
        </div>
      </div>
    </div>`
};

const ServiceDetailView = {
  data() { return { service: null }; },
  created() {
    const serviceId = this.$route.params.id;
    this.service = servicesData.find(s => s.id === serviceId);
  },
  template: `
    <div class="page-container">
      <header class="category-header">
        <router-link to="/servicios" class="back-button">←</router-link>
      </header>
      <div v-if="service" class="service-view">
        <div class="service-image" :style="{ backgroundImage: 'url(' + service.image + ')' }"></div>
        <h1 class="service-title">{{ service.title }}</h1>
        <p class="service-price">{{ service.price }}</p>
        <p class="service-description">{{ service.description }}</p>
        <a :href="service.tiktokLink" target="_blank" class="service-video-link">Ver video del servicio</a>
        <a href="https://beunik.co/entity-view/2162" target="_blank" class="reserve-button">Reservar Servicio</a>
      </div>
    </div>`
};

const ProductDetailView = {
  data() { return { product: null }; },
  created() {
    const productId = this.$route.params.id;
    this.product = productsData.find(p => p.id === productId);
  },
  template: `
    <div class="page-container">
      <header class="category-header">
        <router-link to="/productos" class="back-button">←</router-link>
      </header>
      <div v-if="product" class="product-view">
        <div class="product-carousel">
            <div class="product-carousel-inner">
                <div v-for="img in product.galleryImages" :key="img" class="product-image" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
            </div>
        </div>
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-price">{{ product.price }}</p>
        <ul class="product-features">
          <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
        </ul>
        <a :href="product.whatsappLink" target="_blank" class="buy-button">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.75 13.96c.25.13.41.2.5.31.09.11.15.23.15.38a.5.5 0 0 1-.06.26c-.06.12-.56.61-1.22 1.21-.65.6-1.28.93-1.58.93-.3 0-.9-.2-1.78-.73s-1.52-1.12-2.11-1.81c-.59-.69-1.02-1.42-1.02-2.18s.22-1.33.47-1.75c.25-.42.62-.75.62-.75.12 0 .23-.06.31.06s.38.44.47.56a.4.4 0 0 1 .06.31c-.06.19-.12.31-.2.41s-.15.22-.2.28c-.06.06-.12.15-.06.28a8.3 8.3 0 0 0 1.52 1.93c.69.69 1.55 1.05 1.78 1.14.23.09.41.06.56-.09.15-.15.65-.72.84-.96.19-.24.38-.18.59-.12.21.06 1.25.59 1.47.7.22.1.34.15.38.22M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m0 18.5a8.5 8.5 0 1 1 0-17a8.5 8.5 0 0 1 0 17Z"/></svg>
          Comprar Ahora
        </a>
      </div>
    </div>`
};

// --- CONFIGURACIÓN DE RUTAS ---
const routes = [
  { path: '/', component: Home },
  { path: '/estilos', component: CategoryView, props: { title: 'Estilos de Corte', items: stylesData, type: 'estilos' } },
  { path: '/servicios', component: CategoryView, props: { title: 'Nuestros Servicios', items: servicesData, type: 'servicios' } },
  { path: '/productos', component: CategoryView, props: { title: 'Productos', items: productsData, type: 'productos' } },
  { path: '/producto/:id', component: ProductDetailView },
  { path: '/servicio/:id', component: ServiceDetailView },
];

const router = createRouter({ history: createWebHashHistory(), routes });

// --- APLICACIÓN PRINCIPAL DE VUE ---
const App = {
  components: { SplashScreen },
  data() { return { loading: true }; },
  mounted() { setTimeout(() => { this.loading = false; }, 2000); },
  template: `
    <SplashScreen v-if="loading" />
    <template v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in"><component :is="Component" /></transition>
      </router-view>
      <a href="https://beunik.co/entity-view/2162" target="_blank" class="fab" aria-label="Agendar Cita">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"/></svg>
      </a>
    </template>`
};

// --- INICIAR LA APLICACIÓN ---
createApp(App).use(router).mount('#app');