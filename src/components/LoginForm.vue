<template>
    <title>Inicio de Sesión</title>
    <div class="login-container">
      <div class="login-box">
        <h1>Inicia Sesión</h1>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="username">Nombre de Usuario</label>
            <input type="text" id="username" v-model="username" placeholder="Ingresa tu usuario" required />
          </div>
          <div class="input-group">
            <label for="password">Contraseña</label>
            <div class="password-input">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                placeholder="Ingresa tu contraseña"
                required
              />
              <span class="toggle-password" @click="toggleShowPassword">
                {{ showPassword ? '👁️' : '👁️‍🗨️' }}
              </span>
            </div>
          </div>
          <button type="submit">Iniciar Sesión</button>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
        showPassword: false, // Estado para controlar si la contraseña es visible
      };
    },
    methods: {
      handleLogin() {
        if (this.username === 'admin' && this.password === 'admin') {
          this.$router.push('/home');
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos.';
        }
      },
      toggleShowPassword() {
        this.showPassword = !this.showPassword; // Cambia el estado de visibilidad
      },
    },
  };
  </script>
  
  <style scoped>
  /* Animación del fondo */
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
      background: linear-gradient(135deg, #74ebd5, #acb6e5);
    }
    25% {
      background-position: 25% 75%;
      background: linear-gradient(135deg, #8ed1fc, #d4a5a5);
    }
    50% {
      background-position: 50% 100%;
      background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    }
    75% {
      background-position: 75% 25%;
      background: linear-gradient(135deg, #a18cd1, #fbc2eb);
    }
    100% {
      background-position: 100% 50%;
      background: linear-gradient(135deg, #74ebd5, #acb6e5);
    }
  }
  
  /* Contenedor principal */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    animation: gradientAnimation 16s infinite alternate ease-in-out;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  /* Caja del formulario */
  .login-box {
    background-color: #ffffff;
    padding: 30px 40px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    max-width: 400px;
  }
  
  /* Títulos */
  h1 {
    margin-bottom: 20px;
    color: #333333;
  }
  
  /* Grupo de inputs */
  .input-group {
    margin-bottom: 20px;
    width: 100%;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555555;
  }
  
  input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #007bff;
    outline: none;
  }
  
  /* Contenedor del input de contraseña */
  .password-input {
    position: relative;
  }
  
  /* Botón para mostrar/ocultar contraseña */
  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
  }
  
  /* Botón */
  button {
    width: 100%;
    padding: 12px 20px;
    background-color: #007bff;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  button:hover {
    background-color: #0056b3;
    transform: scale(1.02);
  }
  
  /* Mensaje de error */
  .error-message {
    color: #ff0000;
    margin-top: 10px;
  }
  
  /* Responsive */
  @media (max-width: 930px) {
    .login-container {
      background-size: cover;
      animation: gradientAnimation 20s infinite alternate ease-in-out;
    }
  
    .login-box {
      padding: 25px;
    }
  }
  
  @media (max-width: 480px) {
    .login-container {
      background-size: cover;
      animation: gradientAnimation 18s infinite alternate ease-in-out;
    }
  
    .login-box {
      width: 80%;
      padding: 20px;
    }
  
    .input-group {
      margin-bottom: 20px;
      width: 317px;
      text-align: left;
    }
  
    h1 {
      font-size: 18px;
    }
  
    button {
      width: 100%;
      padding: 12px;
    }
  }
  </style>