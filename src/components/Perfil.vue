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
  
      <!-- Perfil -->
      <div class="perfil">
        <h2>Perfil</h2>
        <form @submit.prevent="guardarCambios">
          <div class="form-group">
            <label for="email">Correo electrónico:</label>
            <input type="email" v-model="usuario.email" id="email" required />
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" v-model="usuario.password" id="password" required />
          </div>
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PerfilOne',
    data() {
      return {
        menuAbierto: false,
        usuario: {
          email: 'usuario@ejemplo.com',
          password: 'contraseña123'
        }
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
      guardarCambios() {
        // Aquí iría el código para guardar los cambios, como una llamada a la API
        console.log('Cambios guardados:', this.usuario);
        // Por ejemplo, podrías guardar los cambios en un servidor
      }
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
  
  /***** Perfil *****/
  .perfil {
    margin: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  .perfil h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  