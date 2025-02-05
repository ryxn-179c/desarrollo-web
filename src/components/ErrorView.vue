<template>
    <div class="error-container">
      <h1>🚧 Sitio en Mantenimiento 🚧</h1>
      <p>Estamos trabajando para mejorar tu experiencia. Vuelve pronto.</p>
      <router-link to="/home" class="home-link">Volver al inicio</router-link>
    </div>
  </template>  
  
  <script>
  export default {
    name: 'ErrorView'
  };
  </script>
  
  <style scoped>
  .error-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f8d7da;
    color: #721c24;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1.2rem;
    margin: 10px 0;
  }
  
  .home-link {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #721c24;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .home-link:hover {
    background-color: #a94442;
  }
  </style>