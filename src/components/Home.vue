<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <button class="hamburger" @click="menuAbierto = !menuAbierto">
        Menu ☰
      </button>

      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <span v-for="(crumb, index) in breadcrumbs" :key="index">
          <router-link v-if="index < breadcrumbs.length - 1" :to="getPath(index)">{{ crumb }}</router-link>
          <span v-else>{{ crumb }}</span>
          <span v-if="index < breadcrumbs.length - 1"> / </span>
        </span>
      </div>
    </nav>

    <!-- Fondo oscuro cuando el menú está abierto -->
    <div v-if="menuAbierto" class="overlay" @click="menuAbierto = false"></div>

    <!-- Botón de cerrar fuera del menú -->
    <button class="cerrar-menu" v-if="menuAbierto" @click="menuAbierto = false">✖</button>

    <!-- Menú lateral -->
    <aside class="menu-lateral" :class="{ abierto: menuAbierto }">
      <ul>
        <li><router-link to="/inicio">Inicio</router-link></li>
        <li><router-link to="/empleados">Empleados</router-link></li>
        <li><router-link to="/almacen">Almacén</router-link></li>
        <li><router-link to="/produccion">Producción</router-link></li>
        <li><router-link to="/configuraciones">Configuraciones</router-link></li>
        <li><router-link to="/ventas">Ventas</router-link></li>
        <li><router-link to="/inventario">Inventario</router-link></li>
        <li><router-link to="/reportes">Reportes</router-link></li>
        <li><router-link to="/clientes">Clientes</router-link></li>
        <li><router-link to="/sucursales">Sucursales</router-link></li>
        <li><router-link to="/perfil">Perfil</router-link></li>
      </ul>
    </aside>

    <!-- Carousel -->
    <div class="carousel">
      <div class="carousel-slide" v-for="(image, index) in images" :key="index" :class="{ active: index === currentSlide }">
        <img :src="image.src" :alt="image.alt">
      </div>
      <button class="prev" @click="prevSlide">&#10094;</button>
      <button class="next" @click="nextSlide">&#10095;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      menuAbierto: false,
      currentSlide: 0,
      images: [
        { src: require('@/assets/Banner 1.png'), alt: 'Slide 1' },
        { src: require('@/assets/Banner 2.jpg'), alt: 'Slide 2' },
        { src: require('@/assets/Banner 3.jpg'), alt: 'Slide 3' }
      ]
    };
  },
  computed: {
    breadcrumbs() {
      const paths = this.$route.path.split('/').filter(p => p);
      return ['Inicio', ...paths];
    }
  },
  methods: {
    getPath(index) {
      return '/' + this.breadcrumbs.slice(1, index + 1).join('/');
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    }
  },
  created() {
    setInterval(this.nextSlide, 3000);
  }
};
</script>

<style scoped>
/***** Estilos generales *****/
.navbar {
  background-color: #000;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  z-index: 1000;
}

.hamburger {
  font-size: 24px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

/***** Breadcrumbs *****/
.breadcrumbs {
  color: white;
  margin-left: 20px;
  font-size: 16px;
}

.breadcrumbs a {
  color: #ffcc00;
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}

/***** Menú lateral *****/
.menu-lateral {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background: #222;
  transition: left 0.3s;
  z-index: 1001;
}

.menu-lateral.abierto {
  left: 0;
}

.menu-lateral ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.menu-lateral li {
  padding: 15px;
  border-bottom: 1px solid #444;
}

.menu-lateral a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: block;
}

.menu-lateral a:hover {
  background: #444;
}

.cerrar-menu {
  position: fixed;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  z-index: 1002;
}

/***** Carousel *****/
.carousel {
  margin: 54px auto;
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.prev, .next {
  position: absolute;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
}

.prev { left: 15px; }
.next { right: 15px; }
</style>
