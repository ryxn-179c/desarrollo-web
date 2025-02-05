<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar">
        <button class="hamburger" @click="menuAbierto = !menuAbierto">
          Menu ☰
        </button>
      </nav>
  
      <!-- Fondo oscuro cuando el menú está abierto -->
      <div v-if="menuAbierto" class="overlay" @click="menuAbierto = false"></div>
  
      <!-- Menú lateral -->
      <aside class="menu-lateral" :class="{ abierto: menuAbierto }">
        <button class="cerrar-menu" @click="menuAbierto = false">✖</button>
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
    methods: {
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
  /***** Carousel *****/
  .carousel {
    margin: 75px auto;
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
  